'use client';

import { useState } from 'react';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
      setError('??? ???????. ???? ?? ??? ????????.');
    } else {
      window.location.href = '/login';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <form onSubmit={handleRegister} className="space-y-4 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center">????? ???? ????</h1>
        <input type="email" placeholder="?????? ??????????" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded w-full" required />
        <input type="password" placeholder="???? ??????" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 rounded w-full" required />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="bg-green-500 text-white p-2 rounded w-full hover:bg-green-600">?????</button>
      </form>
    </div>
  );
}
