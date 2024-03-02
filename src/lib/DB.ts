import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { env } from '@/lib/env.mjs';
import { heroes, colours } from '@/models';

export const client = createClient({ url: env.DB_URL as string, authToken: env.DB_AUTH_TOKEN });
export const db = drizzle(client);

const main = async () => {
  await db.insert(heroes, { name: 'Alice', imagePath: 'red' });
  await db.insert(colours, { hex: '#FF0000' });
};

main();
