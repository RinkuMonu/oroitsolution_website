import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Sparkles, Cloud, CheckCircle2 } from 'lucide-react';

export default function Hero({ onGetStarted }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: "Smart SaaS",
      subtitle: "Solutions",
      description: "We build scalable, cloud-based software products that help businesses manage operations, gather insights, and enhance productivity.",
      caption: "Powerful, cloud-based solutions for modern businesses.",
      image: "/saas-card.png",
      badge: "Cloud SaaS",
      bgGradient: "from-[#021f7e] via-[#01278f] to-[#011451]"
    },
    {
      id: 1,
      title: "Cloud & DevOps",
      subtitle: "Architecture",
      description: "Enterprise-grade cloud migration, Kubernetes orchestration, and resilient multi-region infrastructure with 99.99% guaranteed uptime.",
      caption: "Scalable cloud foundation engineered for global performance.",
      badge: "Infrastructure",
      bgGradient: "from-[#0b1f66] via-[#09358a] to-[#031340]"
    },
    {
      id: 2,
      title: "AI & Workflow",
      subtitle: "Automation",
      description: "Intelligent agent systems, custom LLMs, and robotic process automation that eliminate manual busywork and accelerate decision-making.",
      caption: "Intelligent automation driving real business efficiency.",
      badge: "AI Powered",
      bgGradient: "from-[#071d73] via-[#103099] to-[#020e36]"
    }
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="home" className="relative bg-[#155cd5] text-white pt-6 pb-12 sm:pt-10 sm:pb-20 lg:pt-14 lg:pb-28 overflow-hidden">
      {/* Subtle radial ambient background glows */}
      <div className="absolute top-1/4 left-0 w-60 sm:w-96 h-60 sm:h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-[240px] sm:w-[500px] h-[240px] sm:h-[500px] bg-blue-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Subtitle & Get Started CTA */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left">
            
            {/* Main Headline */}
            <h1 className="text-2xl min-[360px]:text-3xl min-[480px]:text-4xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.18] sm:leading-[1.15] mb-3.5 sm:mb-6">
              Smart IT Solutions For <br className="hidden sm:inline" />
              Modern Businesses
            </h1>

            {/* Paragraph description */}
            <p className="text-white/90 text-xs min-[360px]:text-sm min-[480px]:text-base sm:text-[16.5px] leading-relaxed max-w-xl font-normal mb-5 sm:mb-8">
              We build secure, scalable, and intelligent technology platforms that empower businesses to streamline operations, automate workflows, and grow with confidence. Our mission is to simplify complexity, enhance efficiency, and drive digital transformation through innovation.
            </p>

            {/* GET STARTED Button and Explore Services Link */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href="#contact"
                className="bg-white text-[#155cd5] hover:text-[#0d44aa] font-bold tracking-wider px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg hover:bg-slate-100 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-xs sm:text-sm uppercase cursor-pointer text-center inline-flex items-center justify-center shrink-0"
              >
                GET STARTED
              </a>

              <a
                href="#services"
                className="inline-flex items-center text-xs sm:text-sm font-semibold text-white/90 hover:text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg hover:bg-white/10 transition-colors shrink-0"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-5 sm:pt-6 border-t border-white/15 grid grid-cols-3 gap-2 min-[400px]:gap-4 max-w-lg mb-8 lg:mb-0">
              <div>
                <p className="text-lg min-[360px]:text-xl min-[420px]:text-2xl sm:text-3xl font-extrabold text-white">99.9%</p>
                <p className="text-[10px] min-[360px]:text-[11px] min-[420px]:text-xs sm:text-sm text-blue-200 mt-0.5 truncate">Uptime SLA</p>
              </div>
              <div>
                <p className="text-lg min-[360px]:text-xl min-[420px]:text-2xl sm:text-3xl font-extrabold text-white">250+</p>
                <p className="text-[10px] min-[360px]:text-[11px] min-[420px]:text-xs sm:text-sm text-blue-200 mt-0.5 truncate">Projects Done</p>
              </div>
              <div>
                <p className="text-lg min-[360px]:text-xl min-[420px]:text-2xl sm:text-3xl font-extrabold text-white">24/7</p>
                <p className="text-[10px] min-[360px]:text-[11px] min-[420px]:text-xs sm:text-sm text-blue-200 mt-0.5 truncate">Live Support</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Card / Slider */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end mt-8 sm:mt-10 lg:mt-0 w-full">
            <div className="relative w-full max-w-[460px] sm:max-w-[540px] lg:max-w-[620px] group mx-auto lg:mr-0">
              
              {/* Outer Glowing Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/30 via-indigo-500/20 to-blue-300/30 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />

              {/* Main Card Container */}
              <div className="relative bg-[#00227f] rounded-xl overflow-hidden border border-blue-400/30 shadow-2xl transition-all duration-300">
                
                {/* When on slide 0, show the exact pixel-perfect original card graphic */}
                {currentSlide === 0 ? (
                  <div className="relative">
                    <img
                      src="/saas-card.png"
                      alt="Smart SaaS Solutions - Oro IT Solution"
                      className="w-full h-auto object-cover block select-none pointer-events-none"
                    />
                  </div>
                ) : (
                  /* Dynamic alternative slides */
                  <div className={`p-5 sm:p-8 min-h-[300px] sm:min-h-[340px] flex flex-col justify-between bg-gradient-to-br ${slides[currentSlide].bgGradient}`}>
                    <div>
                      <div className="inline-block bg-blue-500/30 border border-blue-300/30 px-3 py-1 rounded-full text-xs font-semibold text-blue-200 uppercase tracking-wider mb-3 sm:mb-4">
                        {slides[currentSlide].badge}
                      </div>
                      <h3 className="text-xl min-[420px]:text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                        {slides[currentSlide].title} <br />
                        <span className="text-blue-300">{slides[currentSlide].subtitle}</span>
                      </h3>
                      <p className="mt-2.5 sm:mt-3 text-xs min-[420px]:text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-md">
                        {slides[currentSlide].description}
                      </p>
                    </div>

                    <div className="pt-4 sm:pt-6 border-t border-blue-400/20 mt-4 sm:mt-6 flex items-center justify-between">
                      <p className="text-[11px] sm:text-sm text-blue-200/90 italic line-clamp-1 sm:line-clamp-none pr-2">
                        "{slides[currentSlide].caption}"
                      </p>
                      <a
                        href="#contact"
                        className="text-xs bg-white text-blue-900 font-bold px-3 py-1.5 rounded hover:bg-blue-50 transition shrink-0 cursor-pointer inline-block"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                )}

                {/* Left navigation chevron button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-2.5 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 z-20 cursor-pointer"
                  title="Previous slide"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Right navigation chevron button */}
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 z-20 cursor-pointer"
                  title="Next slide"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Slide indicator dots at bottom */}
                <div className="absolute bottom-2 sm:bottom-2.5 left-1/2 -translate-x-1/2 flex items-center space-x-1.5 z-20">
                  {slides.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentSlide === idx ? 'w-5 sm:w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
