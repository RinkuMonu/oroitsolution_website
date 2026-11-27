import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Code2,
  Compass,
  Cpu,
  CreditCard,
  Globe,
  Headphones,
  Layers,
  Lock,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Users,
  Zap,
} from 'lucide-react';

const statistics = [
  { icon: Rocket, value: 250, suffix: '+', label: 'Solutions Delivered', decimals: 0 },
  { icon: ShieldCheck, value: 99.9, suffix: '%', label: 'Platform Reliability', decimals: 1 },
  { icon: Users, value: 50, suffix: '+', label: 'Enterprise Clients', decimals: 0 },
  { icon: Headphones, value: 24, suffix: '/7', label: 'Active Monitoring & Support', decimals: 0 },
];

const storyPoints = [
  'Compliance-driven digital operations',
  'Transparent pricing & status tracking',
  'Responsive customer & partner support',
  'Modern cloud-ready architecture',
];

const missionVision = [
  {
    icon: Compass,
    eyebrow: 'Looking Ahead',
    title: 'Our Vision',
    text: 'To become a trusted technology and digital payments partner by delivering innovative, accessible solutions that simplify everyday transactions and empower sustainable business growth.',
  },
  {
    icon: Target,
    eyebrow: 'What Drives Us',
    title: 'Our Mission',
    text: 'Our mission is to design and operate secure, user-friendly platforms for digital payments and enterprise software while maintaining transparency, reliability, and long-term value for every user.',
  },
];

const offerings = [
  {
    icon: CreditCard,
    title: 'Utility Bills & Recharges',
    description:
      'Fast, dependable everyday bill payments, BBPS transactions, and mobile/DTH recharges with clear status tracking.',
    href: '/product',
  },
  {
    icon: Layers,
    title: 'Enterprise Software & SaaS',
    description:
      'Scalable cloud-based software suites engineered for workflow automation, billing clarity, and high availability.',
    href: '/software',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'High-performance Android and iOS applications designed to make digital services effortless on every screen.',
    href: '/mobile-app',
  },
  {
    icon: Code2,
    title: 'Web Application Engineering',
    description:
      'Modern, responsive web portals and customer dashboards built with clean code and resilient API integrations.',
    href: '/web-application',
  },
  {
    icon: Cpu,
    title: 'AI & ML Automation',
    description:
      'Intelligent document workflows, predictive analytics, and automation pipelines tailored for real business impact.',
    href: '/ai-ml',
  },
  {
    icon: Users,
    title: 'CRM & HRM Platforms',
    description:
      'Unified customer relationship and workforce management systems built for growing teams and multi-branch operations.',
    href: '/crm-hrm',
  },
];

const benefits = [
  {
    icon: Server,
    title: 'Scalable Cloud Architecture',
    text: 'Multi-region cloud deployment practices built to handle growing transaction volumes without slowing down.',
  },
  {
    icon: Lock,
    title: 'Security-First Foundation',
    text: 'Encryption, role-based permissions, and continuous auditing protect sensitive personal and operational data.',
  },
  {
    icon: Zap,
    title: 'Fast & Reliable Execution',
    text: 'Optimized workflows and low-latency APIs ensure smooth settlements, updates, and real-time reporting.',
  },
  {
    icon: Globe,
    title: 'Accessible Across Devices',
    text: 'Consistent, responsive interfaces engineered for desktop operators, field partners, and mobile end users.',
  },
  {
    icon: Layers,
    title: 'Clean API Ecosystem',
    text: 'Well-structured documentation and modular endpoints simplify integration with third-party billers and ERPs.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Partner Support',
    text: 'Responsive grievance handling and technical assistance from Monday to Saturday to keep teams moving.',
  },
];

const securityPoints = [
  { icon: Lock, text: 'End-to-End TLS Encryption' },
  { icon: ShieldCheck, text: 'Zero-Trust Access Controls' },
  { icon: Server, text: '24/7 Active Monitoring' },
  { icon: CheckCircle2, text: 'Compliance-Ready Logs' },
];

