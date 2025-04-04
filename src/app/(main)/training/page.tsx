'use client';

export default function TrainingPage() {
  return (
    <div className="p-8 bg-background min-h-screen">
      <h1 className="text-3xl font-bold text-primary mb-8">🎓 التدريب والتعليم</h1>

      {/* دورات فيديو */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">📺 فيديوهات تدريبية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <iframe
            className="w-full h-64 rounded-md"
            src="https://www.youtube.com/embed/fn3KWM1kuAw"
            title="CPR Training"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-64 rounded-md"
            src="https://www.youtube.com/embed/wJ7yC7sMXC0"
            title="Nursing Skills"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* الجلسات المباشرة */}
      <section>
        <h2 className="text-xl font-semibold mb-4">🕒 جلسات مباشرة</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-md shadow-md p-4">
            <h3 className="font-semibold text-lg text-primary">أساسيات الإنعاش القلبي</h3>
            <p className="text-sm text-gray-600">🗓️ الأحد 7 إبريل - 5 مساءً - عبر Zoom</p>
            <button className="mt-2 px-4 py-2 bg-primary text-white rounded-md">انضم الآن</button>
          </div>

          <div className="bg-white rounded-md shadow-md p-4">
            <h3 className="font-semibold text-lg text-primary">التعامل مع الحالات الطارئة</h3>
            <p className="text-sm text-gray-600">🗓️ الإثنين 8 إبريل - 6 مساءً - عبر Google Meet</p>
            <button className="mt-2 px-4 py-2 bg-primary text-white rounded-md">سجّل الآن</button>
          </div>
        </div>
      </section>
    </div>
  );
}
