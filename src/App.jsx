
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
import Footer from './components/Footer';
import AuthModals from './components/AuthModals';

// Home Page
function Home({ handleGetStarted }) {
  return (
    <>
      <Hero
        onGetStarted={() => handleGetStarted('Smart SaaS Solutions')}
      />

      <OurStory />

      <Services
        onSelectService={(service) => handleGetStarted(service)}
      />

      <Empowering />

      <Blog />

      <Partners />

      {/* Old Contact Section - Only on Home Page */}
      <Contact />
    </>
  );
}

// Main App
export default function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    mode: 'login',
    defaultService: 'Smart SaaS Solutions'
  });

  const handleOpenLogin = () => {
    setModalState({
      isOpen: true,
      mode: 'login',
      defaultService: ''
    });
  };

  const handleOpenRegister = () => {
    setModalState({
      isOpen: true,
      mode: 'register',
      defaultService: ''
    });
  };

  const handleGetStarted = (serviceName) => {
    setModalState({
      isOpen: true,
      mode: 'get_started',
      defaultService:
        typeof serviceName === 'string'
          ? serviceName
          : 'Smart SaaS Solutions'
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
      history.pushState(
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
        setModalState({
          isOpen: true,
          mode: 'register',
          defaultService: ''
        });
      } else if (window.location.hash === '#login') {
        setModalState({
          isOpen: true,
          mode: 'login',
          defaultService: ''
        });
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
      <div className="min-h-screen bg-[#155cd5] text-white flex flex-col font-sans selection:bg-white selection:text-[#155cd5]">

        {/* Navbar */}
        <Navbar
          onOpenLogin={handleOpenLogin}
          onOpenRegister={handleOpenRegister}
        />

        {/* Page Routes */}
        <main className="flex-grow">
          <Routes>

            {/* Home Page */}
            <Route
              path="/"
              element={
                <Home handleGetStarted={handleGetStarted} />
              }
            />

            {/* Software Page */}
            <Route
              path="/software"
              element={
                <Software onExplore={handleGetStarted} />
              }
            />

            {/* Product Page */}
            <Route
              path="/product"
              element={
                <Product
                  onGetStarted={() => handleGetStarted('Enterprise Cloud OS')}
                />
              }
            />

            {/* Connect Page - Navbar Contact */}
            <Route
              path="/contact"
              element={<Connect />}
            />

          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Login/Register Modals */}
        <AuthModals
          isOpen={modalState.isOpen}
          mode={modalState.mode}
          defaultService={modalState.defaultService}
          onClose={handleCloseModal}
          onSwitchMode={handleSwitchMode}
        />

      </div>
    </BrowserRouter>
  );
}
