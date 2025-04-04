'use client';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'الإشعارات | NursLink',
  description: 'تابع أحدث الإشعارات والتنبيهات الخاصة بك.',
};

export default function NotificationsPage() {
  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-6'>🔔 الإشعارات</h1>
      <p className='text-lg'>هذه الصفحة مخصصة لعرض آخر الإشعارات الخاصة بك.</p>
    </div>
  );
}
