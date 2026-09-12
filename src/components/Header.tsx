'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaYoutube } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/exams', label: 'Exams' },
    { href: '/videos', label: 'Videos' },
    { href: '/resources', label: 'Resources' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-3xl font-bold text-primary">📚</div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">Lucky Sir</h1>
              <p className="text-xs text-gray-600">Jaipur Academy</p>
            </div>
          </Link>

          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a href="#subscribe" className="btn-primary flex items-center gap-2">
              <FaYoutube /> Subscribe
            </a>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-primary"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a href="#subscribe" className="btn-primary text-center">
              <FaYoutube className="inline mr-2" /> Subscribe
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
