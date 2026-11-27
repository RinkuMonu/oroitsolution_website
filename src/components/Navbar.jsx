import React, { useState, useEffect } from 'react';
import { LogIn, User, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { acquireScrollLock } from '../utils/scrollLock';

export default function Navbar({ onOpenLogin, onOpenRegister }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const routeKey = `${location.pathname}${location.hash}`;
  const [prevRouteKey, setPrevRouteKey] = useState(routeKey);

  if (routeKey !== prevRouteKey) {
    setPrevRouteKey(routeKey);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services', hashId: 'services' },
    { name: 'Software', href: '/software' },
    { name: 'Product', href: '/product' },
    { name: 'Contact', href: '/contact' },
  ];

  const solutionRoutes = ['/mobile-app', '/web-application', '/ai-ml', '/crm-hrm'];

  const activeTab =
    location.pathname === '/software' ? 'Software' :
      location.pathname === '/product' ? 'Product' :
        location.pathname === '/contact' ? 'Contact' :
          solutionRoutes.includes(location.pathname) || (location.pathname === '/' && location.hash === '#services') ? 'Services' :
            'Home';

  useEffect(() => {
    if (!mobileMenuOpen) return;
    return acquireScrollLock();
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (link) => {
    setMobileMenuOpen(false);
    if (link?.hashId && location.pathname === '/') {
      document.getElementById(link.hashId)?.scrollIntoView({ behavior: 'smooth' });
    } else if (link?.href === '/' && location.pathname === '/' && !location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderNavLink = (link, mobile = false) => {
    const isActive = activeTab === link.name;
    const className = mobile
      ? `px-4 py-3 rounded-xl text-sm sm:text-base font-medium transition-colors ${
          isActive
            ? 'bg-sky-500/15 text-sky-400 border border-sky-500/30 font-semibold'
            : 'text-slate-300 hover:bg-slate-800/70 hover:text-sky-300'
        }`
      : `text-sm lg:text-[15px] font-medium transition-colors relative py-1.5 ${
          isActive
            ? 'text-slate-50 font-semibold'
            : 'text-slate-400 hover:text-sky-300'
        }`;

    return (
      <Link
        key={link.name}
        to={link.href}
        onClick={() => handleNavClick(link)}
        className={className}
      >
        {link.name}
        {isActive && !mobile && (
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-sky-400 to-blue-500 rounded-full animate-fade-in shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
        )}
      </Link>
    );
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 w-full bg-[#0B1120]/90 backdrop-blur-md text-slate-50 z-50 transition-colors duration-200 border-b border-slate-800/80 shadow-[0_4px_24px_rgba(2,6,23,0.6)]">
        <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between gap-2">

          {/* Brand Logo */}
          <Link
            to="/"
            onClick={handleNavClick}
            className="flex items-center group select-none shrink-0 min-w-0 py-1"
            aria-label="Apphany Technologies Private Limited Home"
          >
            <img
              src="/apphany-logo-navbar.png"
              alt="Apphany Technologies Private Limited"
              loading="eager"
              decoding="async"
              className="h-9 min-[360px]:h-10 sm:h-12 lg:h-[50px] w-auto max-w-[155px] min-[360px]:max-w-[180px] sm:max-w-[215px] lg:max-w-[235px] object-contain transform group-hover:scale-[1.03] transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
            {navLinks.map((link) => renderNavLink(link))}
          </nav>

          {/* Right Desktop Auth Actions */}
          <div className="hidden lg:flex items-center space-x-2.5 shrink-0">
            <button
              type="button"
              onClick={onOpenLogin}
              className="flex items-center text-xs xl:text-sm font-semibold text-slate-100 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-sky-400/50 px-4 py-2 rounded-lg transition-all duration-200 tracking-wide cursor-pointer"
            >
              <LogIn className="w-4 h-4 mr-1.5 text-sky-400 stroke-[2.25]" />
              <span>Log In</span>
            </button>

            <button
              type="button"
              onClick={onOpenRegister}
              className="flex items-center text-xs xl:text-sm font-bold text-slate-950 bg-gradient-to-r from-sky-400 to-blue-600 hover:brightness-110 px-4 xl:px-5 py-2 rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <User className="w-4 h-4 mr-1.5 stroke-[2.4]" />
              <span>Register</span>
            </button>
          </div>

          {/* Tablet quick action & Hamburger for mobile/tablet */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onOpenLogin}
              className="hidden sm:inline-flex items-center text-xs font-semibold text-slate-100 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 px-3.5 py-1.5 rounded-lg transition cursor-pointer"
            >
              <LogIn className="w-3.5 h-3.5 mr-1.5 text-sky-400" />
              <span>Log In</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 text-slate-200 hover:text-sky-400 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400/40 active:scale-95 transition cursor-pointer touch-manipulation"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen
                ? <X className="w-5 h-5 sm:w-6 sm:h-6" />
                : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-x-0 bottom-0 top-16 sm:top-20 w-full z-40 bg-slate-950/75 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="w-full bg-[#0F172A] border-t border-slate-800 px-4 sm:px-6 pt-4 pb-6 space-y-4 max-h-[calc(100dvh-4rem)] sm:max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
                {navLinks.map((link) => renderNavLink(link, true))}
              </nav>

              <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLogin();
                  }}
                  className="w-full min-h-[44px] flex items-center justify-center text-sm font-semibold text-slate-100 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 active:scale-[0.99] transition cursor-pointer touch-manipulation"
                >
                  <LogIn className="w-4 h-4 mr-2 text-sky-400" />
                  Log In
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRegister();
                  }}
                  className="w-full min-h-[44px] flex items-center justify-center text-sm font-bold text-slate-950 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 shadow-[0_0_20px_rgba(14,165,233,0.3)] active:scale-[0.99] transition cursor-pointer touch-manipulation"
                >
                  <User className="w-4 h-4 mr-2" />
                  Register Now
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Spacer to reserve fixed header height in document flow */}
      <div className="h-16 sm:h-20 shrink-0" aria-hidden="true" />
    </>
  );
}
