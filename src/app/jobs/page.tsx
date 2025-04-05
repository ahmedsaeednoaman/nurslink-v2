
import React from 'react';

const jobs = [
  {
    id: 1,
    title: "ممرضة رعاية حرجة",
    hospital: "مستشفى دار الشفاء",
    location: "القاهرة",
    type: "دوام كامل",
    salary: "6000 جنيه",
  },
  {
    id: 2,
    title: "ممرض طوارئ",
    hospital: "مستشفى النيل",
    location: "الجيزة",
    type: "دوام جزئي",
    salary: "4000 جنيه",
  },
];

export default function JobsPage() {
  return (
    <div className="p-8 bg-background min-h-screen">
      <h1 className="text-3xl font-bold text-primary mb-6">الوظائف المتاحة</h1>

      {/* فلترة أو بحث */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input type="text" placeholder="ابحث عن وظيفة..." className="px-4 py-2 border rounded-md w-full md:w-1/2" />
        <select className="px-4 py-2 border rounded-md w-full md:w-1/4">
          <option>الكل</option>
          <option>دوام كامل</option>
          <option>دوام جزئي</option>
        </select>
      </div>

      {/* عرض الوظائف */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map(job => (
          <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-primary">{job.title}</h2>
            <p className="text-sm text-gray-600">{job.hospital} - {job.location}</p>
            <p className="text-sm mt-1">النوع: {job.type}</p>
            <p className="text-sm">الراتب: {job.salary}</p>
            <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90">تقديم</button>
          </div>
        ))}
      </div>
    </div>
  );
}
