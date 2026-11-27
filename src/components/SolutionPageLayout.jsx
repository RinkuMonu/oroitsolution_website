import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, X, CheckCircle2 } from 'lucide-react';
import { acquireScrollLock } from '../utils/scrollLock';

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

/** Shared responsive page layout for Web Application, AI/ML, and CRM/HRM solution pages. */
export default function SolutionPageLayout({
  hero,
  whyChoose,
  technologies,
  process,
  ctaBanner,
  stats,
  demoModal,
}) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [hero.titleLine1]);

  useEffect(() => {
    if (!modalOpen) return;
    const releaseLock = acquireScrollLock();
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      releaseLock();
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [modalOpen]);

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
                {hero.titleLine1}
                <span className="block text-sky-400 mt-1">{hero.titleLine2}</span>
              </h1>

              <p className="mt-4 sm:mt-5 text-[13px] min-[380px]:text-sm sm:text-base lg:text-[17px] text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {hero.subtitle}
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
                  onClick={() => setModalOpen(true)}
                  className="w-full min-[420px]:w-auto min-h-[44px] inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:py-3.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-100 border border-slate-700 hover:border-sky-400/50 text-sm sm:text-[15px] font-semibold transition-all duration-200 cursor-pointer touch-manipulation"
                >
                  <span className="w-6 h-6 rounded-full bg-sky-500/15 text-sky-400 flex items-center justify-center">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </span>
                  <span>{hero.secondaryLabel}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center min-w-0">{hero.visual}</div>
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
                {whyChoose.heading}
              </h2>

              <p className="mt-3 sm:mt-4 text-[13px] min-[380px]:text-sm sm:text-[15px] text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {whyChoose.description}
              </p>

              <div className="mt-5 sm:mt-6">
                <a
                  href="#technologies"
                  className="w-full min-[420px]:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-sky-400 to-blue-600 hover:brightness-110 text-slate-950 text-sm font-bold shadow-[0_0_20px_rgba(14,165,233,0.28)] transition-all duration-200 hover:-translate-y-0.5 touch-manipulation"
                >
                  <span>{whyChoose.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 min-w-0">
              {whyChoose.features ? (
                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-3 min-[380px]:p-4 sm:p-5 grid grid-cols-2 gap-3 sm:gap-4">
                  {whyChoose.features.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="bg-slate-800/60 rounded-xl p-4 sm:p-5 border border-slate-700/80 flex flex-col items-center justify-center text-center hover:border-sky-400/50 hover:-translate-y-0.5 transition-all duration-200 min-w-0"
                      >
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-400 flex items-center justify-center mb-3 shrink-0">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.1]" />
                        </div>
                        <span className="text-[11px] min-[380px]:text-xs sm:text-sm font-bold text-slate-100 leading-snug break-words">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                whyChoose.visual
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. TECHNOLOGIES SECTION ================= */}
      <section id="technologies" className="relative py-12 sm:py-16 lg:py-20 bg-[#0B1120] overflow-hidden border-b border-slate-800/80">
        <DotPattern className="hidden md:block absolute top-8 left-4 opacity-45" />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 text-center lg:text-left min-w-0">
              <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-sky-400 mb-2.5">
                <span className="w-6 h-[2px] bg-sky-400 rounded-full" />
                <span>{technologies.eyebrow}</span>
              </div>

              <h2 className="text-xl min-[380px]:text-2xl sm:text-3xl lg:text-[32px] xl:text-[34px] font-extrabold text-slate-50 tracking-tight leading-snug break-words">
                {technologies.heading}
              </h2>

              <p className="mt-3 text-[13px] min-[380px]:text-sm sm:text-[15px] text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0">
                {technologies.description}
              </p>
            </div>

            <div className="lg:col-span-8 min-w-0">
              <div className="grid grid-cols-2 min-[440px]:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-3.5">
                {technologies.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="bg-slate-900/75 rounded-2xl border border-slate-800 hover:border-sky-400/50 hover:-translate-y-1 transition-all duration-200 px-3 py-5 flex flex-col items-center justify-center text-center min-w-0 last:col-span-2 min-[440px]:last:col-span-1"
                  >
                    <div className="mb-3 flex items-center justify-center">{tech.logo}</div>
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

      {/* ================= 4. PROCESS / APPROACH SECTION ================= */}
      <section id="process" className="py-12 sm:py-16 lg:py-20 bg-[#0F172A] border-b border-slate-800/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-sky-400 mb-2">
              <span className="w-5 h-[2px] bg-sky-400 rounded-full" />
              <span>{process.eyebrow}</span>
              <span className="w-5 h-[2px] bg-sky-400 rounded-full" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-50 tracking-tight">
              {process.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {process.steps.map((step, idx) => (
              <div
                key={step.title}
                className="relative bg-slate-900/70 rounded-2xl p-6 border border-slate-800 text-center flex flex-col items-center min-w-0"
              >
                {idx < process.steps.length - 1 && (
                  <span
                    className="hidden lg:flex absolute top-9 -right-4 z-10 text-sky-400 items-center justify-center"
                    aria-hidden="true"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </span>
                )}

                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 font-extrabold text-sm shadow-[0_0_16px_rgba(14,165,233,0.3)] flex items-center justify-center mb-3.5">
                  {idx + 1}
                </div>

                <h3 className="text-[15px] sm:text-[17px] font-bold text-slate-50 mb-1.5">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed max-w-[210px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. CTA BANNER ================= */}
      <section className="py-10 sm:py-12 bg-[#0B1120]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-[#0f2442] to-slate-900 border border-sky-500/30 px-6 py-8 sm:px-10 sm:py-10 shadow-[0_20px_50px_rgba(2,6,23,0.7)]">
            <div className="absolute -right-10 -top-10 w-52 h-52 rounded-full bg-sky-500/15 blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-5 min-w-0">
                {ctaBanner.icon}
                <div className="min-w-0">
                  <h2 className="text-xl sm:text-[26px] font-extrabold text-slate-50 tracking-tight leading-snug break-words">
                    {ctaBanner.heading}
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm lg:text-[15px] text-slate-400 leading-relaxed">
                    {ctaBanner.subtitle}
                  </p>
                </div>
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

      {/* ================= 6. STATS BAR ================= */}
      <section className="py-8 sm:py-10 bg-[#0B1120] border-y border-slate-800/80">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8 text-center">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex flex-col items-center px-1 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center mb-2">
                    <Icon className="w-4 h-4 stroke-[2.2]" />
                  </div>
                  <div className="text-lg min-[380px]:text-xl sm:text-2xl font-extrabold text-slate-50 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] min-[380px]:text-xs sm:text-[13px] font-medium text-slate-400 mt-0.5 break-words">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= DEMO / OVERVIEW MODAL ================= */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={demoModal.title}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="w-full max-w-lg max-h-[90dvh] overflow-y-auto overscroll-contain bg-[#0F172A] text-slate-50 rounded-2xl shadow-2xl border border-slate-800 p-5 sm:p-7 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              aria-label="Close modal"
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold mb-3">
              {demoModal.badge}
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-50">{demoModal.title}</h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              {demoModal.description}
            </p>

            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-300">
              {demoModal.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-end">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-5 py-2.5 rounded-lg border border-slate-700 bg-slate-800/80 text-slate-200 text-xs sm:text-sm font-semibold hover:bg-slate-800 cursor-pointer"
              >
                Close
              </button>
              <Link
                to="/contact"
                onClick={() => setModalOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 text-xs sm:text-sm font-bold"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
