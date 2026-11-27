import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const plans = [
  {
    category: 'FOR HR TEAMS',
    title: 'HRMS App',
    description: 'Helping HR team members work faster, smarter, and more efficiently.',
    price: 3400,
    features: [
      ['User Management', 1200, true],
      ['Employee Joining', 700, true],
      ['Offer Letter Generation', 1000, true],
      ['CT Creation', 500, true],
      ['Document Upload', 100, false],
      ['Leave Management', 300, false],
      ['Attendance Tracking', 100, false],
    ],
  },
  {
    category: 'FOR RETAILERS',
    title: 'E-Commerce',
    description: 'Complete B2C eCommerce solution for your virtual retail store.',
    price: 2600,
    popular: true,
    badge: 'Most Popular',
    features: [
      ['Dashboard Analytics', 1000, true],
      ['Product Listing', 800, true],
      ['Product Detail Pages', 300, true],
      ['Cart Management', 500, true],
      ['Advanced Filters', 1200, false],
      ['Order Management', 1200, false],
      ['Payment Integration', 700, false],
      ['Inventory Management', 200, false],
    ],
  },
  {
    category: 'FOR SALES TEAMS',
    title: 'Lead Management System',
    description: 'Software to track, manage, and convert leads effectively.',
    price: 4600,
    features: [
      ['Lead Capture', 1500, true],
      ['Lead Tracking', 1100, true],
      ['Lead Scoring', 500, true],
      ['Reporting & Analytics', 1500, true],
      ['Custom Pipeline', 400, false],
      ['Email Integration', 600, false],
      ['Activity Tracking', 800, false],
    ],
  },
  {
    category: 'FOR ALL STUDENT',
    title: 'Apphany Technologies Academy For Student',
    description:
      'Apphany Technologies Academy is a professional training platform that provides software internship programs.',
    price: 10500,
    popular: true,
    badge: 'Internship Program',
    features: [
      ['Registration Fee (One-Time Fee)', 1000, true],
      ['Online Internship Classes', 3000, true],
      ['Personal (One-to-One) Classes', 5000, true],
      ['Only Basic Coding Knowledge', 1500, true],
      ['Coding Exam Daily (One in a day)', 300, false],
      ['Certificate', 800, false],
      ['Placement Guaranteed Fee', 1100, false],
    ],
  },
];

const faqs = [
  {
    question: 'Can I change plans later?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, we offer a 14-day free trial on all plans. No credit card required.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, UPI, and bank transfers.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      'No, refunds are not available for API testing charges and registration charges. These are one-time fees paid by the user and are non-refundable.',
  },
];

