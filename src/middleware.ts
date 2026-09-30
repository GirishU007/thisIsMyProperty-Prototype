import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import {
  TIMP_SESSION_COOKIE,
  TIMP_SESSION_COOKIE_OPTIONS,
  parseTimpRole,
  timpRoleForPath,
  type TimpRole,
} from '@/lib/timpSession'

/* Implied prototype session: remember that the visitor is "signed in" once they enter
   the TIMP homeowner/agent app (or are signed in with Supabase). */
function withTimpSession(
  request: NextRequest,
  response: NextResponse,
  hasSupabaseUser: boolean
): NextResponse {
  if (request.nextUrl.pathname.startsWith('/signout')) return response
  const current = parseTimpRole(request.cookies.get(TIMP_SESSION_COOKIE)?.value)
  let next: TimpRole | null = timpRoleForPath(request.nextUrl.pathname) ?? current
  if (!next && hasSupabaseUser) next = 'ho'
  if (next && next !== current) {
    response.cookies.set(TIMP_SESSION_COOKIE, next, TIMP_SESSION_COOKIE_OPTIONS)
  }
  return response
}

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    return withTimpSession(request, supabaseResponse, false)
  }

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll()
      },
      setAll(cookiesToSet: { name: string; value: string; options?: CookieOptions }[]) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
        supabaseResponse = NextResponse.next({ request })
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options)
        )
      },
    },
  })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { pathname } = request.nextUrl

  const isProtectedRoute =
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/properties') ||
    pathname.startsWith('/vault') ||
    pathname.startsWith('/forecast') ||
    pathname.startsWith('/settings')

  const isAuthRoute = pathname.startsWith('/login') || pathname.startsWith('/signup')

  if (!user && isProtectedRoute) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = '/login'
    return NextResponse.redirect(redirectUrl)
  }

  if (user && isAuthRoute) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = '/dashboard'
    return NextResponse.redirect(redirectUrl)
  }

  return withTimpSession(request, supabaseResponse, !!user)
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
