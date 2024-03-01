import 'dotenv/config';
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './src/models/schema.ts',
  out: './migrations',
  driver: 'turso',
  dbCredentials: {
    url: process.env.DB_URL as string,
    authToken: process.env.DB_AUTH_TOKEN as string,
  },
  verbose: true,
})
