'use client';

type Notification = {
  id: number;
  type: 'success' | 'warning' | 'info';
  message: string;
  date: string;
};

const notifications: Notification[] = [
  {
    id: 1,
    type: 'success',
    message: '✅ تم قبولك في وظيفة "ممرضة رعاية حرجة" بمستشفى النيل.',
    date: '2025-04-01',
  },
  {
    id: 2,
    type: 'info',
    message: '📅 تم دعوتك لحضور دورة "الإسعافات الأولية" يوم 5 إبريل.',
    date: '2025-03-30',
  },
  {
    id: 3,
    type: 'warning',
    message: '⚠️ تم رفض طلبك لوظيفة "ممرض طوارئ" بسبب عدم توافق الخبرة.',
    date: '2025-03-28',
  },
];

export default function NotificationsPage() {
  return (
    <div className="min-h-screen p-8 bg-background">
      <h1 className="text-3xl font-bold text-primary mb-6">🔔 الإشعارات</h1>

      <div className="space-y-4">
        {notifications.map((note) => (
          <div
            key={note.id}
            className={`p-4 rounded-md shadow-md ${
              note.type === 'success'
                ? 'bg-green-100 text-green-800'
                : note.type === 'warning'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-blue-100 text-blue-800'
            }`}
          >
            <p className="text-sm">{note.message}</p>
            <p className="text-xs mt-2 opacity-70">{note.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
