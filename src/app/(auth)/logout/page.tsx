'use client';

import { signOut } from 'next-auth/react';

export default function LogoutPage() {
  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-4'>?? ????? ????</h1>
      <button onClick={() => signOut({ callbackUrl: '/login' })} className='bg-red-600 text-white p-2 rounded'>
        ????? ????
      </button>
    </div>
  );
}
