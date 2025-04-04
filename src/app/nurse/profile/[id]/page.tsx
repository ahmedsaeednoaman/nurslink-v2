export default function NurseProfile({ params }: { params: { id: string } }) {
    const nurseId = params.id;
  
    // لاحقًا: هتجيب البيانات من الـ DB حسب ID
    const nurse = {
      id: nurseId,
      name: "م. فاطمة محمود",
      specialty: "تمريض رعاية حرجة",
      bio: "ممرضة بخبرة 6 سنوات في العناية المركزة والطوارئ، أبحث عن فرص جديدة لتطوير مهاراتي.",
      experience: "6 سنوات",
      certificates: ["شهادة إنعاش القلب والرئة (BLS)", "شهادة تمريض العناية المركزة"],
      rating: 4.7,
    };
  
    return (
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-md shadow-md mt-6">
        <h1 className="text-3xl font-bold text-primary mb-2">{nurse.name}</h1>
        <p className="text-sm text-gray-600 mb-4">{nurse.specialty}</p>
  
        <div className="mb-4">
          <h2 className="font-semibold text-lg">نبذة:</h2>
          <p className="text-gray-700 mt-1">{nurse.bio}</p>
        </div>
  
        <div className="mb-4">
          <h2 className="font-semibold text-lg">الخبرات:</h2>
          <p className="text-gray-700 mt-1">{nurse.experience}</p>
        </div>
  
        <div className="mb-4">
          <h2 className="font-semibold text-lg">الشهادات:</h2>
          <ul className="list-disc list-inside text-gray-700">
            {nurse.certificates.map((cert, i) => (
              <li key={i}>{cert}</li>
            ))}
          </ul>
        </div>
  
        <div>
          <h2 className="font-semibold text-lg">التقييم العام:</h2>
          <p className="text-yellow-500 text-lg mt-1">⭐ {nurse.rating} / 5</p>
        </div>
      </div>
    );
  }
  