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
    <footer className="bg-[#0B1120] text-slate-300 pt-12 sm:pt-14 lg:pt-16 pb-16 sm:pb-14 border-t border-slate-800/90 relative selection:bg-sky-400 selection:text-slate-950 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 pb-4">
          {/* Column 1: Brand Info & Copyright */}
          <div className="min-[480px]:col-span-2 lg:col-span-4 flex flex-col justify-between space-y-6 sm:space-y-8 lg:space-y-0 min-w-0">
            <div>
              <Link to="/" onClick={scrollToTop} className="inline-block max-w-full group">
                <img
                  src="/apphany-logo-navbar.png"
                  alt="Apphany Technologies Private Limited"
                  className="h-11 min-[360px]:h-12 sm:h-14 lg:h-15 w-auto max-w-full object-contain group-hover:opacity-95 transition-opacity"
                />
              </Link>

              <p className="mt-4 text-xs sm:text-[14px] text-slate-400 leading-relaxed max-w-sm">
                Making the world a better place through constructing elegant hierarchies.
              </p>

              <div className="mt-4 text-xs sm:text-[13px] text-slate-400 leading-relaxed max-w-sm space-y-1.5">
                <p>
                  Office No. 506, 5th Floor, Chordia&apos;s Kosmos (A Block), Plot No. E-5, Dr.
                  Rajendra Prasad Nagar E, Village Badarwas, Jaipur, Rajasthan – 302019
                </p>
                <p>
                  Email:{' '}
                  <a
                    href="mailto:support@apphany.in"
                    className="text-sky-400 font-medium hover:underline"
                  >
                    support@apphany.in
                  </a>
                </p>
              </div>
            </div>

            <div className="text-xs sm:text-[13px] text-slate-400 leading-relaxed pt-2 sm:pt-4">
              <p>© 2026 Apphany Technologies PVT.LTD.</p>
              <p className="mt-0.5">Designed and Developed by</p>
              <Link
                to="/"
                onClick={scrollToTop}
                className="text-sky-400 font-semibold hover:underline inline-block mt-0.5"
              >
                Apphany Technologies PVT.LTD
              </Link>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="col-span-1 lg:col-span-2 min-w-0">
            <h3 className="text-sm sm:text-base font-bold text-slate-50 mb-4 sm:mb-6">
              Solutions
            </h3>
            <ul className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-[14px] text-slate-400">
              <li>
                <Link
                  to="/mobile-app"
                  className="inline-block py-0.5 hover:text-sky-400 transition-colors"
                >
                  Mobile APP
                </Link>
              </li>
              <li>
                <Link
                  to="/web-application"
                  className="inline-block py-0.5 hover:text-sky-400 transition-colors"
                >
                  Web Application
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-ml"
                  className="inline-block py-0.5 hover:text-sky-400 transition-colors"
                >
                  AI / ML
                </Link>
              </li>
              <li>
                <Link
                  to="/crm-hrm"
                  className="inline-block py-0.5 hover:text-sky-400 transition-colors"
                >
                  CRM / HRM
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="col-span-1 lg:col-span-3 min-w-0">
            <h3 className="text-sm sm:text-base font-bold text-slate-50 mb-4 sm:mb-6">
              Support
            </h3>
            <ul className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-[14px] text-slate-400">
              <li>
                <Link
                  to="/about"
                  className="inline-block py-0.5 hover:text-sky-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="inline-block py-0.5 hover:text-sky-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="inline-block py-0.5 hover:text-sky-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/documentation"
                  className="inline-block py-0.5 hover:text-sky-400 transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="inline-block py-0.5 hover:text-sky-400 transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/cancellation-refund-policy"
                  className="inline-block py-0.5 hover:text-sky-400 transition-colors"
                >
                  Cancellation &amp; Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Subscribe */}
          <div className="min-[480px]:col-span-2 lg:col-span-3 min-w-0">
            <h3 className="text-sm sm:text-base font-bold text-slate-50 mb-4 sm:mb-6">
              Subscribe
            </h3>
            <p className="text-xs sm:text-[14px] text-slate-400 mb-4 sm:mb-6 leading-relaxed">
              Subscribe to our newsletter for the latest updates
            </p>

            <form onSubmit={handleSubscribe} className="relative max-w-md">
              <div className="flex items-center w-full rounded-xl border border-slate-700 bg-slate-900/90 p-1 focus-within:border-sky-400 focus-within:ring-2 focus-within:ring-sky-400/20 transition shadow-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="w-full min-w-0 bg-transparent px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-sky-400 to-blue-600 hover:brightness-110 text-slate-950 p-2.5 rounded-lg flex items-center justify-center shrink-0 transition-all cursor-pointer touch-manipulation"
                  aria-label="Subscribe"
                >
                  <Mail className="w-4 h-4 stroke-[2.25]" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top button */}
      <button
        type="button"
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 h-10 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 hover:brightness-110 text-slate-950 shadow-[0_0_20px_rgba(14,165,233,0.35)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 z-40 cursor-pointer touch-manipulation"
        aria-label="Scroll to top"
        title="Back to Top"
      >
        <ChevronUp className="w-5 h-5 stroke-[2.5]" />
      </button>
    </footer>
  );
}
