import Hero from '@/components/main/Hero';
import Services from '@/components/main/Services';
import Stats from '@/components/main/Stats';
import Testimonials from '@/components/main/Testimonials';
import Partners from '@/components/main/Partners';
import FinalCTA from '@/components/main/FinalCTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Stats />
      <Testimonials />
      <Partners />
      <FinalCTA />
    </main>
  );
}
