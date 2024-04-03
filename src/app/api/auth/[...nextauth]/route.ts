import type { NextRequest, NextResponse } from 'next/server'
import { getAuthOptions } from './authOptions'
import NextAuth from "next-auth"

async function handler(
  req: NextRequest,
  res: NextResponse,
) {
  // @ts-expect-error
  return NextAuth(req, res, getAuthOptions(req))
}

export {
  handler as GET,
  handler as POST
}
