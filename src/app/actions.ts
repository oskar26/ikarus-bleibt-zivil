"use server";

import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { getPetition } from "@/content";
import { addSignature } from "@/lib/petitions";

export type SignState = {
  status: "idle" | "success" | "error";
  /** Ändert sich bei jeder Antwort – setzt die Formularfelder sauber neu auf */
  at: number;
  message?: string;
  errors?: { name?: string; role?: string; consent?: string };
  values?: { name: string; role: string; grade: string; showPublic: boolean };
};

/** Einfacher Schutz gegen Massen-Einträge: max. 6 Unterschriften pro 10 Minuten und Anschluss. */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 6;
const attempts = new Map<string, number[]>();

function tooManyAttempts(key: string) {
  const now = Date.now();
  const recent = (attempts.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    attempts.set(key, recent);
    return true;
  }
  recent.push(now);
  attempts.set(key, recent);
  if (attempts.size > 5000) attempts.clear();
  return false;
}

const clean = (value: FormDataEntryValue | null) =>
  typeof value === "string" ? value.normalize("NFC").replace(/\s+/g, " ").trim() : "";

export async function signPetition(_previous: SignState, formData: FormData): Promise<SignState> {
  const at = Date.now();
  const slug = clean(formData.get("slug"));
  const petition = getPetition(slug);

  if (!petition || petition.status !== "open") {
    return { status: "error", at, message: "Diese Petition nimmt gerade keine Unterschriften an." };
  }

  // Honeypot: Menschen sehen dieses Feld nicht. Bots bekommen eine stille „Erfolgs“-Antwort.
  if (clean(formData.get("website"))) {
    return { status: "success", at, message: "Danke! Deine Unterschrift zählt." };
  }

  const values = {
    name: clean(formData.get("name")).slice(0, 80),
    role: clean(formData.get("role")),
    grade: clean(formData.get("grade")).slice(0, 20),
    showPublic: formData.get("showPublic") === "on",
  };
  const consent = formData.get("consent") === "on";

  const errors: NonNullable<SignState["errors"]> = {};
  if (values.name.length < 3 || !/\p{L}{2,}/u.test(values.name)) {
    errors.name = "Bitte gib deinen Vor- und Nachnamen an.";
  }
  if (!petition.roles.includes(values.role)) {
    errors.role = "Bitte wähle aus, wer du bist.";
  }
  if (!consent) {
    errors.consent = "Ohne dein Einverständnis können wir deine Unterschrift nicht speichern.";
  }
  if (Object.keys(errors).length > 0) {
    return { status: "error", at, message: "Bitte prüfe deine Angaben.", errors, values };
  }

  const forwarded = (await headers()).get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim();
  if (ip && tooManyAttempts(ip)) {
    return {
      status: "error",
      at,
      message: "Von diesem Anschluss kamen gerade sehr viele Unterschriften. Bitte versuch es später noch einmal.",
      values,
    };
  }

  try {
    const added = await addSignature({
      petitionSlug: petition.slug,
      name: values.name,
      role: values.role,
      grade: values.grade || null,
      showPublic: values.showPublic,
    });
    if (!added) {
      return { status: "error", at, message: "Unter diesem Namen wurde schon unterschrieben. Danke, dass du dabei bist!" };
    }
  } catch (error) {
    console.error("Petition: Unterschrift konnte nicht gespeichert werden", error);
    return {
      status: "error",
      at,
      message: "Das hat gerade nicht geklappt. Bitte versuch es in ein paar Minuten noch einmal.",
      values,
    };
  }

  revalidatePath("/bundeswehrfreie-schulen");
  revalidatePath(`/petition/${petition.slug}`);
  return { status: "success", at, message: "Danke! Deine Unterschrift zählt." };
}
