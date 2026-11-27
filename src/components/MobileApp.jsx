import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { acquireScrollLock } from '../utils/scrollLock';
import {
  ArrowRight,
  Play,
  Rocket,
  ShieldCheck,
  Zap,
  Headphones,
  Smartphone,
  LayoutGrid,
  PenTool,
  Wrench,
  Lightbulb,
  Code2,
  Star,
  TrendingUp,
  Plus,
  X,
  CheckCircle2,
} from 'lucide-react';

const trustBadges = [
  { icon: Rocket, label: 'Scalable Performance' },
  { icon: ShieldCheck, label: 'Secure & Reliable' },
  { icon: Zap, label: 'On-Time Delivery' },
  { icon: Headphones, label: 'Dedicated Support' },
];

const appServices = [
  {
    icon: Smartphone,
    title: 'iOS & Android App Development',
    description: 'Native and cross-platform apps for maximum reach.',
  },
  {
    icon: LayoutGrid,
    title: 'Cross-Platform Apps (Flutter, React Native)',
    description: 'Build once, deploy anywhere.',
  },
  {
    icon: PenTool,
    title: 'App UI/UX Design',
    description: 'Engaging and intuitive designs.',
  },
  {
    icon: Wrench,
    title: 'App Maintenance & Support',
    description: 'Keep your app updated and running smoothly.',
  },
];

const processSteps = [
  {
    step: '1. Discover',
    icon: Lightbulb,
    description: 'Understand your goals and requirements.',
  },
  {
    step: '2. Design',
    icon: PenTool,
    description: 'Create intuitive and engaging UI/UX.',
  },
  {
    step: '3. Develop',
    icon: Code2,
    description: 'Build with modern technologies.',
  },
  {
    step: '4. Launch',
    icon: Rocket,
    description: 'Deploy and grow your app.',
  },
];

