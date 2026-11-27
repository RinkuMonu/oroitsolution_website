import React, { useState } from 'react';

export default function OurStory() {
  const [activeTab, setActiveTab] = useState('Our Vision');
  const [imgError, setImgError] = useState(false);

  const tabContent = {
    'Who We Are': [
      "We are a technology-driven software company focused on building innovative digital solutions for businesses. Our team combines technical expertise, creativity, and modern technologies to deliver reliable software products.",
      "We believe in understanding our clients' needs and transforming their ideas into meaningful digital experiences through quality development and continuous support.",
    ],
    'Our Vision': [
      'Our vision is to make technology accessible and useful for businesses of all sizes. We aim to develop innovative digital solutions that simplify business processes, improve productivity and support long-term business growth.',
      'We strive to build a trusted technology company by focusing on software quality, continuous improvement and customer satisfaction.',
    ],
    'Our Story': [
      'Our journey is driven by a passion for technology and a commitment to solving real-world business challenges. We started with a simple goal: to help businesses grow through smart and effective software solutions.',
      'With a focus on innovation, teamwork and continuous learning, we continue to explore modern technologies and build solutions that create value for our clients.',
    ],
  };

  const tabs = ['Who We Are', 'Our Vision', 'Our Story'];

  return (
    <section className="bg-[#0F172A] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-slate-800/70">
      <div className="max-w-[1400px] mx-auto px-1 sm:px-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Left Side - Image */}
          <div className="relative w-full max-w-lg lg:max-w-none mx-auto">
            <div
              className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-32 sm:h-32 opacity-30 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#38BDF8 1.5px, transparent 1.5px)',
                backgroundSize: '18px 18px',
              }}
            />

            <div className="relative z-10 w-full h-[210px] min-[360px]:h-[250px] sm:h-[350px] lg:h-[430px] rounded-2xl border border-slate-800 shadow-[0_20px_50px_rgba(2,6,23,0.65)] overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
              {!imgError ? (
                <img
                  src="https://oroitsolution.info/front/images/about/about-img1.jpg"
                  alt="Our Team Working Together"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover opacity-90"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#0B1120] via-slate-900 to-[#0B1120]">
                  <div className="w-16 h-16 rounded-2xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center mb-4 text-sky-400 shadow-[0_0_24px_rgba(14,165,233,0.2)]">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <p className="text-slate-100 font-bold text-base sm:text-lg">Apphany Technologies PVT.LTD</p>
                  <p className="text-sky-400 text-xs sm:text-sm font-medium mt-1">Enterprise Cloud, Software & AI Engineering</p>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col ml-0 lg:ml-5 w-full min-w-0">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3">
              <span className="w-6 sm:w-8 h-[2px] bg-sky-400 rounded-full" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.18em] text-sky-400 uppercase">
                OUR STORY
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-50 leading-tight sm:leading-snug mb-5 sm:mb-6">
              Our Team Comes with Deep Experience <br className="hidden sm:inline" /> and Proven
              Knowledge
            </h2>

            {/* Tabs */}
            <div className="flex items-center gap-1.5 sm:gap-2 bg-slate-900/90 border border-slate-800 p-1.5 rounded-xl mb-5 sm:mb-6 w-full overflow-x-auto no-scrollbar">
              {tabs.map((tab) => (
                <button
                  type="button"
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 min-w-[90px] sm:min-w-0 px-3 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer whitespace-nowrap text-center ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 shadow-[0_0_16px_rgba(14,165,233,0.28)]'
                      : 'bg-transparent text-slate-400 hover:text-slate-100 hover:bg-slate-800/70'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div key={activeTab} className="animate-fade-in">
              {tabContent[activeTab].map((paragraph, index) => (
                <p
                  key={index}
                  className="text-xs min-[400px]:text-sm sm:text-base text-slate-400 leading-relaxed sm:leading-7 mb-3 sm:mb-4"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
