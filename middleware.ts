import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      // لو فيه session/token اعتبره مسموح
      return !!token;
    },
  },
});

// تحديد الصفحات المحمية
export const config = {
  matcher: [
    // هنا بتحمي أي صفحة داخل هذه المسارات
    '/nurse/:path*',
    '/hospital/:path*',
    '/jobs/:path*',
    '/store/checkout', 
    '/training/:path*',
  ],
};
