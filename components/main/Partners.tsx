const partners = [
    { name: 'وزارة الصحة', logo: '/partners/ministry-health.png' },
    { name: 'نقابة التمريض', logo: '/partners/nursing-syndicate.png' },
    { name: 'كلية تمريض القاهرة', logo: '/partners/cairo-nursing.png' },
    { name: 'مستشفى دار الفؤاد', logo: '/partners/dar-elfouad.png' },
  ];
  
  export default function Partners() {
    return (
      <section className="py-16 px-6 bg-accent text-center">
        <h2 className="text-3xl font-bold mb-10 text-secondary">شركاؤنا</h2>
        <div className="flex flex-wrap justify-center items-center gap-10 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div key={index} className="w-32 h-20 flex items-center justify-center">
              <img src={partner.logo} alt={partner.name} className="object-contain max-h-full" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  