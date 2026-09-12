'use client';

import Link from 'next/link';
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Lucky Sir Academy</h3>
            <p className="text-gray-400 mb-4">
              Your complete guide to competitive exam success.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:7357040303" className="flex items-center gap-2 hover:text-primary transition">
                <FaPhone /> 7357040303
              </a>
              <a href="mailto:luckysir@gmail.com" className="flex items-center gap-2 hover:text-primary transition">
                <FaEnvelope /> luckysir@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link href="/exams" className="hover:text-primary transition">Exams</Link></li>
              <li><Link href="/videos" className="hover:text-primary transition">Videos</Link></li>
              <li><Link href="/mock-tests" className="hover:text-primary transition">Mock Tests</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/dashboard" className="hover:text-primary transition">Dashboard</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition">FAQ</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition">Terms</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-4">
              <a href="https://youtube.com" target="_blank" className="text-red-500 hover:text-primary transition text-2xl"><FaYoutube /></a>
              <a href="https://facebook.com" target="_blank" className="text-blue-500 hover:text-primary transition text-2xl"><FaFacebook /></a>
              <a href="https://twitter.com" target="_blank" className="text-blue-400 hover:text-primary transition text-2xl"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" className="text-pink-500 hover:text-primary transition text-2xl"><FaInstagram /></a>
              <a href="https://wa.me/7357040303" target="_blank" className="text-green-500 hover:text-primary transition text-2xl"><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        {/* Divider */}
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
