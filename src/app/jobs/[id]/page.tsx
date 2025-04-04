import { useRouter } from 'next/navigation';

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  const jobId = params.id;

  // لاحقًا: هتجيب بيانات الوظيفة من API أو قاعدة البيانات
  const job = {
    id: jobId,
    title: "ممرضة رعاية حرجة",
    hospital: "مستشفى دار الشفاء",
    location: "القاهرة",
    type: "دوام كامل",
    salary: "6000 جنيه",
    description: "مطلوب ممرضة ذات خبرة في الرعاية الحرجة ICU لمدة لا تقل عن سنتين، للعمل بنظام شفتات مرن، بيئة عمل ممتازة.",
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white mt-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-primary mb-2">{job.title}</h1>
      <p className="text-sm text-gray-600 mb-4">{job.hospital} - {job.location}</p>

      <div className="mb-4">
        <p><strong>نوع الوظيفة:</strong> {job.type}</p>
        <p><strong>الراتب:</strong> {job.salary}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">تفاصيل الوظيفة:</h2>
        <p className="text-gray-700 leading-7">{job.description}</p>
      </div>

      <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-opacity-90">تقديم الآن</button>
    </div>
  );
}
