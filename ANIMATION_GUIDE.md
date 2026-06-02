# Animation System Guide

Your app now has a complete animation system! Here's how to use it across all components.

## Installation Requirements

First, make sure Framer Motion is installed:
```bash
npm install framer-motion
```

**If you get PowerShell execution policy errors**, open Git Bash or use:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

## Quick Start: 3 Ways to Animate

### 1. **Scroll Animations** - Animate on scroll into view

```tsx
'use client';

import { ScrollAnimation } from '@/components/scroll-animation';

export function MyComponent() {
  return (
    <ScrollAnimation type="slideUp" delay={0.1}>
      <h1>This fades in when scrolling</h1>
    </ScrollAnimation>
  );
}
```

**Available types:**
- `fade` - Fade in
- `slideUp` - Slide up from bottom
- `slideLeft` - Slide from left
- `slideRight` - Slide from right
- `scale` - Scale up

---

### 2. **Animated Counters** - Numbers count up on scroll

```tsx
import { AnimatedCounter } from '@/components/animated-counter';

export function Stats() {
  return (
    <div>
      <AnimatedCounter 
        target={2500} 
        suffix=" Farmers"
        duration={2000}
      />
    </div>
  );
}
```

---

### 3. **Framer Motion Direct** - Full control

```tsx
'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function MyComponent() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      Content
    </motion.div>
  );
}
```

---

## Common Patterns

### Button Hover Animation
```tsx
import { buttonHoverVariants } from '@/lib/animations';

<motion.button
  variants={buttonHoverVariants}
  whileHover="hover"
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

### Staggered List
```tsx
import { staggerContainerVariants, slideInUpVariants } from '@/lib/animations';

<motion.ul
  variants={staggerContainerVariants}
  initial="hidden"
  animate="visible"
>
  {items.map((item, i) => (
    <motion.li key={i} variants={slideInUpVariants}>
      {item}
    </motion.li>
  ))}
</motion.ul>
```

### Card with Hover Effect
```tsx
import { cardHoverVariants } from '@/lib/animations';

<motion.div
  variants={cardHoverVariants}
  whileHover="hover"
  whileTap={{ scale: 0.98 }}
>
  Card content
</motion.div>
```

### Icon Rotation on Hover
```tsx
<motion.div
  whileHover={{ rotate: 10, scale: 1.1 }}
  transition={{ duration: 0.2 }}
>
  <IconComponent />
</motion.div>
```

---

## Example Component Updates

### Hero Section ✅ (Already Done)
- Text slides up with staggered delays
- Buttons have hover effects
- Dot indicators animate in on load

### Services Section ✅ (Already Done)
- Cards slide up on scroll
- Icons rotate on hover
- Staggered reveal effect

### About Section
Suggested update - see `components/about-animated.tsx`
- Image slides in from left
- Content slides in from right
- List items stagger

### Statistics Section
Suggested update - see `components/animated-stats.tsx`
- Animated counters on scroll
- Grid with stagger effect

### Testimonials Section
Suggested update - see `components/animated-testimonials.tsx`
- Cards slide up
- Star ratings animate in sequence
- Hover lift effect

### Contact Form
- Form fields fade in on load
- Submit button has hover/tap effects
- Success message with scale animation

---

## Custom Animation Hook

Use the `useScrollAnimation` hook for any element:

```tsx
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function MyComponent() {
  // Element animates when 10% is in view
  // With 50px margin before element comes into view
  const { ref, isVisible } = useScrollAnimation({ 
    threshold: 0.1,
    margin: '0px 0px -50px 0px'
  });

  return (
    <div ref={ref}>
      {isVisible && <p>Now visible!</p>}
    </div>
  );
}
```

---

## Animation Variants Reference

All variants are in `lib/animations.ts`:

```tsx
// Pre-built variants
fadeInVariants
slideInLeftVariants
slideInRightVariants
slideInUpVariants
scaleUpVariants
buttonHoverVariants
cardHoverVariants
textLetterVariants
staggerContainerVariants
```

Use them with `motion` components:
```tsx
import { fadeInVariants } from '@/lib/animations';

<motion.div
  variants={fadeInVariants}
  initial="hidden"
  animate="visible"
/>
```

---

## Performance Tips

1. **Use 'use client'** - Required for all animated components
2. **Lazy load** - Animations only trigger when in viewport
3. **Stagger delays** - Keep delays under 0.5s per item
4. **Reduce motion** - Consider `prefers-reduced-motion`

---

## Next: Integrate with Your Components

1. ✅ Hero - Already animated
2. ✅ Services - Already animated
3. ⏳ About - Update with `about-animated.tsx` pattern
4. ⏳ Contact - Add button animations
5. ⏳ Navbar - Add scroll reveal
6. ⏳ Footer - Add on-scroll animations
7. ⏳ Any cards/testimonials - Use `AnimatedCard` or `AnimatedTestimonials`

---

## Troubleshooting

### "Element type is invalid" Error
- Make sure component has `'use client'` directive
- Check component is properly exported

### Animations not triggering
- Verify `useScrollAnimation` hook is used
- Check `threshold` and `margin` values
- Ensure component is in viewport

### Performance issues
- Reduce number of simultaneous animations
- Increase `threshold` value
- Use `will-change` CSS strategically

---

## Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Animation Best Practices](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
