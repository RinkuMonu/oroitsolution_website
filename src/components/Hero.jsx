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
    <section id="home" className="relative bg-[#155cd5] text-white pt-6 pb-20 lg:pt-12 lg:pb-28 overflow-hidden">
      {/* Subtle radial ambient background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-blue-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Subtitle & Get Started CTA */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.12] mb-6">
              Smart IT Solutions For <br className="hidden sm:inline" />
              Modern Businesses
            </h1>

            {/* Paragraph description matching exact wording */}
            <p className="text-white/90 text-base sm:text-[16.5px] leading-[1.65] max-w-xl font-normal mb-9">
              We build secure, scalable, and intelligent technology platforms that empower businesses to streamline operations, automate workflows, and grow with confidence. Our mission is to simplify complexity, enhance efficiency, and drive digital transformation through innovation.
            </p>

            {/* GET STARTED Button matching exact styling */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onGetStarted}
                className="bg-white text-[#155cd5] hover:text-[#0d44aa] font-bold tracking-wider px-8 py-3.5 rounded-md hover:bg-slate-100 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base uppercase cursor-pointer"
              >
                GET STARTED
              </button>

              <a
                href="#services"
                className="inline-flex items-center text-sm font-semibold text-white/90 hover:text-white px-5 py-3.5 rounded-md hover:bg-white/10 transition-colors"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">99.9%</p>
                <p className="text-xs sm:text-sm text-blue-200 mt-0.5">Uptime SLA</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">250+</p>
                <p className="text-xs sm:text-sm text-blue-200 mt-0.5">Projects Delivered</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">24/7</p>
                <p className="text-xs sm:text-sm text-blue-200 mt-0.5">Expert Support</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Card / Slider */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[620px] group">
              
              {/* Outer Glowing Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/30 via-indigo-500/20 to-blue-300/30 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />

              {/* Main Card Container */}
              <div className="relative bg-[#00227f] rounded-xl overflow-hidden border border-blue-400/30 shadow-2xl transition-all duration-300">
                
                {/* When on slide 0, show the exact pixel-perfect original card graphic or interactive overlay */}
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
                  <div className={`p-6 sm:p-8 min-h-[340px] flex flex-col justify-between bg-gradient-to-br ${slides[currentSlide].bgGradient}`}>
                    <div>
                      <div className="inline-block bg-blue-500/30 border border-blue-300/30 px-3 py-1 rounded-full text-xs font-semibold text-blue-200 uppercase tracking-wider mb-4">
                        {slides[currentSlide].badge}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                        {slides[currentSlide].title} <br />
                        <span className="text-blue-300">{slides[currentSlide].subtitle}</span>
                      </h3>
                      <p className="mt-3 text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-md">
                        {slides[currentSlide].description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-blue-400/20 mt-6 flex items-center justify-between">
                      <p className="text-xs sm:text-sm text-blue-200/90 italic">
                        "{slides[currentSlide].caption}"
                      </p>
                      <button
                        onClick={onGetStarted}
                        className="text-xs bg-white text-blue-900 font-bold px-3 py-1.5 rounded hover:bg-blue-50 transition"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                )}

                {/* Left navigation chevron button matching the original image `<` */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 z-20 cursor-pointer"
                  title="Previous slide"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right navigation chevron button */}
                <button
                  onClick={handleNext}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 z-20 cursor-pointer"
                  title="Next slide"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Slide indicator dots at bottom */}
                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center space-x-1.5 z-20">
                  {slides.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentSlide === idx ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
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
