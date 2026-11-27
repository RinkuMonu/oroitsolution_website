import React from 'react';
import {
  Users,
  Workflow,
  BarChart3,
  TrendingUp,
  Handshake,
  Briefcase,
  Award,
  Star,
  Headphones,
} from 'lucide-react';
import SolutionPageLayout from './SolutionPageLayout';

function CrmHeroVisual() {
  return (
    <div className="relative w-full max-w-[300px] min-[380px]:max-w-[330px] min-[420px]:max-w-[390px] sm:max-w-[440px] h-[230px] min-[380px]:h-[270px] sm:h-[320px] flex items-center justify-center">
      <div className="absolute inset-4 sm:inset-6 rounded-full border border-sky-500/20" />

      {/* Floating Users badge */}
      <div className="absolute top-3 left-0 min-[380px]:top-6 min-[380px]:left-2 sm:left-4 w-10 h-10 min-[380px]:w-11 min-[380px]:h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-900/90 shadow-lg border border-slate-700 flex items-center justify-center text-sky-400 z-20">
        <Users className="w-4 h-4 min-[380px]:w-5 min-[380px]:h-5 sm:w-6 sm:h-6" />
      </div>

      {/* Floating Handshake badge */}
      <div className="absolute bottom-4 right-0 min-[380px]:bottom-7 min-[380px]:right-3 sm:right-5 w-10 h-10 min-[380px]:w-11 min-[380px]:h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-900/90 shadow-lg border border-slate-700 flex items-center justify-center text-sky-400 z-20">
        <Handshake className="w-4 h-4 min-[380px]:w-5 min-[380px]:h-5 sm:w-6 sm:h-6" />
      </div>

      {/* Floating Growth badge */}
      <div className="absolute top-4 right-0 min-[380px]:top-8 min-[380px]:right-3 sm:right-5 w-10 h-10 min-[380px]:w-11 min-[380px]:h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-900/90 shadow-lg border border-slate-700 flex items-center justify-center text-sky-400 z-20">
        <TrendingUp className="w-4 h-4 min-[380px]:w-5 min-[380px]:h-5 sm:w-6 sm:h-6" />
      </div>

      {/* Dashboard Tablet Mockup */}
      <div className="relative z-10 w-[195px] min-[380px]:w-[230px] min-[420px]:w-[265px] sm:w-[295px] rounded-2xl bg-slate-900 p-2 min-[380px]:p-2.5 shadow-[0_24px_55px_rgba(14,165,233,0.22)] border-2 border-sky-400/40 -rotate-3">
        <div className="rounded-xl bg-[#0B1120] p-3 min-[380px]:p-3.5 sm:p-4 space-y-2.5 sm:space-y-3 border border-slate-800">
          {/* Header Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 min-[380px]:w-7 min-[380px]:h-7 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 flex items-center justify-center">
                <Users className="w-3 h-3 min-[380px]:w-3.5 min-[380px]:h-3.5" />
              </span>
              <div className="space-y-1">
                <div className="w-12 min-[380px]:w-16 h-2 rounded-full bg-slate-200" />
                <div className="w-8 min-[380px]:w-10 h-1.5 rounded-full bg-slate-600" />
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[9px] font-bold">
              +28%
            </span>
          </div>

          {/* Mini Bar Chart */}
          <div className="h-16 min-[380px]:h-20 sm:h-24 rounded-lg bg-slate-900/90 border border-slate-800 p-2 sm:p-2.5 flex items-end justify-between gap-1.5 sm:gap-2">
            {[42, 65, 50, 82, 68, 95].map((height, i) => (
              <div
                key={i}
                style={{ height: `${height}%` }}
                className="flex-1 rounded-t-md bg-gradient-to-t from-sky-500 to-cyan-300"
              />
            ))}
          </div>

          {/* Progress Rows */}
          <div className="space-y-1.5">
            <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
              <div className="w-4/5 h-full bg-sky-500 rounded-full" />
            </div>
            <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
              <div className="w-3/5 h-full bg-cyan-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const crmTechLogos = [
  {
    name: 'Salesforce',
    logo: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" aria-hidden="true">
        <path
          d="M19.5 14a7.5 7.5 0 0 1 13.7 2.2 6 6 0 0 1 6.8 5.9 6 6 0 0 1-5.8 6H14.5a5.5 5.5 0 0 1-.8-10.9A7.4 7.4 0 0 1 19.5 14Z"
          fill="#00A1E0"
        />
        <text x="24" y="25" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">
          CRM
        </text>
      </svg>
    ),
  },
  {
    name: 'Zoho CRM',
    logo: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" aria-hidden="true">
        <rect x="6" y="16" width="9" height="16" rx="2" fill="#E42527" />
        <rect x="15" y="14" width="9" height="16" rx="2" fill="#00A758" />
        <rect x="24" y="17" width="9" height="16" rx="2" fill="#226DB4" />
        <rect x="33" y="15" width="9" height="16" rx="2" fill="#F9B21D" />
      </svg>
    ),
  },
  {
    name: 'Odoo',
    logo: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="15" fill="#714B67" />
        <text x="24" y="27.5" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800" fontFamily="sans-serif">
          odoo
        </text>
      </svg>
    ),
  },
  {
    name: 'HubSpot',
    logo: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" aria-hidden="true">
        <circle cx="25" cy="25" r="7.5" stroke="#FF7A59" strokeWidth="3.2" />
        <circle cx="25" cy="12" r="3" fill="#FF7A59" />
        <circle cx="14" cy="20" r="3" fill="#FF7A59" />
        <circle cx="35" cy="32" r="3.2" fill="#FF7A59" />
        <path d="M25 15v3M16.5 21.5l2.5 1.5M30.5 29l2.5 1.8" stroke="#FF7A59" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'BambooHR',
    logo: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" aria-hidden="true">
        <rect x="21" y="10" width="6" height="28" rx="3" fill="#73C41D" />
        <path d="M27 18c5-4 10-2 10 2-4 3-8 2-10-2Z" fill="#8CD932" />
        <path d="M21 24c-5-4-10-2-10 2 4 3 8 2 10-2Z" fill="#61AC14" />
      </svg>
    ),
  },
];

