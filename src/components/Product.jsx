import React from 'react';
import { CheckCircle2, Shield, Rocket, ArrowRight, Star } from 'lucide-react';

export default function Product({ onGetStarted }) {
  return (
    <section id="product" className="py-24 bg-[#082b75] text-white relative border-t border-blue-400/20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Highlight / Interactive Preview */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl bg-gradient-to-br from-[#021f7e] to-[#011451] p-6 sm:p-8 border border-blue-400/30 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-blue-400/20 pb-4 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                  <span className="text-xs text-blue-300 ml-2 font-mono">oro-cloud-suite.internal</span>
                </div>
                <span className="text-[11px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-400/30">
                  Healthy • 99.99%
                </span>
              </div>

              {/* Mock Dashboard metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#0b2f8a]/80 p-4 rounded-xl border border-blue-400/20">
                  <p className="text-xs text-blue-300">Active API Requests</p>
                  <p className="text-2xl font-bold text-white mt-1">14.8M / day</p>
                  <span className="text-[11px] text-emerald-400 font-medium">↑ 18.4% this week</span>
                </div>
                <div className="bg-[#0b2f8a]/80 p-4 rounded-xl border border-blue-400/20">
                  <p className="text-xs text-blue-300">Average Latency</p>
                  <p className="text-2xl font-bold text-white mt-1">24 ms</p>
                  <span className="text-[11px] text-emerald-400 font-medium">Ultra-low globally</span>
                </div>
              </div>

              {/* System Architecture Flow */}
              <div className="bg-[#051c5e] p-4 rounded-xl border border-blue-400/20 space-y-3">
                <div className="flex items-center justify-between text-xs text-blue-200">
                  <span>Zero-Trust Gateway</span>
                  <span className="text-emerald-300 font-mono">Encrypted (TLS 1.3)</span>
                </div>
                <div className="w-full bg-blue-950 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-400 to-indigo-400 h-full w-[92%]" />
                </div>
                <div className="flex items-center justify-between text-xs text-blue-200 pt-1">
                  <span>AI Agent Auto-Scaling</span>
                  <span className="text-blue-300 font-mono">Active (12 Replicas)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Value Proposition */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-200 bg-blue-500/30 px-3.5 py-1.5 rounded-full border border-blue-300/30">
              Flagship Platform
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight leading-tight">
              Oro Enterprise Cloud OS
            </h2>
            <p className="mt-4 text-base sm:text-lg text-blue-100/90 leading-relaxed">
              Designed from the ground up for modern businesses needing guaranteed scalability, rock-solid security, and autonomous cloud operations without maintaining massive DevOps overhead.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-300 mr-3 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-base font-semibold text-white">Turnkey Cloud Infrastructure</h4>
                  <p className="text-sm text-blue-200/80">Deploy microservices and databases worldwide in seconds with automated failover.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-300 mr-3 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-base font-semibold text-white">Military-Grade Security & Encryption</h4>
                  <p className="text-sm text-blue-200/80">End-to-end AES-256 encryption, zero-trust network perimeter, and continuous audit logs.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-300 mr-3 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-base font-semibold text-white">Intelligent Cost Optimizer</h4>
                  <p className="text-sm text-blue-200/80">AI-driven workload scaling reduces cloud expenditures by 30% to 50% automatically.</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={onGetStarted}
                className="bg-white text-[#082b75] hover:bg-blue-50 font-bold px-8 py-3.5 rounded-md shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base uppercase tracking-wider"
              >
                Schedule Architecture Review
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
