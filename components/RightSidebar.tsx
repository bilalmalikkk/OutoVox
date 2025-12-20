'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail } from 'lucide-react';

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

      {/* Contact Us Section - Expanded Layout */}
      <motion.div
        className="absolute top-[28%] right-1/2 translate-x-1/2 flex flex-col items-center gap-8"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Decorative Line */}
        <motion.div
          className="h-16 w-px bg-white/30"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        />
        
        {/* Contact Us Text and Icon Group */}
        <motion.div
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          {/* Contact Us Text */}
          <motion.div
            className="group relative"
            whileHover={{ scale: 1.05 }}
          >
            <Link 
              href="/contact"
              className="text-white hover:text-gray-300 transition-colors font-semibold tracking-wider"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              contact us
            </Link>
            {/* Hover underline effect */}
            <motion.div
              className="absolute -right-2 top-0 h-full w-0.5 bg-white opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ scaleY: 0 }}
              whileHover={{ scaleY: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Icon without border */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.15 }}
          >
            <Link href="/contact" className="block">
              <Mail className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          className="h-16 w-px bg-white/30"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        />
      </motion.div>
    </div>
  );
}

