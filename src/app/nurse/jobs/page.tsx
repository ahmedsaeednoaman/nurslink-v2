'use client';

export default async function NurseJobsPage() {
  const res = await fetch('/api/jobs');
  const jobs = await res.json();

  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold mb-6'>?? ??????? ???????</h1>
      <ul className='space-y-4'>
        {jobs.map((job: any) => (
          <li key={job.id} className='border p-4 rounded shadow'>
            <h2 className='text-xl font-semibold'>{job.title}</h2>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
