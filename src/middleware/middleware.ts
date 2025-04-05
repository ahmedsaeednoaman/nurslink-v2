import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  if (!token) {
    if (pathname.startsWith('/nurse/dashboard') || pathname.startsWith('/hospital/dashboard') || pathname.startsWith('/admin/dashboard')) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  if (pathname.startsWith('/hospital') && token?.role !== 'HOSPITAL') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (pathname.startsWith('/admin') && token?.role !== 'ADMIN') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/nurse/dashboard', '/hospital/dashboard', '/admin/dashboard', '/hospital/jobs/:path*'],
};
