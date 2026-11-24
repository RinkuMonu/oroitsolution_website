import React from 'react';
import {
  Cloud,
  Code2,
  Cpu,
  ShieldCheck,
  Layers,
  Headphones,
  ArrowUpRight
} from 'lucide-react';

export default function Services({ onSelectService }) {
  const services = [
    {
      icon: Cloud,
      title: "Cloud & DevOps Architecture",
      description: "Automated CI/CD pipelines, multi-cloud Kubernetes clusters, and microservices design optimized for speed, reliability, and cost-efficiency.",
      tags: ["AWS", "Azure", "Docker", "Kubernetes"]
    },
    {
      icon: Layers,
      title: "Custom SaaS Development",
      description: "End-to-end multi-tenant SaaS engineering with secure billing, role-based access controls, and modular scalable architectures.",
      tags: ["React", "Node.js", "PostgreSQL", "Next.js"]
    },
    {
      icon: Cpu,
      title: "AI & Workflow Automation",
      description: "Integrating intelligent LLM agents, automated data pipelines, and custom AI tools that slash manual processing time by up to 80%.",
      tags: ["Python", "OpenAI", "LangChain", "RPA"]
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Cybersecurity",
      description: "Zero-trust network security, automated vulnerability audits, penetration testing, and regulatory compliance (GDPR, HIPAA, SOC 2).",
      tags: ["Zero-Trust", "Pen Testing", "SOC 2", "Data Encryption"]
    },
    {
      icon: Code2,
      title: "Enterprise Software Engineering",
      description: "Custom ERPs, CRM platforms, and legacy system modernization tailored to eliminate operational friction and boost productivity.",
      tags: ["Architecture", "APIs", "Microservices", "Scalability"]
    },
    {
      icon: Headphones,
      title: "24/7 Managed IT & Support",
      description: "Continuous infrastructure monitoring, instant incident response, and proactive maintenance to guarantee 99.99% system availability.",
      tags: ["24/7 Monitoring", "SLA Guarantee", "Incident Management"]
    }
  ];

  return (
    <section
      id="services"
      className="py-20 sm:py-24 bg-white text-black"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          <span className="inline-block text-sm font-semibold text-blue-600 px-8 py-2.5 rounded-full border-2 border-blue-600">
            Our Core Expertise
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold mt-6 tracking-tight text-black leading-tight">
            High-Performance IT Services For Growing Enterprises
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            From modern cloud architectures to bespoke enterprise SaaS platforms, we build digital solutions that propel modern companies forward.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((svc, index) => {
            const Icon = svc.icon;

            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-in-out flex flex-col justify-between"
              >

                <div>

                  {/* Service Icon */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-8 bg-white border-[3px] border-blue-600 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 ease-in-out"
                  >
                    <Icon
                      className="w-9 h-9 transition-colors duration-500"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-semibold text-black mb-4">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-gray-600 leading-relaxed mb-6">
                    {svc.description}
                  </p>

                </div>

                <div>

                  
                 {/* Technology Tags */}
     <div className="flex flex-wrap gap-2 mb-6">

             {svc.tags.map((tag, tIdx) => (
               <span
                 key={tIdx}
                 className="text-xs font-medium text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 bg-white"
               >
                 {tag}
               </span>
             ))}

             </div>

                  {/* Consultation Button */}
                  <button
                    onClick={() => onSelectService(svc.title)}
                    className="flex items-center text-sm font-semibold text-black hover:text-gray-600 transition-all duration-300 cursor-pointer"
                  >
                    Request Consultation

                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </button>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
