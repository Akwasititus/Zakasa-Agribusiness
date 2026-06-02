'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { slideInLeftVariants, slideInRightVariants, staggerContainerVariants } from '@/lib/animations';

export default function About() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Left side - Image */}
          <motion.div
            variants={slideInLeftVariants}
            className="relative"
          >
            <div className="bg-linear-to-br from-[#1A5C1A] to-[#0a280a] rounded-lg overflow-hidden h-96 md:h-full">
              <img
                src="https://images.unsplash.com/photo-1500382017468-8049bbd29d38?w=600&q=80"
                alt="About Zakasa"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            variants={slideInRightVariants}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-[#F5C518] font-semibold tracking-wider text-sm uppercase">About Zakasa</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A5C1A] mt-2">
                Empowering Farmers Through Innovation
              </h2>
            </motion.div>

            <motion.p
              className="text-gray-600 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
            >
              Zakasa Agribusiness is dedicated to transforming agriculture in Ghana by providing women farmers with access to quality inputs, modern equipment, training, and fair-price markets. We believe in sustainable farming practices and economic empowerment.
            </motion.p>

            <motion.ul
              className="space-y-3"
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              variants={staggerContainerVariants}
            >
              {[
                'Quality farm inputs sourced from trusted suppliers',
                'Pay-after-harvest flexible payment system',
                'Expert training and continuous support',
                'Access to premium markets and pricing',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  variants={slideInRightVariants}
                >
                  <span className="text-[#F5C518] font-bold mt-1">✓</span>
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.button
              className="bg-[#F5C518] text-[#1A5C1A] px-8 py-3 rounded-lg font-bold mt-6 w-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(245, 197, 24, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
