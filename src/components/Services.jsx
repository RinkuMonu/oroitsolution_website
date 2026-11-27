import React from 'react';
import { Code2, Smartphone, Paintbrush, Network, Cloud, ShoppingCart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'web-app',
      title: 'Web Application Development',
      description:
        'Robust, scalable, and secure web applications built using modern frameworks to deliver seamless user experiences and high performance.',
      icon: Code2,
    },
    {
      id: 'mobile-app',
      title: 'Mobile App Development',
      description:
        'Cross-platform mobile applications developed using Flutter and React Native for fast performance, native UI, and reduced time-to-market.',
      icon: Smartphone,
    },
    {
      id: 'ui-ux',
      title: 'UI / UX Design',
      description:
        'Intuitive, user-centric designs focused on usability, accessibility, and engaging experiences across web and mobile platforms.',
      icon: Paintbrush,
    },
    {
      id: 'api-backend',
      title: 'API & Backend Development',
      description:
        'Secure and scalable REST & GraphQL APIs with powerful backend architectures to support modern applications and integrations.',
      icon: Network,
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps Solutions',
      description:
        'Cloud-native deployments, CI/CD pipelines, and infrastructure optimization for reliable, scalable, and cost-effective systems.',
      icon: Cloud,
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Solutions',
      description:
        'Custom e-commerce platforms with secure payments, product management, order tracking, and seamless customer experience.',
      icon: ShoppingCart,
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-[#0B1120] py-14 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 text-slate-50 overflow-hidden border-b border-slate-800/70"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1240px] mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center">
            <span className="px-4 py-1.5 rounded-full border border-sky-500/30 text-sky-400 text-xs sm:text-sm font-semibold tracking-wide bg-sky-500/10">
              Services
            </span>
          </div>

          <h2 className="text-2xl min-[400px]:text-3xl md:text-4xl font-extrabold text-slate-50 mt-4 tracking-tight leading-tight">
            Our Software Development <br className="hidden sm:inline" /> Services
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm md:text-base mt-3 sm:mt-4 leading-relaxed max-w-2xl mx-auto px-1">
            We build scalable, secure, and high-performance web and mobile applications using modern
            technologies to help businesses innovate, grow, and succeed in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 mt-10 sm:mt-12 lg:mt-14">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-slate-800/45 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-sky-400/50 hover:bg-slate-800/70 hover:-translate-y-1 transition-all duration-300 shadow-[0_12px_32px_rgba(2,6,23,0.45)] flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-5 group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-blue-600 group-hover:text-slate-950 group-hover:border-transparent transition-all duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.9]" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-50 mb-2 group-hover:text-sky-400 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-[13.5px] leading-relaxed">
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
