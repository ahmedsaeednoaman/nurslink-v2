'use client';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'صفحة التدريب | NursLink',
  description: 'كورسات تعليمية ودورات تدريبية.',
};

export default function Page() {
  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-6'>🚀 صفحة التدريب</h1>
      <p className='text-lg'>هذه الصفحة تحت التطوير...</p>
    </div>
  );
}
