'use client';

import { useState } from 'react';

export default function EditProfilePage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch('/api/nurse/profile', {
      method: 'PUT',
      body: JSON.stringify({ name, phone, country }),
      headers: { 'Content-Type': 'application/json' },
    });
    alert('? ?? ????? ????? ??????');
  };

  return (
    <form onSubmit={handleSubmit} className='p-8'>
      <h1 className='text-2xl font-bold mb-4'>?? ????? ???????? ???????</h1>
      <input
        type='text'
        placeholder='?????'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='border p-2 mb-4 block w-full'
      />
      <input
        type='text'
        placeholder='??? ??????'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className='border p-2 mb-4 block w-full'
      />
      <input
        type='text'
        placeholder='?????'
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className='border p-2 mb-4 block w-full'
      />
      <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
        ??? ?????????
      </button>
    </form>
  );
}
