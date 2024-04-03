import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { env } from './env.mjs';
import { createClient as createStatelessClient} from "libsql-stateless-easy";

const statelessDBUrl = env.SL_DB_URL || env.DB_URL;

export const statelessClient = createStatelessClient({ url: statelessDBUrl as string, authToken: env.DB_AUTH_TOKEN });
export const libSqlClient = createClient({ url: env.DB_URL as string, authToken: env.DB_AUTH_TOKEN });
export const db = drizzle(libSqlClient);
