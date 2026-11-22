import type { CSSProperties } from "react";
import { channels, getPetition } from "../content";
import { getPetitionStats } from "../lib/petitions";
import { PetitionForm } from "./PetitionForm";

/**
 * Komplette Petition auf farbiger Fläche: Text, Forderungen, Stand und Formular.
 * Vorlage – funktioniert mit jedem Eintrag aus `petitions` in content.ts.
 */
export async function PetitionSection({ slug }: { slug: string }) {
  const petition = getPetition(slug);
  if (!petition) return null;

  const stats = await getPetitionStats(slug);
  const percent = Math.min(100, Math.round((stats.count / petition.goal) * 100));
  const countLabel = stats.count.toLocaleString("de-DE");

  return (
    <section id="petition" className="on-red camo relative overflow-hidden">
      <div className="page pb-20 pt-12 lg:pb-24 lg:pt-14">
        <div className="grid gap-x-12 gap-y-12 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7" data-reveal>
            <p className="chip chip--solid">
              {petition.kicker} · {petition.addressee}
            </p>
            <div className="@container mt-5">
              <h2 className="display text-[min(9.6cqw,4.75rem)]">
                <span className="block">{petition.title[0]} </span>
                <em className="mt-[0.12em] block">{petition.title[1]}</em>
              </h2>
            </div>
            <p className="copy-xl mt-7 max-w-[40rem]">{petition.intro}</p>

            <ol className="mt-7 border-t-[3px] border-cream">
              {petition.demands.map((demand, index) => (
                <li key={demand} className="grid grid-cols-[2.1rem_minmax(0,1fr)] gap-x-3 border-b-[3px] border-cream py-4">
                  <span aria-hidden="true" className="display pt-[0.12em] text-[1.9rem]">
                    {index + 1}
                  </span>
                  <span className="copy-xl">{demand}</span>
                </li>
              ))}
            </ol>

            <div className="mt-10">
              <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="display stat-no">{countLabel}</span>
                <span className="label text-[1.167rem]">
                  von {petition.goal.toLocaleString("de-DE")} Unterschriften
                </span>
              </p>
              <div
                className="progress mt-4 max-w-[40rem]"
                role="progressbar"
                aria-label="Fortschritt der Petition"
                aria-valuemin={0}
                aria-valuemax={petition.goal}
                aria-valuenow={Math.min(stats.count, petition.goal)}
                aria-valuetext={`${countLabel} von ${petition.goal} Unterschriften`}
              >
                <span style={{ width: `${percent}%` }} />
              </div>
              {!stats.available && (
                <p className="label mt-3 text-[0.95rem]">Der aktuelle Stand lässt sich gerade nicht laden.</p>
              )}
            </div>

            <p className="copy-xl mt-8 max-w-[40rem]">{petition.handover}</p>

            {stats.recent.length > 0 && (
              <div className="mt-9">
                <p className="label text-[1.167rem]">Zuletzt unterschrieben</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {stats.recent.map((signer) => (
                    <li key={signer.id} className="chip chip--solid">
                      {signer.name} · {signer.role}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="min-w-0 lg:col-span-5">
            <div
              className="rounded-[1.75rem] bg-cream p-6 text-ink sm:p-8 lg:sticky lg:top-24"
              style={{ "--focus": "var(--color-ink)" } as CSSProperties}
            >
              <PetitionForm
                slug={petition.slug}
                roles={petition.roles}
                open={petition.status === "open"}
                email={channels.email.address}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
