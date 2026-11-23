import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhatsAppBubble: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/971504187722?text=Hello%20RKDF%20University%20Dubai%20Admissions"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-pill shadow-lg hover:shadow-xl transition-all duration-300 focus-visible:outline-2 focus-visible:outline-focus"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 26, delay: 0.8 }}
      aria-label="Direct WhatsApp Consultation with Admissions Counselor"
    >
      <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
      <span className="text-xs font-semibold tracking-wide">Chat with Admissions</span>
    </motion.a>
  );
};
