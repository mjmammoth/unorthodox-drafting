import 'dotenv/config';
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './src/db/schema/*',
  out: './migrations',
  driver: 'turso',
  dbCredentials: {
    url: process.env.DB_URL,
    authToken: process.env.DB_AUTH_TOKEN,
  },
  verbose: true,
})
