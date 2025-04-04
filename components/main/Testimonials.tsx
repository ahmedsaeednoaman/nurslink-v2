const testimonials = [
    {
      name: 'د. نجلاء عبدالعزيز',
      role: 'مديرة تمريض – مستشفى الشفاء',
      quote: 'منصة NursLink سهلت علينا توظيف أفضل الكفاءات التمريضية بسرعة وكفاءة عالية.',
    },
    {
      name: 'منى إبراهيم',
      role: 'ممرضة مسجلة',
      quote: 'قدرت ألاقي فرص تدريب وشغل محترمة جدًا من خلال المنصة. أنصح بيها بشدة.',
    },
    {
      name: 'أ. سامي الطيب',
      role: 'مسؤول توظيف – وزارة الصحة',
      quote: 'أداة قوية للتواصل مع الممرضين وعرض الفرص الرسمية بشكل مباشر.',
    },
  ];
  
  export default function Testimonials() {
    return (
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10 text-secondary">ماذا قالوا عنا؟</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-accent p-6 rounded-xl shadow">
              <p className="text-text-secondary italic mb-4">“{item.quote}”</p>
              <h3 className="text-lg font-bold text-primary">{item.name}</h3>
              <p className="text-sm text-text-light">{item.role}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  