export default function CrmHrm() {
  return (
    <SolutionPageLayout
      hero={{
        titleLine1: 'CRM/HRM',
        titleLine2: 'Solutions',
        subtitle:
          'Streamline your business processes with intelligent CRM and HRM solutions.',
        secondaryLabel: 'Watch Demo',
        visual: <CrmHeroVisual />,
      }}
      whyChoose={{
        heading: 'Smarter Business Management',
        description:
          'Enhance customer relationships and optimize HR operations with our integrated CRM & HRM solutions.',
        ctaLabel: 'Learn More',
        features: [
          { icon: Users, label: 'Manage Customers' },
          { icon: Workflow, label: 'Automate HR Workflows' },
          { icon: BarChart3, label: 'Track Performance' },
          { icon: TrendingUp, label: 'Boost Productivity' },
        ],
      }}
      technologies={{
        eyebrow: 'Our Solutions Stack',
        heading: 'Powerful Tools for Better Business',
        description:
          'We use industry-leading technologies to deliver robust and scalable CRM & HRM solutions.',
        items: crmTechLogos,
      }}
      process={{
        eyebrow: 'Our Process',
        heading: 'Simple Steps to Success',
        steps: [
          { title: 'Plan', description: 'Understand your business needs.' },
          { title: 'Customize', description: 'Tailor the solution for you.' },
          { title: 'Implement', description: 'Integrate and configure.' },
          { title: 'Grow', description: 'Scale your business with confidence.' },
        ],
      }}
      ctaBanner={{
        icon: (
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center text-white shrink-0 shadow-md">
            <Users className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
        ),
        heading: 'Ready to Transform Your Business?',
        subtitle: "Let's build a smarter, more efficient workplace together.",
      }}
      stats={[
        { icon: Briefcase, value: '300+', label: 'Happy Clients' },
        { icon: Award, value: '98%', label: 'Retention Rate' },
        { icon: Star, value: '5+ Years', label: 'Experience' },
        { icon: Headphones, value: '24/7', label: 'Support' },
      ]}
      demoModal={{
        badge: 'CRM & HRM Platform',
        title: 'Unified Customer & Workforce Suite',
        description:
          'Automate sales pipelines, onboarding, attendance, payroll, and team performance tracking inside one seamless platform.',
        points: [
          'Lead management, pipeline analytics, automated follow-ups, and client portals',
          'Employee lifecycle management: attendance, leave, payroll, and KPI appraisals',
          'Custom integrations with Salesforce, Zoho CRM, Odoo, HubSpot, and BambooHR',
        ],
      }}
    />
  );
}
