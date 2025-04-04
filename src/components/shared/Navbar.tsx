'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">NursLink</Link>
        <ul className="flex gap-6 text-sm font-medium text-gray-700">
          <li><Link href="/(main)/about">عن المنصة</Link></li>
          <li><Link href="/(main)/services">الخدمات</Link></li>
          <li><Link href="/jobs">الوظائف</Link></li>
          <li><Link href="/(main)/store">المتجر</Link></li>
          <li><Link href="/(main)/community">المجتمع</Link></li>
        </ul>
        <div className="flex gap-4">
          <Link href="/(auth)/login" className="text-sm text-primary hover:underline">تسجيل الدخول</Link>
          <Link href="/(auth)/register" className="px-4 py-2 bg-primary text-white rounded-md text-sm">إنشاء حساب</Link>
        </div>
      </div>
    </nav>
  );
}
