import React, { useState, useEffect } from 'react';
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
import Footer from './components/Footer';
import AuthModals from './components/AuthModals';

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
    setModalState((prev) => ({ ...prev, isOpen: false }));
    if (window.location.hash === '#register' || window.location.hash === '#login') {
      history.pushState(null, '', window.location.pathname + window.location.search);
    }
  };

  // Support direct URL hash navigation like #register or #login
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
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleSwitchMode = (newMode) => {
    setModalState((prev) => ({ ...prev, mode: newMode }));
  };

  return (
    <div className="min-h-screen bg-[#155cd5] text-white flex flex-col font-sans selection:bg-white selection:text-[#155cd5] overflow-x-hidden w-full max-w-full relative">
      {/* Top Navbar */}
      <Navbar
        onOpenLogin={handleOpenLogin}
        onOpenRegister={handleOpenRegister}
      />

      {/* Main Hero Section matching exact screenshot */}
      <main className="flex-grow">
        <Hero />

        {/* Our Story Section */}
        <OurStory />

        {/* Services Section */}
        <Services />

        {/* Empowering Banner Section */}
        <Empowering />

        {/* Software Section */}
        <Software />

        {/* Blog Insights Section */}
        <Blog />

        {/* Product Section */}
        <Product />

        {/* Trusted Partners Section */}
        <Partners />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Auth Modals */}
      <AuthModals
        isOpen={modalState.isOpen}
        mode={modalState.mode}
        onClose={handleCloseModal}
        onSwitchMode={handleSwitchMode}
      />
    </div>
  );
}
