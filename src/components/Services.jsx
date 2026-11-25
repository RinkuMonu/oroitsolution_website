import React from 'react';
import {
  Code2,
  Smartphone,
  Paintbrush,
  Network,
  Cloud,
  ShoppingCart,
  ArrowRight
} from 'lucide-react';

export default function Services({ onSelectService }) {
  const services = [
    {
      id: 'web-app',
      title: 'Web Application Development',
      description: 'Robust, scalable, and secure web applications built using modern frameworks to deliver seamless user experiences and high performance.',
      icon: Code2,
    },
    {
      id: 'mobile-app',
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications developed using Flutter and React Native for fast performance, native UI, and reduced time-to-market.',
      icon: Smartphone,
    },
    {
      id: 'ui-ux',
      title: 'UI / UX Design',
      description: 'Intuitive, user-centric designs focused on usability, accessibility, and engaging experiences across web and mobile platforms.',
      icon: Paintbrush,
    },

    {
      id: 'api-backend',
      title: 'API & Backend Development',
      description: 'Secure and scalable REST & GraphQL APIs with powerful backend architectures to support modern applications and integrations.',
      icon: Network,
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps Solutions',
      description: 'Cloud-native deployments, CI/CD pipelines, and infrastructure optimization for reliable, scalable, and cost-effective systems.',
      icon: Cloud,
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Solutions',
      description: 'Custom e-commerce platforms with secure payments, product management, order tracking, and seamless customer experience.',
      icon: ShoppingCart,
    },
  ];

  return (
    <section id="services" className="bg-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 text-gray-900 overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Pill Badge */}
          <div className="inline-flex items-center justify-center">
            <span className="px-4 py-1 rounded-full border border-blue-500/80 text-blue-600 text-xs sm:text-sm font-medium tracking-wide bg-blue-50/30">
              Services
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl min-[400px]:text-3xl md:text-4xl font-bold text-gray-900 mt-3 sm:mt-4 tracking-tight leading-tight">
            Our Software Development <br className="hidden sm:inline" /> Services
          </h2>

          {/* Subheading / Description */}
          <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-3 sm:mt-4 leading-relaxed font-normal max-w-2xl mx-auto px-1">
            We build scalable, secure, and high-performance web and mobile applications using modern technologies to help businesses innovate, grow, and succeed in the digital world.
          </p>

        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-5 sm:p-7 lg:p-8 border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(21,92,213,0.08)] hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Circular Icon Container */}
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-blue-500/80 flex items-center justify-center text-blue-600 mb-4 sm:mb-5 group-hover:bg-[#155cd5] group-hover:text-white group-hover:border-[#155cd5] transition-all duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-[#155cd5] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray-500 text-xs sm:text-[13.5px] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

            );

          })}

        </div>
      </div>

    </section>
  );
}