function TechLogo({ id }) {
  switch (id) {
    case 'flutter':
      return (
        <svg viewBox="0 0 48 48" className="w-9 h-9 sm:w-10 sm:h-10" fill="none" aria-hidden="true">
          <path d="M27.5 6L9.5 24l5.6 5.6L38.7 6H27.5Z" fill="#47C5FB" />
          <path d="M27.5 22.8L18 32.3l5.6 5.7 5.6-5.6 9.5-9.6H27.5Z" fill="#00B5F8" />
          <path d="M23.6 38l4.4 4.4h10.7l-9.5-9.6-5.6 5.2Z" fill="#00579B" />
          <path d="M18 32.3l5.6-5.6 5.6 5.7-5.6 5.6-5.6-5.7Z" fill="#1AB7EA" />
        </svg>
      );
    case 'react-native':
      return (
        <svg viewBox="0 0 48 48" className="w-9 h-9 sm:w-10 sm:h-10" fill="none" aria-hidden="true">
          <circle cx="24" cy="24" r="3.4" fill="#00D8FF" />
          <ellipse cx="24" cy="24" rx="17" ry="6.8" stroke="#00D8FF" strokeWidth="2.2" />
          <ellipse
            cx="24"
            cy="24"
            rx="17"
            ry="6.8"
            transform="rotate(60 24 24)"
            stroke="#00D8FF"
            strokeWidth="2.2"
          />
          <ellipse
            cx="24"
            cy="24"
            rx="17"
            ry="6.8"
            transform="rotate(120 24 24)"
            stroke="#00D8FF"
            strokeWidth="2.2"
          />
        </svg>
      );
    case 'swift':
      return (
        <svg viewBox="0 0 48 48" className="w-9 h-9 sm:w-10 sm:h-10" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="40" height="40" rx="10" fill="url(#swiftGrad)" />
          <path
            d="M34.2 29.8c1.1 1.6.7 3.7.4 4.5-.8-1.4-2.5-2.1-4.3-1.4-2.5 1-6.1 1.5-10-.2-4.6-2-7.8-5.9-9.1-9 2.4 1.9 5.6 3.1 8.5 3.1-3.3-2.9-5.8-6.6-7.1-9.9 2.5 2 6.3 4.8 9.9 6.6-1.5-2.2-3.4-5.2-4.2-7.8 3.6 3.4 8.3 7.9 11.4 12.1 1.3-2.5 1.3-5.7-.3-9 4.5 4.2 6.7 10.6 4.8 16.5.2 1.2.4 2.8 0 4.5Z"
            fill="#FFFFFF"
          />
          <defs>
            <linearGradient id="swiftGrad" x1="8" y1="6" x2="40" y2="42" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF7A2F" />
              <stop offset="1" stopColor="#EE3B24" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'kotlin':
      return (
        <svg viewBox="0 0 48 48" className="w-9 h-9 sm:w-10 sm:h-10" fill="none" aria-hidden="true">
          <path d="M8 8h16L8 25.5V8Z" fill="#0095D5" />
          <path d="M24 8L8 24.8V40L40 8H24Z" fill="url(#kotlinGrad)" />
          <path d="M8 40l16.2-16.2L40 40H8Z" fill="#0095D5" />
          <defs>
            <linearGradient id="kotlinGrad" x1="8" y1="36" x2="36" y2="8" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C757BC" />
              <stop offset="0.5" stopColor="#E44857" />
              <stop offset="1" stopColor="#FF8900" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'java':
      return (
        <svg viewBox="0 0 48 48" className="w-9 h-9 sm:w-10 sm:h-10" fill="none" aria-hidden="true">
          <path
            d="M25.5 7c2.4 2.8-2.2 5.4-1.1 8.3.8 2 3.1 2.7 2.1 5.2-2.7-1.7-4.5-3.4-3.8-6.2.5-2.1 3.3-4.2 2.8-7.3ZM20.5 11.5c1.5 1.9-1.5 3.8-.8 5.9.5 1.4 2 2 1.4 3.7-1.9-1.1-3.1-2.4-2.6-4.4.4-1.6 2.3-3.1 2-5.2Z"
            fill="#E76F00"
          />
          <path
            d="M15 24h16.5v5.8c0 3.7-3.4 6.7-8.2 6.7-4.9 0-8.3-3-8.3-6.7V24Z"
            stroke="#5382A1"
            strokeWidth="2.3"
            fill="#F4F8FB"
          />
          <path
            d="M31.5 25.5h2.2c1.8 0 3.1 1.2 3.1 2.8 0 1.6-1.3 2.8-3.1 2.8h-2.2"
            stroke="#5382A1"
            strokeWidth="2.3"
            strokeLinecap="round"
          />
          <path
            d="M12.5 39.5c4.5 1.8 16.5 1.8 21.5 0"
            stroke="#E76F00"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'firebase':
      return (
        <svg viewBox="0 0 48 48" className="w-9 h-9 sm:w-10 sm:h-10" fill="none" aria-hidden="true">
          <path d="M12 36.2L16.7 8.4c.3-1.4 2.1-1.7 2.8-.4l4.8 9-12.3 19.2Z" fill="#FFA000" />
          <path d="M12 36.2l16.7-16.8-4.4-8.4c-.6-1.1-2.1-1.1-2.6 0L12 36.2Z" fill="#F57C00" />
          <path d="M12 36.2l11.6 6.5c.9.5 2 .5 2.9 0L36 36.2l-4.2-22c-.3-1.3-1.9-1.7-2.8-.7L12 36.2Z" fill="#FFCA28" />
        </svg>
      );
    default:
      return null;
  }
}

const technologies = [
  { id: 'flutter', name: 'Flutter' },
  { id: 'react-native', name: 'React Native' },
  { id: 'swift', name: 'Swift' },
  { id: 'kotlin', name: 'Kotlin' },
  { id: 'java', name: 'Java' },
  { id: 'firebase', name: 'Firebase' },
];

function DotPattern({ className = '' }) {
  return (
    <svg
      className={`pointer-events-none select-none ${className}`}
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
    >
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 6 }).map((__, col) => (
          <circle
            key={`${row}-${col}`}
            cx={10 + col * 20}
            cy={10 + row * 20}
            r="2.2"
            fill="#38BDF8"
            fillOpacity="0.28"
          />
        ))
      )}
    </svg>
  );
}

