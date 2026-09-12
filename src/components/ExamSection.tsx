'use client';

import { EXAMS } from '@/config/exams';
import ExamCard from './ExamCard';

const ExamSection = () => {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4 text-primary">📖 Exam Categories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete preparation for all major competitive exams
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-2">
            🏛️ Federal Exams
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXAMS.filter((exam) => exam.category === 'Federal').map((exam) => (
              <ExamCard key={exam.id} {...exam} />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-2">
            ⚔️ Defence Exams
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXAMS.filter((exam) => exam.category === 'Defence').map((exam) => (
              <ExamCard key={exam.id} {...exam} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-2">
            🏢 State Exams
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXAMS.filter((exam) => exam.category === 'State').map((exam) => (
              <ExamCard key={exam.id} {...exam} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamSection;
