import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Empowering() {
  return (
    <section className="relative bg-gradient-to-r from-[#0B1120] via-[#101C36] to-[#0B1120] text-slate-50 py-14 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden border-b border-slate-800/70">
      <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-72 h-72 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1000px] mx-auto text-center">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-md p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(2,6,23,0.6)]">
          <span className="inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold text-sky-400 mb-4">
            Digital Transformation
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-4 sm:mb-5 text-slate-50">
            Empowering Businesses with{' '}
            <span className="text-sky-400">Innovative Technology Solutions</span>
          </h2>

          <p className="text-xs min-[400px]:text-sm sm:text-base lg:text-[17px] leading-relaxed sm:leading-7 max-w-[820px] mx-auto mb-7 sm:mb-8 text-slate-400">
            At Apphany Technologies PVT.LTD, we deliver innovative software development, web
            applications, and scalable SaaS solutions tailored to modern business needs. From custom
            software to digital platforms, we help businesses streamline operations, improve
            productivity, and accelerate digital transformation.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-lg bg-gradient-to-r from-sky-400 to-blue-600 hover:brightness-110 text-slate-950 px-7 sm:px-8 py-3.5 text-sm sm:text-base font-bold tracking-wide shadow-[0_0_24px_rgba(14,165,233,0.3)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>GET STARTED</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
