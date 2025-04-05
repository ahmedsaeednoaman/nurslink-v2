'use client';

interface Props {
  params: { id: string };
}

export default async function JobDetailsPage({ params }: Props) {
  const res = await fetch(/api/jobs/);
  const job = await res.json();

  if (!job) {
    return <div className='p-8'>??????? ??? ??????.</div>;
  }

  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-4'>{job.title}</h1>
      <p>{job.description}</p>
    </div>
  );
}
