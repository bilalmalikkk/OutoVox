'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Code2, Smartphone, Layers, Cpu } from 'lucide-react';

export default function FeaturedServices() {
  const featuredServices = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Next.js, and Node.js.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences.',
    },
    {
      icon: Layers,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions for modern applications.',
    },
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning algorithms.',
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  // Duplicate services for seamless infinite scroll
  const duplicatedServices = [...featuredServices, ...featuredServices];

  return (
    <section className="relative py-24 overflow-hidden bg-black" ref={containerRef}>
      <div className="absolute inset-0 bg-black"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our <span className="text-white">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Carousel with Horizontal Animation */}
        <div 
          className="mb-12 overflow-hidden scroll-container"
        >
          <div 
            className="flex gap-8 animate-scroll-horizontal"
          >
            {duplicatedServices.map((service, index) => (
            <motion.div
                key={`${index}-${service.title}`}
                className="group relative bg-black border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-300 flex-shrink-0 w-[calc(25%-24px)] min-w-[280px]"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: (index % featuredServices.length) * 0.1, duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-white mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-16 h-16" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
          </div>
        </div>

        {/* View All Services Link */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            href="/services"
            className="inline-block px-8 py-4 bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

