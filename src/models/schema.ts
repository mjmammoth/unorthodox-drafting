import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";


export const heroes = sqliteTable('heroes', {
  id: integer('id').primaryKey(),
  name: text('name').notNull().unique(),
});

export const colours = sqliteTable('colours', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  colourEmbedding: text('colour_embedding').notNull().unique(),
  hex: text('hex').notNull().unique(),
});

export const heroColours = sqliteTable('hero_colours', {
  heroId: integer('hero_id').notNull().references(() => heroes.id),
  colourId: integer('colour_id').notNull().references(() => colours.id),
  dominance: integer('dominance').notNull(),
});
