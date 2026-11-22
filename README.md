# Ikarus bleibt zivil – Website

Next.js (App Router) + Tailwind CSS + PostgreSQL (Drizzle ORM).

## Seiten

| Pfad | Inhalt |
| --- | --- |
| `/` | Startseite (kurz): Hero, Über uns, drei Hauptpunkte, unterstützte Initiativen, Wochentermin, Mitmachen |
| `/themen` | Alle Themen mit Forderungen |
| `/ueber-uns` | Wer wir sind, Haltung, Grundsatzpapier-Download, Termin, Mitmachen |
| `/schulstreik-gegen-wehrpflicht` | Eigene Schulstreik-Seite mit Plakat, Hintergründen, Teilnahmehinweisen und Kampagnenlinks – ohne abgelaufenen Termin |
| `/bundeswehrfreie-schulen` | Kampagnenseite in Dunkelgrün mit Camouflage und Petition |
| `/petition/<slug>` | Eigene Seite für jede Petition (Vorlage) |

## Inhalte ändern

Fast alle Texte stehen in **`src/content.ts`**:

- `topics` – Themen (Hauptpunkte und weitere)
- `showPlannedEvents` – auf `true` stellen, damit „Außerdem geplant“ wieder erscheint
- `showStrikeCall` – auf `true` stellen, sobald wieder ein Schulstreik-Termin feststeht (große Sektion)
- `allies` – Organisationen, die wir unterstützen (Logos in `public/img/logos/`)
- `strike`, `meeting`, `channels` – Schulstreik-Links, Wochentermin, Kontaktwege
- `paper` – Grundsatzpapier (Datei liegt in `public/downloads/`)
- `bw…` – Inhalte, Zahlen, Quellen und Musterantrag der Seite „Bundeswehrfreie Schulen“
- `legal` – **vor der Veröffentlichung ausfüllen** (Impressum, Hosting)

## Petitionen (Vorlage)

Jeder Eintrag in `petitions` (`src/content.ts`) ist eine funktionierende Petition:

1. Eintrag kopieren, `slug`, Texte, `goal` und `theme` (`"red"` oder `"green"`) anpassen.
2. Die Petition ist sofort unter `/petition/<slug>` erreichbar.
3. Optional in eine Seite einbauen: `<PetitionSection slug="…" />`.
4. Mit `status: "closed"` wird sie beendet (Stand bleibt sichtbar).

Gespeichert werden nur Name, Rolle, optional Klasse und die Einwilligung zur
abgekürzten Nennung („Mara S.“) – keine E-Mail-Adresse, keine IP-Adresse.

### Unterschriften exportieren

Umgebungsvariable `PETITION_ADMIN_TOKEN` setzen (langes, zufälliges Passwort), dann:

```bash
curl -H "Authorization: Bearer <Token>" \
  https://<domain>/api/petitions/bundeswehrfreies-fwg/export -o liste.csv
```

Ohne gesetztes Token ist der Export abgeschaltet.

## Farben

Das grüne Thema überschreibt nur Farbvariablen (`.theme-green` in `src/app/globals.css`).
Die Camouflage-Kachel lässt sich mit `node scripts/generate-camo.mjs` neu erzeugen.

## Entwicklung

```bash
npm install
npx drizzle-kit push   # Tabelle petition_signatures anlegen
npm run dev
```

## Veröffentlichung

Die Seite läuft als Next.js-Projekt auf Vercel:

- Produktion: <https://ikarus-bleibt-zivil.vercel.app>
- Vercel-Projekt: `ikarus-bleibt-zivil`
- Datenbank: Neon (Postgres) über die Vercel-Integration, `DATABASE_URL` wird automatisch gesetzt
- GitHub: <https://github.com/oskar26/ikarus-bleibt-zivil>

Die Tabelle `petition_signatures` legt die Anwendung beim ersten Zugriff selbst an.
Für den CSV-Export zusätzlich `PETITION_ADMIN_TOKEN` in Vercel setzen (siehe oben).
