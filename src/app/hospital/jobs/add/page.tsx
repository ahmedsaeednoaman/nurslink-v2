'use client';

import { useState } from 'react';

export default function AddJobPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch('/api/jobs', {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: { 'Content-Type': 'application/json' },
    });
    alert('?? ????? ??????? ?????');
  };

  return (
    <form onSubmit={handleSubmit} className='p-8'>
      <h1 className='text-2xl font-bold mb-4'>? ????? ????? ?????</h1>
      <input
        type='text'
        placeholder='???????'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='border p-2 mb-4 block w-full'
      />
      <textarea
        placeholder='?????'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='border p-2 mb-4 block w-full'
      />
      <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
        ?????
      </button>
    </form>
  );
}
