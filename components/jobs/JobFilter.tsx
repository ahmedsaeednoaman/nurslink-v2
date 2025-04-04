'use client';

export default function JobFilter() {
  return (
    <div className="bg-accent p-4 rounded-xl shadow-sm mb-6">
      <h2 className="text-lg font-semibold text-secondary mb-4">🔍 فلترة الوظائف</h2>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="🔎 التخصص أو اسم الوظيفة"
          className="p-2 rounded border"
        />
        <input
          type="text"
          placeholder="📍 الموقع"
          className="p-2 rounded border"
        />
        <select className="p-2 rounded border">
          <option value="">سنوات الخبرة</option>
          <option value="0">بدون خبرة</option>
          <option value="1">1+ سنة</option>
          <option value="3">3+ سنوات</option>
          <option value="5">5+ سنوات</option>
        </select>
      </form>
    </div>
  );
}
