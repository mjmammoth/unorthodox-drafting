import 'dotenv/config';
import { Config } from 'drizzle-kit'
import { env } from '@/lib/env.mjs';

export default {
  verbose: true,
  schema: './src/models/*',
  out: './migrations',
  driver: 'turso',
  dbCredentials: {
    url: env.DB_URL,
    authToken: env.DB_AUTH_TOKEN,
  },
} satisfies Config;
