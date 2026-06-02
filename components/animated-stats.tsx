'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { AnimatedCounter } from './animated-counter';
import { staggerContainerVariants, slideInUpVariants } from '@/lib/animations';

export function AnimatedStats() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  const stats = [
    { label: 'Active Farmers', value: 2500 },
    { label: 'Farm Inputs Supplied', value: 50000 },
    { label: 'Tonnes Aggregated', value: 1200 },
    { label: 'Women Empowered', value: 3200 },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-linear-to-r from-[#1A5C1A] to-[#0a280a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center text-white"
              variants={slideInUpVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold text-[#F5C518] mb-2"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              >
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.label === 'Tonnes Aggregated' ? ' T' : '+'}
                  className="text-4xl md:text-5xl font-bold"
                />
              </motion.div>
              <p className="text-gray-200 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
