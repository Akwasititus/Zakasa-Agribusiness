# Install Framer Motion

Since npm scripts are blocked by execution policy in your PowerShell, you can install Framer Motion using one of these methods:

## Method 1: Use Git Bash (Recommended)
Open Git Bash terminal and run:
```bash
npm install framer-motion
```

## Method 2: Temporarily Bypass Execution Policy
In your PowerShell terminal, run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
Then run:
```powershell
npm install framer-motion
```

## Method 3: Use VS Code Terminal
Open the integrated terminal (Ctrl+`) and ensure it's using Git Bash or another shell that allows npm to run.

---

## Animation Components Created

Once `framer-motion` is installed, you'll have these new animation utilities:

### 1. **Scroll Animations** (`components/scroll-animation.tsx`)
Triggers animations when elements scroll into view
```tsx
<ScrollAnimation type="slideUp" delay={0.1}>
  <h1>Your content here</h1>
</ScrollAnimation>
```

### 2. **Animated Counter** (`components/animated-counter.tsx`)
For counting up numbers on scroll
```tsx
<AnimatedCounter target={1000} suffix="+ Farmers" />
```

### 3. **Animated Card** (`components/animated-card.tsx`)
Cards with hover and scroll animations
```tsx
<AnimatedCard>
  <p>Card content</p>
</AnimatedCard>
```

### 4. **Animation Utilities** (`lib/animations.ts`)
Pre-built animation variants:
- `fadeInVariants` - Fade in effect
- `slideInUpVariants` - Slide up effect
- `slideInLeftVariants` - Slide from left
- `slideInRightVariants` - Slide from right
- `buttonHoverVariants` - Button interactions
- `cardHoverVariants` - Card interactions
- And more!

### 5. **Custom Hooks** (`hooks/use-scroll-animation.ts`)
- `useScrollAnimation()` - Detect when element is in viewport
- `useCounter()` - Animate number counters

---

## Already Updated Components

✅ **Hero Component** - Text and button animations on load
✅ **Services Component** - Card animations on scroll with staggered reveals

## Next Steps to Animate Other Components

Once framer-motion is installed, update these components similarly:

### About Component
```tsx
<ScrollAnimation type="slideLeft">
  <section>Your content</section>
</ScrollAnimation>
```

### Testimonials Component
```tsx
<AnimatedCard index={i}>
  {/* Card content */}
</AnimatedCard>
```

### Contact Form
Use button hover animations on submit button
```tsx
<motion.button
  variants={buttonHoverVariants}
  whileHover="hover"
>
  Send Message
</motion.button>
```

---

## Animation Types Available

- **fade** - Simple fade in
- **slideUp** - Slide up from bottom
- **slideLeft** - Slide from left  
- **slideRight** - Slide from right
- **scale** - Scale up effect

Use with: `<ScrollAnimation type="fadeInVariants" />`
