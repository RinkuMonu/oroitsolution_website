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
      title: "Cloud Infrastructure & DevOps",
      description: "Scale with confidence using containerized deployments, Kubernetes orchestration, serverless microservices, and continuous automation pipelines.",
      tags: ["AWS", "GCP", "Kubernetes", "Terraform", "Docker"]
    },
    {
      icon: Code2,
      title: "Custom SaaS Development",
      description: "Full-lifecycle modern software engineering delivering secure multi-tenant web platforms, high-throughput APIs, and intuitive user experiences.",
      tags: ["React 19", "Next.js", "Node.js", "TypeScript", "PostgreSQL"]
    },
    {
      icon: Cpu,
      title: "Applied AI & Automation",
      description: "Harness LLMs, machine learning models, and automated business workflows to turn unstructured business telemetry into predictive intelligence.",
      tags: ["Generative AI", "NLP", "Python", "Vector DBs", "LangChain"]
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Cybersecurity",
      description: "Zero-trust network architecture, proactive threat intelligence, penetration audits, and SOC2/ISO-27001 compliance readiness frameworks.",
      tags: ["Zero-Trust", "Pen Testing", "IAM", "Compliance", "WAF"]
    },
    {
      icon: Layers,
      title: "ERP & CRM Integration",
      description: "Harmonize operations by connecting disparate enterprise ecosystems into synchronized data lakes and unified dashboards.",
      tags: ["SAP", "Salesforce", "GraphQL", "REST APIs", "Kafka"]
    },
    {
      icon: Headphones,
      title: "24/7 Managed Cloud Ops",
      description: "Round-the-clock proactive monitoring, incident remediation, database optimization, and high-availability SLA uptime management.",
      tags: ["99.99% SLA", "Monitoring", "Disaster Recovery", "SRE", "DevOps"]
    }
  ];

  return (
    <section
      id="services"
      className="py-14 sm:py-20 lg:py-24 bg-white text-black"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">

          <span className="inline-block text-xs sm:text-sm font-semibold text-blue-600 px-6 sm:px-8 py-2 sm:py-2.5 rounded-full border-2 border-blue-600">
            Our Core Expertise
          </span>

          <h2 className="text-2xl min-[480px]:text-3xl sm:text-4xl font-bold mt-4 sm:mt-6 tracking-tight text-black leading-tight">
            High-Performance IT Services For Growing Enterprises
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
            From modern cloud architectures to bespoke enterprise SaaS platforms, we build digital solutions that propel modern companies forward.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {services.map((svc, index) => {
            const Icon = svc.icon;

            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 ease-in-out flex flex-col justify-between"
              >

                <div>

                  {/* Service Icon */}
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-6 sm:mb-8 bg-white border-[3px] border-blue-600 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 ease-in-out shrink-0"
                  >
                    <Icon
                      className="w-7 h-7 sm:w-9 sm:h-9 transition-colors duration-300"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5 sm:mb-6">
                    {svc.description}
                  </p>

                </div>

                <div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                    {svc.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] sm:text-xs font-medium text-gray-700 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-gray-200 bg-gray-50/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Consultation Button */}
                  <button
                    onClick={() => onSelectService(svc.title)}
                    className="flex items-center text-xs sm:text-sm font-semibold text-black hover:text-blue-600 transition-colors cursor-pointer group-hover:text-blue-600"
                  >
                    <span>Request Consultation</span>
                    <ArrowUpRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
