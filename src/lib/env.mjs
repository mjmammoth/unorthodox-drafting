/* eslint-disable import/prefer-default-export */
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

// Don't add NODE_ENV into T3 Env, it changes the tree-shaking behavior
export const env = createEnv({
  server: {
    DB_URL: z.string().min(1),
    SL_DB_URL : z.string().min(1),
    DB_AUTH_TOKEN: z.string().optional(),
    NEXTAUTH_URL: z.string(),
    NEXTAUTH_URL_INTERNAL: z.string(),
    NEXTAUTH_SECRET: z.string(),
    AUTH_STEAM_SECRET: z.string(),
  },
  client: {
    OPENDOTA_API_URL: z.string().optional(),
    STEAMCDN_API_URL: z.string().optional(),
  },
  runtimeEnv: {
    DB_URL: process.env.DB_URL,
    SL_DB_URL: process.env.SL_DB_URL,
    DB_AUTH_TOKEN: process.env.DB_AUTH_TOKEN,
    OPENDOTA_API_URL: process.env.OPENDOTA_API_URL,
    STEAMCDN_API_URL: process.env.STEAMCDN_API_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_URL_INTERNAL: process.env.NEXTAUTH_URL_INTERNAL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    AUTH_STEAM_SECRET: process.env.AUTH_STEAM_SECRET,
  },
});
