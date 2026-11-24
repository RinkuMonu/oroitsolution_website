import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Software from './components/Software';
import Product from './components/Product';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuthModals from './components/AuthModals';
import OurStory from './components/OurStory';
import Blog from './components/Blog';
import Empowering from './components/Empowering';
 

export default function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    mode: 'login', // 'login' | 'register' | 'get_started'
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
      defaultService: typeof serviceName === 'string' ? serviceName : 'Smart SaaS Solutions'
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleSwitchMode = (newMode) => {
    setModalState((prev) => ({ ...prev, mode: newMode }));
  };

  return (
    <div className="min-h-screen bg-[#155cd5] text-white flex flex-col font-sans selection:bg-white selection:text-[#155cd5]">
      {/* Top Navbar */}
      <Navbar 
        onOpenLogin={handleOpenLogin}
        onOpenRegister={handleOpenRegister}
      />

      {/* Main Hero Section matching exact screenshot */}
      <main className="flex-grow">
        <Hero 
          onGetStarted={() => handleGetStarted('Smart SaaS Solutions')}
        />
        <OurStory/>
        {/* Services Section */}
        <Services 
          onSelectService={(service) => handleGetStarted(service)}
        />
        <Empowering/>

        {/* Software Section */}
        <Software 
          onExplore={(software) => handleGetStarted(software)}
        />
        
        <Blog/>

        {/* Product Section */}
        <Product 
          onGetStarted={() => handleGetStarted('Enterprise Cloud OS')}
        />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Auth & Consultation Modals */}
      <AuthModals
        isOpen={modalState.isOpen}
        mode={modalState.mode}
        defaultService={modalState.defaultService}
        onClose={handleCloseModal}
        onSwitchMode={handleSwitchMode}
      />
    </div>
  );
}
