'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ExamCardProps {
  id: string;
  name: string;
  category: string;
  color: string;
  icon: string;
  subjects: string[];
}

const ExamCard = ({ id, name, category, color, icon, subjects }: ExamCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/exam/${id}`}>
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 cursor-pointer h-full card-hover">
          <div className="flex items-center justify-between mb-4">
            <span className="text-5xl">{icon}</span>
            <span className={`${color} text-white px-3 py-1 rounded-full text-xs font-bold`}>
              {category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-dark mb-2">{name}</h3>
          <div className="flex flex-wrap gap-2">
            {subjects.slice(0, 2).map((subject, idx) => (
              <span key={idx} className="bg-light text-primary text-xs px-2 py-1 rounded-full">
                {subject}
              </span>
            ))}
            {subjects.length > 2 && (
              <span className="bg-light text-gray-600 text-xs px-2 py-1 rounded-full">
                +{subjects.length - 2} more
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ExamCard;
