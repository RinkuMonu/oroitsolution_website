import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  BriefcaseBusiness,
  GraduationCap,
  FileText,
  Coffee,
  ShoppingCart,
  Settings,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

const softwareProducts = [
  {
    icon: Users,
    title: 'CRM Software',
    description:
      'Manage leads, customers, and sales pipelines efficiently. Our CRM helps track communication, automate follow-ups, generate reports, and improve customer relationships to boost sales performance.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'HRM Software',
    description:
      'Automate payroll, attendance, and employee management. Includes leave tracking, salary processing, performance management, and real-time HR reporting for better workforce control.',
  },
  {
    icon: GraduationCap,
    title: 'School Management',
    description:
      'Complete digital solution for schools and institutes including student admissions, fee management, attendance tracking, exam results, timetable scheduling, and parent communication portal.',
  },
  {
    icon: FileText,
    title: 'Online Examination',
    description:
      'Secure online exam platform with auto evaluation, question bank management, timer control, instant result generation, and detailed performance analytics.',
  },
  {
    icon: Coffee,
    title: 'Cafe Billing',
    description:
      'Fast POS billing system with inventory tracking, GST billing, daily sales reports, stock alerts, and multi-user access for smooth cafe operations.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Development',
    description:
      'Custom e-commerce websites with secure payment gateways, product and order management, coupon systems, inventory tracking, and responsive user experience across all devices.',
  },
  {
    icon: Settings,
    title: 'Custom Software',
    description:
      'Tailor-made software solutions designed specifically for your business needs, ensuring scalability, security, seamless integrations, and long-term growth support.',
  },
];

const suiteHighlights = [
  {
    id: 'crm',
    label: 'CRM',
    title: 'CRM & Sales Pipeline',
    subtitle: 'Lead scoring, follow-ups & analytics',
    metric: '+42% Conversion',
    icon: Users,
  },
  {
    id: 'hrm',
    label: 'HRM',
    title: 'HRM & Payroll Suite',
    subtitle: 'Attendance, leave & salary automation',
    metric: '100% Compliant',
    icon: BriefcaseBusiness,
  },
  {
    id: 'erp',
    label: 'Campus',
    title: 'School & Exam Portal',
    subtitle: 'Admissions, fees & auto-evaluation',
    metric: 'Real-Time Sync',
    icon: GraduationCap,
  },
  {
    id: 'pos',
    label: 'Commerce',
    title: 'POS Billing & Store',
    subtitle: 'GST invoicing, stock & checkout',
    metric: 'Instant Billing',
    icon: ShoppingCart,
  },
];

