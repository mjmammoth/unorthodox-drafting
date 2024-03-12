import 'dotenv/config';
import fs from 'fs';
import { db } from '@/lib/DB';
import { heroes, colours, heroColours } from '@/models';
import { eq, sql } from 'drizzle-orm';
import { ColorTranslator } from 'colortranslator';

type RGB = [number, number, number];

interface SourceHero {
  id: number;
  name: string;
  hero_image_path: string;
  primary_colours: RGB[];
  secondary_colours: RGB[];
  tertiary_colours: RGB[];
}

class DatabasePopulator {
  private jsonFilePath: string;
  private colourCache: { [key: string]: number } = {};

  constructor(jsonFilePath: string) {
    this.jsonFilePath = jsonFilePath;
  }

  public async populateDatabase(): Promise<void> {
    console.log('Populating database');
    const heroSourceData = await JSON.parse(fs.readFileSync(this.jsonFilePath, 'utf-8'));
    for (const hero of heroSourceData) {
      this.insertHero(hero);
    }
  }

  private async insertHero(hero: SourceHero): Promise<void> {
    try {
      if (!hero.primary_colours || !hero.secondary_colours || !hero.tertiary_colours) {
        console.log(`Skipping ${hero.name} due to missing colours`);
        return;
      }

      await db.insert(heroes).values({
        id: hero.id,
        name: hero.name,
      });
      console.log(`Inserted hero ${hero.name} successfully`);

      for (const colour of hero.primary_colours) {
        await this.insertAndLinkColour(colour, hero.id, 1);
      }

      for (const colour of hero.secondary_colours) {
        await this.insertAndLinkColour(colour, hero.id, 2);
      }

      for (const colour of hero.tertiary_colours) {
        await this.insertAndLinkColour(colour, hero.id, 3);
      }
      console.log(`Completed processing for ${hero.name}`);
    } catch (error) {
      console.error(`Failed to insert ${hero.name}:`, error);
      // Optionally, re-throw the error or handle it based on your application's needs
    }
  }

  private async insertAndLinkColour(colour: RGB, heroId: number, dominance: number): Promise<void> {
    const colourId = await this.insertColour(colour);
    await this.linkHeroToColour(heroId, colourId, dominance);
    const colourEmbedding = this.getColourEmbedding(colour);
    await this.insertIntoVectorTable(colourId, colourEmbedding);
  }

  private async insertIntoVectorTable(colourId: number, colourEmbedding: string): Promise<void> {
    // Check if the vector already exists
    const checkExistsStatement = sql`SELECT * FROM vss_colours WHERE rowid = ${colourId};`;
    const existingVector = await db.all(checkExistsStatement);
    if (existingVector.length > 0) {
      console.log(`Vector for colour ${colourId} already exists`);
      return;
    }
    const statement = sql`INSERT INTO vss_colours (rowid, vector) VALUES (${colourId}, ${colourEmbedding});`;
    await db.run(statement);
  }

  private async insertColour(colour: RGB): Promise<number> {
    const colourKey = colour.join(',');

    if (this.colourCache[colourKey]) {
      return this.colourCache[colourKey];
    }

    const colourEmbedding = this.getColourEmbedding(colour);
    const colourHex = this.getColourHex(colour);

    const existingColour = await db.select().from(colours).where(eq(colours.colourEmbedding, colourEmbedding));
    if (existingColour.length > 0) {
      this.colourCache[colourKey] = existingColour[0].id;
      return existingColour[0].id;
    }

    const insertedId = await db.insert(colours).values({ colourEmbedding: colourEmbedding, hex: colourHex }).returning({ id: colours.id });
    return insertedId[0].id;
  }

  private getColourEmbedding(colour: RGB): string {
    const colourString = `rgb(${colour.join(',')})`;
    const colourTranslator = new ColorTranslator(colourString);
    const CIELabString = colourTranslator.CIELab;
    const cleanCIELabString = CIELabString.replace(/lab\(|\)/g, '');
    const cieArray = cleanCIELabString.split(' ').map(Number);
    console.log(`CIE Array: ${cieArray}`);
    return JSON.stringify(cieArray);
  }

  private getColourHex(colour: RGB): string {
    return `#${colour.map(c => c.toString(16).padStart(2, '0')).join('')}`;
  }

  private async linkHeroToColour(heroId: number, colourId: number, dominance: number): Promise<void> {
    await db.insert(heroColours).values({
      heroId: heroId,
      colourId: colourId,
      dominance: dominance,
    });
  }
}

const populator = new DatabasePopulator('./assets/dotaheroes.json');
populator.populateDatabase();
