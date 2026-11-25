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
      className="py-16 sm:py-20 lg:py-24 bg-white text-gray-900"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">

          <span className="inline-block text-xs font-semibold text-[#155cd5] px-5 py-1.5 rounded-full border border-[#155cd5] bg-blue-50/40 tracking-wide">
            Our Core Expertise
          </span>

          <h2 className="text-2xl min-[480px]:text-3xl sm:text-4xl lg:text-[40px] font-extrabold mt-4 tracking-tight text-gray-900 leading-tight">
            High-Performance IT Services For Growing Enterprises
          </h2>

          <p className="mt-3.5 text-xs sm:text-sm lg:text-[15px] text-gray-500 leading-relaxed font-normal">
            From modern cloud architectures to bespoke enterprise SaaS platforms, we build digital solutions that propel modern companies forward.
          </p>

        </div>

        {/* Services Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {services.map((svc, index) => {
            const Icon = svc.icon;

            return (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-3xl p-7 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >

                <div>

                  {/* Circular Outline Icon */}
                  <div
                    className="w-14 h-14 rounded-full border border-blue-500 flex items-center justify-center text-blue-600 mb-6 bg-white"
                  >
                    <Icon
                      className="w-6 h-6 stroke-[1.8]"
                    />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg sm:text-[19px] font-bold text-gray-900 mb-2.5 tracking-tight">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13.5px] text-gray-500 leading-relaxed mb-6 font-normal">
                    {svc.description}
                  </p>

                </div>

                <div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {svc.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium text-gray-600 px-3 py-1 rounded-full border border-gray-200 bg-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Request Consultation Link */}
                  <button
                    onClick={() => onSelectService && onSelectService(svc.title)}
                    className="flex items-center text-xs sm:text-[13px] font-semibold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer group"
                  >
                    <span>Request Consultation</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-gray-600 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
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