export default function Software() {
  const [activeModule, setActiveModule] = useState(suiteHighlights[0].id);
  const selected =
    suiteHighlights.find((item) => item.id === activeModule) ?? suiteHighlights[0];

  return (
    <div className="w-full bg-[#0B1120] text-slate-50">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#0B1120] border-b border-slate-800/80">
        <div className="absolute -top-24 -left-20 w-80 h-80 rounded-full bg-sky-500/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12">
            {/* Left Copy */}
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-semibold text-sky-400 mb-4">
                <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38BDF8]" />
                Enterprise Software Suite
              </span>

              <h1 className="text-3xl min-[380px]:text-4xl sm:text-5xl lg:text-[52px] leading-[1.12] font-extrabold tracking-tight text-slate-50">
                Powerful Software Solutions For Modern Businesses
              </h1>

              <p className="mt-4 text-sm sm:text-base lg:text-[17px] leading-relaxed text-slate-400 max-w-xl">
                We design scalable, secure, and user-friendly software solutions that help
                businesses automate operations and grow faster.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  state={{ subject: 'Smart SaaS Solutions' }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-400 to-blue-600 hover:brightness-110 text-slate-950 font-bold text-sm sm:text-base px-7 py-3.5 rounded-lg transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_24px_rgba(14,165,233,0.3)]"
                >
                  <span>Get Started</span>
                  <ArrowRight size={18} />
                </Link>

                <a
                  href="#software-catalog"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-100 bg-slate-900/70 hover:bg-slate-800 border border-slate-700 hover:border-sky-400/50 px-6 py-3.5 rounded-lg transition-all"
                >
                  <span>Explore Catalog</span>
                  <ArrowRight size={16} className="text-sky-400" />
                </a>
              </div>
            </div>

            {/* Right Midnight & Electric Cyan Software Suite Card */}
            <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[580px] group">
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-400/20 via-blue-600/15 to-cyan-400/20 rounded-2xl blur-md opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="relative rounded-2xl border border-slate-800 bg-[#0F172A]/90 backdrop-blur-xl p-4 sm:p-6 shadow-[0_25px_60px_rgba(2,6,23,0.8)]">
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                      </div>
                      <span className="ml-2 text-[11px] sm:text-xs font-mono text-slate-400">
                        suite.apphany.io/modules
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      {suiteHighlights.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setActiveModule(item.id)}
                          className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                            activeModule === item.id
                              ? 'bg-sky-500 text-slate-950 shadow-[0_0_12px_rgba(14,165,233,0.35)]'
                              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/80'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Active Highlight */}
                  <div className="mt-4 rounded-xl border border-sky-500/25 bg-[#0B1120]/85 p-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="h-10 w-10 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 flex items-center justify-center shrink-0">
                        <selected.icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm sm:text-base font-bold text-slate-50 truncate">
                          {selected.title}
                        </p>
                        <p className="text-xs text-slate-400 truncate">{selected.subtitle}</p>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-400">
                      {selected.metric}
                    </span>
                  </div>

                  {/* Module Mini Grid */}
                  <div className="mt-3.5 grid grid-cols-2 gap-3">
                    {suiteHighlights.map((item) => {
                      const Icon = item.icon;
                      const isSel = item.id === activeModule;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setActiveModule(item.id)}
                          className={`text-left rounded-xl border p-3 transition-all cursor-pointer ${
                            isSel
                              ? 'border-sky-400/50 bg-sky-500/10'
                              : 'border-slate-800 bg-slate-900/70 hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-bold text-slate-100">{item.label}</span>
                            <Icon className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                          </div>
                          <p className="mt-1 text-[11px] text-slate-400 truncate">
                            {item.subtitle}
                          </p>
                        </button>
                      );
                    })}
                  </div>

                  {/* Bottom Bar */}
                  <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
                    <span className="inline-flex items-center gap-1.5 text-sky-400 font-semibold">
                      <ShieldCheck className="h-3.5 w-3.5" /> Enterprise RBAC &amp; Cloud Ready
                    </span>
                    <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5" /> 7+ Custom Modules
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOFTWARE PRODUCTS SECTION */}
      <section
        id="software-catalog"
        className="bg-[#0F172A] py-14 sm:py-16 lg:py-20 px-4 sm:px-8 border-b border-slate-800/80"
      >
        <div className="max-w-[1160px] mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1 text-xs font-semibold text-sky-400 mb-3">
              Software Catalog
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-50">
              Our Software Products
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-400">
              Smart, scalable, and industry-ready solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {softwareProducts.map((product) => {
              const Icon = product.icon;

              return (
                <Link
                  key={product.title}
                  to="/contact"
                  state={{ subject: product.title }}
                  className="group block bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-2xl p-6 sm:p-7 min-h-[220px] shadow-[0_12px_32px_rgba(2,6,23,0.45)] hover:border-sky-400/50 hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center mb-5 group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-blue-600 group-hover:text-slate-950 group-hover:border-transparent transition-all duration-300">
                    <Icon size={22} strokeWidth={1.9} />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-50 mb-2 group-hover:text-sky-400 transition-colors">
                    {product.title}
                  </h3>

                  <p className="text-[13px] sm:text-sm text-slate-400 leading-[1.7]">
                    {product.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA SECTION */}
      <section className="bg-gradient-to-r from-[#0B1120] via-[#101C36] to-[#0B1120] text-slate-50 py-12 sm:py-14 px-5 border-b border-slate-800/80">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-50">
            Need a Custom Software?
          </h2>
          <p className="mt-2.5 text-sm sm:text-lg text-slate-400">
            Let&apos;s build something powerful together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-6 px-7 py-3 rounded-lg bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 text-sm sm:text-base font-bold hover:brightness-110 shadow-[0_0_24px_rgba(14,165,233,0.3)] transition-all"
          >
            <span>CONTACT US</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
