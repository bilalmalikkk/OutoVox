'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface RightSidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

export default function RightSidebar({ isSidebarOpen, setIsSidebarOpen }: RightSidebarProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="fixed right-8 top-0 h-screen z-50 hidden lg:block">
      {/* Hamburger Menu Button at Top */}
      <motion.button
        data-hamburger="true"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="absolute top-8 right-1/2 translate-x-1/2 relative w-14 h-14 flex items-center justify-center group"
        aria-label="Toggle menu"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {/* Top line - shorter by default, full width on hover */}
        <motion.span 
          className="absolute h-0.5 bg-white origin-center" 
          style={{ width: '2.5rem' }}
          animate={{
            y: isSidebarOpen ? 0 : -10,
            opacity: isSidebarOpen ? 0 : 1,
            scale: isSidebarOpen ? 0 : 1,
            scaleX: isSidebarOpen ? 0 : (isHovered ? 1 : 0.67)
          }}
          transition={{ duration: 0.3 }}
        />
        {/* Middle line - full width always, becomes the single line when open */}
        <motion.span 
          className="absolute w-10 h-0.5 bg-white" 
          animate={{
            scale: isSidebarOpen ? 1.2 : 1,
            opacity: 1
          }}
          transition={{ duration: 0.3 }}
        />
        {/* Bottom line - shorter by default, full width on hover */}
        <motion.span 
          className="absolute h-0.5 bg-white origin-center" 
          style={{ width: '2.5rem' }}
          animate={{
            y: isSidebarOpen ? 0 : 10,
            opacity: isSidebarOpen ? 0 : 1,
            scale: isSidebarOpen ? 0 : 1,
            scaleX: isSidebarOpen ? 0 : (isHovered ? 1 : 0.67)
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      {/* Contact Us and Icon at Center */}
      <motion.div
        className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.a
          href="#contact"
          className="text-white hover:text-gray-300 transition-colors"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          contact us
        </motion.a>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
            <path d="M12 8v8M8 12h8" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.a>
      </motion.div>
    </div>
  );
}

