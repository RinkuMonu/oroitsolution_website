import React from 'react';
import { ArrowUp, Heart, Shield, Mail, Globe } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#061d4e] text-white pt-16 pb-12 border-t border-blue-400/20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-blue-400/20">
          
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" stroke="#FF7A00" strokeWidth="8" strokeDasharray="180 70" strokeLinecap="round" transform="rotate(-30 50 50)" />
                <circle cx="50" cy="50" r="28" stroke="#FFA726" strokeWidth="6" strokeDasharray="120 50" strokeLinecap="round" transform="rotate(75 50 50)" />
                <circle cx="50" cy="50" r="12" fill="#FFB703" />
              </svg>
              <div className="ml-1 flex flex-col justify-center">
                <div className="flex items-baseline leading-none">
                  <span className="text-[#FF7A00] font-black text-2xl tracking-tighter">Oro</span>
                  <span className="text-[#FF9E00] font-black text-2xl tracking-tight ml-0.5">IT</span>
                </div>
                <span className="text-[7.5px] font-bold text-white/85 tracking-widest uppercase mt-0.5">
                  SOLUTION PVT. LTD.
                </span>
              </div>
            </div>

            <p className="text-sm text-blue-200/80 max-w-sm leading-relaxed">
              Empowering modern enterprises with secure, intelligent, and scalable technology platforms. Simplifying complexity to drive sustainable digital transformation.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a href="#contact" className="w-9 h-9 rounded-lg bg-blue-900/60 hover:bg-blue-600 flex items-center justify-center text-blue-200 hover:text-white transition">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#contact" className="w-9 h-9 rounded-lg bg-blue-900/60 hover:bg-blue-600 flex items-center justify-center text-blue-200 hover:text-white transition">
                <Mail className="w-4 h-4" />
              </a>
              <a href="#contact" className="w-9 h-9 rounded-lg bg-blue-900/60 hover:bg-blue-600 flex items-center justify-center text-blue-200 hover:text-white transition">
                <Shield className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-sm text-blue-200/80">
              <li><a href="#services" className="hover:text-white transition">Cloud Architecture</a></li>
              <li><a href="#services" className="hover:text-white transition">Custom SaaS Apps</a></li>
              <li><a href="#services" className="hover:text-white transition">AI & Workflows</a></li>
              <li><a href="#services" className="hover:text-white transition">Cybersecurity</a></li>
              <li><a href="#services" className="hover:text-white transition">DevOps & CI/CD</a></li>
            </ul>
          </div>

          {/* Software & Products */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Products</h4>
            <ul className="space-y-2.5 text-sm text-blue-200/80">
              <li><a href="#software" className="hover:text-white transition">Oro CRM Pro</a></li>
              <li><a href="#software" className="hover:text-white transition">Oro CloudFlow</a></li>
              <li><a href="#software" className="hover:text-white transition">Oro InsightBI</a></li>
              <li><a href="#product" className="hover:text-white transition">Enterprise Cloud OS</a></li>
              <li><a href="#product" className="hover:text-white transition">Security Shield</a></li>
            </ul>
          </div>

          {/* Quick links & Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-blue-200/80">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#contact" className="hover:text-white transition">Careers</a></li>
              <li><a href="#contact" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#contact" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-300/70">
          <p>© {new Date().getFullYear()} Oro IT Solution Pvt. Ltd. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 flex items-center text-blue-200 hover:text-white bg-blue-900/40 hover:bg-blue-800/60 px-3 py-1.5 rounded-lg border border-blue-400/20 transition cursor-pointer"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5 ml-1.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
