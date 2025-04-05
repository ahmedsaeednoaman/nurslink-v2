'use client';

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='bg-white shadow p-4 mb-8'>
        <h1 className='text-2xl font-bold'>???? ??????</h1>
      </header>
      <main className='p-4'>
        {children}
      </main>
    </div>
  );
}
