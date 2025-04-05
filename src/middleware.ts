import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const role = req.nextauth.token?.role;

    const { pathname } = req.nextUrl;

    // ????? Dashboard ????????
    if (pathname.startsWith('/hospital') && role !== 'HOSPITAL') {
      return NextResponse.redirect(new URL('/not-authorized', req.url));
    }

    // ????? Dashboard ??????
    if (pathname.startsWith('/admin') && role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/not-authorized', req.url));
    }

    // ????? Dashboard ??????
    if (pathname.startsWith('/nurse') && role !== 'NURSE') {
      return NextResponse.redirect(new URL('/not-authorized', req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

// ????? ??? ???? ?????? ???
export const config = {
  matcher: [
    '/hospital/:path*',
    '/admin/:path*',
    '/nurse/:path*',
  ],
};
