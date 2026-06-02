# 🎬 Animation Quick Reference Card

Keep this handy while building animations!

---

## One-Line Imports

```tsx
// Motion component
import { motion } from 'framer-motion';

// Animation variants
import { fadeInVariants, slideInUpVariants, buttonHoverVariants, staggerContainerVariants } from '@/lib/animations';

// Hooks
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useCounter } from '@/hooks/use-scroll-animation';

// Components
import { ScrollAnimation } from '@/components/scroll-animation';
import { AnimatedCounter } from '@/components/animated-counter';
import { AnimatedCard } from '@/components/animated-card';
```

---

## Motion Component Basics

```tsx
<motion.div
  initial={{ opacity: 0 }}           // Starting state
  animate={{ opacity: 1 }}           // End state
  exit={{ opacity: 0 }}              // When removed
  transition={{ duration: 0.5 }}     // How long
  whileHover={{ scale: 1.05 }}       // On hover
  whileTap={{ scale: 0.95 }}         // On click
>
  Content
</motion.div>
```

---

## Animation Values Cheat Sheet

```tsx
// Opacity
opacity: 0 → 1          // Invisible to visible

// Position
x: 100                  // Pixels from left
y: 50                   // Pixels from top
translateX: '50%'       // Percentage

// Size
scale: 0.8              // 80% of original size
width: 100              // In pixels

// Rotation
rotate: 45              // Degrees

// Colors
backgroundColor: '#F5C518'

// Shadow
boxShadow: '0px 10px 20px rgba(0,0,0,0.1)'
```

---

## Transition Presets

```tsx
// Fast
transition={{ duration: 0.2 }}

// Normal
transition={{ duration: 0.5 }}

// Slow
transition={{ duration: 1 }}

// With easing
transition={{ duration: 0.6, ease: 'easeOut' }}

// With delay
transition={{ duration: 0.6, delay: 0.2 }}

// Stagger children
transition={{ staggerChildren: 0.1 }}
```

---

## Scroll Animation Patterns

### Pattern 1: Simple Fade In
```tsx
const { ref, isVisible } = useScrollAnimation();

<motion.div
  ref={ref}
  initial={{ opacity: 0 }}
  animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
>
  Content
</motion.div>
```

### Pattern 2: With Variants
```tsx
const { ref, isVisible } = useScrollAnimation();

<motion.div
  ref={ref}
  variants={slideInUpVariants}
  initial="hidden"
  animate={isVisible ? 'visible' : 'hidden'}
>
  Content
</motion.div>
```

### Pattern 3: Staggered List
```tsx
const { ref, isVisible } = useScrollAnimation();

<motion.div
  ref={ref}
  variants={staggerContainerVariants}
  initial="hidden"
  animate={isVisible ? 'visible' : 'hidden'}
>
  {items.map((item, i) => (
    <motion.div key={i} variants={slideInUpVariants}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

---

## Button Animations

### Simple Hover
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click Me
</motion.button>
```

### With Variants
```tsx
<motion.button
  variants={buttonHoverVariants}
  whileHover="hover"
  whileTap={{ scale: 0.95 }}
>
  Click Me
</motion.button>
```

### Complex
```tsx
<motion.button
  whileHover={{ 
    scale: 1.1, 
    boxShadow: '0px 10px 20px rgba(245,197,24,0.3)' 
  }}
  whileTap={{ scale: 0.9 }}
>
  Click Me
</motion.button>
```

---

## Counter Animation

```tsx
import { AnimatedCounter } from '@/components/animated-counter';

// Basic
<AnimatedCounter target={1000} />

// With suffix/prefix
<AnimatedCounter target={2500} suffix=" Farmers" />

// Custom duration
<AnimatedCounter target={100} duration={3000} />

// With class
<AnimatedCounter 
  target={50} 
  className="text-4xl font-bold text-[#F5C518]"
/>
```

---

## Card Hover Effect

```tsx
<motion.div
  whileHover={{ 
    y: -10,
    boxShadow: '0px 20px 40px rgba(0,0,0,0.2)'
  }}
  whileTap={{ scale: 0.98 }}
>
  Card content
</motion.div>
```

---

## Icon Animations

### Rotate on Hover
```tsx
<motion.div whileHover={{ rotate: 10 }}>
  <Icon />
</motion.div>
```

### Bounce
```tsx
<motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 1, repeat: Infinity }}
>
  <Icon />
</motion.div>
```

### Spin
```tsx
<motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 2, repeat: Infinity }}
>
  <Icon />
</motion.div>
```

