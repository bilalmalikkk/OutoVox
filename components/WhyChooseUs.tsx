'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Users, Shield, Lightbulb } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'We deliver projects on time without compromising quality, ensuring your business moves forward quickly.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our experienced developers and designers bring years of expertise to every project.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'We prioritize security and reliability in every solution we build, protecting your data and users.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We stay ahead of the curve with cutting-edge technologies and modern development practices.',
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: '0px', amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: 200,
      rotateY: 90
    },
    visible: { 
      opacity: 1, 
      x: 0,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
        type: 'spring',
        stiffness: 80,
        damping: 15
      }
    },
  };

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
            Why Choose <span className="text-white">OutoVox</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional results
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ perspective: '1000px' }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-black border border-white/10 rounded-2xl p-8 text-center hover:border-white/30 transition-all duration-300"
              style={{ transformStyle: 'preserve-3d' }}
              whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
            >
              <div className="text-white mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <feature.icon className="w-16 h-16" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

