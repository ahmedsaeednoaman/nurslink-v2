const stats = [
    { label: 'ممرضين مسجلين', value: '5,200+' },
    { label: 'مستشفيات مشاركة', value: '180+' },
    { label: 'دورات تدريبية', value: '350+' },
    { label: 'طلبات توظيف ناجحة', value: '2,400+' },
  ];
  
  export default function Stats() {
    return (
      <section className="bg-accent py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-secondary">إحصائيات NursLink</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-4xl font-bold text-primary">{item.value}</span>
              <span className="text-text-secondary mt-2">{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }
  