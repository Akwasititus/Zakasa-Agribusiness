'use client';

import { useEffect, useState } from 'react';

const stats = [
  { value: 500, label: 'Farmers Supported', suffix: '+' },
  { value: 50, label: 'Communities Served', suffix: '+' },
];

export default function WhyChooseUs() {
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const increment = stat.value / 30;
      return setInterval(() => {
        setCounters((prev) => {
          const updated = [...prev];
          if (updated[index] < stat.value) {
            updated[index] = Math.min(updated[index] + increment, stat.value);
          }
          return updated;
        });
      }, 30);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section id="why" className="py-12 sm:py-16 md:py-20 bg-linear-to-r from-[#1A5C1A] to-[#0d3d0d] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in-down">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-balance">Why Choose Zakasa?</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 text-balance">Making a real difference in agricultural communities across Africa</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 sm:space-y-5 md:space-y-6 animate-fade-in-left">
            <div className="flex gap-3 sm:gap-4 animate-fade-in-left">
              <div className="text-[#F5C518] text-2xl sm:text-3xl shrink-0">✓</div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Pay After Harvest</h3>
                <p className="text-sm sm:text-base text-gray-200">No upfront costs. Get inputs and services now, pay from your harvest proceeds.</p>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4 animate-fade-in-left animate-delay-100">
              <div className="text-[#F5C518] text-2xl sm:text-3xl shrink-0">✓</div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Quality Guaranteed</h3>
                <p className="text-sm sm:text-base text-gray-200">All inputs are certified and tested for optimal crop performance.</p>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4 animate-fade-in-left animate-delay-200">
              <div className="text-[#F5C518] text-2xl sm:text-3xl shrink-0">✓</div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Fair Prices</h3>
                <p className="text-sm sm:text-base text-gray-200">Transparent pricing and direct market access reduce middlemen costs.</p>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4 animate-fade-in-left animate-delay-300">
              <div className="text-[#F5C518] text-2xl sm:text-3xl shrink-0">✓</div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Expert Support</h3>
                <p className="text-sm sm:text-base text-gray-200">Access to trained agronomists and farmer mentors available 24/7.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-8 animate-fade-in-right">
            {stats.map((stat, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur p-5 sm:p-6 md:p-8 rounded-lg text-center border border-white/20 hover:bg-white/20 hover:scale-105 transition duration-300 animate-scale-in ${index === 0 ? '' : 'animate-delay-100'}`}>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5C518] mb-1 sm:mb-2">
                  {Math.floor(counters[index])}{stat.suffix}
                </div>
                <p className="text-xs sm:text-sm md:text-lg text-gray-200">{stat.label}</p>
              </div>
            ))}
            <div className="col-span-2 bg-white/10 backdrop-blur p-5 sm:p-6 md:p-8 rounded-lg text-center border border-white/20 hover:bg-white/20 hover:scale-105 transition duration-300 animate-scale-in animate-delay-200">
              <div className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#F5C518] mb-1 sm:mb-2">100%</div>
              <p className="text-xs sm:text-sm md:text-lg text-gray-200">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
