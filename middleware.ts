import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const CANONICAL_HOST = '6clubguide.com'
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const host = request.headers.get('host') ?? ''

  // Only apply redirects for our domain (and optional port in dev)
  const isOurDomain =
    host === CANONICAL_HOST ||
    host === `www.${CANONICAL_HOST}` ||
    host.startsWith(`${CANONICAL_HOST}:`) ||
    host.startsWith(`www.${CANONICAL_HOST}:`)

  if (!isOurDomain) {
    return NextResponse.next()
  }

  const proto = request.headers.get('x-forwarded-proto') ?? request.nextUrl.protocol.replace(':', '')
  const isHttps = proto === 'https'
  const isWww = host.startsWith('www.')

  const needsRedirect = !isHttps || isWww
  if (!needsRedirect) {
    return NextResponse.next()
  }

  const url = new URL(pathname + search, CANONICAL_ORIGIN)
  return NextResponse.redirect(url, 301)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico, images, etc.
     */
    '/((?!_next/static|_next/image|favicon.ico|images|.*\\.(?:ico|png|jpg|jpeg|gif|webp|svg|woff2?)$).*)',
  ],
}
