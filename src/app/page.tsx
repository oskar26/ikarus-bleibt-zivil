import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Join } from "@/components/Join";
import { SiteShell } from "@/components/SiteShell";
import { DatesBlock, Strike } from "@/components/Strike";
import { Support } from "@/components/Support";
import { Topics } from "@/components/Topics";
import { showStrikeCall } from "@/content";

/**
 * Startseite: Wer wir sind, drei Punkte, wen wir unterstützen, Wochentermin, Mitmachen.
 * Die große Schulstreik-Sektion erscheint nur, wenn `showStrikeCall` in content.ts auf true steht.
 */
export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <About variant="short" />
      <Topics />
      {showStrikeCall && <Strike />}
      <Support>
        <DatesBlock />
      </Support>
      <Join />
    </SiteShell>
  );
}
