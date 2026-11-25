import React from 'react';
import { Database, Laptop, BarChart3, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export default function Software({ onExplore }) {
  const softwareSuite = [
    {
      name: "Oro CRM Pro",
      tagline: "Customer Relationship & Sales Acceleration",
      desc: "Comprehensive customer lifecycle management, deal pipeline automation, lead qualification scoring, and unified communication channels.",
      features: ["Visual Sales Funnels", "AI Lead Scoring", "Email & WhatsApp Sync", "Omnichannel Inbox"],
      badge: "Popular"
    },
    {
      name: "Oro CloudFlow Engine",
      tagline: "Enterprise Workflow Orchestration",
      desc: "Drag-and-drop workflow builder that connects APIs, microservices, databases, and third-party tools into lightning-fast automated sequences.",
      features: ["No-Code Flow Builder", "Webhook Triggers", "Scheduled Batch Jobs", "Error Auto-Healing"],
      badge: "Enterprise"
    },
    {
      name: "Oro InsightBI",
      tagline: "Real-time Telemetry & Business Analytics",
      desc: "Executive dashboards that turn raw business metrics into actionable insights with predictive forecasting, cohort analysis, and customized reporting.",
      features: ["Custom Dashboards", "Automated PDF Reports", "Data Warehouse Sync", "Predictive Forecasting"],
      badge: "New"
    }
  ];

  return (
    <section id="software" className="py-24 bg-[#0a358c] text-white relative border-t border-blue-400/20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-200 bg-blue-500/30 px-3.5 py-1.5 rounded-full border border-blue-300/30">
              Proprietary Software
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight">
              Ready-to-Deploy Enterprise Software Suite
            </h2>
            <p className="mt-4 text-base sm:text-lg text-blue-100/90 leading-relaxed">
              Accelerate time-to-market with Oro IT's battle-tested software modules designed for high performance, compliance, and frictionless integration.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <button
              onClick={() => onExplore("All Software")}
              className="bg-white text-[#0a358c] hover:bg-blue-50 font-bold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer text-sm"
            >
              Request Live Demo
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {softwareSuite.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0e44ab]/70 border border-blue-400/30 rounded-2xl p-8 hover:bg-[#114ebd] transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider bg-blue-500/30 text-blue-200 px-3 py-1 rounded-full border border-blue-300/20">
                    {item.badge}
                  </span>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">{item.name}</h3>
                <p className="text-xs font-medium text-blue-300 mb-4">{item.tagline}</p>
                <p className="text-blue-100/80 text-sm leading-relaxed mb-6">{item.desc}</p>

                <div className="space-y-2.5 pt-4 border-t border-blue-400/20">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center text-xs text-blue-100">
                      <Zap className="w-3.5 h-3.5 text-blue-300 mr-2 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-6">
                <button
                  onClick={() => onExplore(item.name)}
                  className="w-full py-2.5 px-4 bg-white/10 hover:bg-white text-white hover:text-blue-900 border border-white/20 rounded-lg text-sm font-semibold transition-all cursor-pointer"
                >
                  View Solution Specs
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