const coreValues = [
  {
    number: '01',
    icon: ShieldCheck,
    title: 'Integrity & Transparency',
    description:
      'Clear pricing, honest communication, and documented policies across every transaction and partnership.',
  },
  {
    number: '02',
    icon: Lock,
    title: 'Security-First Engineering',
    description:
      'Protecting sensitive personal and financial data through encryption, verification, and continuous monitoring.',
  },
  {
    number: '03',
    icon: Globe,
    title: 'Reliable Accessibility',
    description:
      'Building responsive platforms that work smoothly for individuals, agents, and growing enterprises.',
  },
  {
    number: '04',
    icon: Headphones,
    title: 'Customer-Centric Support',
    description:
      'Dedicated grievance handling and responsive assistance whenever users need transaction or technical help.',
  },
];

const journeySteps = [
  {
    title: 'Discovery & Architecture',
    text: 'Understanding operational bottlenecks, compliance requirements, and end-user journeys before writing a single line of code.',
  },
  {
    title: 'Iterative Product Engineering',
    text: 'Building clean, modular SaaS, mobile, web, and payment workflows with transparent milestone reviews.',
  },
  {
    title: 'Security & QA Validation',
    text: 'Rigorous API, load, and access-control testing to ensure stability under real-world business workloads.',
  },
  {
    title: 'Deployment & Continuous Scale',
    text: 'Smooth production rollouts backed by ongoing performance monitoring, enhancements, and dedicated technical support.',
  },
];

const faqs = [
  {
    question: 'What services does Apphany Technologies PVT.LTD provide?',
    answer:
      'Apphany builds and operates digital payment workflows, utility/BBPS settlements, SaaS software suites, mobile and web applications, AI automation pipelines, and CRM/HRM platforms for modern businesses.',
  },
  {
    question: 'How does Apphany ensure transaction and data security?',
    answer:
      'Our systems use TLS transport encryption, role-based access controls, token-based authentication, audit logging, and continuous uptime monitoring aligned with Indian digital compliance practices.',
  },
  {
    question: 'Can businesses integrate custom workflows or APIs with Apphany platforms?',
    answer:
      'Yes. We provide modular API integrations and custom software engineering tailored to your existing ERP, billing, or partner management systems.',
  },
  {
    question: 'What are your customer and technical support hours?',
    answer:
      'Our support and engineering desk operates Monday through Saturday from 9:30 AM to 6:30 PM IST, alongside automated 24/7 platform health monitoring.',
  },
  {
    question: 'How can I partner with or contact Apphany Technologies PVT.LTD?',
    answer:
      'You can reach our team through the Contact page or email us directly at support@apphany.in with your project, software, or service requirements.',
  },
];

function AnimatedNumber({ value, suffix, decimals = 0 }) {
  const ref = useRef(null);
  const hasAnimatedRef = useRef(false);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimatedRef.current) return undefined;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      hasAnimatedRef.current = true;
      return undefined;
    }

    let frameId;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimatedRef.current) return;
        hasAnimatedRef.current = true;
        observer.disconnect();

        const start = performance.now();
        const duration = 1000;
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(value * eased);
          if (progress < 1) {
            frameId = requestAnimationFrame(step);
          } else {
            setDisplay(value);
          }
        };
        frameId = requestAnimationFrame(step);
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function SectionHeading({ label, title, text, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sky-400">{label}</p>
      <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-50 sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-base leading-7 text-slate-400">{text}</p>}
    </div>
  );
}

