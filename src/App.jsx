import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Services from './components/Services';
import Empowering from './components/Empowering';
import Software from './components/Software';
import MobileApp from './components/MobileApp';
import WebApplication from './components/WebApplication';
import AiMl from './components/AiMl';
import CrmHrm from './components/CrmHrm';
import Blog from './components/Blog';
import Product from './components/Product';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Connect from './components/Connect';
import CancellationRefundPolicy from './components/CancellationRefundPolicy';
import TermsConditions from './components/TermsConditions';
import Documentation from './components/Documentation';
import PrivacyPolicy from './components/PrivacyPolicy';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import AuthModals from './components/AuthModals';

// Home Page
function Home() {
  return (
    <>
      <Hero />
      <OurStory />
      <Services />
      <Empowering />
      <Blog />
      <Partners />
      <Contact />
    </>
  );
}

// 404 Not Found Page
function NotFound() {
  return (
    <section className="flex-1 bg-[#0B1120] text-slate-50 flex items-center justify-center px-4 py-16 sm:py-24">
      <div className="max-w-lg w-full bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 shadow-[0_20px_50px_rgba(2,6,23,0.7)] p-8 sm:p-10 text-center">
        <span className="inline-block px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-bold tracking-wider uppercase mb-3">
          404 Error
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-50 tracking-tight">
          Page Not Found
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 text-sm font-bold hover:brightness-110 transition-all shadow-[0_0_20px_rgba(14,165,233,0.28)]"
          >
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-slate-700 bg-slate-800/70 hover:border-sky-400/50 text-slate-100 text-sm font-semibold transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [modalState, setModalState] = useState({
    isOpen: false,
    mode: 'login' // 'login' | 'register'
  });

  const hashModalMode =
    location.hash === '#register'
      ? 'register'
      : location.hash === '#login'
        ? 'login'
        : null;

  const isModalOpen = hashModalMode !== null || modalState.isOpen;
  const activeModalMode = hashModalMode ?? modalState.mode;

  const handleOpenLogin = () => {
    setModalState({
      isOpen: true,
      mode: 'login'
    });
  };

  const handleOpenRegister = () => {
    setModalState({
      isOpen: true,
      mode: 'register'
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false
    }));

    if (hashModalMode !== null) {
      navigate(`${location.pathname}${location.search}`, { replace: true });
    }
  };

  // Sync route scroll position and section hashes (#services, #contact)
  useEffect(() => {
    if (hashModalMode !== null) {
      return;
    }

    if (location.hash) {
      const targetId = location.hash.slice(1);
      const timer = setTimeout(() => {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
      return () => clearTimeout(timer);
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname, location.hash, hashModalMode]);

  const handleSwitchMode = (newMode) => {
    if (hashModalMode !== null) {
      navigate(`${location.pathname}${location.search}#${newMode}`, { replace: true });
      return;
    }
    setModalState((prev) => ({
      ...prev,
      mode: newMode
    }));
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-50 flex flex-col font-sans selection:bg-sky-400 selection:text-slate-950 overflow-x-clip w-full max-w-full relative">
      {/* Navbar */}
      <Navbar
        onOpenLogin={handleOpenLogin}
        onOpenRegister={handleOpenRegister}
      />

      {/* Page Routes */}
      <main className="flex-grow w-full min-w-0 flex flex-col">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Software Page */}
          <Route path="/software" element={<Software />} />

          {/* Mobile App Solutions Page */}
          <Route path="/mobile-app" element={<MobileApp />} />

          {/* Web Application Solutions Page */}
          <Route path="/web-application" element={<WebApplication />} />

          {/* AI/ML Solutions Page */}
          <Route path="/ai-ml" element={<AiMl />} />

          {/* CRM/HRM Solutions Page */}
          <Route path="/crm-hrm" element={<CrmHrm />} />

          {/* Product Page */}
          <Route path="/product" element={<Product />} />

          {/* Connect Page - Navbar Contact */}
          <Route path="/contact" element={<Connect />} />

          {/* Cancellation & Refund Policy Page */}
          <Route path="/cancellation-refund-policy" element={<CancellationRefundPolicy />} />

          {/* Terms & Conditions Page */}
          <Route path="/terms-and-conditions" element={<TermsConditions />} />

          {/* Documentation Page */}
          <Route path="/documentation" element={<Documentation />} />

          {/* Privacy Policy Page */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* About Us Page */}
          <Route path="/about" element={<AboutUs />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Login/Register Modals */}
      <AuthModals
        isOpen={isModalOpen}
        mode={activeModalMode}
        onClose={handleCloseModal}
        onSwitchMode={handleSwitchMode}
      />
    </div>
  );
}

// Main App
export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
