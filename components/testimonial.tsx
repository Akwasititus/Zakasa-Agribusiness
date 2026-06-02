import { Quote } from 'lucide-react';

export default function Testimonial() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#1A5C1A] to-[#4CAF50]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white animate-fade-in-up">
          <Quote className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 mx-auto mb-4 sm:mb-6 md:mb-8 text-[#F5C518] animate-pulse-slow" />
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 leading-tight text-balance">
            &quot;Zakasa changed my farming game. I used to struggle finding quality seeds and good markets. Now, with their pay-after-harvest model, I can invest in my farm without financial stress. My harvest doubled in just one season!&quot;
          </p>
          <div className="mt-6 sm:mt-8">
            <p className="text-base sm:text-lg md:text-xl font-bold">John Kipchoge</p>
            <p className="text-sm sm:text-base text-gray-200">Smallholder Farmer, Kenya</p>
          </div>
        </div>
      </div>
    </section>
  );
}