function PlatformVisual() {
  return (
    <div
      className="relative mx-auto h-[420px] sm:h-[440px] w-full max-w-[500px]"
      aria-label="Illustration of Apphany digital technology and payment services"
    >
      {/* Subtle Ambient Rings */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/20 bg-sky-500/5" />
      <div className="absolute left-1/2 top-1/2 h-88 w-88 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-800/70" />

      {/* Center Device Mockup */}
      <div className="absolute left-1/2 top-1/2 z-10 w-[236px] sm:w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-[32px] border-[6px] border-slate-800 bg-[#0B1120] p-4 shadow-[0_25px_65px_rgba(2,6,23,0.9)] ring-1 ring-sky-400/20">
        <div className="mx-auto h-1.5 w-16 rounded-full bg-slate-700" />
        <img
          src="/apphany-logo-navbar.png"
          alt="Apphany"
          className="mx-auto mt-4 h-7 w-auto object-contain"
        />
        <p className="mt-3 text-center text-xs font-bold text-slate-100">
          Smart Digital Operations
        </p>

        <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/90 p-3 text-center">
          <div className="flex justify-between text-[10px] text-slate-400">
            <span>System Status</span>
            <span className="font-semibold text-emerald-400">99.9% Active</span>
          </div>
          <p className="mt-2 text-xl font-extrabold text-sky-400">Unified Hub</p>
          <p className="mt-1 text-[10px] text-slate-400">Payments, SaaS &amp; Cloud APIs</p>
        </div>

        <Link
          to="/software"
          className="mt-3 block rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 py-2.5 text-center text-xs font-bold text-slate-950 shadow-[0_0_20px_rgba(14,165,233,0.28)] transition hover:brightness-110"
        >
          Explore Platform
        </Link>

        <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
          <Lock className="h-3 w-3 text-sky-400" /> Encrypted &amp; Reliable
        </div>
      </div>

      {/* Left Floating Badge */}
      <div className="absolute -left-1 sm:left-[1%] top-[18%] z-20 rounded-2xl border border-slate-700/80 bg-slate-900/90 backdrop-blur-md p-3.5 sm:p-4 shadow-[0_16px_35px_rgba(2,6,23,0.7)]">
        <Code2 className="h-5 w-5 text-sky-400" />
        <p className="mt-2 text-xs font-bold text-slate-100">SaaS &amp; Web</p>
        <p className="mt-0.5 text-[10px] text-slate-400">Scalable Cloud Apps</p>
      </div>

      {/* Top Right Floating Badge */}
      <div className="absolute -right-1 sm:right-[1%] top-[12%] z-20 rounded-2xl border border-slate-700/80 bg-slate-900/90 backdrop-blur-md p-3.5 sm:p-4 shadow-[0_16px_35px_rgba(2,6,23,0.7)]">
        <CreditCard className="h-5 w-5 text-emerald-400" />
        <p className="mt-2 text-xs font-bold text-slate-100">Digital Payments</p>
        <p className="mt-0.5 text-[10px] text-slate-400">Bills &amp; Utility APIs</p>
      </div>

      {/* Bottom Right Floating Badge */}
      <div className="absolute -right-1 sm:right-[0%] bottom-[7%] z-20 rounded-2xl border border-slate-700/80 bg-slate-900/90 backdrop-blur-md px-3.5 py-3 shadow-[0_16px_35px_rgba(2,6,23,0.75)]">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-sky-500/15 border border-sky-400/30 text-sky-400">
            <ShieldCheck className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-bold text-slate-100">Built for Trust</p>
            <p className="text-[10px] text-slate-400">Mobile, AI &amp; CRM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutUs() {
  const [storyImgError, setStoryImgError] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <PolicyLayout
      title="About Us"
      subtitle="ORO IT SOLUTION PVT. LTD."
      intro={
        <>
          <strong className="font-semibold text-gray-800">ORO IT SOLUTION PVT. LTD.</strong> is a technology-driven
          software company delivering reliable, scalable, and secure digital solutions for businesses. We specialize in
          building SaaS platforms, enterprise applications, and fintech-enabled systems that help organizations grow and
          operate efficiently.
        </>
      }
      footerNote="At ORO IT SOLUTION PVT.LTD,we are committed to delivering technology that creates measurable impact and long-term value."
    >
      {aboutSections.map((section) => (
        <section key={section.title}>
          <h2 className="text-[15px] sm:text-base font-bold text-gray-900 mb-1.5">
            {section.title}
          </h2>
          {section.items ? (
            <ul className="space-y-1 text-[13px] sm:text-sm text-gray-600 leading-relaxed">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section >

    {/* 4. Mission & Vision Section */ }
    < section className = "bg-[#0F172A] px-4 py-20 sm:px-6 lg:px-8 border-b border-slate-800/80" >
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        {missionVision.map(({ icon: Icon, eyebrow, title, text }) => (
          <article
            key={eyebrow}
            className="group h-full rounded-[24px] border border-slate-800 bg-slate-900/75 p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:shadow-[0_18px_40px_rgba(2,6,23,0.65)] sm:p-9"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl border border-sky-500/30 bg-sky-500/10 text-sky-400 transition group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-blue-600 group-hover:text-slate-950">
              <Icon className="h-6 w-6" />
            </span>
            <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.17em] text-sky-400">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-slate-50">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">{text}</p>
          </article>
        ))}
      </div>
      </section >

    {/* 5. What We Do / Our Services Grid */ }
    < section className = "bg-[#0B1120] px-4 py-20 sm:px-6 lg:px-8 lg:py-24 border-b border-slate-800/80" >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="What We Do"
          title="Technology & payment solutions built for real-world needs"
          text="Whether serving everyday consumers or enterprise teams, our platforms bring speed, security, and clarity together."
          centered
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map(({ icon: Icon, title, description, href }) => (
            <article
              key={title}
              className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:shadow-[0_16px_34px_rgba(2,6,23,0.55)]"
            >
              <div>
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-sky-500/30 bg-sky-500/10 text-sky-400">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-slate-50">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
              </div>
              <Link
                to={href}
                aria-label={`Explore ${title}`}
                className="mt-6 inline-grid h-9 w-9 place-items-center rounded-full border border-slate-700 text-sky-400 transition group-hover:border-sky-400 group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-blue-600 group-hover:text-slate-950"
              >
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
      </section >

    {/* 6. Why Apphany / Benefits Grid */ }
    < section className = "bg-[#0F172A] px-4 py-20 sm:px-6 lg:px-8 lg:py-24 border-b border-slate-800/80" >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Why Apphany"
          title="Designed for Secure and Effortless Operations"
          centered
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-900/75 p-5 transition hover:border-sky-400/40"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-extrabold text-slate-50">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      </section >

    {/* 7. Security First Spotlight */ }
    < section className = "bg-[#0B1120] px-4 py-20 sm:px-6 lg:px-8 lg:py-24 border-b border-slate-800/80" >
      <div className="mx-auto grid max-w-7xl items-center gap-12 rounded-[28px] border border-sky-500/30 bg-gradient-to-br from-slate-900 via-[#0f2341] to-[#0B1120] px-6 py-10 shadow-[0_20px_50px_rgba(2,6,23,0.75)] sm:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-14 lg:py-14">
        <div>
          <SectionHeading
            label="Security First"
            title="Your Trust Is at the Centre of Every Transaction"
          />
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
            Apphany follows rigorous security engineering practices to provide a dependable
            digital platform. Every layer is structured to protect sensitive credentials and keep
            transaction histories verifiable and transparent.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {securityPoints.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 rounded-xl border border-slate-700/70 bg-[#0B1120]/70 p-3.5"
              >
                <Icon className="h-4 w-4 shrink-0 text-sky-400" />
                <span className="text-sm font-semibold text-slate-100">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="mx-auto grid h-44 w-44 place-items-center rounded-full border border-sky-400/25 bg-sky-500/10 shadow-[0_0_45px_rgba(14,165,233,0.18)]">
            <ShieldCheck className="h-20 w-20 text-sky-400" strokeWidth={1.4} />
          </div>
          <div className="relative -mt-6 rounded-2xl border border-slate-700/80 bg-[#0B1120]/95 p-5 text-slate-100 shadow-[0_20px_45px_rgba(2,6,23,0.8)] backdrop-blur-md">
            <div className="flex items-center gap-2 text-sm font-extrabold text-emerald-400">
              <CheckCircle2 className="h-5 w-5" /> Transaction &amp; API Verified
            </div>
            <div className="mt-4 flex items-end justify-between border-t border-slate-800 pt-4">
              <div>
                <p className="text-xs text-slate-400">Platform Encryption</p>
                <p className="mt-1 text-2xl font-extrabold text-slate-50">AES-256 TLS</p>
              </div>
              <div className="text-right">
                <Lock className="ml-auto h-4 w-4 text-sky-400" />
                <p className="mt-1 text-[10px] text-slate-400">Secured by Apphany</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section >

    {/* 8. Core Values Section */ }
    < section className = "bg-[#0F172A] px-4 py-20 sm:px-6 lg:px-8 lg:py-24 border-b border-slate-800/80" >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Our Core Values"
          title="Principles behind every product we build"
          centered
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map(({ number, icon: Icon, title, description }) => (
            <article
              key={title}
              className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/75 p-6 shadow-[0_8px_22px_rgba(2,6,23,0.45)]"
            >
              <span className="absolute right-4 top-2 text-5xl font-black text-slate-800/80 select-none">
                {number}
              </span>
              <Icon className="relative h-5 w-5 text-sky-400" />
              <h3 className="relative mt-6 text-lg font-extrabold text-slate-50">{title}</h3>
              <p className="relative mt-2 text-sm leading-6 text-slate-400">{description}</p>
            </article>
          ))}
        </div>
      </div>
      </section >

    {/* 9. Our Journey Timeline */ }
    < section className = "bg-[#0B1120] px-4 py-20 sm:px-6 lg:px-8 lg:py-24 border-b border-slate-800/80" >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Our Process"
          title="Building Reliable Systems Step by Step"
          centered
        />
        <ol className="relative mt-14 grid gap-0 lg:grid-cols-4">
          <div
            className="absolute left-4 top-0 h-full w-px bg-slate-800 lg:left-[12.5%] lg:top-4 lg:h-px lg:w-3/4"
            aria-hidden="true"
          />
          {journeySteps.map(({ title, text }, index) => (
            <li
              key={title}
              className="relative grid grid-cols-[34px_1fr] gap-4 pb-9 last:pb-0 lg:block lg:px-4 lg:pb-0 lg:text-center"
            >
              <span className="relative z-10 grid h-8 w-8 place-items-center rounded-full border-4 border-[#0B1120] bg-gradient-to-r from-sky-400 to-blue-600 text-[11px] font-extrabold text-slate-950 shadow lg:mx-auto">
                {index + 1}
              </span>
              <div className="lg:mt-5">
                <h3 className="font-extrabold text-slate-50">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      </section >

    {/* 10. Work With Apphany CTA Banner */ }
    < section className = "bg-[#0F172A] px-4 py-16 sm:px-6 lg:px-8 lg:py-20 border-b border-slate-800/80" >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[28px] border border-sky-500/30 bg-gradient-to-br from-slate-900 via-[#0f2442] to-slate-900 px-7 py-11 text-slate-50 shadow-[0_20px_50px_rgba(2,6,23,0.75)] sm:px-11 lg:px-14 lg:py-14">
          <div className="pointer-events-none absolute -right-14 -top-14 h-56 w-56 rounded-full border-[32px] border-sky-400/15" />
          <div className="pointer-events-none absolute bottom-5 right-[26%] hidden rotate-6 rounded-xl border border-sky-400/20 bg-slate-900/80 p-4 lg:block">
            <Zap className="h-6 w-6 text-sky-400" />
          </div>

          <div className="relative max-w-3xl">
            <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-sky-400">
              Work With Apphany
            </p>
            <h2 className="text-2xl font-extrabold sm:text-4xl text-slate-50">
              Have questions or partnership ideas?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              At Apphany Technologies PVT.LTD, we are committed to delivering technology and
              digital payment services that create measurable impact and long-term value.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_24px_rgba(14,165,233,0.3)] transition hover:-translate-y-0.5 hover:brightness-110"
              >
                Get in Touch <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/software"
                className="rounded-xl border border-slate-700 bg-slate-900/75 px-6 py-3.5 text-sm font-bold text-slate-100 transition hover:border-sky-400/50 hover:bg-slate-800/80"
              >
                Explore Software Suite
              </Link>
            </div>
          </div>
        </div>
      </div>
      </section >

    {/* 11. Frequently Asked Questions */ }
    < section className = "bg-[#0B1120] px-4 py-20 sm:px-6 lg:px-8" >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          text="Clear answers to common questions about Apphany Technologies PVT.LTD, our software platforms, and our support services."
          centered
        />
        <div className="mt-10 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/75 transition hover:border-sky-500/30"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-sm sm:text-base font-bold text-slate-100 cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-sky-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-slate-800/80 px-6 py-4 text-sm leading-7 text-slate-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      </section >
    </div >
  );
}
