'use client';

import Link from 'next/link';
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Lucky Sir Academy</h3>
            <p className="text-gray-400">
              Your complete guide to competitive exam success.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link href="/exams" className="hover:text-primary transition">Exams</Link></li>
              <li><Link href="/videos" className="hover:text-primary transition">Videos</Link></li>
              <li><Link href="/about" className="hover:text-primary transition">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition">FAQ</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition">Terms</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-red-500 hover:text-primary transition text-2xl"><FaYoutube /></a>
              <a href="#" className="text-blue-500 hover:text-primary transition text-2xl"><FaFacebook /></a>
              <a href="#" className="text-blue-400 hover:text-primary transition text-2xl"><FaTwitter /></a>
              <a href="#" className="text-pink-500 hover:text-primary transition text-2xl"><FaInstagram /></a>
              <a href="#" className="text-green-500 hover:text-primary transition text-2xl"><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400">
            <p>&copy; {currentYear} Lucky Sir Jaipur Academy. All rights reserved.</p>
            <p className="mt-2 text-sm">Built with ❤️ for your success</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
