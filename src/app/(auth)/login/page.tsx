'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: any) => {
    e.preventDefault();
    await signIn('credentials', { email, password, callbackUrl: '/' });
  };

  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-4'>?? ????? ????</h1>
      <form onSubmit={handleLogin} className='flex flex-col gap-4'>
        <input type='email' placeholder='?????? ??????????' value={email} onChange={(e) => setEmail(e.target.value)} className='border p-2' />
        <input type='password' placeholder='???? ????' value={password} onChange={(e) => setPassword(e.target.value)} className='border p-2' />
        <button className='bg-blue-600 text-white p-2 rounded'>????</button>
      </form>
    </div>
  );
}
