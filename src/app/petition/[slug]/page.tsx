import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JoinTeaser } from "@/components/Join";
import { PageHero } from "@/components/PageHero";
import { PetitionSection } from "@/components/PetitionSection";
import { SiteShell } from "@/components/SiteShell";
import { Pill } from "@/components/ui";
import { getPetition } from "@/content";

/**
 * Vorlagen-Seite: Jede Petition aus `petitions` (src/content.ts) ist hier
 * automatisch unter /petition/<slug> erreichbar – ohne weiteren Code.
 */
export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const petition = getPetition(slug);
  if (!petition) return { title: "Petition nicht gefunden" };
  return {
    title: `Petition: ${petition.title.join(" ")}`,
    description: `${petition.addressee}. ${petition.intro}`,
  };
}

export default async function PetitionPage({ params }: Props) {
  const { slug } = await params;
  const petition = getPetition(slug);
  if (!petition) notFound();

  return (
    <SiteShell theme={petition.theme}>
      <PageHero
        kicker={`${petition.kicker} · ${petition.addressee}`}
        heading={
          <>
            <span className="block">{petition.title[0]} </span>
            <em className="mt-[0.12em] block text-red-hot">{petition.title[1]}</em>
          </>
        }
      >
        <p className="copy text-[1.25rem] lg:text-[1.4rem]">{petition.handover}</p>
        <div className="mt-7 flex flex-wrap gap-4">
          <Pill href="#petition" className="text-[1.2rem] sm:text-[1.5rem]">
            Jetzt <em>unterschreiben</em>
          </Pill>
        </div>
      </PageHero>

      <PetitionSection slug={petition.slug} />

      <JoinTeaser />
    </SiteShell>
  );
}
