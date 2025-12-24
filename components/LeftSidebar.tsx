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
        <div className="flex flex-col items-center">
          <div className="text-sm font-semibold text-white flex items-center tracking-wide">
            {/* First O as power button */}
            <span className="relative inline-flex items-center justify-center w-3.5 h-3.5 mr-1">
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                <path d="M12 8v8" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            {/* UTOVO */}
            <span>UTOVO</span>
            {/* Final X with split color */}
            <span className="relative inline-block ml-0.5">
              <span className="text-white opacity-0">X</span>
              <span className="absolute left-0 top-0 text-white" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}>X</span>
              <span className="absolute left-0 top-0 text-cyan-400" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}>X</span>
            </span>
          </div>
        </div>
      </motion.div>

      {/* Social Media Icons at Center */}
      <motion.div
        className="absolute top-[35%] left-1/2 -translate-x-1/2 flex flex-col gap-6 items-center"
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

