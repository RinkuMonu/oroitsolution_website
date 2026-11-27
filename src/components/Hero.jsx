import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Activity } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      tabLabel: 'Cloud CRM',
      url: 'cloud.apphany.io/analytics',
      title: 'Smart SaaS & Cloud CRM',
      description:
        'Real-time enterprise operations, automated billing & customer intelligence.',
      status: 'Live Cluster • Healthy',
      metricLabel: 'Monthly Active Throughput',
      metricValue: '+148.4%',
      bars: [35, 52, 46, 62, 74, 92],
      footerLeftTitle: 'Automated Lead Routing',
      footerLeftSub: 'Active',
      footerLeftVal: '99.98%',
      footerRightTitle: 'Multi-Region Cloud Sync',
      footerRightSub: 'Synced',
      footerRightVal: '14ms',
      caption: 'Powerful, cloud-based solutions for modern businesses.',
    },
    {
      id: 1,
      tabLabel: 'AI Workflow',
      url: 'ai.apphany.io/pipelines',
      title: 'AI & Workflow Automation',
      description:
        'Intelligent agent systems, custom LLMs, and robotic process automation that eliminate manual busywork.',
      status: 'Inference Engine • Online',
      metricLabel: 'Automated Tasks / Day',
      metricValue: '42.8K',
      bars: [42, 58, 66, 70, 84, 96],
      footerLeftTitle: 'Document Extraction',
      footerLeftSub: 'Verified',
      footerLeftVal: '99.4%',
      footerRightTitle: 'API Latency Avg',
      footerRightSub: 'Global Edge',
      footerRightVal: '28ms',
      caption: 'Intelligent automation driving real business efficiency.',
    },
    {
      id: 2,
      tabLabel: 'Security',
      url: 'shield.apphany.io/devops',
      title: 'Cloud & Security Architecture',
      description:
        'Enterprise-grade cloud migration, encrypted payments, and resilient multi-region infrastructure.',
      status: 'Zero-Trust Shield • Active',
      metricLabel: 'Threat Prevention Score',
      metricValue: '99.99%',
      bars: [60, 68, 75, 82, 90, 98],
      footerLeftTitle: 'TLS & Token Vault',
      footerLeftSub: 'Enforced',
      footerLeftVal: 'AES-256',
      footerRightTitle: 'Uptime Monitoring',
      footerRightSub: '24/7 SOC',
      footerRightVal: '99.9%',
      caption: 'Scalable cloud foundation engineered for global performance.',
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const active = slides[currentSlide];

  return (
    <section
      id="home"
      className="relative bg-[#0B1120] text-slate-50 pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 overflow-hidden border-b border-slate-800/70"
    >
      {/* Ambient Midnight & Electric Cyan radial glows */}
      <div className="absolute -top-24 -left-24 w-72 sm:w-[440px] h-72 sm:h-[440px] bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-12 -right-16 w-72 sm:w-[480px] h-72 sm:h-[480px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-semibold text-sky-400 mb-5">
              <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38BDF8]" />
              <span>Enterprise Cloud &amp; AI Engineering</span>
            </div>

            <h1 className="text-3xl min-[380px]:text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-50 tracking-tight leading-[1.12] mb-4 sm:mb-6">
              Smart IT Solutions For <br className="hidden sm:inline" />
              Modern Businesses
            </h1>

            <p className="text-slate-400 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-xl font-normal mb-6 sm:mb-8">
              We build secure, scalable, and intelligent technology platforms that empower
              businesses to streamline operations, automate workflows, and grow with confidence.
              Our mission is to simplify complexity, enhance efficiency, and drive digital
              transformation through innovation.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <a
                href="#contact"
                className="bg-gradient-to-r from-sky-400 to-blue-600 hover:brightness-110 text-slate-950 font-bold tracking-wide px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg transition-all duration-200 shadow-[0_0_24px_rgba(14,165,233,0.32)] hover:-translate-y-0.5 text-sm inline-flex items-center justify-center gap-2 shrink-0"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100 bg-slate-900/70 hover:bg-slate-800/80 border border-slate-700 hover:border-sky-400/50 px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg transition-all shrink-0"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </a>
            </div>

            {/* 3 Stat Cards matching Midnight & Cyan UI */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-lg">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-3 sm:p-4">
                <p className="text-lg sm:text-2xl lg:text-[26px] font-extrabold text-sky-400">
                  99.9%
                </p>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 truncate">Uptime SLA</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-3 sm:p-4">
                <p className="text-lg sm:text-2xl lg:text-[26px] font-extrabold text-sky-400">
                  250+
                </p>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 truncate">
                  Projects Done
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-3 sm:p-4">
                <p className="text-lg sm:text-2xl lg:text-[26px] font-extrabold text-sky-400">
                  24/7
                </p>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 truncate">
                  Live Support
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Dark Glass Analytics Dashboard Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[580px] group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400/20 via-blue-600/15 to-cyan-400/20 rounded-2xl blur-md opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative rounded-2xl bg-[#0F172A]/90 backdrop-blur-xl border border-slate-800 shadow-[0_25px_60px_rgba(2,6,23,0.8)] overflow-hidden p-4 sm:p-6">
                {/* Browser Chrome Header + Tabs */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800/90">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                    </div>
                    <span className="ml-2 text-[11px] sm:text-xs font-mono text-slate-400 truncate">
                      {active.url}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {slides.map((s, idx) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setCurrentSlide(idx)}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                          currentSlide === idx
                            ? 'bg-sky-500 text-slate-950 shadow-[0_0_12px_rgba(14,165,233,0.4)]'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/80'
                        }`}
                      >
                        {s.tabLabel}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Slide Content */}
                <div className="pt-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-50 tracking-tight">
                        {active.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
                        {active.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
                    <Activity className="w-3 h-3" />
                    <span>{active.status}</span>
                  </div>

                  {/* Chart Panel */}
                  <div className="mt-4 rounded-xl border border-slate-800 bg-[#0B1120]/80 p-4">
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="text-slate-400 font-medium">{active.metricLabel}</span>
                      <span className="font-bold text-sky-400 text-sm">{active.metricValue}</span>
                    </div>

                    <div className="flex items-end gap-2 sm:gap-3 h-24 sm:h-28 pt-2">
                      {active.bars.map((height, idx) => {
                        const isLatest = idx === active.bars.length - 1;
                        return (
                          <div
                            key={idx}
                            style={{ height: `${height}%` }}
                            className={`flex-1 rounded-t-md transition-all duration-500 ${
                              isLatest
                                ? 'bg-gradient-to-t from-sky-500 to-cyan-300 shadow-[0_0_18px_rgba(56,189,248,0.45)]'
                                : 'bg-sky-500/25 border border-sky-400/20'
                            }`}
                          />
                        );
                      })}
                    </div>
                  </div>

                  {/* Bottom Metric Mini Cards */}
                  <div className="mt-3.5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3 flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-slate-200 truncate">
                          {active.footerLeftTitle}
                        </p>
                        <p className="text-[11px] text-slate-400">{active.footerLeftSub}</p>
                      </div>
                      <span className="shrink-0 rounded-md bg-sky-500/10 border border-sky-500/25 px-2 py-0.5 text-[11px] font-bold text-sky-400">
                        {active.footerLeftVal}
                      </span>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3 flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-slate-200 truncate">
                          {active.footerRightTitle}
                        </p>
                        <p className="text-[11px] text-slate-400">{active.footerRightSub}</p>
                      </div>
                      <span className="shrink-0 rounded-md bg-sky-500/10 border border-sky-500/25 px-2 py-0.5 text-[11px] font-bold text-sky-400">
                        {active.footerRightVal}
                      </span>
                    </div>
                  </div>

                  {/* Footer caption & Slider Controls */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <p className="text-[11px] sm:text-xs text-slate-400 truncate">
                      {active.caption}
                    </p>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={handlePrev}
                        aria-label="Previous slide"
                        className="w-7 h-7 rounded-full border border-slate-700 bg-slate-900 hover:border-sky-400/60 text-slate-300 hover:text-sky-400 flex items-center justify-center transition cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      <div className="flex items-center gap-1.5">
                        {slides.map((s, idx) => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => setCurrentSlide(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                              currentSlide === idx
                                ? 'w-5 bg-sky-400'
                                : 'w-1.5 bg-slate-700 hover:bg-slate-500'
                            }`}
                          />
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next slide"
                        className="w-7 h-7 rounded-full border border-slate-700 bg-slate-900 hover:border-sky-400/60 text-slate-300 hover:text-sky-400 flex items-center justify-center transition cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
