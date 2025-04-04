'use client';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'الدفع | NursLink Store',
  description: 'أكمل عملية شراء المنتجات الطبية بسهولة.',
};

export default function CheckoutPage() {
  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-6'>💳 إتمام عملية الدفع</h1>
      <p className='text-lg'>صفحة الدفع سيتم ربطها بـ Stripe لاحقًا.</p>
    </div>
  );
}
