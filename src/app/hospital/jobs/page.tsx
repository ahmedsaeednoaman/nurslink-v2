'use client';

export default async function HospitalJobsPage() {
  const res = await fetch('/api/jobs');
  const jobs = await res.json();

  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-4'>?? ????? ????????</h1>
      <ul>
        {jobs.map((job: any) => (
          <li key={job.id} className='mb-4'>
            <div className='flex justify-between items-center'>
              <a href={/jobs/} className='text-blue-500 underline'>
                {job.title}
              </a>
              <button
                onClick={async () => {
                  await fetch(/api/jobs/, { method: 'DELETE' });
                  alert('??? ?? ??? ???????');
                }}
                className='bg-red-500 text-white px-3 py-1 rounded'
              >
                ???
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
