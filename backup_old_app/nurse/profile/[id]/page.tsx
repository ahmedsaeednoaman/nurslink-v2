export default function NurseProfilePage({ params }: { params: { id: string } }) {
  const nurseId = params.id;

  // بيانات وهمية مؤقتة
  const nurse = {
    id: nurseId,
    name: 'سارة عبدالعزيز',
    image: '/images/nurse-avatar.jpg',
    bio: 'ممرضة محترفة في قسم العناية المركزة بخبرة ٥ سنوات.',
    certificates: ['دورة إنعاش قلبي رئوي', 'دبلومة تمريض الطوارئ'],
    experience: '٥ سنوات - مستشفى القصر العيني',
    reviews: [
      {
        reviewer: 'مستشفى السلام الدولي',
        rating: 5,
        comment: 'أداء ممتاز والتزام عالي خلال فترة العمل.',
      },
      {
        reviewer: 'مستشفى النيل البدراوي',
        rating: 4,
        comment: 'ممرضة نشيطة وتعمل تحت ضغط.',
      },
    ],
    appliedJobs: [
      {
        jobTitle: 'ممرضة عناية مركزة',
        hospital: 'مستشفى الفؤاد',
        status: 'قيد المراجعة',
      },
      {
        jobTitle: 'ممرضة طوارئ',
        hospital: 'مستشفى عين شمس التخصصي',
        status: 'تم القبول',
      },
    ],
    trainings: [
      {
        course: 'دورة الإنعاش القلبي الرئوي',
        date: 'يناير 2024',
      },
      {
        course: 'ورشة عمل: تمريض العناية المركزة',
        date: 'مارس 2024',
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow">
      <div className="flex items-center gap-6 mb-6">
        <img
          src={nurse.image}
          alt={nurse.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold text-primary">{nurse.name}</h1>
          <p className="text-text-secondary">{nurse.bio}</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-secondary mb-2">📚 الشهادات</h2>
      <ul className="list-disc list-inside text-text-secondary mb-4">
        {nurse.certificates.map((cert, i) => (
          <li key={i}>{cert}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold text-secondary mb-2">🩺 الخبرة</h2>
      <p className="text-text-secondary mb-4">{nurse.experience}</p>

      <h2 className="text-xl font-semibold text-secondary mt-6 mb-2">⭐ التقييمات</h2>
      <ul className="space-y-4 mb-6">
        {nurse.reviews.map((review, i) => (
          <li key={i} className="border rounded p-4 shadow-sm bg-accent">
            <p className="font-semibold text-primary">{review.reviewer}</p>
            <p className="text-yellow-500">{"★".repeat(review.rating)}</p>
            <p className="text-text-secondary mt-1">{review.comment}</p>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold text-secondary mt-6 mb-2">📄 الوظائف المقدَّم عليها</h2>
      <ul className="list-disc list-inside text-text-secondary mb-4">
        {nurse.appliedJobs.map((job, i) => (
          <li key={i}>
            {job.jobTitle} - {job.hospital}
            <span className="ml-2 text-sm text-primary">({job.status})</span>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold text-secondary mt-6 mb-2">🎓 الحضور التدريبي</h2>
      <ul className="list-disc list-inside text-text-secondary">
        {nurse.trainings.map((item, i) => (
          <li key={i}>
            {item.course} – <span className="text-sm text-primary">{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
