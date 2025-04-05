'use client';

export default function RegisterNursePage() {
  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-4'>?? ????? ???? ????</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='??? ??????' className='border p-2' />
        <input type='email' placeholder='?????? ??????????' className='border p-2' />
        <input type='password' placeholder='???? ????' className='border p-2' />
        <button className='bg-green-500 text-white p-2 rounded'>?????</button>
      </form>
    </div>
  );
}
