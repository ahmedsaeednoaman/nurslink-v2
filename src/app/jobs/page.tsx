'use client';

export default async function JobsPage() {
  const res = await fetch('/api/jobs');
  const jobs = await res.json();

  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-4'>?? ????? ??????? ???????</h1>
      <ul>
        {jobs.map((job: any) => (
          <li key={job.id} className='mb-4'>
            <a href={/jobs/} className='text-blue-500 underline'>
              {job.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
