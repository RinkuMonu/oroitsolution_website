import React from 'react';
import {
  Code2,
  Smartphone,
  Paintbrush,
  Network,
  Cloud,
  ShoppingCart
} from 'lucide-react';

export default function Services() {

  const services = [
    {
      icon: Code2,
      title: "Web Application Development",
      description: "Robust, scalable, and secure web applications built using modern frameworks to deliver seamless user experiences and high performance."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications developed using Flutter and React Native for fast performance, native UI, and reduced time-to-market."
    },
    {
      icon: Paintbrush,
      title: "UI / UX Design",
      description: "Intuitive, user-centric designs focused on usability, accessibility, and engaging experiences across web and mobile platforms."
    },
    {
      icon: Network,
      title: "API & Backend Development",
      description: "Secure and scalable REST & GraphQL APIs with powerful backend architectures to support modern applications and integrations."
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Solutions",
      description: "Cloud-native deployments, CI/CD pipelines, and infrastructure optimization for reliable, scalable, and cost-effective systems."
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Custom e-commerce platforms with secure payments, product management, order tracking, and seamless customer experience."
    }
  ];

  return (
    <section
      id="services"
      className="py-20 sm:py-24 bg-white text-black"
    >

      <div className="max-w-[1250px] mx-auto px-5 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">

          <span className="inline-block text-sm font-semibold text-blue-600 px-7 py-2 rounded-full border border-blue-600">
            Services
          </span>

          <h2 className="text-4xl sm:text-4xl font-bold mt-5 text-black leading-tight">
            Our Software Development Services
          </h2>

          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            We build scalable, secure, and high-performance web and mobile
            applications using modern technologies to help businesses innovate,
            grow, and succeed in the digital world.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">

          {services.map((svc, index) => {

            const Icon = svc.icon;

            return (

              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl p-8
                min-h-[300px]
                flex flex-col
                transition-all duration-300 ease-in-out
                hover:-translate-y-2
                hover:border-blue-500
                hover:shadow-xl
                cursor-pointer"
              >

                {/* Service Icon */}
                <div
                  className="w-[72px] h-[72px] rounded-full
                  flex items-center justify-center mb-6
                  bg-white border-[1.5px] border-blue-600
                  text-blue-600
                  transition-all duration-300 ease-in-out
                  group-hover:bg-blue-600
                  group-hover:text-white
                  group-hover:scale-105"
                >

                  <Icon
                    className="w-8 h-8 transition-all duration-300"
                    strokeWidth={1.9}
                  />

                </div>

                {/* Service Title */}
                <h3 className="text-lg font-semibold text-black mb-4
                  transition-colors duration-300
                  group-hover:text-blue-600"
                >
                  {svc.title}
                </h3>

                {/* Service Description */}
                <p className="text-[15px] text-gray-600 leading-relaxed">
                  {svc.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}
