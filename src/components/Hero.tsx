'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-orange-400 to-accent overflow-hidden flex items-center justify-center pt-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-poppins leading-tight">
            Lucky Sir<br />
            <span className="text-yellow-200">Jaipur Academy</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Complete Preparation for SSC GD, CGL, MTS, CPO, RAS, Army, BSTC, Patwari, Teacher, REET & More
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 justify-center mb-12"
        >
          <Link href="/exams" className="btn-primary text-lg px-8 py-4 bg-white text-primary hover:bg-gray-100">
            Explore Exams
          </Link>
          <a href="#subscribe" className="btn-primary text-lg px-8 py-4 border-2 border-white bg-transparent hover:bg-white hover:text-primary">
            Subscribe Now
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-3 gap-4 md:gap-8 mt-16"
        >
          <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg">
            <div className="text-4xl font-bold">500+</div>
            <div className="text-sm mt-2">Video Lectures</div>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg">
            <div className="text-4xl font-bold">100K+</div>
            <div className="text-sm mt-2">Students</div>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg">
            <div className="text-4xl font-bold">11</div>
            <div className="text-sm mt-2">Exams Covered</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
