
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          منصة NursLink لربط التمريض الذكي
        </h1>
        <p className="text-lg mb-6">
          وظائف، تدريب، مجتمع، متجر — كل ما تحتاجه في مكان واحد
        </p>
        <Link href="/(auth)/register">
          <button className="px-6 py-3 bg-white text-primary font-semibold rounded-md shadow-md hover:bg-gray-100">
            ابدأ الآن
          </button>
        </Link>
      </section>

      {/* خدماتنا */}
      <section className="py-16 bg-background text-center">
        <h2 className="text-3xl font-bold mb-10 text-primary">
          خدماتنا
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">
              ربط الممرضين بالمؤسسات
            </h3>
            <p className="text-sm text-gray-600">
              ربط مباشر بين المستشفيات، العيادات، والممرضين الأكفاء
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">
              رعاية منزلية
            </h3>
            <p className="text-sm text-gray-600">
              توفير كوادر تمريض محترفة لرعاية المرضى في منازلهم
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">
              دورات تدريبية وشهادات
            </h3>
            <p className="text-sm text-gray-600">
              تطوير مهارات الممرضين من خلال تعليم مستمر وورش عمل
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-primary text-white">
        <h2 className="text-3xl font-bold mb-4">
          جاهز تنضم لأكبر مجتمع تمريضي في مصر؟
        </h2>
        <p className="mb-6">
          سجل كممرض أو مؤسسة وابدأ استخدام المنصة الآن!
        </p>
        <Link href="/(auth)/register">
          <button className="px-6 py-3 bg-white text-primary font-semibold rounded-md hover:bg-gray-100">
            سجل كممرض الآن
          </button>
        </Link>
      </section>
    </div>
  );
}
