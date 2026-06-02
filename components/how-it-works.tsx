import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Join Zakasa',
    description: 'Register as a farmer and complete your profile with farm details and location.',
  },
  {
    number: '02',
    title: 'Access Services',
    description: 'Browse and order farm inputs, mechanization services, or training programs.',
  },
  {
    number: '03',
    title: 'Get Support',
    description: 'Receive expert guidance and real-time support throughout your farming season.',
  },
  {
    number: '04',
    title: 'Harvest & Sell',
    description: 'Aggregate your produce and sell at fair prices through our market network.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in-down">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A5C1A] mb-3 sm:mb-4 text-balance">How Zakasa Works</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-balance">Four simple steps to transform your farming business</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div key={index} className={`relative animate-fade-in-up ${['', 'animate-delay-100', 'animate-delay-200', 'animate-delay-300'][index]}`}>
              <div className="bg-gradient-to-br from-[#1A5C1A] to-[#4CAF50] rounded-full w-16 sm:w-18 md:w-20 h-16 sm:h-18 md:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 hover:scale-110 hover:shadow-lg transition duration-300">
                <span className="text-white text-2xl sm:text-2xl md:text-3xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1A5C1A] text-center mb-2 sm:mb-3">{step.title}</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 text-[#F5C518] animate-bounce-subtle">
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 bg-gradient-to-r from-[#1A5C1A]/10 to-[#4CAF50]/10 border-2 border-[#1A5C1A] p-5 sm:p-6 md:p-8 rounded-lg text-center animate-fade-in-up animate-delay-400 hover:border-[#1A5C1A] hover:shadow-lg transition duration-300">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1A5C1A] mb-3 sm:mb-4">The Zakasa Advantage</h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            With our pay-after-harvest model, you get the inputs and services you need without financial strain. We handle the complexity so you can focus on growing your best harvest.
          </p>
        </div>
      </div>
    </section>
  );
}
