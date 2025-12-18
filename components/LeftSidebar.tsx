'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function LeftSidebar() {
  const socialLinks: Array<{ icon: string | ReactNode; href: string; label: string }> = [
    { icon: 'f', href: '#', label: 'Facebook' },
    { icon: 'X', href: '#', label: 'Twitter' },
    { icon: 'in', href: '#', label: 'LinkedIn' },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2"/>
          <circle cx="12" cy="12" r="4" strokeWidth="2"/>
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
        </svg>
      ), 
      href: '#', 
      label: 'Instagram' 
    },
  ];

  return (
    <div className="fixed left-8 top-0 h-screen z-40 hidden lg:block">
      {/* Logo and Title at Top */}
      <motion.div
        className="absolute top-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 bg-white rounded-sm"></div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">OV</span>
            <span className="text-sm text-white font-semibold">OutoVox</span>
          </div>
        </div>
      </motion.div>

      {/* Social Media Icons at Center */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            className="w-10 h-10 flex items-center justify-center text-white hover:text-gray-300 transition-colors text-xl font-semibold"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            aria-label={link.label}
          >
            {typeof link.icon === 'string' ? link.icon : link.icon}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}

