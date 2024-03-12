import 'dotenv/config';
import { migrate } from 'drizzle-orm/libsql/migrator';
import { db, libSqlClient } from '@/lib/DB';

async function main() {
  console.log('Migrating database...');
  await migrate(db, { migrationsFolder: './migrations' });
  libSqlClient.close();
  console.log('Migrations complete.');
}

main().catch(console.error);
