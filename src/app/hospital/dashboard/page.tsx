'use client';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'لوحة تحكم المستشفى | NursLink',
  description: 'مرحبًا بك في لوحة المستشفى.',
};

export default function HospitalDashboardPage() {
  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-6'>🏥 أهلاً بك يا مستشفى!</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-10'>
        <div className='bg-white shadow-lg rounded-xl p-6'>
          <h2 className='text-xl font-semibold mb-2'>عدد الوظائف المفتوحة</h2>
          <p className='text-2xl font-bold text-primary'>7 وظائف</p>
        </div>
        <div className='bg-white shadow-lg rounded-xl p-6'>
          <h2 className='text-xl font-semibold mb-2'>عدد المتقدمين</h2>
          <p className='text-2xl font-bold text-primary'>15 متقدم</p>
        </div>
        <div className='bg-white shadow-lg rounded-xl p-6'>
          <h2 className='text-xl font-semibold mb-2'>رسائل جديدة</h2>
          <p className='text-2xl font-bold text-primary'>4 رسائل</p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-4'>
        <a href='/hospital/job-postings' className='bg-primary text-white px-6 py-3 rounded-xl text-center font-semibold hover:bg-secondary transition'>
          إدارة الوظائف
        </a>
        <a href='/hospital/interviews' className='bg-primary text-white px-6 py-3 rounded-xl text-center font-semibold hover:bg-secondary transition'>
          إدارة المقابلات
        </a>
      </div>
    </div>
  );
}
