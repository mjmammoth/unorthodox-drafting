import 'dotenv/config';
import { migrate } from 'drizzle-orm/libsql/migrator';
import { db, client } from '@/db/LibSQLDatabase.ts';

async function main() {
  console.log('Migrating database...');
  await migrate(db, { migrationsFolder: './migrations' });
  await client.close();
  console.log('Database migrated!');
}

main().catch(console.error);
