import { asc, count, desc, eq, and, sql } from "drizzle-orm";
import { db } from "@/db";
import { petitionSignatures } from "@/db/schema";

/**
 * Legt die Tabelle an, falls sie in einer frischen Datenbank noch fehlt.
 * Entspricht exakt dem Drizzle-Schema in src/db/schema.ts.
 */
let schemaReady: Promise<void> | null = null;

function ensureSchema() {
  schemaReady ??= (async () => {
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS petition_signatures (
        id serial PRIMARY KEY,
        petition_slug text NOT NULL,
        name text NOT NULL,
        name_key text NOT NULL,
        role text NOT NULL,
        grade text,
        show_public boolean NOT NULL DEFAULT false,
        created_at timestamptz NOT NULL DEFAULT now()
      )
    `);
    await db.execute(sql`
      CREATE UNIQUE INDEX IF NOT EXISTS petition_signatures_unique
      ON petition_signatures (petition_slug, name_key)
    `);
  })().catch((error) => {
    schemaReady = null;
    throw error;
  });
  return schemaReady;
}

/** „Mara Schmidt“ → „Mara S.“ – so erscheinen Namen öffentlich. */
export function publicName(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length < 2) return parts[0] ?? "";
  const last = parts[parts.length - 1];
  return `${parts[0]} ${last.charAt(0).toUpperCase()}.`;
}

export type PetitionStats = {
  count: number;
  /** Zuletzt Unterzeichnende, die öffentlich genannt werden wollen */
  recent: { id: number; name: string; role: string }[];
  /** false, wenn die Datenbank gerade nicht erreichbar ist */
  available: boolean;
};

export async function getPetitionStats(slug: string): Promise<PetitionStats> {
  try {
    await ensureSchema();
    const [total] = await db
      .select({ value: count() })
      .from(petitionSignatures)
      .where(eq(petitionSignatures.petitionSlug, slug));
    const recent = await db
      .select({ id: petitionSignatures.id, name: petitionSignatures.name, role: petitionSignatures.role })
      .from(petitionSignatures)
      .where(and(eq(petitionSignatures.petitionSlug, slug), eq(petitionSignatures.showPublic, true)))
      .orderBy(desc(petitionSignatures.createdAt))
      .limit(12);
    return {
      count: total?.value ?? 0,
      recent: recent.map((row) => ({ id: row.id, name: publicName(row.name), role: row.role })),
      available: true,
    };
  } catch (error) {
    console.error("Petition: Stand konnte nicht geladen werden", error);
    return { count: 0, recent: [], available: false };
  }
}

export type NewSignature = {
  petitionSlug: string;
  name: string;
  role: string;
  grade: string | null;
  showPublic: boolean;
};

/** Speichert eine Unterschrift. Gibt false zurück, wenn dieselbe Person schon unterschrieben hat. */
export async function addSignature(input: NewSignature): Promise<boolean> {
  await ensureSchema();
  const nameKey = `${input.name.toLocaleLowerCase("de").replace(/\s+/g, " ")}|${input.role.toLocaleLowerCase("de")}`;
  const inserted = await db
    .insert(petitionSignatures)
    .values({ ...input, nameKey })
    .onConflictDoNothing()
    .returning({ id: petitionSignatures.id });
  return inserted.length > 0;
}

/** Alle Unterschriften einer Petition – für die Übergabe (CSV-Export). */
export async function listSignatures(slug: string) {
  await ensureSchema();
  return db
    .select()
    .from(petitionSignatures)
    .where(eq(petitionSignatures.petitionSlug, slug))
    .orderBy(asc(petitionSignatures.createdAt));
}
