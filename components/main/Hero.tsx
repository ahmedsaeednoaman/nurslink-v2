'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-accent py-20 px-6 text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-secondary mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        مرحبًا بك في NursLink
      </motion.h1>
      <motion.p
        className="text-lg text-text-secondary max-w-2xl mx-auto mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        منصتك الذكية الشاملة للتوظيف، التدريب، والتواصل في مجال التمريض
      </motion.p>
      <motion.a
        href="/register"
        className="bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-btn-hover transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        ابدأ الآن
      </motion.a>
    </section>
  );
}
