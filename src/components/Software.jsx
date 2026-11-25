
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  BriefcaseBusiness,
  GraduationCap,
  FileText,
  Coffee,
  ShoppingCart,
  Settings,
  ArrowRight
} from 'lucide-react';

const softwareProducts = [
  {
    icon: Users,
    title: 'CRM Software',
    description:
      'Manage leads, customers, and sales pipelines efficiently. Our CRM helps track communication, automate follow-ups, generate reports, and improve customer relationships to boost sales performance.'
  },
  {
    icon: BriefcaseBusiness,
    title: 'HRM Software',
    description:
      'Automate payroll, attendance, and employee management. Includes leave tracking, salary processing, performance management, and real-time HR reporting for better workforce control.'
  },
  {
    icon: GraduationCap,
    title: 'School Management',
    description:
      'Complete digital solution for schools and institutes including student admissions, fee management, attendance tracking, exam results, timetable scheduling, and parent communication portal.'
  },
  {
    icon: FileText,
    title: 'Online Examination',
    description:
      'Secure online exam platform with auto evaluation, question bank management, timer control, instant result generation, and detailed performance analytics.'
  },
  {
    icon: Coffee,
    title: 'Cafe Billing',
    description:
      'Fast POS billing system with inventory tracking, GST billing, daily sales reports, stock alerts, and multi-user access for smooth cafe operations.'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Development',
    description:
      'Custom e-commerce websites with secure payment gateways, product and order management, coupon systems, inventory tracking, and responsive user experience across all devices.'
  },
  {
    icon: Settings,
    title: 'Custom Software',
    description:
      'Tailor-made software solutions designed specifically for your business needs, ensuring scalability, security, seamless integrations, and long-term growth support.'
  }
];

export default function Software({ onExplore }) {
  return (
    <div className="w-full bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#155cd5] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8 lg:py-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-10">

            {/* Left Content */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.12] font-bold tracking-tight">
                Powerful Software Solutions For Modern Businesses
              </h1>

              <p className="mt-4 text-lg sm:text-xl lg:text-[24px] leading-relaxed text-blue-50">
                We design scalable, secure, and user-friendly software
                solutions that help businesses automate operations
                and grow faster.
              </p>

              <button
                onClick={() => onExplore?.('Smart SaaS Solutions')}
                className="mt-6 inline-flex items-center gap-3 bg-white text-black font-bold text-lg px-8 py-4 rounded-md hover:bg-orange-500 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                GET STARTED
                <ArrowRight size={21} />
              </button>
            </div>

            {/* Right Image */}
            <div className="w-full flex justify-center lg:justify-end">
              <img
                src="https://oroitsolution.info/front/images/header/hero3.png"
                alt="Smart SaaS Software Solutions"
                className="w-full max-w-[620px] max-h-[370px] h-auto object-contain"
              />
            </div>

          </div>
        </div>
      </section>


      {/* ================= SOFTWARE PRODUCTS SECTION ================= */}
      <section className="bg-white py-16 sm:py-20 px-5 sm:px-8">

        <div className="max-w-[1100px] mx-auto">

          {/* Heading */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our Software Products
            </h2>

            <p className="mt-2 text-sm sm:text-base text-gray-500">
              Smart, scalable, and industry-ready solutions
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

            {softwareProducts.map((product, index) => {
              const Icon = product.icon;

              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-100 rounded-2xl p-6 sm:p-7 min-h-[220px] shadow-[0_8px_30px_rgba(0,0,0,0.07)] hover:shadow-[0_15px_40px_rgba(21,92,213,0.18)] hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                >

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-[#155cd5] text-white flex items-center justify-center mb-5 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#155cd5] transition-colors">
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] sm:text-sm text-gray-500 leading-[1.7]">
                    {product.description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>


      {/* ================= BOTTOM CTA SECTION ================= */}
      <section className="bg-[#155cd5] text-white min-h-[200px] flex items-center justify-center px-5 py-9">

        <div className="text-center">

          <h2 className="text-3xl sm:text-4xl font-bold">
            Need a Custom Software?
          </h2>

          <p className="mt-2 text-base sm:text-lg text-blue-50">
            Let's build something powerful together.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-4 text-orange-500 text-lg sm:text-xl font-semibold tracking-wider hover:text-white transition-colors duration-300"
          >
            CONTACT US
          </Link>

        </div>

      </section>

    </div>
  );
}
