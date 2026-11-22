"use client";

import { useActionState, useState } from "react";
import { signPetition, type SignState } from "@/app/actions";

const INITIAL: SignState = { status: "idle", at: 0 };

type Props = {
  slug: string;
  roles: string[];
  open: boolean;
  email: string;
};

/** Formular einer Petition. Funktioniert für jeden Eintrag aus `petitions` in content.ts. */
export function PetitionForm(props: Props) {
  // Neuer Schlüssel = frisches Formular, z. B. wenn mehrere an einem Handy unterschreiben
  const [round, setRound] = useState(0);

  if (!props.open) {
    return (
      <div>
        <p className="chip chip--dashed">Beendet</p>
        <p className="copy mt-4 text-[1.2rem]">
          Diese Petition nimmt keine Unterschriften mehr an. Danke an alle, die unterschrieben haben!
        </p>
      </div>
    );
  }

  return <Fields key={round} {...props} onAgain={() => setRound((value) => value + 1)} />;
}

function Fields({ slug, roles, email, onAgain }: Props & { onAgain: () => void }) {
  const [state, action, pending] = useActionState(signPetition, INITIAL);
  const errors = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div role="status">
        <p className="chip">Unterschrieben</p>
        <h3 className="display mt-4 text-[clamp(2.6rem,5vw,3.6rem)] text-red">
          Danke<em className="text-red-hot">!</em>
        </h3>
        <p className="copy mt-4 text-[1.2rem]">
          Deine Unterschrift zählt. Erzähl es weiter – jede Unterschrift macht den Antrag stärker.
        </p>
        <button type="button" className="pill mt-6 text-[1.1rem]" onClick={onAgain}>
          Noch jemand unterschreibt
        </button>
      </div>
    );
  }

  return (
    <form action={action}>
      <div className="@container">
        <h3 className="display text-[min(10.6cqw,2.6rem)] text-red">
          Jetzt <em className="text-red-hot">unterschreiben</em>
        </h3>
      </div>

      <input type="hidden" name="slug" value={slug} />

      {/* Schlüssel: nach einer Server-Antwort die Felder mit den zuletzt eingegebenen Werten neu aufsetzen */}
      <div key={state.at} className="mt-6 space-y-5">
        <div>
          <label htmlFor={`${slug}-name`} className="field-label">
            Vor- und Nachname
          </label>
          <input
            id={`${slug}-name`}
            name="name"
            type="text"
            className="input"
            required
            minLength={3}
            maxLength={80}
            autoComplete="name"
            defaultValue={state.values?.name ?? ""}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? `${slug}-name-error` : undefined}
          />
          {errors.name && (
            <p id={`${slug}-name-error`} className="copy mt-1.5 text-[1rem] font-bold">
              {errors.name}
            </p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor={`${slug}-role`} className="field-label">
              Ich bin
            </label>
            <select
              id={`${slug}-role`}
              name="role"
              className="input"
              required
              defaultValue={state.values?.role ?? ""}
              aria-invalid={errors.role ? true : undefined}
              aria-describedby={errors.role ? `${slug}-role-error` : undefined}
            >
              <option value="" disabled>
                Bitte wählen
              </option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
            {errors.role && (
              <p id={`${slug}-role-error`} className="copy mt-1.5 text-[1rem] font-bold">
                {errors.role}
              </p>
            )}
          </div>

          <div>
            <label htmlFor={`${slug}-grade`} className="field-label">
              Klasse / Stufe <span className="font-medium normal-case">(freiwillig)</span>
            </label>
            <input
              id={`${slug}-grade`}
              name="grade"
              type="text"
              className="input"
              maxLength={20}
              autoComplete="off"
              defaultValue={state.values?.grade ?? ""}
            />
          </div>
        </div>

        <label className="check">
          <input type="checkbox" name="showPublic" defaultChecked={state.values?.showPublic ?? false} />
          <span className="copy text-[1.05rem]">
            Mein Name darf abgekürzt auf dieser Seite stehen, zum Beispiel „Mara S.“ <em>(freiwillig)</em>
          </span>
        </label>

        <div>
          <label className="check">
            <input
              type="checkbox"
              name="consent"
              required
              aria-invalid={errors.consent ? true : undefined}
              aria-describedby={errors.consent ? `${slug}-consent-error` : undefined}
            />
            <span className="copy text-[1.05rem]">
              Ich bin einverstanden, dass mein Name für diese Petition gespeichert und mit der Unterschriftenliste
              übergeben wird.
            </span>
          </label>
          {errors.consent && (
            <p id={`${slug}-consent-error`} className="copy mt-1.5 text-[1rem] font-bold">
              {errors.consent}
            </p>
          )}
        </div>

        {/* Honeypot gegen Bots – für Menschen unsichtbar */}
        <div className="hidden" aria-hidden="true">
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="copy mt-5 rounded-[1rem] border-[2.5px] border-dashed border-red p-3.5 font-bold">
          {state.message}
        </p>
      )}

      <button type="submit" className="pill mt-6 text-[1.25rem] sm:text-[1.45rem]" disabled={pending}>
        {pending ? "Wird gespeichert …" : "Unterschreiben"}
      </button>

      <p className="copy mt-6 text-[0.95rem]">
        Wir speichern nur, was du hier einträgst – keine E-Mail-Adresse, kein Tracking. Löschen lassen kannst du deine
        Unterschrift jederzeit per Mail an{" "}
        <a href={`mailto:${email}`} className="nav-link font-bold">
          {email}
        </a>
        . Bist du unter 16? Dann sprich vorher kurz mit deinen Eltern.
      </p>
    </form>
  );
}
