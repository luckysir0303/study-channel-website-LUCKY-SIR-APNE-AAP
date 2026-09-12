'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // API call करेंगे बाद में
      console.log('Subscribing:', email);
      setMessage('✅ आपका subscription सफल रहा!');
      setEmail('');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('❌ कुछ समस्या हुई');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">📧 Newsletter Subscribe करो</h2>
          <p className="text-lg mb-8 text-gray-200">
            Latest updates, exam tips, और study materials सीधे अपने inbox में पाओ
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="अपना email दर्ज करो"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-primary bg-accent hover:bg-yellow-600 px-8 py-3 font-bold"
            >
              {loading ? 'लोड हो रहा है...' : 'Subscribe'}
            </button>
          </form>

          {message && (
            <p className="mt-4 text-lg font-semibold animate-bounce">{message}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
