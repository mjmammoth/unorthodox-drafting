import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";


export const heroes = sqliteTable('heroes', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  imagePath: text('image_path').notNull(),
});

export const colours = sqliteTable('colours', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  colourEmbedding: text('colour_embedding').notNull(),
  hex: text('hex').notNull(),
});

export const heroesColours = sqliteTable('heroes_colours', {
  heroId: integer('hero_id').notNull().references(() => heroes.id),
  colourId: integer('colour_id').notNull().references(() => colours.id),
});
