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
    <section id="services" className="py-24 bg-gradient-to-b from-[#114ebd] to-[#0d3ea0] text-white relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-200 bg-blue-500/30 px-3.5 py-1.5 rounded-full border border-blue-300/30">
            Our Core Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight">
            High-Performance IT Services For Growing Enterprises
          </h2>
          <p className="mt-4 text-base sm:text-lg text-blue-100/90 leading-relaxed">
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
                className="bg-[#0a358c]/80 hover:bg-[#0c3e9e] border border-blue-400/25 hover:border-blue-300/50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-blue-600/40 border border-blue-400/30 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300">
                    <Icon className="w-7 h-7 text-blue-200 group-hover:text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                    {svc.title}
                  </h3>
                  
                  <p className="text-blue-100/80 text-sm leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {svc.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs font-medium bg-blue-900/60 text-blue-200 px-2.5 py-1 rounded-md border border-blue-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectService(svc.title)}
                    className="flex items-center text-sm font-semibold text-white/90 group-hover:text-white group-hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Request Consultation
                    <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-70 group-hover:opacity-100" />
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
