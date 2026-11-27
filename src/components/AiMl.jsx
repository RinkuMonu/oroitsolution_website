import React from 'react';
import {
  Cpu,
  BarChart3,
  Settings,
  Bot,
  Briefcase,
  Award,
  Star,
  Headphones,
} from 'lucide-react';
import SolutionPageLayout from './SolutionPageLayout';

function AiHeroVisual() {
  return (
    <div className="relative w-full max-w-[300px] min-[380px]:max-w-[330px] min-[420px]:max-w-[390px] sm:max-w-[440px] h-[230px] min-[380px]:h-[270px] sm:h-[320px] flex items-center justify-center">
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-sky-500/20 via-blue-500/10 to-transparent blur-xl" />

      {/* Floating AI badge */}
      <div className="absolute top-4 left-1 min-[380px]:top-6 min-[380px]:left-3 sm:left-5 px-2.5 py-1.5 min-[380px]:px-3 min-[380px]:py-2 rounded-xl bg-slate-900/90 shadow-lg border border-slate-700 flex items-center gap-1.5 text-sky-400 font-extrabold text-[11px] min-[380px]:text-xs sm:text-sm z-20">
        <Cpu className="w-3.5 h-3.5 min-[380px]:w-4 min-[380px]:h-4" />
        <span>AI</span>
      </div>

      {/* Floating Chart card */}
      <div className="absolute bottom-5 left-2 min-[380px]:bottom-8 min-[380px]:left-4 sm:left-6 w-10 h-10 min-[380px]:w-12 min-[380px]:h-12 rounded-xl sm:rounded-2xl bg-slate-900/90 shadow-lg border border-slate-700 flex items-center justify-center text-sky-400 z-20">
        <BarChart3 className="w-5 h-5 min-[380px]:w-6 min-[380px]:h-6" />
      </div>

      {/* Floating Gear card */}
      <div className="absolute top-5 right-2 min-[380px]:top-8 min-[380px]:right-4 sm:right-6 w-10 h-10 min-[380px]:w-11 min-[380px]:h-11 rounded-xl sm:rounded-2xl bg-slate-900/90 shadow-lg border border-slate-700 flex items-center justify-center text-sky-400 z-20">
        <Settings className="w-4 h-4 min-[380px]:w-5 min-[380px]:h-5" />
      </div>

      {/* Floating Helper Robot card */}
      <div className="absolute bottom-4 right-1 min-[380px]:bottom-6 min-[380px]:right-3 sm:right-5 w-11 h-11 min-[380px]:w-14 min-[380px]:h-14 rounded-xl sm:rounded-2xl bg-slate-900/90 shadow-lg border border-sky-400/30 flex items-center justify-center text-sky-400 z-20">
        <Bot className="w-5 h-5 min-[380px]:w-7 min-[380px]:h-7" />
      </div>

      {/* Central Neural Brain + Chip Base */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-32 h-32 min-[380px]:w-36 min-[380px]:h-36 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-br from-[#0f2442] to-[#0B1120] shadow-[0_24px_55px_rgba(14,165,233,0.28)] border-2 border-sky-400/40 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_70%)]" />
          <svg viewBox="0 0 100 100" className="w-20 h-20 min-[380px]:w-24 min-[380px]:h-24 sm:w-28 sm:h-28 text-white relative z-10" fill="none" aria-hidden="true">
            <path
              d="M49 22c-9 0-16 6-17 14-5 2-9 7-9 13 0 6 4 11 9 13 1 8 8 14 17 14V22Z"
              stroke="#38BDF8"
              strokeWidth="2.4"
              fill="rgba(56,189,248,0.12)"
            />
            <path
              d="M51 22c9 0 16 6 17 14 5 2 9 7 9 13 0 6-4 11-9 13-1 8-8 14-17 14V22Z"
              stroke="#7DD3FC"
              strokeWidth="2.4"
              fill="rgba(56,189,248,0.08)"
            />
            <circle cx="38" cy="40" r="2.6" fill="#FFFFFF" />
            <circle cx="34" cy="54" r="2.6" fill="#FFFFFF" />
            <circle cx="62" cy="40" r="2.6" fill="#FFFFFF" />
            <circle cx="66" cy="54" r="2.6" fill="#FFFFFF" />
            <path d="M38 40l11 8m-15 6l15-6m13-8l-11 8m15 6l-15-6" stroke="#FFFFFF" strokeWidth="1.6" strokeOpacity="0.8" />
          </svg>
        </div>
        <div className="w-36 min-[380px]:w-40 sm:w-48 h-3 sm:h-3.5 rounded-full bg-sky-400/25 blur-[3px] -mt-1.5" />
      </div>
    </div>
  );
}

function AiShowcaseVisual() {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0f2442] via-[#0F172A] to-[#0B1120] border border-slate-800 shadow-[0_18px_45px_rgba(2,6,23,0.7)] min-h-[200px] min-[380px]:min-h-[240px] sm:min-h-[290px]">
      <img
        src="/ai-showcase.jpg"
        alt="AI and human collaboration digital orb"
        className="w-full h-full min-h-[200px] min-[380px]:min-h-[240px] sm:min-h-[290px] object-cover opacity-85"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/50 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

const aiTechLogos = [
  {
    name: 'Python',
    logo: (
      <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" aria-hidden="true">
        <path d="M24 8c-7 0-6.5 3-6.5 3v4.5h6.7v1.5H14.8s-5.3-.6-5.3 6.6c0 7.2 4.6 6.9 4.6 6.9h2.8v-3.5s-.2-4.6 4.5-4.6h7.2s4.4.1 4.4-4.2V12.5S33.7 8 24 8Z" fill="#3776AB" />
        <path d="M24 40c7 0 6.5-3 6.5-3v-4.5h-6.7V31h9.4s5.3.6 5.3-6.6c0-7.2-4.6-6.9-4.6-6.9h-2.8V21s.2 4.6-4.5 4.6h-7.2s-4.4-.1-4.4 4.2v5.7S14.3 40 24 40Z" fill="#FFD43B" />
        <circle cx="20.5" cy="12" r="1.4" fill="#FFFFFF" />
        <circle cx="27.5" cy="36" r="1.4" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: 'TensorFlow',
    logo: (
      <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" aria-hidden="true">
        <path d="M24 8l14 8v7l-9-5.2v21.2l-5 2.8V8Z" fill="#FF6F00" />
        <path d="M24 8L10 16v7l9-5.2v21.2l5 2.8V8Z" fill="#FFA000" />
        <path d="M29 24l6 3.4v6l-6-3.4v-6Z" fill="#FF6F00" />
      </svg>
    ),
  },
  {
    name: 'PyTorch',
    logo: (
      <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" aria-hidden="true">
        <path d="M29.8 14.5a11.5 11.5 0 1 1-11.6 0l2.8-2.8 2.4 2.4-2.8 2.8a8.1 8.1 0 1 0 9.2-2.4Z" fill="#EE4C2C" />
        <circle cx="28" cy="11.5" r="2.3" fill="#EE4C2C" />
      </svg>
    ),
  },
  {
    name: 'OpenAI',
    logo: (
      <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="15" stroke="#38BDF8" strokeWidth="2.2" />
        <path d="M24 11l11 6.5v13L24 37l-11-6.5v-13L24 11Z" stroke="#38BDF8" strokeWidth="2.1" />
        <circle cx="24" cy="24" r="4" stroke="#38BDF8" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: 'Scikit-learn',
    logo: (
      <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" aria-hidden="true">
        <circle cx="20" cy="24" r="10" fill="#F89939" fillOpacity="0.9" />
        <circle cx="30" cy="26" r="8" fill="#3499CD" fillOpacity="0.88" />
      </svg>
    ),
  },
];

export default function AiMl() {
  return (
    <SolutionPageLayout
      hero={{
        titleLine1: 'AI/ML',
        titleLine2: 'Solutions',
        subtitle:
          'Harness the power of Artificial Intelligence and Machine Learning to innovate and automate.',
        secondaryLabel: 'Learn More',
        visual: <AiHeroVisual />,
      }}
      whyChoose={{
        heading: 'Intelligent Solutions for a Smarter Future',
        description:
          'From predictive analytics to intelligent automation, our AI/ML solutions help you make data-driven decisions and stay ahead.',
        ctaLabel: 'Explore Solutions',
        visual: <AiShowcaseVisual />,
      }}
      technologies={{
        eyebrow: 'Our AI/ML Technologies',
        heading: 'Build Smarter with Advanced Technologies',
        description:
          'We leverage the best AI/ML tools and frameworks to create intelligent and scalable solutions.',
        items: aiTechLogos,
      }}
      process={{
        eyebrow: 'Our Approach',
        heading: 'From Data to Intelligence',
        steps: [
          { title: 'Analyze', description: 'Understand your data & goals.' },
          { title: 'Train', description: 'Build and train models.' },
          { title: 'Integrate', description: 'Embed AI into your workflow.' },
          { title: 'Innovate', description: 'Scale and grow with intelligence.' },
        ],
      }}
      ctaBanner={{
        icon: (
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center text-white font-extrabold text-lg shrink-0 shadow-md">
            AI
          </div>
        ),
        heading: "Let's Build Intelligent Solutions Together",
        subtitle: 'Turn your ideas into AI-powered innovations.',
      }}
      stats={[
        { icon: Briefcase, value: '200+', label: 'AI Projects' },
        { icon: Award, value: '95%', label: 'Accuracy Rate' },
        { icon: Star, value: '4+ Years', label: 'Expertise' },
        { icon: Headphones, value: '24/7', label: 'Support' },
      ]}
      demoModal={{
        badge: 'AI & ML Capabilities',
        title: 'Applied Artificial Intelligence by Apphany Technologies PVT.LTD',
        description:
          'We design production AI pipelines, LLM integrations, and predictive analytics tailored to real business workflows.',
        points: [
          'Custom ML models for forecasting, anomaly detection, and recommendation engines',
          'LLM chatbots, document intelligence, and workflow automation using Python & OpenAI',
          'End-to-end MLOps integration into your existing web, mobile, or ERP applications',
        ],
      }}
    />
  );
}
