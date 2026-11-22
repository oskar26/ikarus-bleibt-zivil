import { timingSafeEqual } from "node:crypto";
import { getPetition } from "@/content";
import { listSignatures } from "@/lib/petitions";

export const dynamic = "force-dynamic";

/**
 * Unterschriftenliste als CSV – für die Übergabe an die Schulkonferenz.
 *
 * Nur aktiv, wenn die Umgebungsvariable PETITION_ADMIN_TOKEN gesetzt ist. Aufruf:
 *   curl -H "Authorization: Bearer <Token>" https://…/api/petitions/<slug>/export -o liste.csv
 */
function authorized(request: Request) {
  const token = process.env.PETITION_ADMIN_TOKEN;
  if (!token) return false;
  const given = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ?? "";
  const a = Buffer.from(given);
  const b = Buffer.from(token);
  return a.length === b.length && timingSafeEqual(a, b);
}

/** CSV-Zelle: Anführungszeichen maskieren, Formeln in Tabellenprogrammen entschärfen. */
function cell(value: string | null) {
  let text = value ?? "";
  if (/^[=+\-@\t\r]/.test(text)) text = `'${text}`;
  return `"${text.replace(/"/g, '""')}"`;
}

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  // Ohne gültiges Token verrät die Route nicht einmal, dass es sie gibt.
  if (!authorized(request)) return new Response("Not found", { status: 404 });

  const { slug } = await params;
  const petition = getPetition(slug);
  if (!petition) return new Response("Not found", { status: 404 });

  const rows = await listSignatures(slug);
  const lines = [
    ["Nr.", "Name", "Rolle", "Klasse/Stufe", "Öffentlich genannt", "Datum"].map(cell).join(";"),
    ...rows.map((row, index) =>
      [
        String(index + 1),
        row.name,
        row.role,
        row.grade,
        row.showPublic ? "ja" : "nein",
        row.createdAt.toLocaleString("de-DE", { timeZone: "Europe/Berlin" }),
      ]
        .map(cell)
        .join(";"),
    ),
  ];

  return new Response(`\uFEFF${lines.join("\r\n")}\r\n`, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="petition-${slug}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
