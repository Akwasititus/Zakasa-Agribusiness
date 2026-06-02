'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { staggerContainerVariants, slideInUpVariants, cardHoverVariants } from '@/lib/animations';

const testimonials = [
  {
    name: 'Ama Sekyere',
    role: 'Maize Farmer',
    text: 'Zakasa transformed my farming. The quality inputs and training helped me triple my harvest.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  },
  {
    name: 'Akosua Mensah',
    role: 'Cassava Producer',
    text: 'The pay-after-harvest system gave me the freedom to farm without financial stress. Highly grateful!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  },
  {
    name: 'Yaa Owusu',
    role: 'Mixed Crops Farmer',
    text: 'Professional training and market access changed everything for my family. Best decision ever!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
  },
];

export function AnimatedTestimonials() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A5C1A] mb-3">
            Farmer Testimonials
          </h2>
          <p className="text-gray-600 text-lg">
            Real stories from farmers whose lives have been transformed
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={slideInUpVariants}
              whileHover={{ y: -10 }}
              className="bg-linear-to-br from-gray-50 to-gray-100 p-6 md:p-8 rounded-lg border border-gray-200"
            >
              <motion.div
                className="flex items-center gap-4 mb-4"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-[#1A5C1A]">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>

              <motion.p
                className="text-gray-700 italic leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                "{testimonial.text}"
              </motion.p>

              <motion.div
                className="flex gap-1 mt-4"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="text-[#F5C518] text-lg"
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 + i * 0.05 }}
                  >
                    ★
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