export default function MobileApp() {
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!demoOpen) return;
    const releaseLock = acquireScrollLock();
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setDemoOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      releaseLock();
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [demoOpen]);

  return (
    <div className="w-full bg-[#0B1120] text-slate-50 overflow-x-clip">
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-[#0B1120] pt-8 pb-12 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20 border-b border-slate-800/80">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-sky-500/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 right-0 w-96 h-96 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
        <DotPattern className="hidden sm:block absolute bottom-2 right-2 opacity-60" />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 text-center lg:text-left min-w-0">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-xs sm:text-sm font-semibold text-sky-400 mb-4 sm:mb-5">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span>Our Solutions</span>
              </div>

              <h1 className="text-[28px] min-[375px]:text-3xl min-[420px]:text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.12] text-slate-50 break-words">
                Mobile App
                <span className="block text-sky-400 mt-1">Solutions</span>
              </h1>

              <p className="mt-4 sm:mt-5 text-[13px] min-[380px]:text-sm sm:text-base lg:text-[17px] text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Build powerful, scalable, and user-friendly mobile applications that turn your ideas into reality.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col min-[420px]:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="w-full min-[420px]:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-gradient-to-r from-sky-400 to-blue-600 hover:brightness-110 text-slate-950 text-sm sm:text-[15px] font-bold shadow-[0_0_24px_rgba(14,165,233,0.3)] transition-all duration-200 hover:-translate-y-0.5 touch-manipulation"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={() => setDemoOpen(true)}
                  className="w-full min-[420px]:w-auto min-h-[44px] inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:py-3.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-100 border border-slate-700 hover:border-sky-400/50 text-sm sm:text-[15px] font-semibold transition-all duration-200 cursor-pointer touch-manipulation"
                >
                  <span className="w-6 h-6 rounded-full bg-sky-500/15 text-sky-400 flex items-center justify-center">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </span>
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>

            {/* Right Phone Design */}
            <div className="lg:col-span-6 flex justify-center min-w-0">
              <div className="relative w-full max-w-[290px] min-[380px]:max-w-[330px] min-[420px]:max-w-[380px] sm:max-w-[440px] h-[255px] min-[380px]:h-[300px] min-[420px]:h-[340px] sm:h-[380px] flex items-center justify-center">
                <div className="absolute inset-3 sm:inset-6 rounded-full border border-sky-500/20" />
                <div className="absolute inset-10 sm:inset-14 rounded-full border border-dashed border-sky-400/30" />

                <div className="absolute top-4 left-1 min-[380px]:top-6 min-[380px]:left-2 min-[420px]:left-4 sm:left-6 w-10 h-10 min-[380px]:w-12 min-[380px]:h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-slate-900/90 border border-slate-700 shadow-lg flex items-center justify-center z-20">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 min-[380px]:w-6 min-[380px]:h-6 sm:w-7 sm:h-7 text-slate-100" fill="currentColor" aria-label="iOS">
                    <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43Zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45Z" />
                  </svg>
                </div>

                <div className="absolute top-8 right-1 min-[380px]:top-12 min-[380px]:right-2 min-[420px]:right-4 sm:right-6 w-10 h-10 min-[380px]:w-12 min-[380px]:h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-slate-900/90 border border-slate-700 shadow-lg flex items-center justify-center z-20">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 min-[380px]:w-6 min-[380px]:h-6 sm:w-7 sm:h-7 text-[#68B732]" fill="currentColor" aria-label="Android">
                    <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83L6.4 9.48A10.8 10.8 0 0 0 1 18h22a10.8 10.8 0 0 0-5.4-8.52ZM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
                  </svg>
                </div>

                <div className="absolute bottom-5 right-2 min-[380px]:bottom-8 min-[380px]:right-4 min-[420px]:right-6 sm:right-8 w-10 h-10 min-[380px]:w-12 min-[380px]:h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-slate-900/90 border border-slate-700 shadow-lg flex items-center justify-center text-sky-400 z-20">
                  <Code2 className="w-5 h-5 min-[380px]:w-6 min-[380px]:h-6 sm:w-7 sm:h-7 stroke-[2.2]" />
                </div>

                {/* Angled Smartphone Mockup */}
                <div className="relative z-10 w-[138px] min-[380px]:w-[160px] min-[420px]:w-[180px] sm:w-[205px] h-[238px] min-[380px]:h-[275px] min-[420px]:h-[305px] sm:h-[340px] rounded-[26px] sm:rounded-[30px] bg-gradient-to-b from-slate-800 to-slate-950 p-2 sm:p-2.5 shadow-[0_25px_55px_rgba(14,165,233,0.22)] rotate-[11deg] border-[3px] border-sky-400/40">
                  <div className="w-12 sm:w-16 h-3 sm:h-3.5 bg-slate-950 rounded-full mx-auto mb-1 sm:mb-1.5" />
                  <div className="w-full h-[calc(100%-16px)] sm:h-[calc(100%-20px)] rounded-[18px] sm:rounded-[22px] bg-gradient-to-b from-[#0B1120] via-[#0F172A] to-[#0B1120] flex flex-col items-center justify-center px-2.5 sm:px-3 text-center">
                    <img
                      src="/apphany-logo-navbar.png"
                      alt="Apphany Technologies PVT.LTD"
                      className="w-28 min-[380px]:w-32 sm:w-36 h-auto object-contain mb-1"
                    />
                    <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-slate-800 w-full text-[8px] min-[380px]:text-[9px] sm:text-[10px] font-semibold text-sky-400">
                      Innovate &bull; Build &bull; Grow
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. WHY CHOOSE APPHANY TECHNOLOGIES SECTION ================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#0F172A] border-b border-slate-800/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 text-center lg:text-left min-w-0">
              <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-sky-400 mb-2.5">
                <span className="w-6 h-[2px] bg-sky-400 rounded-full" />
                <span>Why Choose Apphany Technologies?</span>
              </div>

              <h2 className="text-xl min-[380px]:text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-50 tracking-tight leading-snug break-words">
                Smart Mobile Solutions for a Smarter Tomorrow
              </h2>

              <p className="mt-3 sm:mt-4 text-[13px] min-[380px]:text-sm sm:text-[15px] text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                We specialize in developing high-performance mobile applications for iOS and Android, designed to
                deliver seamless user experiences and drive business growth.
              </p>

              <div className="mt-6 sm:mt-8 bg-slate-900/70 border border-slate-800 rounded-2xl p-3 sm:p-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                {trustBadges.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex flex-col items-center text-center bg-slate-800/70 rounded-xl px-2 py-3 sm:px-2.5 sm:py-3.5 border border-slate-700/80 min-w-0"
                    >
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-sky-500/15 text-sky-400 flex items-center justify-center mb-2 shrink-0">
                        <Icon className="w-4 h-4 stroke-[2.2]" />
                      </div>
                      <span className="text-[11px] sm:text-xs font-semibold text-slate-200 leading-snug break-words">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-6 min-w-0">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-[#0B1120] border border-slate-800 shadow-[0_18px_45px_rgba(2,6,23,0.7)] min-h-[220px] min-[380px]:min-h-[260px] sm:min-h-[320px] flex items-center justify-center">
                <img
                  src="/mobile-showcase.jpg"
                  alt="Smart mobile app experience showcase"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1120]/70 via-transparent to-sky-500/10" />

                <div className="relative z-10 w-full h-full min-h-[220px] min-[380px]:min-h-[260px] sm:min-h-[320px] p-3 min-[380px]:p-4 sm:p-6 flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-2 min-[380px]:gap-3">
                    <div className="bg-sky-500/90 backdrop-blur-md text-slate-950 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-lg max-w-[140px] sm:max-w-[190px]">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-slate-950/15 flex items-center justify-center shrink-0">
                          <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950 fill-slate-950" />
                        </span>
                        <span className="text-[11px] min-[380px]:text-xs sm:text-sm font-extrabold leading-tight">
                          Better Experience
                        </span>
                      </div>
                    </div>

                    <div className="bg-slate-900/90 backdrop-blur-md text-slate-100 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-lg border border-slate-700 max-w-[130px] sm:max-w-[180px] mt-3 sm:mt-6">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-sky-500/15 text-sky-400 flex items-center justify-center shrink-0">
                          <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </span>
                        <span className="text-[11px] min-[380px]:text-xs sm:text-sm font-bold leading-tight">
                          Business Growth
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="self-end bg-slate-900/90 backdrop-blur-md text-slate-100 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-lg border border-slate-700 max-w-[155px] sm:max-w-[205px]">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-sky-500/15 text-sky-400 flex items-center justify-center shrink-0">
                        <Lightbulb className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </span>
                      <span className="text-[11px] min-[380px]:text-xs sm:text-sm font-bold leading-tight">
                        Innovative Solutions
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. END-TO-END SERVICES SECTION ================= */}
      <section id="app-services" className="relative py-12 sm:py-16 lg:py-20 bg-[#0B1120] overflow-hidden border-b border-slate-800/80">
        <DotPattern className="hidden md:block absolute top-10 left-4 opacity-50" />
        <DotPattern className="hidden md:block absolute bottom-6 right-4 opacity-50" />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-sky-400 mb-2">
              <span className="w-5 h-[2px] bg-sky-400 rounded-full" />
              <span>Our Mobile App Services</span>
              <span className="w-5 h-[2px] bg-sky-400 rounded-full" />
            </div>

            <h2 className="text-xl min-[380px]:text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-50 tracking-tight leading-snug">
              End-to-End Mobile App Development Services
            </h2>

            <p className="mt-2.5 text-xs sm:text-sm lg:text-[15px] text-slate-400 leading-relaxed">
              From concept to deployment, we build feature-rich, scalable, and innovative mobile applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {appServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group bg-slate-900/70 rounded-2xl p-5 sm:p-6 border border-slate-800 hover:border-sky-400/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-w-0"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-slate-950 flex items-center justify-center shadow-sm mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-[17px] font-bold text-slate-50 leading-snug mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-5 flex justify-end">
                    <Link
                      to="/contact"
                      state={{ subject: service.title }}
                      aria-label={`Inquire about ${service.title}`}
                      className="w-9 h-9 rounded-full bg-sky-500/15 group-hover:bg-sky-400 text-sky-400 group-hover:text-slate-950 flex items-center justify-center transition-colors touch-manipulation"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 4. TECHNOLOGIES WE USE SECTION ================= */}
      <section id="technologies" className="py-12 sm:py-16 lg:py-20 bg-[#0F172A] border-b border-slate-800/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 text-center lg:text-left min-w-0">
              <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-sky-400 mb-2.5">
                <span className="w-6 h-[2px] bg-sky-400 rounded-full" />
                <span>Technologies We Use</span>
              </div>

              <h2 className="text-xl min-[380px]:text-2xl sm:text-3xl lg:text-[32px] xl:text-[34px] font-extrabold text-slate-50 tracking-tight leading-snug break-words">
                Modern Technologies for Powerful Apps
              </h2>

              <p className="mt-3 text-[13px] min-[380px]:text-sm sm:text-[15px] text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0">
                We leverage the latest technologies to build innovative and scalable mobile applications.
              </p>

              <div className="mt-5 sm:mt-6">
                <a
                  href="#process"
                  className="w-full min-[420px]:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-sky-400 to-blue-600 hover:brightness-110 text-slate-950 text-sm font-bold shadow-[0_0_20px_rgba(14,165,233,0.28)] transition-all duration-200 hover:-translate-y-0.5 touch-manipulation"
                >
                  <span>Our Process</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-8 min-w-0">
              <div className="grid grid-cols-2 min-[460px]:grid-cols-3 md:grid-cols-6 lg:grid-cols-3 xl:grid-cols-6 gap-2.5 sm:gap-3.5">
                {technologies.map((tech) => (
                  <div
                    key={tech.id}
                    className="bg-slate-900/75 rounded-2xl border border-slate-800 hover:border-sky-400/50 hover:-translate-y-1 transition-all duration-200 px-2.5 sm:px-3 py-4 sm:py-5 flex flex-col items-center justify-center text-center min-w-0"
                  >
                    <div className="mb-2.5 sm:mb-3 flex items-center justify-center">
                      <TechLogo id={tech.id} />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-slate-200 leading-tight break-words">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. DEVELOPMENT PROCESS SECTION ================= */}
      <section id="process" className="py-12 sm:py-16 lg:py-20 bg-[#0B1120] border-b border-slate-800/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-sky-400 mb-2">
              <span className="w-5 h-[2px] bg-sky-400 rounded-full" />
              <span>Our Development Process</span>
              <span className="w-5 h-[2px] bg-sky-400 rounded-full" />
            </div>

            <h2 className="text-xl min-[380px]:text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-50 tracking-tight">
              From Idea to App Success
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            <div className="hidden lg:flex lg:col-span-3 items-center justify-center">
              <div className="relative w-48 h-40">
                <div className="absolute left-0 top-6 w-28 h-28 rounded-2xl bg-sky-500/15 -skew-y-12 shadow-md border border-sky-400/20" />
                <div className="absolute left-6 top-4 w-28 h-28 rounded-2xl bg-sky-500/25 -skew-y-12 shadow-lg border border-sky-400/30" />
                <div className="absolute left-12 top-2 w-28 h-28 rounded-2xl bg-slate-900 -skew-y-12 shadow-xl border border-sky-400/50 flex items-center justify-center text-sky-400">
                  <Code2 className="w-9 h-9 stroke-[2.2]" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-9 grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {processSteps.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="relative flex flex-col items-center text-center bg-slate-900/70 rounded-2xl p-5 border border-slate-800 min-w-0"
                  >
                    {idx < processSteps.length - 1 && (
                      <span
                        className="hidden lg:flex absolute top-7 -right-3 text-sky-400 items-center justify-center"
                        aria-hidden="true"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    )}

                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center mb-3.5">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-50 mb-1">
                      {item.step}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed max-w-[200px]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. BOTTOM CTA BANNER ================= */}
      <section className="py-10 sm:py-14 bg-[#0F172A] border-b border-slate-800/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-[#0f2442] to-slate-900 border border-sky-500/30 px-6 py-8 sm:px-10 sm:py-10 shadow-[0_20px_50px_rgba(2,6,23,0.7)]">
            <div className="absolute -right-10 -top-10 w-52 h-52 rounded-full bg-sky-500/15 blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="max-w-2xl min-w-0">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-[11px] sm:text-xs font-semibold text-sky-400 mb-3">
                  <Plus className="w-3 h-3" />
                  <span>Let&apos;s Build Together</span>
                </div>

                <h2 className="text-xl sm:text-3xl font-extrabold text-slate-50 tracking-tight leading-snug break-words">
                  Turn Your Idea into a Powerful Mobile App
                </h2>

                <p className="mt-1.5 text-xs sm:text-sm lg:text-[15px] text-slate-400 leading-relaxed">
                  Get in touch with our team and start your mobile app journey today.
                </p>
              </div>

              <Link
                to="/contact"
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-to-r from-sky-400 to-blue-600 hover:brightness-110 text-slate-950 text-sm sm:text-[15px] font-bold shadow-[0_0_24px_rgba(14,165,233,0.3)] transition-all duration-200 hover:-translate-y-0.5 shrink-0 touch-manipulation"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WATCH DEMO MODAL ================= */}
      {demoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile App Showcase"
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
          onClick={() => setDemoOpen(false)}
        >
          <div
            className="w-full max-w-lg max-h-[90dvh] overflow-y-auto overscroll-contain bg-[#0F172A] text-slate-50 rounded-2xl shadow-2xl border border-slate-800 p-5 sm:p-7 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setDemoOpen(false)}
              aria-label="Close demo preview"
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold mb-3">
              Mobile App Showcase
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-50">
              How Apphany Technologies Builds Your Mobile App
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              From UI/UX wireframes to App Store &amp; Play Store launch, we deliver production-ready mobile apps
              engineered for speed, security, and scale.
            </p>

            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-300">
              {[
                'Native iOS (Swift) & Android (Kotlin/Java) or Cross-Platform (Flutter & React Native)',
                'Real-time cloud backend, analytics & push notifications with Firebase',
                'Interactive prototyping, QA testing & post-launch maintenance support',
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-end">
              <button
                type="button"
                onClick={() => setDemoOpen(false)}
                className="px-5 py-2.5 rounded-lg border border-slate-700 bg-slate-800/80 text-slate-200 text-xs sm:text-sm font-semibold hover:bg-slate-800 cursor-pointer"
              >
                Close
              </button>
              <Link
                to="/contact"
                onClick={() => setDemoOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 text-xs sm:text-sm font-bold"
              >
                <span>Request Live Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
