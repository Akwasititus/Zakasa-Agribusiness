'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import {
  fadeInVariants,
  slideInUpVariants,
  slideInLeftVariants,
  slideInRightVariants,
  scaleUpVariants,
} from '@/lib/animations';
import { Variants } from 'framer-motion';

interface ScrollAnimationProps {
  children: ReactNode;
  type?: 'fade' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  className?: string;
  threshold?: number;
  margin?: string;
  custom?: Variants;
}

const animationMap: Record<string, Variants> = {
  fade: fadeInVariants,
  slideUp: slideInUpVariants,
  slideLeft: slideInLeftVariants,
  slideRight: slideInRightVariants,
  scale: scaleUpVariants,
};

export function ScrollAnimation({
  children,
  type = 'slideUp',
  delay = 0,
  className = '',
  threshold = 0.1,
  margin = '0px 0px -50px 0px',
  custom,
}: ScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold, margin });
  const variants = custom || animationMap[type];

  return (
    <motion.div
      ref={ref}
      variants={{
        ...variants,
        visible: {
          ...(variants.visible && typeof variants.visible === 'object' && 'transition' in variants.visible
            ? variants.visible
            : {}),
          transition: {
            ...(variants.visible && typeof variants.visible === 'object' && 'transition' in variants.visible
              ? (variants.visible as any).transition
              : {}),
            delay,
          },
        },
      }}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}