export default function Product() {
  const [yearly, setYearly] = useState(false);

  const formatPrice = (price) => {
    const amount = yearly ? Math.round(price * 0.8) : price;
    return amount.toLocaleString('en-IN');
  };

  return (
    <div className="w-full bg-[#0B1120] text-slate-50 overflow-x-clip">
      {/* HERO HEADER */}
      <section className="relative w-full min-h-[190px] sm:min-h-[220px] bg-[#0B1120] border-b border-slate-800/80 flex items-center justify-center px-4 sm:px-6 py-12 overflow-hidden">
        <div className="absolute -top-24 left-1/4 w-72 h-72 rounded-full bg-sky-500/15 blur-3xl pointer-events-none" />
        <div className="relative text-center max-w-4xl mx-auto">
          <span className="inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1 text-xs font-semibold text-sky-400 mb-3">
            Pricing &amp; Plans
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-50">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto">
            Choose the perfect plan for your business. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* PRICING PLANS */}
      <section className="bg-[#0F172A] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-b border-slate-800/80">
        <div className="max-w-[1250px] mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs sm:text-sm font-bold tracking-[2px] text-sky-400 uppercase">
              PRICING PLANS
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-50 mt-2 sm:mt-3">
              Flexible Plans for Every Customer
            </h2>
            <p className="text-slate-400 mt-2.5 sm:mt-3 text-sm sm:text-base max-w-2xl mx-auto">
              Whether you&apos;re just starting or scaling fast, we have a plan that fits your needs
            </p>
          </div>

          {/* Monthly / Yearly Toggle */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-10 sm:mb-12">
            <span className={`text-sm ${!yearly ? 'text-sky-400 font-bold' : 'text-slate-400'}`}>
              Monthly
            </span>

            <button
              type="button"
              onClick={() => setYearly(!yearly)}
              aria-label="Toggle yearly pricing"
              aria-pressed={yearly}
              className={`w-12 h-6 rounded-full p-1 transition-colors cursor-pointer shrink-0 border border-slate-700 ${
                yearly ? 'bg-sky-500' : 'bg-slate-800'
              }`}
            >
              <span
                className={`block w-4 h-4 bg-white rounded-full shadow transition-transform ${
                  yearly ? 'translate-x-6' : ''
                }`}
              />
            </button>

            <span className={`text-sm ${yearly ? 'text-sky-400 font-bold' : 'text-slate-400'}`}>
              Yearly
            </span>

            <span className="text-[10px] sm:text-xs font-bold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-1 rounded-full">
              Save 20%
            </span>
          </div>

          {/* PRICING CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 sm:gap-y-9 items-stretch pt-2">
            {plans.map((plan, index) => (
              <div
                key={plan.title}
                className={`relative min-w-0 flex flex-col rounded-2xl border p-5 pt-7 sm:p-6 sm:pt-8 transition-all duration-300 sm:hover:-translate-y-1.5 ${
                  index === 3 ? 'lg:col-start-2' : ''
                } ${
                  plan.popular
                    ? 'bg-gradient-to-b from-slate-900 via-[#0f2341] to-slate-900 text-slate-50 border-sky-400/50 shadow-[0_0_35px_rgba(14,165,233,0.18)]'
                    : 'bg-slate-900/75 text-slate-50 border-slate-800 shadow-[0_12px_32px_rgba(2,6,23,0.5)] hover:border-sky-500/40'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 max-w-[calc(100%-2rem)] whitespace-nowrap truncate bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 text-[10px] sm:text-[11px] font-extrabold px-3.5 py-1.5 rounded-full shadow-[0_0_16px_rgba(56,189,248,0.4)]">
                    {plan.badge}
                  </div>
                )}

                <div className="sm:min-h-[140px]">
                  <p className="text-[11px] font-bold tracking-wider text-sky-400">
                    {plan.category}
                  </p>

                  <h3 className="text-xl sm:text-2xl font-bold mt-2.5 sm:mt-3 leading-tight text-slate-50">
                    {plan.title}
                  </h3>

                  <p className="text-sm leading-relaxed mt-2.5 sm:mt-3 text-slate-400">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="border-y border-slate-800 py-4 my-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-base font-semibold text-sky-400">₹</span>
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-50">
                      {formatPrice(plan.price)}
                    </span>
                    <span className="text-xs text-slate-400">/month</span>
                  </div>
                  {yearly && (
                    <p className="mt-1 text-[11px] font-medium text-emerald-400">
                      Billed annually (20% off monthly rate)
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="flex-grow space-y-2.5 sm:space-y-3">
                  {plan.features.map(([feature, amount, included]) => (
                    <div
                      key={feature}
                      className="flex items-start justify-between gap-2 text-[13px] sm:text-sm"
                    >
                      <div className="flex items-start gap-2 min-w-0">
                        {included ? (
                          <Check
                            size={15}
                            className="shrink-0 mt-0.5 text-sky-400"
                            strokeWidth={3}
                          />
                        ) : (
                          <X size={15} className="shrink-0 mt-0.5 text-slate-600" />
                        )}

                        <span className="leading-snug sm:leading-relaxed break-words text-slate-300">
                          {feature}
                        </span>
                      </div>

                      <span className="shrink-0 font-semibold text-slate-200">₹{amount}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  state={{ subject: `${plan.title} (${yearly ? 'Yearly' : 'Monthly'} Plan)` }}
                  className={`w-full min-h-[44px] mt-6 sm:mt-7 py-3 rounded-lg text-sm font-bold flex items-center justify-center transition-all duration-300 sm:hover:scale-[1.02] active:scale-[0.99] cursor-pointer touch-manipulation ${
                    plan.popular
                      ? 'bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 hover:brightness-110 shadow-[0_0_20px_rgba(14,165,233,0.3)]'
                      : 'border border-slate-700 bg-slate-800/80 text-slate-100 hover:border-sky-400/50 hover:text-sky-300'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-[#0B1120] px-4 sm:px-6 lg:px-8 py-12 sm:py-14 border-b border-slate-800/80">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-50">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 mt-2 text-xs sm:text-sm">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 items-stretch">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-900/70 rounded-xl p-5 sm:p-6 border border-slate-800 hover:border-sky-400/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <h3 className="text-sm sm:text-base font-bold text-slate-50 mb-2">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
