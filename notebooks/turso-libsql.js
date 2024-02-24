import { createClient } from "@libsql/client";
import * as config from "./constants.js";

const client = createClient({
  url: config.LIBSQL_URL,
  authToken: config.LIBSQL_AUTH_TOKEN,
});

async function setupDatabase() {
  console.log("Dropping heroes table if exists");
  await client.execute(`DROP TABLE IF EXISTS heroes;`);

  console.log("Creating heroes table");
  await client.execute(`
    CREATE TABLE IF NOT EXISTS heroes (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      localized_name TEXT NOT NULL,
      primary_attr TEXT NOT NULL,
      attack_type TEXT NOT NULL,
      roles TEXT NOT NULL,
      legs INTEGER NOT NULL,
      object_embedding TEXT NOT NULL
    );`);

  console.log("Inserting example heroes");
  const insertHeroSql = `INSERT INTO heroes (name, localized_name, primary_attr, attack_type, roles, legs, object_embedding) VALUES (?, ?, ?, ?, ?, ?, ?)`;

  const heroes = [
    ['Hero1', 'Localized Hero1', 'STR', 'Melee', 'Carry,Support', 2, JSON.stringify([0.1, 0.2, 0.3])],
    ['Hero2', 'Localized Hero2', 'AGI', 'Ranged', 'Support,Escape', 2, JSON.stringify([0.3, 0.2, 0.1])],
    ['Hero3', 'Localized Hero3', 'INT', 'Melee', 'Nuker,Disabler', 2, JSON.stringify([0.2, 0.1, 0.3])],
    ['Hero4', 'Localized Hero4', 'STR', 'Ranged', 'Pusher,Carry', 2, JSON.stringify([0.5, 0.4, 0.3])],
    ['Hero5', 'Localized Hero5', 'AGI', 'Melee', 'Escape,Nuker', 2, JSON.stringify([0.1, 0.3, 0.2])]
  ];

  for (const hero of heroes) {
    await client.execute({
      sql: insertHeroSql,
      args: hero,
    });
  }

  console.log("Dropping vss_heroes virtual table if exists");
  await client.execute(`DROP TABLE IF EXISTS vss_heroes;`);
  await client.execute(`DROP TABLE IF EXISTS vss_heroes_data;`);
  await client.execute(`DROP TABLE IF EXISTS vss_heroes_index;`);

  console.log("Creating vss_heroes virtual table");
  await client.execute(`CREATE VIRTUAL TABLE IF NOT EXISTS vss_heroes USING vss0(object_embedding(3));`);

  // console.log("Showing records from vss_heroes table");
  // const vssHeroes = await client.execute(`SELECT * FROM vss_heroes;`);
  // console.log(vssHeroes.rows);

  console.log("Populating vss_heroes virtual table");
  await client.execute({
    sql: `INSERT INTO vss_heroes(rowid, object_embedding) VALUES (1, ?);`,
    args: [JSON.stringify([0.1, 0.2, 0.3])]
  });

  console.log("Performing vector search");
  const searchResult = await client.execute({
    sql: `
      select rowid, distance
      from vss_heroes
      where vss_search(
        object_embedding,
        (select object_embedding from heroes where rowid = ?)
      )
      limit 1;`,
    args: [1]
  }); // Example query to modify based on your actual use case
  
  console.log(searchResult.rows);
}

setupDatabase().catch(console.error);

