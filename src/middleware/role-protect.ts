import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req: any) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const pathname = req.nextUrl.pathname;

  // ?? ???? ???? => ????? ???????
  if (!token) {
    if (pathname.startsWith('/nurse') || pathname.startsWith('/hospital') || pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
    return NextResponse.next();
  }

  // ????? ??? ?????
  if (pathname.startsWith('/nurse') && token.role !== 'NURSE') {
    return NextResponse.redirect(new URL('/', req.url));
  }
  if (pathname.startsWith('/hospital') && token.role !== 'HOSPITAL') {
    return NextResponse.redirect(new URL('/', req.url));
  }
  if (pathname.startsWith('/admin') && token.role !== 'ADMIN') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

// ????? ?????? ??? ??? ???????? ????????
export const config = {
  matcher: ['/nurse/:path*', '/hospital/:path*', '/admin/:path*'],
};
