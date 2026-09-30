import { NextResponse, type NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { TIMP_SESSION_COOKIE } from '@/lib/timpSession'

// Ends the prototype session (and a real Supabase session, if there is one),
// then returns to the landing page with "Try it free / Sign In" back in the header.
export async function GET(request: NextRequest) {
  if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    try {
      const supabase = await createClient()
      await supabase.auth.signOut()
    } catch {
      // not signed in with Supabase — nothing to end
    }
  }
  const response = NextResponse.redirect(new URL('/', request.url))
  response.cookies.delete(TIMP_SESSION_COOKIE)
  return response
}
