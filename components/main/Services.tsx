import { FaStethoscope, FaChalkboardTeacher, FaStore } from 'react-icons/fa';

const services = [
  {
    icon: <FaStethoscope size={30} />,
    title: 'ربط ممرضين بالمستشفيات',
    desc: 'وفر وقتك وابحث عن الممرض المناسب لمستشفاك بسهولة.',
  },
  {
    icon: <FaChalkboardTeacher size={30} />,
    title: 'تدريب وتعليم',
    desc: 'دورات تعليمية متخصصة ومحاضرات مباشرة أونلاين.',
  },
  {
    icon: <FaStore size={30} />,
    title: 'متجر تمريضي متكامل',
    desc: 'احصل على جميع الأدوات والمستلزمات التمريضية.',
  },
];

export default function Services() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10 text-secondary">خدماتنا</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="p-6 border rounded-xl shadow hover:shadow-md transition">
            <div className="text-primary mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-text-secondary">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
