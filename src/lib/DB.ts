import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { env } from '@/lib/env.mjs';
import { createClient as createStatelessClient} from "libsql-stateless-easy";

export const statelessClient = createStatelessClient({ url: env.DB_URL as string, authToken: env.DB_AUTH_TOKEN });
export const libSqlClient = createClient({ url: env.DB_URL as string, authToken: env.DB_AUTH_TOKEN });
export const db = drizzle(libSqlClient);
