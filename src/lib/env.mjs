/* eslint-disable import/prefer-default-export */
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

// Don't add NODE_ENV into T3 Env, it changes the tree-shaking behavior
export const Env = createEnv({
  server: {
    DATABASE_URL: z.string().min(1),
    DATABASE_AUTH_TOKEN: z.string().optional(),
  },
  client: {
    OPENDOTA_API_URL: z.string().min(1),
    STEAMCDN_API_URL: z.string().min(1),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_AUTH_TOKEN: process.env.DATABASE_AUTH_TOKEN,
    OPENDOTA_API_URL: process.env.OPENDOTA_API_URL,
    STEAMCDN_API_URL: process.env.STEAMCDN_API_URL,
  },
});
