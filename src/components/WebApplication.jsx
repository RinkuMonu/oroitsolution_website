import React from 'react';
import {
  Gauge,
  ShieldCheck,
  MonitorSmartphone,
  SearchCheck,
  Code2,
  Cloud,
  Settings,
  Rocket,
  Briefcase,
  Award,
  Star,
  Headphones,
} from 'lucide-react';
import SolutionPageLayout from './SolutionPageLayout';

function WebHeroVisual() {
  return (
    <div className="relative w-full max-w-[300px] min-[380px]:max-w-[330px] min-[420px]:max-w-[390px] sm:max-w-[440px] h-[230px] min-[380px]:h-[270px] sm:h-[320px] flex items-center justify-center">
      {/* Subtle orbital ring */}
      <div className="absolute inset-4 sm:inset-6 rounded-full border border-sky-500/20" />

      {/* Floating </> badge */}
      <div className="absolute top-4 left-1 min-[380px]:top-6 min-[380px]:left-3 sm:left-5 w-10 h-10 min-[380px]:w-11 min-[380px]:h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-900/90 shadow-lg border border-slate-700 flex items-center justify-center text-sky-400 z-20">
        <Code2 className="w-4 h-4 min-[380px]:w-5 min-[380px]:h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
      </div>

      {/* Floating Cloud badge */}
      <div className="absolute top-3 right-1 min-[380px]:top-4 min-[380px]:right-4 sm:right-6 w-10 h-10 min-[380px]:w-11 min-[380px]:h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-900/90 shadow-lg border border-slate-700 flex items-center justify-center text-sky-400 z-20">
        <Cloud className="w-4 h-4 min-[380px]:w-5 min-[380px]:h-5 sm:w-6 sm:h-6" />
      </div>

      {/* Floating Settings badge */}
      <div className="absolute bottom-5 right-1 min-[380px]:bottom-8 min-[380px]:right-3 sm:right-5 w-10 h-10 min-[380px]:w-11 min-[380px]:h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-900/90 shadow-lg border border-slate-700 flex items-center justify-center text-sky-400 z-20">
        <Settings className="w-4 h-4 min-[380px]:w-5 min-[380px]:h-5 sm:w-6 sm:h-6" />
      </div>

      {/* Modern Laptop Mockup */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Screen */}
        <div className="w-[180px] min-[380px]:w-[210px] min-[420px]:w-[245px] sm:w-[275px] h-[122px] min-[380px]:h-[142px] min-[420px]:h-[160px] sm:h-[180px] rounded-t-2xl bg-slate-900 p-2 sm:p-2.5 shadow-[0_20px_45px_rgba(14,165,233,0.22)] border-2 border-sky-400/40">
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#0B1120] via-[#0f2442] to-[#0B1120] flex flex-col items-center justify-center relative overflow-hidden">
            {/* Browser dots */}
            <div className="absolute top-2 left-2.5 sm:top-2.5 sm:left-3 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400/80" />
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
            </div>
            {/* Glowing Globe */}
            <svg viewBox="0 0 80 80" className="w-16 h-16 min-[380px]:w-20 min-[380px]:h-20 sm:w-24 sm:h-24 text-sky-400" fill="none" aria-hidden="true">
              <circle cx="40" cy="40" r="28" stroke="currentColor" strokeWidth="2" strokeOpacity="0.9" />
              <ellipse cx="40" cy="40" rx="14" ry="28" stroke="currentColor" strokeWidth="1.8" strokeOpacity="0.75" />
              <path d="M12 40h56M16 27h48M16 53h48" stroke="currentColor" strokeWidth="1.6" strokeOpacity="0.7" />
            </svg>
          </div>
        </div>
        {/* Laptop Base */}
        <div className="w-[210px] min-[380px]:w-[245px] min-[420px]:w-[285px] sm:w-[320px] h-3 sm:h-4 rounded-b-xl bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 shadow-lg border-t border-slate-500/40 flex items-center justify-center">
          <div className="w-12 sm:w-14 h-1 rounded-full bg-slate-400/60" />
        </div>
      </div>
    </div>
  );
}

