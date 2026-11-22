import { boolean, pgTable, serial, text, timestamp, uniqueIndex } from "drizzle-orm/pg-core";

/**
 * Unterschriften für alle Petitionen (siehe `petitions` in src/content.ts).
 * Bewusst datensparsam: kein E-Mail-Feld, keine IP-Adresse.
 */
export const petitionSignatures = pgTable(
  "petition_signatures",
  {
    id: serial("id").primaryKey(),
    petitionSlug: text("petition_slug").notNull(),
    name: text("name").notNull(),
    /** Normalisierter Name + Rolle – verhindert doppelte Unterschriften */
    nameKey: text("name_key").notNull(),
    role: text("role").notNull(),
    grade: text("grade"),
    /** Einwilligung, als „Vorname N.“ auf der Seite zu erscheinen */
    showPublic: boolean("show_public").notNull().default(false),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [uniqueIndex("petition_signatures_unique").on(table.petitionSlug, table.nameKey)],
);

export type PetitionSignature = typeof petitionSignatures.$inferSelect;
