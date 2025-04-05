
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '???? ???? ?????? | NursLink',
  description: '?????? ?? ?? ???? ??????.',
};

export default function NurseDashboardPage() {
  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-6'>?? ????? ?? ?? ????!</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-10'>
        <div className='bg-white shadow-lg rounded-xl p-6'>
          <h2 className='text-xl font-semibold mb-2'>??? ??????? ???????</h2>
          <p className='text-2xl font-bold text-primary'>12 ?????</p>
        </div>
        <div className='bg-white shadow-lg rounded-xl p-6'>
          <h2 className='text-xl font-semibold mb-2'>??? ??????? ?????????</h2>
          <p className='text-2xl font-bold text-primary'>5 ??????</p>
        </div>
        <div className='bg-white shadow-lg rounded-xl p-6'>
          <h2 className='text-xl font-semibold mb-2'>??? ?????????</h2>
          <p className='text-2xl font-bold text-primary'>3 ?????</p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-4'>
        <a href='/jobs' className='bg-primary text-white px-6 py-3 rounded-xl text-center font-semibold hover:bg-secondary transition'>
          ???? ???????
        </a>
        <a href='/training' className='bg-primary text-white px-6 py-3 rounded-xl text-center font-semibold hover:bg-secondary transition'>
          ???????? ????? ???????
        </a>
        <a href='/nurse/profile/1' className='bg-primary text-white px-6 py-3 rounded-xl text-center font-semibold hover:bg-secondary transition'>
          ????? ???? ??????
        </a>
      </div>
    </div>
  );
}



