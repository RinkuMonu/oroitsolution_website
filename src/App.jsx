import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Services from './components/Services';
import Empowering from './components/Empowering';
import Software from './components/Software';
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

// Scroll manager for route changes and section hash links
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash === '#login' || hash === '#register') return;

    if (hash) {
      const targetId = hash.slice(1);
      const scrollToTarget = () => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const frame = requestAnimationFrame(scrollToTarget);
      return () => cancelAnimationFrame(frame);
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}

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

// Main App
export default function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    mode: 'login' // 'login' | 'register'
  });

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

    if (
      window.location.hash === '#register' ||
      window.location.hash === '#login'
    ) {
      history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search
      );
    }
  };

  // Login/Register Hash Support
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#register') {
        setModalState({ isOpen: true, mode: 'register' });
      } else if (window.location.hash === '#login') {
        setModalState({ isOpen: true, mode: 'login' });
      }
    };

    checkHash();

    window.addEventListener('hashchange', checkHash);

    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);

  const handleSwitchMode = (newMode) => {
    setModalState((prev) => ({
      ...prev,
      mode: newMode
    }));
  };

  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="min-h-screen bg-[#155cd5] text-white flex flex-col font-sans selection:bg-white selection:text-[#155cd5] overflow-x-clip w-full max-w-full relative">
        {/* Navbar */}
        <Navbar
          onOpenLogin={handleOpenLogin}
          onOpenRegister={handleOpenRegister}
        />

        {/* Page Routes */}
        <main className="flex-grow w-full min-w-0">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* Software Page */}
            <Route path="/software" element={<Software />} />

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

            {/* Fallback for unknown routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Login/Register Modals */}
        <AuthModals
          isOpen={modalState.isOpen}
          mode={modalState.mode}
          onClose={handleCloseModal}
          onSwitchMode={handleSwitchMode}
        />
      </div>
    </BrowserRouter>
  );
}
