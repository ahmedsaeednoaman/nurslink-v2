import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('next-auth.session-token')?.value;

  // لو مش موجود توكن يرجعه للصفحة الرئيسية
  if (!token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // ممكن هنا تضيف لوجيك إضافي للفصل بين الأدوار مثل ممرض / مستشفى
  return NextResponse.next();
}

export const config = {
  matcher: ['/nurse/:path*', '/hospital/:path*'], // حمايه ممرض ومستشفى فقط
};
