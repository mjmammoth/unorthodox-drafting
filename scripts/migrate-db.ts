import 'dotenv/config';
import { migrate } from 'drizzle-orm/libsql/migrator';
import { db, client } from '@/lib/DB';

async function main() {
  console.log('Migrating database...');
  await migrate(db, { migrationsFolder: './migrations' });
  client.close();
  console.log('Migrations complete.');
}

main().catch(console.error);
