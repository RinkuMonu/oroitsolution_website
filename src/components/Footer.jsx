import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, ChevronUp } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubscribe = (e) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    if (!trimmedEmail) return;
    setEmail('');
    navigate('/contact', { state: { email: trimmedEmail } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-gray-800 pt-10 sm:pt-16 pb-10 sm:pb-14 border-t border-gray-100 relative selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-12 gap-7 sm:gap-10 lg:gap-8 pb-4">

          {/* Column 1: Brand Info & Copyright */}
          <div className="min-[480px]:col-span-2 lg:col-span-4 flex flex-col justify-between space-y-6 sm:space-y-8 lg:space-y-0">
            <div>
              {/* Logo */}
              <a href="#home" className="inline-block group">
                <img
                  src="/footer-logo.png"
                  alt="ORO IT SOLUTION PVT. LTD."
                  className="h-10 sm:h-14 lg:h-16 w-auto object-contain group-hover:opacity-95 transition-opacity"
                />
              </a>

              {/* Tagline */}
              <p className="mt-3.5 sm:mt-5 text-xs sm:text-[14px] lg:text-[15px] text-gray-500 leading-relaxed max-w-sm">
                Making the world a better place through constructing elegant hierarchies.
              </p>
            </div>

            {/* Copyright */}
            <div className="text-xs sm:text-[13px] lg:text-[14px] text-gray-500 leading-relaxed pt-2 sm:pt-4">
              <p>© 2026 ORO IT.</p>
              <p className="mt-0.5">Designed and Developed by</p>
              <a
                href="#home"
                className="text-[#155cd5] font-semibold hover:underline inline-block mt-0.5"
              >
                ORO IT SOLUTION PVT. LTD.
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3 sm:mb-6">
              Solutions
            </h3>
            <ul className="space-y-2.5 sm:space-y-4 text-xs sm:text-[14px] lg:text-[15px] text-gray-500">
              <li>
                <a href="#services" className="hover:text-[#155cd5] transition-colors">
                  Mobile APP
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#155cd5] transition-colors">
                  Web Application
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#155cd5] transition-colors">
                  AI/ML
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#155cd5] transition-colors">
                  CRM / HRM
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="col-span-1 lg:col-span-3">
            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3 sm:mb-6">
              Support
            </h3>
            <ul className="space-y-2.5 sm:space-y-4 text-xs sm:text-[14px] lg:text-[15px] text-gray-500">
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#155cd5] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#155cd5] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-[#155cd5] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/documentation"
                  className="hover:text-[#155cd5] transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="hover:text-[#155cd5] transition-colors"
                >
                  Terms Condition
                </Link>
              </li>
              <li>
                <Link
                  to="/cancellation-refund-policy"
                  className="hover:text-[#155cd5] transition-colors"
                >
                  Cancellation &amp; Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Subscribe */}
          <div className="min-[480px]:col-span-2 lg:col-span-3">
            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3 sm:mb-6">
              Subscribe
            </h3>
            <p className="text-xs sm:text-[14px] lg:text-[15px] text-gray-500 mb-3 sm:mb-6 leading-relaxed">
              Subscribe to our newsletter for the latest updates
            </p>

            <form onSubmit={handleSubscribe} className="relative max-w-md">
              <div className="flex items-center w-full rounded-xl border border-gray-200 bg-white p-1 focus-within:border-[#155cd5] focus-within:ring-2 focus-within:ring-blue-100 transition shadow-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="w-full bg-transparent px-3 py-2 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#155cd5] hover:bg-blue-700 text-white p-2 sm:p-2.5 rounded-lg flex items-center justify-center shrink-0 transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>

      {/* Floating Scroll to Top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-9 h-9 sm:w-11 sm:h-11 bg-[#155cd5] hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer active:scale-95 touch-manipulation"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.5]" />
      </button>
    </footer>
  );
}