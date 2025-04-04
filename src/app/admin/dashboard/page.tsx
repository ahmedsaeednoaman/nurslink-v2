'use client';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'لوحة تحكم المدير | NursLink',
  description: 'تحكم شامل في النظام والمستخدمين.',
};

export default function AdminDashboardPage() {
  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-6'>👑 لوحة تحكم المدير</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='bg-white shadow-lg rounded-xl p-6'>
          <h2 className='text-xl font-semibold'>عدد الممرضين</h2>
          <p className='text-2xl font-bold text-primary'>50 ممرض</p>
        </div>
        <div className='bg-white shadow-lg rounded-xl p-6'>
          <h2 className='text-xl font-semibold'>عدد المستشفيات</h2>
          <p className='text-2xl font-bold text-primary'>15 مستشفى</p>
        </div>
        <div className='bg-white shadow-lg rounded-xl p-6'>
          <h2 className='text-xl font-semibold'>عدد الطلبات</h2>
          <p className='text-2xl font-bold text-primary'>120 طلب</p>
        </div>
      </div>
    </div>
  );
}
