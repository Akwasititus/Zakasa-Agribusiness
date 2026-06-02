# Animation Components & Quick Snippets

## What's Already Set Up ✅

### Files Created:

**Animation Core:**
- `lib/animations.ts` - Framer Motion variants
- `hooks/use-scroll-animation.ts` - Scroll detection & counter hooks

**Reusable Components:**
- `components/scroll-animation.tsx` - Wrap content for scroll animations
- `components/animated-counter.tsx` - Number counting animations
- `components/animated-card.tsx` - Card hover effects

**Example Components (Ready to use):**
- `components/about-animated.tsx` - Shows left/right slide pattern
- `components/animated-stats.tsx` - Shows counter animations
- `components/animated-testimonials.tsx` - Shows card stagger pattern

**Already Updated:**
- `components/hero.tsx` - Full animations on load
- `components/services.tsx` - Scroll animations with stagger

**Documentation:**
- `ANIMATION_SETUP.md` - Installation instructions
- `ANIMATION_GUIDE.md` - Full usage guide

---

## Quick Copy-Paste Examples

### Update Navbar - Add scroll effect

```tsx
'use client';

import { motion } from 'framer-motion';

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="..."
    >
      {/* navbar content */}
    </motion.nav>
  );
}
```

---

### Update Contact Form - Button animations

```tsx
'use client';

import { motion } from 'framer-motion';
import { buttonHoverVariants } from '@/lib/animations';

export function ContactForm() {
  return (
    <form className="space-y-4">
      {/* form fields */}
      
      <motion.button
        type="submit"
        variants={buttonHoverVariants}
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
        className="bg-[#F5C518] px-6 py-2 rounded-lg font-bold"
      >
        Send Message
      </motion.button>
    </form>
  );
}
```

---

### Update Footer - Staggered links

```tsx
'use client';

import { motion } from 'framer-motion';
import { staggerContainerVariants, slideInUpVariants } from '@/lib/animations';

export function Footer() {
  return (
    <motion.footer
      variants={staggerContainerVariants}
      initial="hidden"
      animate="visible"
      className="..."
    >
      <motion.div variants={slideInUpVariants}>Link 1</motion.div>
      <motion.div variants={slideInUpVariants}>Link 2</motion.div>
      <motion.div variants={slideInUpVariants}>Link 3</motion.div>
    </motion.footer>
  );
}
```

---

### Add to "Why Choose Us" - Card grid

```tsx
'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { staggerContainerVariants, slideInUpVariants } from '@/lib/animations';

export function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const reasons = [/* your data */];

  return (
    <section ref={ref}>
      <motion.div
        className="grid md:grid-cols-3 gap-6"
        variants={staggerContainerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            variants={slideInUpVariants}
            whileHover={{ y: -10 }}
          >
            {/* card content */}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
```

---

### Text that reveals letter-by-letter

```tsx
'use client';

import { motion } from 'framer-motion';
import { textContainerVariants, textLetterVariants } from '@/lib/animations';

const text = 'Your amazing heading';

export function AnimatedHeading() {
  return (
    <motion.h1
      variants={textContainerVariants}
      initial="hidden"
      animate="visible"
    >
      {text.split('').map((letter, i) => (
        <motion.span key={i} variants={textLetterVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}
```

---

### How-It-Works Timeline with animations

```tsx
'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  const steps = [/* your steps */];

  return (
    <div ref={ref} className="space-y-8">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-4"
        >
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F5C518] flex items-center justify-center font-bold">
            {i + 1}
          </div>
          <div>
            <h3 className="font-bold">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
```

---

## Animation Checklist

Components to enhance:

- [ ] Update About component (see `about-animated.tsx`)
- [ ] Add animations to "How It Works" section
- [ ] Add animations to "Why Choose Us" section
- [ ] Update Contact form with button animations
- [ ] Add stats/counters section (see `animated-stats.tsx`)
- [ ] Update testimonials with stagger effect (see `animated-testimonials.tsx`)
- [ ] Add navbar scroll animations
- [ ] Update footer with stagger animations

---

## Installation Command

Once execution policy is fixed, run:

```bash
npm install framer-motion
```

Then restart your dev server:

```bash
npm run dev
```

---

## File Structure After Setup

```
components/
├── about-animated.tsx ✨ NEW
├── animated-card.tsx ✨ NEW
├── animated-counter.tsx ✨ NEW
├── animated-stats.tsx ✨ NEW
├── animated-testimonials.tsx ✨ NEW
├── hero.tsx ✅ UPDATED
├── scroll-animation.tsx ✨ NEW
├── services.tsx ✅ UPDATED
└── ... other components

lib/
├── animations.ts ✨ NEW
└── utils.ts

hooks/
├── use-scroll-animation.ts ✨ NEW
└── use-toast.ts
```

---

## Performance Optimizations

All animations include:
- ✅ Lazy loading (only animate when in viewport)
- ✅ GPU acceleration (uses `transform` property)
- ✅ Staggered delays (prevents jank)
- ✅ Smooth transitions (0.3-0.8s duration)

## Next Steps

1. **Install framer-motion** using the instructions in ANIMATION_SETUP.md
2. **Copy examples** from this file into your components
3. **Test in browser** to see animations in action
4. **Adjust timings** if needed (delays, durations)
5. **Deploy** and enjoy beautiful animations! 🎉