---

## Text Animations

### Letter by Letter
```tsx
import { textContainerVariants, textLetterVariants } from '@/lib/animations';

const text = 'Hello World';

<motion.div
  variants={textContainerVariants}
  initial="hidden"
  animate="visible"
>
  {text.split('').map((letter, i) => (
    <motion.span key={i} variants={textLetterVariants}>
      {letter}
    </motion.span>
  ))}
</motion.div>
```

---

## Grid Animations

```tsx
<motion.div
  className="grid grid-cols-3 gap-4"
  variants={staggerContainerVariants}
  initial="hidden"
  animate="visible"
>
  {items.map((item, i) => (
    <motion.div key={i} variants={slideInUpVariants}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

---

## Available Pre-Built Variants

| Variant | Effect |
|---------|--------|
| `fadeInVariants` | Fade in from invisible |
| `slideInUpVariants` | Slide up from bottom |
| `slideInLeftVariants` | Slide from left |
| `slideInRightVariants` | Slide from right |
| `scaleUpVariants` | Grow from small |
| `buttonHoverVariants` | Scale on hover |
| `cardHoverVariants` | Lift with shadow |
| `textLetterVariants` | Letter reveal |
| `staggerContainerVariants` | Stagger children |
| `rotateVariants` | Rotate into view |
| `counterVariants` | Fade in counter |

---

## Component Colors (Brand)

```tsx
Primary Green: '#1A5C1A'
Accent Yellow: '#F5C518'
Dark Green: '#0a280a'
White: '#ffffff'
Gray: '#f3f4f6' (light), '#6b7280' (medium)
```

---

## Common Durations

```tsx
Fast: 0.2s    // Interactions (hover, click)
Normal: 0.5s  // Content animations
Slow: 0.8s    // Entrance animations
Very Slow: 1s // Complex animations
```

---

## Common Delays

```tsx
Immediate: 0s      // Hero elements
Stagger: 0.1s      // Each child item
Sequential: 0.2-0.5s // Major sections
```

---

## Easing Functions

```tsx
// Built-in
ease: 'linear'      // Constant speed
ease: 'easeIn'      // Slow start
ease: 'easeOut'     // Slow end (recommended)
ease: 'easeInOut'   // Slow start and end

// Custom
transition={{ 
  type: 'tween',
  ease: [0.25, 0.1, 0.25, 1]  // Bezier curve
}}
```

---

## Useful Hooks

```tsx
// Detect when element enters viewport
const { ref, isVisible } = useScrollAnimation({
  threshold: 0.2,        // 20% visible
  margin: '0px 0px -50px 0px'  // Before entering
});

// Animate counter from 0 to target
const count = useCounter(1000, 2000, 0);
//                    (target, duration, delay)
```

---

## DO's ✅

- ✅ Use `'use client'` at top of component
- ✅ Keep animations under 1 second
- ✅ Stagger items with small delays
- ✅ Use variants for complex animations
- ✅ Test on mobile devices
- ✅ Consider `prefers-reduced-motion`

---

## DON'Ts ❌

- ❌ Animate too many things at once
- ❌ Use very long animation durations
- ❌ Forget `'use client'` directive
- ❌ Animate without scroll detection
- ❌ Use `left`/`top` instead of `x`/`y`
- ❌ Skip transition definitions

---

## Debugging

```tsx
// Check if visible
{isVisible && <p>Element is visible!</p>}

// Slow down animation to see
transition={{ duration: 3 }}  // Change to 3s temporarily

// Check console for errors
console.log('isVisible:', isVisible);

// Verify framer-motion installed
npm list framer-motion
```

---

## Copy-Paste Templates

### Template 1: Scroll Section
```tsx
'use client';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { slideInUpVariants } from '@/lib/animations';

export function MySection() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref}>
      <motion.div
        variants={slideInUpVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        Your content
      </motion.div>
    </section>
  );
}
```

### Template 2: Hover Button
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: 'spring', stiffness: 400 }}
  className="px-6 py-2 bg-[#F5C518] rounded"
>
  Action
</motion.button>
```

### Template 3: Card Grid
```tsx
<motion.div
  className="grid md:grid-cols-3 gap-4"
  variants={staggerContainerVariants}
  initial="hidden"
  animate={isVisible ? 'visible' : 'hidden'}
>
  {items.map((item, i) => (
    <motion.div key={i} variants={slideInUpVariants}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

---

**Need help?** Check ANIMATION_GUIDE.md or COMPONENTS_SNIPPETS.md