const webTechLogos = [
  {
    name: 'React',
    logo: (
      <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="3.4" fill="#00D8FF" />
        <ellipse cx="24" cy="24" rx="17" ry="6.6" stroke="#00D8FF" strokeWidth="2.2" />
        <ellipse cx="24" cy="24" rx="17" ry="6.6" transform="rotate(60 24 24)" stroke="#00D8FF" strokeWidth="2.2" />
        <ellipse cx="24" cy="24" rx="17" ry="6.6" transform="rotate(120 24 24)" stroke="#00D8FF" strokeWidth="2.2" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    logo: (
      <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="18" fill="#111827" stroke="#38BDF8" strokeWidth="1.5" />
        <path d="M18 32V17l15 19" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 17v10" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Laravel',
    logo: (
      <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" aria-hidden="true">
        <path d="M10 14l8-4 8 4v10l8-4 6 3-14 8v9l-8-4-8-4V14Z" stroke="#FF2D20" strokeWidth="2.4" strokeLinejoin="round" fill="#FF2D20" fillOpacity="0.12" />
        <path d="M18 10v18l8 4" stroke="#FF2D20" strokeWidth="2.1" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    logo: (
      <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" aria-hidden="true">
        <path d="M24 7l14.5 8.4v17.2L24 41 9.5 32.6V15.4L24 7Z" fill="#539E43" />
        <text x="24" y="26.5" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="800" fontFamily="sans-serif">
          Node.js
        </text>
      </svg>
    ),
  },
  {
    name: 'Django',
    logo: (
      <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" aria-hidden="true">
        <rect x="7" y="7" width="34" height="34" rx="9" fill="#092E20" />
        <text x="24" y="27" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="800" fontFamily="sans-serif">
          django
        </text>
      </svg>
    ),
  },
];

export default function WebApplication() {
  return (
    <SolutionPageLayout
      hero={{
        titleLine1: 'Web Application',
        titleLine2: 'Solutions',
        subtitle:
          'Build powerful, scalable, and secure web applications that grow with your business.',
        secondaryLabel: 'Watch Demo',
        visual: <WebHeroVisual />,
      }}
      whyChoose={{
        heading: 'Modern Web Solutions for a Digital Tomorrow',
        description:
          'From dynamic websites to complex web platforms, we deliver high-performance solutions tailored to your business needs.',
        ctaLabel: 'Learn More',
        features: [
          { icon: Gauge, label: 'High Performance & Speed' },
          { icon: ShieldCheck, label: 'Secure & Scalable' },
          { icon: MonitorSmartphone, label: 'Responsive Design' },
          { icon: SearchCheck, label: 'SEO Friendly' },
        ],
      }}
      technologies={{
        eyebrow: 'Our Web Technologies',
        heading: 'Cutting-Edge Technologies for Modern Web Apps',
        description:
          'We use the latest technologies to build fast, secure, and scalable web applications.',
        items: webTechLogos,
      }}
      process={{
        eyebrow: 'Our Development Process',
        heading: 'From Concept to Deployment',
        steps: [
          { title: 'Plan', description: 'Understand your requirements.' },
          { title: 'Design', description: 'Create intuitive UI/UX.' },
          { title: 'Develop', description: 'Build with latest technologies.' },
          { title: 'Deploy', description: 'Launch & grow your business.' },
        ],
      }}
      ctaBanner={{
        icon: (
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center text-white shrink-0 shadow-md">
            <Rocket className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
        ),
        heading: 'Ready to Build Your Web Application?',
        subtitle: "Let's turn your idea into a powerful web solution together.",
      }}
      stats={[
        { icon: Briefcase, value: '500+', label: 'Web Projects' },
        { icon: Award, value: '99%', label: 'Client Satisfaction' },
        { icon: Star, value: '5+ Years', label: 'of Experience' },
        { icon: Headphones, value: '24/7', label: 'Support' },
      ]}
      demoModal={{
        badge: 'Web Application Showcase',
        title: 'Full-Stack Web Engineering by Apphany Technologies PVT.LTD',
        description:
          'We architect fast, responsive, and SEO-ready web platforms engineered for modern enterprises and growing startups.',
        points: [
          'Modern frontends with React & Next.js and resilient backends in Node.js, Laravel & Django',
          'Enterprise security, role-based access control, and cloud-ready auto-scaling',
          'Responsive UI across mobile, tablet, and desktop with Core Web Vitals optimization',
        ],
      }}
    />
  );
}
