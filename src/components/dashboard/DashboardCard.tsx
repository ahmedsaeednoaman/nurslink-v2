'use client';

interface DashboardCardProps {
  title: string;
  value: string | number;
}

export default function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <div className='bg-white shadow-lg rounded-xl p-6'>
      <h2 className='text-xl font-semibold mb-2'>{title}</h2>
      <p className='text-2xl font-bold text-primary'>{value}</p>
    </div>
  );
}
