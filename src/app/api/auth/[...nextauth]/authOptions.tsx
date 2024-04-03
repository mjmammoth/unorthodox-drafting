import type { NextRequest } from 'next/server'
import type { NextAuthOptions } from 'next-auth';
import SteamProvider from 'next-auth-steam'
import { env } from "@/lib/env.mjs"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "@/lib/DB"


export function getAuthOptions(req: NextRequest): NextAuthOptions {
  return {
    // @ts-expect-error
    adapter: DrizzleAdapter(db),
    providers: [
      SteamProvider(req, {
        clientSecret: env.AUTH_STEAM_SECRET!,
        callbackUrl: 'http://localhost:3000/api/auth/callback'
      })
    ],
    session: {
      strategy: 'database',
    },
  }
}
