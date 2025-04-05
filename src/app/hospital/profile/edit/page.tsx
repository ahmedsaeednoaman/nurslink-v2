'use client';

import { useState } from 'react';

export default function EditHospitalProfile() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch('/api/hospital/profile', {
      method: 'PUT',
      body: JSON.stringify({ name, location }),
      headers: { 'Content-Type': 'application/json' },
    });
    alert('? ?? ????? ?????? ????????');
  };

  return (
    <form onSubmit={handleSubmit} className='p-8'>
      <h1 className='text-2xl font-bold mb-4'>?? ????? ?????? ????????</h1>
      <input
        type='text'
        placeholder='??? ????????'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='border p-2 mb-4 block w-full'
      />
      <input
        type='text'
        placeholder='??????'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className='border p-2 mb-4 block w-full'
      />
      <button type='submit' className='bg-green-500 text-white p-2 rounded'>
        ???
      </button>
    </form>
  );
}
