'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// Helper component for character-by-character animation
function AnimatedText({ text, delay = 0, className = '' }: { text: string; delay?: number; className?: string }) {
  const chars = text.split('');
  
  return (
    <div className={`inline-block ${className}`}>
      {chars.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: '80%', rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.6,
            delay: delay + index * 0.03,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black section-full-height pt-16 lg:pt-20"
    >
      {/* Parallax White Orbs - Very Subtle */}
      <motion.div
        className="absolute top-1/3 -left-1/3 w-[500px] h-[500px] bg-white rounded-full filter blur-[150px] opacity-[0.03] z-0"
        animate={{
          x: mousePosition.x * 50,
          y: mousePosition.y * 50,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      />
      <motion.div
        className="absolute bottom-1/3 -right-1/3 w-[500px] h-[500px] bg-white rounded-full filter blur-[150px] opacity-[0.03] z-0"
        animate={{
          x: -mousePosition.x * 50,
          y: -mousePosition.y * 50,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      />

      {/* Main Hero Content - Modern Two-Column Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          {/* Left Column: Text Content */}
          <div className="space-y-8 lg:space-y-10 text-left flex flex-col justify-center">
            {/* Large Headline with Character Animation */}
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight">
              <div className="block mb-2 lg:mb-3">
                <AnimatedText text="Crafting" delay={0.2} />
              </div>
              <div className="block mb-2 lg:mb-3">
                <AnimatedText text="Tomorrow's" delay={0.35} />
              </div>
              <div className="block mb-2 lg:mb-3">
                <AnimatedText text="Digital" delay={0.5} />
              </div>
              <div className="block">
                <span className="inline-block">
                  <AnimatedText text="Solutions" delay={0.65} />
                </span>
                <motion.span
                  className="inline-block ml-1 text-cyan-400"
                  initial={{ opacity: 0, y: '80%', rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <span className="period">.</span>
                </motion.span>
              </div>
            </h1>

            {/* Tagline */}
            <motion.div
              className="flex items-center gap-3 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7 }}
            >
              <div className="h-px w-12 bg-white/30"></div>
              <p className="text-sm md:text-base text-gray-400 font-light tracking-wider uppercase">
                From Vision to Version
              </p>
            </motion.div>
          </div>

          {/* Right Column: Visual Element */}
          <div className="relative h-full flex items-center justify-center lg:justify-end">
            <motion.div
              className="relative w-full max-w-lg aspect-square lg:max-w-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Abstract Graphic - Modern Geometric Shape */}
              <div className="relative w-full h-full">
                {/* Main Shape - Gradient Rectangle */}
                <motion.div
                  className="absolute left-8 top-0 w-2/3 h-full bg-gradient-to-b from-white/20 via-gray-700/30 to-black/50 rounded-l-3xl flex items-start justify-start overflow-hidden"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  {/* Text inside Gray Block - Vertical */}
                  <motion.div
                    className="px-8 py-10 flex items-center justify-center h-full"
                    initial={{ opacity: 0, rotateX: -90 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    transition={{ duration: 0.8, delay: 1.0, ease: [0.6, -0.05, 0.01, 0.99] }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div
                      className="text-lg md:text-xl font-semibold text-cyan-100 leading-relaxed"
                      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                    >
                      <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                      >
                        Best-in-class software solutions
                      </motion.span>
                      <motion.span
                        className="block mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                      >
                        and reliable support
                      </motion.span>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Accent Shape - Cyan Blue */}
                <motion.div
                  className="absolute right-8 top-1/4 w-1/2 h-3/5 bg-cyan-400 rounded-r-3xl rounded-bl-3xl flex items-start justify-start overflow-hidden"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  {/* Text inside Cyan Block - Horizontal */}
                  <motion.div
                    className="px-8 py-10 flex items-center justify-center h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap">
                        {/* Code */}
                        <motion.div
                          className="inline-block"
                          initial={{ opacity: 0, rotateX: -90, y: 30 }}
                          animate={{ opacity: 1, rotateX: 0, y: 0 }}
                          transition={{ duration: 0.8, delay: 1.4, ease: [0.6, -0.05, 0.01, 0.99] }}
                          style={{ transformStyle: 'preserve-3d' }}
                        >
                          <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight inline-flex items-center">
                            {['C', 'o', 'd', 'e'].map((char, index) => (
                              <motion.span
                                key={index}
                                initial={{ opacity: 0, y: -20, rotate: -180 }}
                                animate={{ opacity: 1, y: 0, rotate: 0 }}
                                transition={{
                                  duration: 0.4,
                                  delay: 1.4 + index * 0.1,
                                  type: 'spring',
                                  stiffness: 300,
                                }}
                              >
                                {char}
                              </motion.span>
                            ))}
                            <motion.span
                              className="text-cyan-500 mx-1"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: [0, 1.5, 1] }}
                              transition={{ duration: 0.5, delay: 1.8, type: 'spring' }}
                            >
                              .
                            </motion.span>
                          </div>
                        </motion.div>

                        {/* Create */}
                        <motion.div
                          className="inline-block"
                          initial={{ opacity: 0, rotateX: -90, y: 30 }}
                          animate={{ opacity: 1, rotateX: 0, y: 0 }}
                          transition={{ duration: 0.8, delay: 1.9, ease: [0.6, -0.05, 0.01, 0.99] }}
                          style={{ transformStyle: 'preserve-3d' }}
                        >
                          <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight inline-flex items-center">
                            {['C', 'r', 'e', 'a', 't', 'e'].map((char, index) => (
                              <motion.span
                                key={index}
                                initial={{ opacity: 0, y: -20, rotate: -180 }}
                                animate={{ opacity: 1, y: 0, rotate: 0 }}
                                transition={{
                                  duration: 0.4,
                                  delay: 1.9 + index * 0.1,
                                  type: 'spring',
                                  stiffness: 300,
                                }}
                              >
                                {char}
                              </motion.span>
                            ))}
                            <motion.span
                              className="text-cyan-500 mx-1"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: [0, 1.5, 1] }}
                              transition={{ duration: 0.5, delay: 2.5, type: 'spring' }}
                            >
                              .
                            </motion.span>
                          </div>
                        </motion.div>

                        {/* Scale */}
                        <motion.div
                          className="inline-block"
                          initial={{ opacity: 0, rotateX: -90, y: 30 }}
                          animate={{ opacity: 1, rotateX: 0, y: 0 }}
                          transition={{ duration: 0.8, delay: 2.6, ease: [0.6, -0.05, 0.01, 0.99] }}
                          style={{ transformStyle: 'preserve-3d' }}
                        >
                          <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight inline-flex items-center">
                            {['S', 'c', 'a', 'l', 'e'].map((char, index) => (
                              <motion.span
                                key={index}
                                initial={{ opacity: 0, y: -20, rotate: -180 }}
                                animate={{ opacity: 1, y: 0, rotate: 0 }}
                                transition={{
                                  duration: 0.4,
                                  delay: 2.6 + index * 0.1,
                                  type: 'spring',
                                  stiffness: 300,
                                }}
                              >
                                {char}
                              </motion.span>
                            ))}
                            <motion.span
                              className="text-cyan-500 mx-1"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: [0, 1.5, 1] }}
                              transition={{ duration: 0.5, delay: 3.1, type: 'spring' }}
                            >
                              .
                            </motion.span>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Reflection/Shadow Effect */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/50 to-transparent rounded-b-3xl blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.1 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section - Bottom */}
      <motion.div
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.9 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '100+', label: 'Projects Completed' },
            { number: '50+', label: 'Happy Clients' },
            { number: '10+', label: 'Team Members' },
            { number: '5+', label: 'Years Experience' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.0 + index * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white">
                {stat.number}
              </div>
              <div className="text-gray-400 mt-2 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator with Animation */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

