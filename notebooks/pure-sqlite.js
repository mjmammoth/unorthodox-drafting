import Database from "better-sqlite3";
import * as sqlite_vss from "sqlite-vss";
const db = new Database('unorthodoxDrafting.db');
sqlite_vss.load(db);

console.log("Droping heroes table");
const dropHeroesTable = `DROP TABLE IF EXISTS heroes;`;
db.exec(dropHeroesTable);

// Create the 'heroes' table if it doesn't exist
console.log("Creating heroes table");
const createHeroesTable = `
CREATE TABLE IF NOT EXISTS heroes (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  localized_name TEXT NOT NULL,
  primary_attr TEXT NOT NULL,
  attack_type TEXT NOT NULL,
  roles TEXT NOT NULL,
  legs INTEGER NOT NULL,
  object_embedding BLOB NOT NULL
);`;
db.exec(createHeroesTable);

// Insert example heroes into the 'heroes' table
console.log("Inserting example heroes");
const insertHero = db.prepare(`
INSERT INTO heroes (name, localized_name, primary_attr, attack_type, roles, legs, object_embedding)
VALUES (?, ?, ?, ?, ?, ?, ?)`);
const heroes = [
  ['Hero1', 'Localized Hero1', 'STR', 'Melee', 'Carry,Support', 2, JSON.stringify([0.1, 0.2, 0.3])],
  ['Hero2', 'Localized Hero2', 'AGI', 'Ranged', 'Support,Escape', 2, JSON.stringify([0.3, 0.2, 0.1])],
  ['Hero3', 'Localized Hero3', 'INT', 'Melee', 'Nuker,Disabler', 2, JSON.stringify([0.2, 0.1, 0.3])],
  ['Hero4', 'Localized Hero4', 'STR', 'Ranged', 'Pusher,Carry', 2, JSON.stringify([0.5, 0.4, 0.3])],
  ['Hero5', 'Localized Hero5', 'AGI', 'Melee', 'Escape,Nuker', 2, JSON.stringify([0.1, 0.3, 0.2])]
];
for (const hero of heroes) {
  insertHero.run(...hero);
}

console.log("Dropping vss_heroes virtual table");
const dropVssHeroesTable = `DROP TABLE IF EXISTS vss_heroes;`;
db.exec(dropVssHeroesTable);

// Assuming 'vss0' as the virtual table module for vector search from the sqlite-vss extension
console.log("Creating vss_heroes virtual table");
const createVssHeroesTable = `
CREATE VIRTUAL TABLE IF NOT EXISTS vss_heroes USING vss0(object_embedding(3));`;
db.exec(createVssHeroesTable);

console.log("Inserting example heroes into vss_heroes");
const insertVssHero = db.prepare(`INSERT INTO vss_heroes (rowid, object_embedding) SELECT id, object_embedding FROM heroes`);
// console.log("Inserting example heroes into vss_heroes: ", insertVssHero);
insertVssHero.run();

// Example vector search - adjust according to your actual use case and syntax provided by sqlite-vss
console.log("Performing vector search");
const vectorSearch = db.prepare(`
  select rowid, distance
  from vss_heroes
  where vss_search(
    object_embedding,
    (select object_embedding from heroes where rowid = 2)
  )
  limit 1;
`);
const searchResult = vectorSearch.all();
console.log(searchResult);

