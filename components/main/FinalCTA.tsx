import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="bg-primary text-white py-20 px-6 text-center rounded-t-3xl">
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        مستقبلك في التمريض يبدأ من هنا
      </motion.h2>
      <motion.p
        className="text-lg mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        انضم لمنصة NursLink وابحث أو درّب أو تواصل مع محترفين في مجال التمريض
      </motion.p>
      <motion.a
        href="/register"
        className="bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-accent transition"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        سجل الآن
      </motion.a>
    </section>
  );
}
