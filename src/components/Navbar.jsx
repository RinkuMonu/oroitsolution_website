import React, { useState, useEffect } from 'react';
import { LogIn, User, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenLogin, onOpenRegister }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Software', href: '#software' },
    { name: 'Product', href: '#product' },
    { name: 'Contact', href: '#contact' },
  ];

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (linkName) => {
    setActiveTab(linkName);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-[#155cd5] text-white sticky top-0 z-50 transition-all duration-200 shadow-sm border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo matching the original image */}
        <a 
          href="#home" 
          onClick={() => setActiveTab('Home')}
          className="flex items-center gap-2 group select-none shrink-0 min-w-0"
        >
          <div className="flex items-center">
            {/* Custom SVG logo */}
            <div className="relative flex items-center shrink-0">
              <svg width="34" height="34" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-11 sm:h-11 transform group-hover:scale-105 transition-transform duration-300">
                {/* Outer dynamic orange swoosh circle */}
                <circle cx="50" cy="50" r="40" stroke="#FF7A00" strokeWidth="8" strokeDasharray="180 70" strokeLinecap="round" transform="rotate(-30 50 50)" />
                {/* Secondary inner curve */}
                <circle cx="50" cy="50" r="28" stroke="#FFA726" strokeWidth="6" strokeDasharray="120 50" strokeLinecap="round" transform="rotate(75 50 50)" />
                {/* Bright yellow dot/spark */}
                <circle cx="50" cy="50" r="12" fill="#FFB703" />
              </svg>
              <div className="ml-1 sm:ml-1.5 flex flex-col justify-center">
                <div className="flex items-baseline leading-none">
                  <span className="text-[#FF7A00] font-black text-lg min-[360px]:text-xl sm:text-2xl tracking-tighter">Oro</span>
                  <span className="text-[#FF9E00] font-black text-lg min-[360px]:text-xl sm:text-2xl tracking-tight ml-0.5">IT</span>
                </div>
                <span className="text-[5.5px] min-[360px]:text-[6.5px] sm:text-[7.5px] font-bold text-white/85 tracking-widest uppercase mt-0.5 whitespace-nowrap">
                  SOLUTION PVT. LTD.
                </span>
              </div>
            </div>
          </div>
        </a>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveTab(link.name)}
              className={`text-sm lg:text-[15px] font-medium transition-colors relative py-1 ${
                activeTab === link.name
                  ? 'text-white font-semibold'
                  : 'text-white/85 hover:text-white'
              }`}
            >
              {link.name}
              {activeTab === link.name && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white/70 rounded-full animate-fade-in" />
              )}
            </a>
          ))}
        </nav>

        {/* Right Desktop Auth Actions */}
        <div className="hidden lg:flex items-center space-x-2.5 xl:space-x-3 shrink-0">
          {/* LOG IN Button */}
          <button
            onClick={onOpenLogin}
            className="flex items-center text-xs xl:text-sm font-semibold text-white hover:text-white/80 transition-colors px-3 py-1.5 tracking-wide cursor-pointer"
          >
            <LogIn className="w-4 h-4 mr-1.5 stroke-[2.5]" />
            <span>LOG IN</span>
          </button>

          {/* Separator || */}
          <span className="text-white/40 font-mono text-sm select-none tracking-tighter">||</span>

          {/* REGISTER Button */}
          <button
            onClick={onOpenRegister}
            className="flex items-center text-xs xl:text-sm font-semibold text-white bg-[#1a66e5] hover:bg-[#2072f5] border border-white/20 px-4 xl:px-5 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <User className="w-4 h-4 mr-1.5 stroke-[2.5]" />
            <span>REGISTER</span>
          </button>
        </div>

        {/* Tablet quick action & Hamburger for mobile/tablet */}
        <div className="flex lg:hidden items-center gap-1.5 sm:gap-3">
          <button
            onClick={onOpenLogin}
            className="hidden sm:inline-flex items-center text-xs font-semibold text-white bg-blue-600/70 hover:bg-blue-600 border border-white/20 px-3 py-1.5 rounded-full transition cursor-pointer"
          >
            <LogIn className="w-3.5 h-3.5 mr-1" />
            <span>Login</span>
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-blue-700/60 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-95 transition"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer & Backdrop */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 sm:top-20 z-40 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="bg-[#114ebd] border-t border-blue-400/20 px-4 sm:px-6 pt-4 pb-8 space-y-4 max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.name)}
                  className={`px-4 py-3 rounded-xl text-sm sm:text-base font-medium transition-colors ${
                    activeTab === link.name ? 'bg-blue-600 text-white shadow-sm font-semibold' : 'text-blue-100 hover:bg-blue-700/50'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-blue-400/20 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full flex items-center justify-center text-sm font-semibold text-white py-3 rounded-xl bg-blue-600/70 hover:bg-blue-600 border border-white/10 active:scale-[0.99] transition cursor-pointer"
              >
                <LogIn className="w-4 h-4 mr-2" />
                LOG IN
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full flex items-center justify-center text-sm font-semibold text-white py-3 rounded-xl bg-[#ff9e00] hover:bg-[#ff8f00] text-gray-900 shadow-md font-bold active:scale-[0.99] transition cursor-pointer"
              >
                <User className="w-4 h-4 mr-2" />
                REGISTER NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
