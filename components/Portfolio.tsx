'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShoppingBag, HeartPulse, BarChart3, MessageCircle, Activity, UtensilsCrossed } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Apps', 'Mobile Apps', 'E-commerce', 'AI/ML'];

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'E-commerce',
      description: 'A modern online shopping platform with real-time inventory and payment integration.',
      icon: ShoppingBag,
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Healthcare App',
      category: 'Mobile Apps',
      description: 'Mobile application for patient management and telemedicine consultations.',
      icon: HeartPulse,
      tags: ['React Native', 'Firebase', 'WebRTC'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'AI Analytics Dashboard',
      category: 'AI/ML',
      description: 'Advanced analytics platform with machine learning predictions.',
      icon: BarChart3,
      tags: ['Python', 'TensorFlow', 'React', 'D3.js'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Social Media Platform',
      category: 'Web Apps',
      description: 'A scalable social networking application with real-time features.',
      icon: MessageCircle,
      tags: ['Next.js', 'GraphQL', 'PostgreSQL', 'Redis'],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Fitness Tracker',
      category: 'Mobile Apps',
      description: 'Cross-platform fitness app with workout tracking and nutrition planning.',
      icon: Activity,
      tags: ['Flutter', 'Firebase', 'ML Kit'],
      color: 'from-teal-500 to-blue-500',
    },
    {
      title: 'Restaurant Management',
      category: 'Web Apps',
      description: 'Complete restaurant management system with POS and inventory.',
      icon: UtensilsCrossed,
      tags: ['Vue.js', 'Laravel', 'MySQL'],
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="portfolio" className="relative py-24 overflow-hidden bg-black" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 grid-background opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Reveal */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our <span className="text-white">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing our best work and successful projects
          </p>
        </motion.div>

        {/* Filter Buttons with State Change Animation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-white text-black shadow-lg'
                  : 'bg-black border border-white/20 text-white hover:border-white/40'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                scale: activeFilter === filter ? 1.05 : 1,
              }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid with Stagger Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                className="group relative bg-black border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-white/5 flex items-center justify-center">
                {(() => {
                  const IconComponent = project.icon;
                  return <IconComponent className="w-24 h-24 text-cyan-400" strokeWidth={1.5} />;
                })()}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="text-sm text-primary-400 mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-white/10 text-gray-300 border border-white/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <motion.button
                  className="w-full py-3 bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

