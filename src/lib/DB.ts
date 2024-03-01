import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

export const client = createClient({ url: process.env.DB_URL as string, authToken: process.env.DB_AUTH_TOKEN });
export const db = drizzle(client);
