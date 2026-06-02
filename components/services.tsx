'use client';

import { Sprout, Tractor, Package, BookOpen, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { staggerContainerVariants, slideInUpVariants } from '@/lib/animations';
import { AnimatedCard } from './animated-card';

const services = [
  {
    icon: Sprout,
    title: 'Farm Inputs',
    description: 'Quality seeds, fertilizers, and pesticides tailored to your crop and soil needs.',
  },
  {
    icon: Tractor,
    title: 'Mechanization Services',
    description: 'Access to modern farming equipment and trained operators for efficient cultivation.',
  },
  {
    icon: Package,
    title: 'Produce Aggregation',
    description: 'Collective selling to reach better markets and reduce middlemen costs.',
  },
  {
    icon: BookOpen,
    title: 'Farmer Training',
    description: 'Expert guidance on best practices, crop management, and sustainable farming.',
  },
  {
    icon: Leaf,
    title: 'Premium Products',
    description: 'Access to Zakasa premium crops with guaranteed premium prices.',
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-10 sm:mb-12 md:mb-16"
          variants={slideInUpVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A5C1A] mb-3 sm:mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-balance">
            Comprehensive solutions for every stage of your farming journey
          </p>
        </motion.div>
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={slideInUpVariants}
                whileHover={{ y: -10, boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-white p-5 sm:p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                  <motion.div
                    className="bg-[#1A5C1A] w-12 sm:w-13 md:w-14 h-12 sm:h-13 md:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:bg-[#F5C518] transition"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Icon className="w-6 sm:w-6 md:w-7 h-6 sm:h-6 md:h-7 text-[#F5C518] group-hover:text-[#1A5C1A]" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A5C1A] mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
