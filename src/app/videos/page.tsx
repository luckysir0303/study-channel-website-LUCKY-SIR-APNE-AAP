'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaPlay, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  date: string;
  category: string;
}

const VideosPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const videos: Video[] = [
    {
      id: '1',
      title: 'SSC GD Exam की तैयारी कैसे करें',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      duration: '45:32',
      views: '125K',
      date: '2 weeks ago',
      category: 'SSC GD',
    },
    {
      id: '2',
      title: 'SSC CGL Reasoning Tips और Tricks',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      duration: '38:15',
      views: '98K',
      date: '1 week ago',
      category: 'SSC CGL',
    },
    {
      id: '3',
      title: 'RAS Exam की संपूर्ण जानकारी',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      duration: '52:45',
      views: '156K',
      date: '3 days ago',
      category: 'RAS',
    },
    {
      id: '4',
      title: 'General Knowledge के महत्वपूर्ण सवाल',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      duration: '41:20',
      views: '203K',
      date: '1 day ago',
      category: 'General Knowledge',
    },
  ];

  const categories = ['all', 'SSC GD', 'SSC CGL', 'SSC MTS', 'RAS', 'Army', 'General Knowledge'];

  const filteredVideos = videos.filter((video) => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">📺 Video Lectures</h1>
          <p className="text-xl text-gray-200">सभी exams के लिए complete video tutorials</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 bg-white rounded-lg shadow-md p-4 mb-6">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Video खोजो..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 outline-none text-lg"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition ${
                  selectedCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group"
            >
              <div className="relative overflow-hidden bg-gray-200 aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition">
                  <FaPlay className="text-white text-4xl opacity-0 group-hover:opacity-100 transition" />
                </div>
                <span className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 rounded text-sm font-bold">
                  {video.duration}
                </span>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg text-dark mb-2 line-clamp-2">{video.title}</h3>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>{video.views} views</span>
                  <span>{video.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {video.category}
                  </span>
                  <a
                    href="https://youtube.com/@lucky_sir_jaipur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm bg-primary text-white px-3 py-1 rounded hover:bg-orange-600"
                  >
                    Play
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-16">
            <p className="text-2xl text-gray-600 mb-4">कोई video नहीं मिला 😔</p>
            <p className="text-gray-500">अपनी search modify करके try करो या अलग category चुनो।</p>
          </div>
        )}

        {/* YouTube Subscribe */}
        <div className="mt-16 bg-gradient-to-r from-red-500 to-red-600 text-white py-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">🎥 और भी videos के लिए Subscribe करो</h2>
          <p className="text-lg mb-8">हमारे YouTube channel को follow करो सभी latest videos के लिए</p>
          <a
            href="https://youtube.com/@lucky_sir_jaipur?si=Zy4ibOkiQZV4M7oQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-red-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Subscribe करो
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideosPage;
