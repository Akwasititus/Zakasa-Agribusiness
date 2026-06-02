import { Target, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A5C1A] mb-4 sm:mb-6 text-balance">Who We Are</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              Zakasa is a digital agribusiness platform committed to revolutionizing smallholder agriculture in Africa. We bridge the gap between farmers and modern agricultural solutions, ensuring they have access to quality inputs, efficient mechanization, and profitable markets.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              With a pay-after-harvest model, we remove the financial barriers that prevent farmers from accessing the tools and inputs they need to succeed.
            </p>
          </div>
          <div className="space-y-5 sm:space-y-6 md:space-y-8 order-1 md:order-2 animate-fade-in-right">
            <div className="bg-gradient-to-br from-[#1A5C1A] to-[#4CAF50] p-5 sm:p-6 md:p-8 rounded-lg text-white hover:shadow-xl hover:scale-105 transition duration-300 animate-scale-in">
              <Target className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 mb-2 sm:mb-3 text-[#F5C518]" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Our Mission</h3>
              <p className="text-sm sm:text-base">To empower smallholder farmers with access to quality inputs, mechanization, and markets at affordable prices through innovative digital solutions.</p>
            </div>
            <div className="bg-gradient-to-br from-[#4CAF50] to-[#1A5C1A] p-5 sm:p-6 md:p-8 rounded-lg text-white hover:shadow-xl hover:scale-105 transition duration-300 animate-scale-in animate-delay-100">
              <Lightbulb className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 mb-2 sm:mb-3 text-[#F5C518]" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Our Vision</h3>
              <p className="text-sm sm:text-base">To create a prosperous agricultural ecosystem where every farmer has the tools, knowledge, and market access to thrive and feed their families.</p>
            </div>
            <div className="bg-yellow-50 border-4 border-[#F5C518] p-4 sm:p-5 md:p-6 rounded-lg hover:shadow-lg hover:scale-105 transition duration-300 animate-scale-in animate-delay-200">
              <p className="text-[#1A5C1A] font-bold text-base sm:text-lg">
                Pay After Harvest: Access inputs and services now, pay from your harvest proceeds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
