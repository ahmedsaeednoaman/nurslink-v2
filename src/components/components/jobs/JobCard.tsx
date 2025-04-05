import Link from 'next/link';

type Job = {
  id: string;
  title: string;
  hospital: string;
  location: string;
  experience: string;
};

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-md transition bg-white">
      <h3 className="text-xl font-bold text-primary mb-2">{job.title}</h3>
      <p className="text-text-secondary mb-1">🏥 {job.hospital}</p>
      <p className="text-text-secondary mb-1">📍 {job.location}</p>
      <p className="text-text-secondary mb-3">🧠 الخبرة: {job.experience}</p>
      <Link
        href={`/jobs/${job.id}`}
        className="text-white bg-secondary py-2 px-4 rounded hover:bg-primary transition inline-block"
      >
        تفاصيل الوظيفة
      </Link>
    </div>
  );
}
