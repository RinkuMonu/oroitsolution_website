
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    badge: '🔥 Most Popular',
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
    title: 'Oro IT Academy For Student',
    description: 'Oro IT Academy is a professional training platform that provides software internship programs.',
    price: 10500,
    popular: true,
    badge: '🔥 Only Internship Student',
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
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
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
    answer: 'No, refunds are not available for API testing charges and registration charges. These are one-time fees paid by the user and are non-refundable.',
  },
];

export default function Product({ onGetStarted }) {
  const [yearly, setYearly] = useState(false);
  const navigate = useNavigate();

  const handlePlanSelect = (planTitle) => {
    if (onGetStarted) {
      onGetStarted(planTitle);
      return;
    }
    navigate('/contact', {
      state: {
        subject: `Plan Inquiry: ${planTitle} (${yearly ? 'Yearly' : 'Monthly'})`,
      },
    });
  };

  const formatPrice = (price) => {
    const amount = yearly ? Math.round(price * 0.8) : price;
    return amount.toLocaleString('en-IN');
  };


  return (
    <div className="w-full bg-white overflow-x-clip">

      {/* HERO HEADER */}
      <section className="w-full min-h-[170px] sm:min-h-[210px] bg-gradient-to-r from-[#193c7d] via-[#2054ad] to-[#3269df] flex items-center justify-center px-4 sm:px-6 py-10 sm:py-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-2xl min-[380px]:text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
            Simple, Transparent Pricing
          </h1>

          <p className="mt-2.5 sm:mt-3 text-sm sm:text-base lg:text-lg text-blue-100/90 max-w-2xl mx-auto">
            Choose the perfect plan for your business. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* PRICING PLANS */}
      <section className="bg-[#f8fafc] px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="max-w-[1250px] mx-auto">

          {/* Heading */}
          <div className="text-center mb-7 sm:mb-8">
            <p className="text-xs sm:text-sm font-bold tracking-[2px] text-blue-600">
              PRICING PLANS
            </p>

            <h2 className="text-xl min-[380px]:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 sm:mt-3">
              Flexible Plans for Every Customer
            </h2>

            <p className="text-gray-500 mt-2.5 sm:mt-3 text-sm sm:text-base max-w-2xl mx-auto">
              Whether you're just starting or scaling fast, we have a plan that fits your needs
            </p>
          </div>

          {/* Monthly / Yearly */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 mb-9 sm:mb-11">
            <span className={`text-sm ${!yearly ? 'text-blue-700 font-semibold' : 'text-gray-500'}`}>
              Monthly
            </span>

            <button
              type="button"
              onClick={() => setYearly(!yearly)}
              aria-label="Toggle yearly pricing"
              aria-pressed={yearly}
              className={`w-11 h-6 rounded-full p-1 transition-colors cursor-pointer shrink-0 ${yearly ? 'bg-blue-600' : 'bg-gray-200'}`}
            >
              <span className={`block w-4 h-4 bg-white rounded-full shadow transition-transform ${yearly ? 'translate-x-5' : ''}`} />
            </button>

            <span className={`text-sm ${yearly ? 'text-blue-700 font-semibold' : 'text-gray-500'}`}>
              Yearly
            </span>

            <span className="text-[10px] sm:text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
              Save 20%
            </span>
          </div>

          {/* PRICING CARDS: 1-col mobile, 2x2 tablet, 3+1 centered on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 sm:gap-y-9 items-stretch pt-2">
            {plans.map((plan, index) => (
              <div
                key={plan.title}
                className={`relative min-w-0 flex flex-col rounded-2xl border p-5 pt-7 sm:p-6 sm:pt-8 transition-all duration-300 sm:hover:-translate-y-1.5 hover:shadow-2xl ${index === 3 ? 'lg:col-start-2' : ''
                  } ${plan.popular
                    ? 'bg-gradient-to-b from-[#24469a] to-[#2860df] text-white border-blue-700 shadow-lg'
                    : 'bg-white text-gray-900 border-blue-100 shadow-md hover:border-blue-400'
                  }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 max-w-[calc(100%-2rem)] whitespace-nowrap truncate bg-amber-400 text-gray-900 text-[10px] sm:text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {plan.badge}
                  </div>
                )}

                <div className="sm:min-h-[140px]">
                  <p className={`text-[11px] font-bold tracking-wide ${plan.popular ? 'text-blue-100' : 'text-gray-400'}`}>
                    {plan.category}
                  </p>

                  <h3 className="text-xl sm:text-2xl font-bold mt-2.5 sm:mt-3 leading-tight">
                    {plan.title}
                  </h3>

                  <p className={`text-sm leading-relaxed mt-2.5 sm:mt-3 ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className={`border-y py-4 my-4 ${plan.popular ? 'border-white/20' : 'border-blue-100'}`}>
                  <div className="flex items-baseline gap-1">
                    <span className="text-base font-semibold">₹</span>
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                      {formatPrice(plan.price)}
                    </span>
                    <span className={`text-xs ${plan.popular ? 'text-blue-100' : 'text-gray-400'}`}>
                      /month
                    </span>
                  </div>
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
                            className={`shrink-0 mt-0.5 ${plan.popular ? 'text-sky-300' : 'text-blue-600'}`}
                            strokeWidth={3}
                          />
                        ) : (
                          <X
                            size={15}
                            className={`shrink-0 mt-0.5 ${plan.popular ? 'text-blue-200/80' : 'text-gray-400'}`}
                          />
                        )}

                        <span className="leading-snug sm:leading-relaxed break-words">
                          {feature}
                        </span>
                      </div>

                      <span className="shrink-0 font-medium">
                        ₹{amount}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => handlePlanSelect(plan.title)}
                  className={`w-full min-h-[44px] mt-6 sm:mt-7 py-3 rounded-lg text-sm font-bold transition-all duration-300 sm:hover:scale-[1.02] active:scale-[0.99] cursor-pointer touch-manipulation ${plan.popular
                      ? 'bg-white text-blue-700 hover:bg-orange-400 hover:text-white shadow-lg'
                      : 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                    }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="max-w-[1100px] mx-auto">

          <div className="text-center mb-7 sm:mb-8">
            <h2 className="text-xl min-[380px]:text-2xl sm:text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>

            <p className="text-gray-500 mt-2 text-xs sm:text-sm">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 items-stretch">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#f6f8fb] rounded-xl p-5 sm:p-6 sm:min-h-[125px] border border-transparent hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
