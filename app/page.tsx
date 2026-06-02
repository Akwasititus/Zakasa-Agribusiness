'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import WhyChooseUs from '@/components/why-choose-us';
import HowItWorks from '@/components/how-it-works';
import Testimonial from '@/components/testimonial';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-white">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
}
