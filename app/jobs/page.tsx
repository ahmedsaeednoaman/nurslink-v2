import JobCard from '@/components/jobs/JobCard';
import JobFilter from '@/components/jobs/JobFilter';

const dummyJobs = [
  {
    id: '1',
    title: 'ممرضة طوارئ',
    hospital: 'مستشفى دار الفؤاد',
    location: 'القاهرة',
    experience: '3 سنوات',
  },
  {
    id: '2',
    title: 'مساعد تمريض',
    hospital: 'مستشفى الشروق',
    location: 'الجيزة',
    experience: 'سنة واحدة',
  },
];

export default function JobsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-secondary mb-4">الوظائف المتاحة</h1>
      <JobFilter />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {dummyJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
