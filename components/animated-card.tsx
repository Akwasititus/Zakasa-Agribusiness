'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cardHoverVariants } from '@/lib/animations';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

export function AnimatedCard({ children, className = '', index = 0 }: AnimatedCardProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={cardHoverVariants}
      initial="rest"
      animate={isVisible ? 'hover' : 'rest'}
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      className={className}
      transition={{ delay: index * 0.1 }}
    >
      {children}
    </motion.div>
  );
}
