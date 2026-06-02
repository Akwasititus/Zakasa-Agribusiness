'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useCounter } from '@/hooks/use-scroll-animation';
import { counterVariants } from '@/lib/animations';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 2000,
  className = '',
}: AnimatedCounterProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.5 });
  const count = useCounter(isVisible ? target : 0, duration);

  return (
    <motion.div
      ref={ref}
      variants={counterVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      className={className}
    >
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </motion.div>
  );
}
