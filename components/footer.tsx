import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A5C1A] text-white py-8 sm:py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Leaf className="w-5 sm:w-6 h-5 sm:h-6 text-[#F5C518] animate-bounce-subtle" />
              <span className="font-bold text-lg sm:text-xl">Zakasa</span>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm">Transforming agriculture, empowering farmers across Africa.</p>
          </div>
          <div className="animate-fade-in-up animate-delay-100">
            <h4 className="font-bold mb-2 sm:mb-4 text-[#F5C518] text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#how" className="hover:text-white transition">How It Works</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div className="animate-fade-in-up animate-delay-200">
            <h4 className="font-bold mb-2 sm:mb-4 text-[#F5C518] text-sm sm:text-base">Services</h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">Farm Inputs</a></li>
              <li><a href="#" className="hover:text-white transition">Mechanization</a></li>
              <li><a href="#" className="hover:text-white transition">Training</a></li>
              <li><a href="#" className="hover:text-white transition">Markets</a></li>
            </ul>
          </div>
          <div className="animate-fade-in-up animate-delay-300">
            <h4 className="font-bold mb-2 sm:mb-4 text-[#F5C518] text-sm sm:text-base">Legal</h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">© 2024 Zakasa Agribusiness. All rights reserved.</p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition text-xs sm:text-sm">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xs sm:text-sm">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xs sm:text-sm">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-400">
          <p>Bringing <span className="text-[#F5C518] font-bold">Zakasa</span> to your farm. Pay after harvest. <Leaf className="inline w-3 h-3 sm:w-4 sm:h-4" /></p>
        </div>
      </div>
    </footer>
  );
}
