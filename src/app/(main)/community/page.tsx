'use client';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'صفحة المجتمع | NursLink',
  description: 'تفاعل مع مجتمع التمريض.',
};

export default function Page() {
  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-6'>🚀 صفحة المجتمع</h1>
      <p className='text-lg'>هذه الصفحة تحت التطوير...</p>
    </div>
  );
}
