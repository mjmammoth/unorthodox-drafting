/* eslint-disable import/prefer-default-export */
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

// Don't add NODE_ENV into T3 Env, it changes the tree-shaking behavior
export const env = createEnv({
  server: {
    DB_URL: z.string().min(1),
    DB_AUTH_TOKEN: z.string().optional(),
  },
  client: {
    OPENDOTA_API_URL: z.string().optional(),
    STEAMCDN_API_URL: z.string().optional(),
  },
  runtimeEnv: {
    DB_URL: process.env.DB_URL,
    DB_AUTH_TOKEN: process.env.DB_AUTH_TOKEN,
    OPENDOTA_API_URL: process.env.OPENDOTA_API_URL,
    STEAMCDN_API_URL: process.env.STEAMCDN_API_URL,
  },
});
