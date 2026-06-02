'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in-down">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A5C1A] mb-3 sm:mb-4 text-balance">Get In Touch</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">Have questions? We&apos;re here to help.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          <div className="bg-white p-5 sm:p-6 md:p-8 rounded-lg shadow-md text-center hover:shadow-lg hover:scale-105 transition duration-300 animate-fade-in-up">
            <Mail className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 text-[#F5C518] mx-auto mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1A5C1A] mb-1 sm:mb-2">Email</h3>
            <p className="text-sm sm:text-base text-gray-600">info@zakasa.com</p>
          </div>
          <div className="bg-white p-5 sm:p-6 md:p-8 rounded-lg shadow-md text-center hover:shadow-lg hover:scale-105 transition duration-300 animate-fade-in-up animate-delay-100">
            <Phone className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 text-[#F5C518] mx-auto mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1A5C1A] mb-1 sm:mb-2">Phone</h3>
            <p className="text-sm sm:text-base text-gray-600">+254 712 345 678</p>
          </div>
          <div className="bg-white p-5 sm:p-6 md:p-8 rounded-lg shadow-md text-center hover:shadow-lg hover:scale-105 transition duration-300 animate-fade-in-up animate-delay-200">
            <MapPin className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 text-[#F5C518] mx-auto mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1A5C1A] mb-1 sm:mb-2">Location</h3>
            <p className="text-sm sm:text-base text-gray-600">Nairobi, Kenya</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6 animate-fade-in-left">
            <div>
              <label className="block text-[#1A5C1A] font-bold mb-2 text-sm sm:text-base">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1A5C1A] focus:ring-2 focus:ring-[#1A5C1A]/50 text-sm sm:text-base"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-[#1A5C1A] font-bold mb-2 text-sm sm:text-base">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1A5C1A] focus:ring-2 focus:ring-[#1A5C1A]/50 text-sm sm:text-base"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-[#1A5C1A] font-bold mb-2 text-sm sm:text-base">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1A5C1A] focus:ring-2 focus:ring-[#1A5C1A]/50 text-sm sm:text-base"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1A5C1A] text-white font-bold py-2.5 sm:py-3 rounded-lg hover:bg-[#0d3d0d] transition text-sm sm:text-base"
            >
              Send Message
            </button>
            {submitted && (
              <p className="text-green-600 font-bold text-sm sm:text-base">Message sent successfully!</p>
            )}
          </form>

          <div className="space-y-6 sm:space-y-8 animate-fade-in-right">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1A5C1A] mb-3 sm:mb-4">Why Contact Us?</h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[#F5C518] font-bold shrink-0">→</span>
                  <span>Learn more about our services and programs</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[#F5C518] font-bold shrink-0">→</span>
                  <span>Register your farm and get started today</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[#F5C518] font-bold shrink-0">→</span>
                  <span>Partner with us as an aggregator or service provider</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[#F5C518] font-bold shrink-0">→</span>
                  <span>Provide feedback or suggestions for improvement</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#F5C518]/20 border-2 border-[#F5C518] p-4 sm:p-5 md:p-6 rounded-lg">
              <p className="text-[#1A5C1A] font-bold text-sm sm:text-base">
                We respond to all inquiries within 24 hours. Your success is our priority!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
