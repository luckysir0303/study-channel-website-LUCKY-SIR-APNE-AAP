import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ExamSection from '@/components/ExamSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Lucky Sir Jaipur Academy - Competitive Exam Preparation',
  description: 'Complete preparation for SSC GD, CGL, MTS, CPO, RAS, Army, BSTC, PATWARI, TEACHER, REET',
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ExamSection />
      <Footer />
    </main>
  );
}
