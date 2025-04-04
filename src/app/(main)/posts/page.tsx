'use client';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'آخر منشورات التمريض | NursLink',
  description: 'تابع آخر أخبار ومنشورات المجتمع التمريضي.',
};

export default function PostsPage() {
  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-6'>📰 منشورات المجتمع</h1>
      <p className='text-lg'>هذه الصفحة مخصصة لعرض آخر أخبار التمريض والمنشورات الرسمية.</p>
    </div>
  );
}
