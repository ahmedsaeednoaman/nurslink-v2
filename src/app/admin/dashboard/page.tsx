
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '???? ???? ?????? | NursLink',
  description: '???? ???? ?? ?????? ???????????.',
};

export default function AdminDashboardPage() {
  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-6'>?? ???? ???? ??????</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='bg-white shadow-lg rounded-xl p-6'>
          <h2 className='text-xl font-semibold'>??? ????????</h2>
          <p className='text-2xl font-bold text-primary'>50 ????</p>
        </div>
        <div className='bg-white shadow-lg rounded-xl p-6'>
          <h2 className='text-xl font-semibold'>??? ??????????</h2>
          <p className='text-2xl font-bold text-primary'>15 ??????</p>
        </div>
        <div className='bg-white shadow-lg rounded-xl p-6'>
          <h2 className='text-xl font-semibold'>??? ???????</h2>
          <p className='text-2xl font-bold text-primary'>120 ???</p>
        </div>
      </div>
    </div>
  );
}



