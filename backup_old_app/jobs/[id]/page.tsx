import { notFound } from 'next/navigation';

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  const jobId = params.id;

  // بيانات وهمية مؤقتًا
  const job = {
    id: jobId,
    title: 'ممرضة طوارئ',
    hospital: 'مستشفى دار الفؤاد',
    location: 'القاهرة',
    experience: '3 سنوات',
    description: 'نبحث عن ممرضة طوارئ متمرسة للعمل ضمن فريقنا الطبي.',
  };

  if (!job) return notFound();

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow">
      <h1 className="text-3xl font-bold text-primary mb-4">{job.title}</h1>
      <p className="text-text-secondary mb-2">🏥 {job.hospital}</p>
      <p className="text-text-secondary mb-2">📍 {job.location}</p>
      <p className="text-text-secondary mb-4">🧠 الخبرة المطلوبة: {job.experience}</p>
      <hr className="my-4" />
      <p className="text-text-primary leading-loose mb-6">{job.description}</p>
      <button className="bg-primary text-white px-6 py-2 rounded hover:bg-btn-hover transition">
        التقديم على الوظيفة
      </button>
    </div>
  );
}
