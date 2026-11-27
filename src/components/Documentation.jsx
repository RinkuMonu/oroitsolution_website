import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Rocket,
  Layers,
  Package,
  CreditCard,
  Code2,
  Wrench,
  HelpCircle,
  Headphones,
  ArrowRight,
  Info,
  FileText,
  Smartphone,
  Globe,
  Cpu,
  Users,
  ShieldCheck,
  MapPin,
  Mail,
  Clock,
} from 'lucide-react';

const docSections = [
  { id: 'introduction', title: 'Introduction', icon: <BookOpen /> },
  { id: 'getting-started', title: 'Getting Started & Account', icon: <Rocket /> },
  { id: 'solutions-services', title: 'Solutions & Services', icon: <Layers /> },
  { id: 'software-products', title: 'Software & Pricing Plans', icon: <Package /> },
  { id: 'payments-workflow', title: 'Payments, BBPS & Refunds', icon: <CreditCard /> },
  { id: 'api-security', title: 'API Integration & Security', icon: <Code2 /> },
  { id: 'troubleshooting', title: 'Troubleshooting', icon: <Wrench /> },
  { id: 'faqs', title: 'FAQs', icon: <HelpCircle /> },
  { id: 'support', title: 'Support & Office Info', icon: <Headphones /> },
];

const gettingStartedSteps = [
  {
    step: '01',
    title: 'Register Personal or Business Account',
    detail:
      'Open Register from the top navigation bar, choose Personal or Business, enter your name, email, 10-digit mobile number, and address (State, City, Pincode), and accept our Terms & Privacy Policy.',
  },
  {
    step: '02',
    title: 'Secure Sign-In & Credentials',
    detail:
      'Use a strong password (minimum 6 characters) and keep your login password and OTPs strictly confidential. Existing users can sign in directly via Log In.',
  },
  {
    step: '03',
    title: 'Explore Solutions & Free Trial',
    detail:
      'Browse our Software Catalog, custom IT Solutions, or Product pricing plans—all SaaS plans include a 14-day free trial with no credit card required.',
  },
  {
    step: '04',
    title: 'Onboard & Monitor Operations',
    detail:
      'Connect with our team through Contact Us for custom software scoping, API sandbox credentials, or live transaction & settlement tracking.',
  },
];

const solutionGuides = [
  {
    icon: <Globe className="h-5 w-5" />,
    title: 'Web Application Solutions',
    href: '/web-application',
    stack: 'React • Next.js • Laravel • Node.js • Django',
    description:
      'High-performance, responsive, SEO-friendly web platforms and enterprise portals engineered for speed and security.',
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: 'Mobile App Solutions',
    href: '/mobile-app',
    stack: 'Flutter • React Native • Swift • Kotlin • Java',
    description:
      'Native and cross-platform iOS & Android applications with intuitive UI/UX design and ongoing maintenance.',
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    title: 'AI / ML Solutions',
    href: '/ai-ml',
    stack: 'Python • TensorFlow • PyTorch • OpenAI • Scikit-learn',
    description:
      'Intelligent workflow automation, document extraction, custom LLMs, and predictive analytics pipelines.',
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: 'CRM / HRM Solutions',
    href: '/crm-hrm',
    stack: 'Salesforce • Zoho CRM • Odoo • HubSpot • BambooHR',
    description:
      'Customer lifecycle management, automated lead routing, payroll, attendance, and workforce analytics.',
  },
];

const coreServices = [
  'Web Application Development — Modern, scalable web portals and business platforms.',
  'Mobile App Development — Cross-platform Flutter & React Native and native iOS/Android apps.',
  'UI / UX Design — Accessible, user-centric interfaces across web and mobile screens.',
  'API & Backend Development — Secure REST & GraphQL APIs built for third-party integrations.',
  'Cloud & DevOps Solutions — Cloud-native deployments, CI/CD pipelines, and 99.9% uptime monitoring.',
  'E-commerce Solutions — Online storefronts with payment gateways, coupons, and order/inventory tracking.',
];

const softwareCatalogItems = [
  {
    name: 'CRM Software',
    summary: 'Lead management, sales pipelines, automated follow-ups, and customer analytics.',
  },
  {
    name: 'HRM Software',
    summary: 'Payroll automation, attendance & leave tracking, salary processing, and HR reporting.',
  },
  {
    name: 'School Management',
    summary: 'Admissions, fee management, attendance, exam results, timetables, and parent portal.',
  },
  {
    name: 'Online Examination',
    summary: 'Auto evaluation, question bank management, timer control, and instant result analytics.',
  },
  {
    name: 'Cafe Billing',
    summary: 'Fast POS billing, GST invoicing, inventory & stock alerts, and multi-user access.',
  },
  {
    name: 'E-commerce & Custom Software',
    summary: 'Tailor-made B2C storefronts and custom enterprise software built to your exact workflows.',
  },
];

const pricingOverview = [
  {
    plan: 'HRMS App',
    audience: 'For HR Teams',
    price: '₹3,400/mo',
    highlights: 'User Management, Employee Joining, Offer Letter Generation, CT Creation, and optional Document, Leave & Attendance modules.',
  },
  {
    plan: 'E-Commerce',
    audience: 'For Retailers (Most Popular)',
    price: '₹2,600/mo',
    highlights: 'Dashboard Analytics, Product Listing & Detail Pages, Cart Management, plus optional Filters, Orders, Payments & Inventory.',
  },
  {
    plan: 'Lead Management System',
    audience: 'For Sales Teams',
    price: '₹4,600/mo',
    highlights: 'Lead Capture, Lead Tracking, Lead Scoring, Reporting & Analytics, plus Custom Pipeline, Email & Activity Tracking.',
  },
  {
    plan: 'Apphany Technologies Academy',
    audience: 'Internship Program for Students',
    price: '₹10,500/mo',
    highlights: 'Registration, Online & Personal (1-to-1) Classes, Basic Coding Knowledge, Daily Coding Exam, Certificate & Placement track.',
  },
];

const faqs = [
  {
    q: 'How do I start a free trial or change my software plan?',
    a: 'All plans on our Product page include a 14-day free trial with no credit card required. You can upgrade or downgrade your plan at any time, and yearly billing saves 20%.',
  },
  {
    q: 'What payment methods are accepted, and are setup or API fees refundable?',
    a: 'We accept major credit cards, UPI, and bank transfers. Please note that one-time API testing charges and registration fees are non-refundable once provisioned.',
  },
  {
    q: 'What should I do if a BBPS bill payment or recharge shows Pending?',
    a: 'Do not refresh or repeat the payment immediately. Save your Transaction/Order ID and wait for bank or biller reconciliation. Failed or duplicate debits are reviewed and refunded under our Cancellation & Refund Policy.',
  },
  {
    q: 'How do I request custom software development or API sandbox access?',
    a: 'Visit the Contact Us page or email support@apphany.in with your project scope, company details, and required endpoints.',
  },
  {
    q: 'How does Apphany handle KYC, privacy, and regulatory compliance?',
    a: 'Personal, KYC (Aadhaar/PAN), and financial data are encrypted and handled strictly in accordance with our Privacy Policy and applicable RBI, NPCI, and UIDAI guidelines.',
  },
];

export default function Documentation() {
  const [activeSection, setActiveSection] = useState('introduction');
  const sectionRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    const observed = sectionRefs.current.filter(Boolean);
    observed.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      if (
        observed.length > 0 &&
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40
      ) {
        setActiveSection(observed[observed.length - 1].id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observed.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const setRef = (index) => (el) => {
    sectionRefs.current[index] = el;
  };

  const cardClass = (id) =>
    `scroll-mt-28 mb-5 rounded-2xl border bg-slate-900/70 p-5 transition-all duration-300 sm:p-7 ${
      activeSection === id
        ? 'border-sky-400/50 shadow-[0_14px_35px_rgba(14,165,233,0.12)]'
        : 'border-slate-800 shadow-[0_8px_24px_rgba(2,6,23,0.45)] hover:border-slate-700'
    }`;

  return (
    <section className="min-h-screen bg-[#0B1120] text-slate-50">
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-[#0B1120] px-4 py-14 text-slate-50 sm:py-18 border-b border-slate-800/80">
        <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-sky-500/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-400">
            <BookOpen className="h-4 w-4" /> Platform &amp; Developer Guide
          </div>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-50 sm:text-5xl">
            Documentation
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Complete reference for Apphany Technologies PVT.LTD — covering our IT solutions,
            software products, SaaS pricing plans, digital payment workflows, API security, and
            customer support.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-[#0F172A]/60 border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            {/* Sticky Sidebar */}
            <aside className="lg:w-[30%] xl:w-[27%]">
              <div className="sticky top-24 rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-md p-4 shadow-[0_14px_35px_rgba(2,6,23,0.65)] sm:p-5 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto no-scrollbar">
                <h2 className="mb-4 hidden items-center border-b border-slate-800 pb-4 text-lg font-extrabold text-slate-50 lg:flex">
                  <Info className="w-5 h-5 mr-2 text-sky-400" />
                  On this page
                </h2>
                <ul className="flex touch-pan-x gap-2 overflow-x-auto pb-2 no-scrollbar lg:grid lg:grid-cols-1 lg:gap-1.5 lg:overflow-visible lg:pb-0">
                  {docSections.map((section) => {
                    const isActive = activeSection === section.id;
                    return (
                      <li key={section.id} className="shrink-0 lg:w-full">
                        <button
                          type="button"
                          onClick={() => scrollToSection(section.id)}
                          className={`flex w-auto items-center whitespace-nowrap rounded-xl px-3 py-2.5 text-left text-sm transition-all duration-200 cursor-pointer lg:w-full lg:whitespace-normal ${
                            isActive
                              ? 'bg-gradient-to-r from-sky-400 to-blue-600 font-bold text-slate-950 shadow-[0_0_16px_rgba(14,165,233,0.28)]'
                              : 'font-medium text-slate-400 hover:bg-slate-800/70 hover:text-sky-300'
                          }`}
                        >
                          <span
                            className={`mr-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg [&>svg]:h-4 [&>svg]:w-4 ${
                              isActive
                                ? 'bg-slate-950/15 text-slate-950'
                                : 'bg-sky-500/10 text-sky-400'
                            }`}
                          >
                            {section.icon}
                          </span>
                          {section.title}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>

            {/* Main Documentation Cards */}
            <main className="min-w-0 lg:w-[70%] xl:w-[73%]">
              {/* Overview Header Card */}
              <div className="mb-8 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/75 shadow-[0_18px_45px_rgba(2,6,23,0.65)]">
                <div className="border-b border-slate-800 bg-slate-900/90 p-6 sm:p-8">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                      <FileText className="h-8 w-8" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-400">
                        Knowledge Base
                      </p>
                      <h2 className="mt-1 text-2xl font-extrabold text-slate-50 sm:text-3xl">
                        Apphany Documentation Center
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        Smart IT solutions, SaaS products, and secure digital payment documentation
                        for businesses, students, partners, and developers.
                      </p>
                    </div>
                  </div>
                </div>
                <dl className="grid gap-px bg-slate-800 sm:grid-cols-3">
                  <div className="bg-[#0B1120] p-5 sm:p-6">
                    <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Platform Operator
                    </dt>
                    <dd className="mt-2 font-bold text-slate-50">Apphany Technologies PVT.LTD</dd>
                    <dd className="mt-1 text-xs text-slate-400">99.9% Uptime SLA</dd>
                  </div>
                  <div className="bg-[#0B1120] p-5 sm:p-6">
                    <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Support Channel
                    </dt>
                    <dd className="mt-2 font-bold text-sky-400">support@apphany.in</dd>
                    <dd className="mt-1 text-xs text-slate-400">Mon–Sat, 9:30 AM–6:30 PM</dd>
                  </div>
                  <div className="bg-[#0B1120] p-5 sm:p-6">
                    <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Head Office
                    </dt>
                    <dd className="mt-2 font-bold text-slate-50">Jaipur, Rajasthan</dd>
                    <dd className="mt-1 text-xs text-slate-400">Chordia&apos;s Kosmos, Badarwas – 302019</dd>
                  </div>
                </dl>
              </div>

              {/* 1. Introduction */}
              <div id="introduction" ref={setRef(0)} className={cardClass('introduction')}>
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-extrabold text-slate-50 sm:text-2xl">Introduction</h2>
                </div>
                <div className="space-y-3 text-[15px] leading-7 text-slate-300">
                  <p>
                    Welcome to the{' '}
                    <strong className="font-semibold text-slate-50">
                      Apphany Technologies PVT.LTD
                    </strong>{' '}
                    Documentation Center. We build secure, scalable, and intelligent software
                    platforms alongside accessible digital and financial services.
                  </p>
                  <p>
                    Across our website, you can explore custom engineering services (Web, Mobile,
                    UI/UX, APIs, Cloud &amp; DevOps, E-commerce), industry-ready SaaS products
                    (CRM, HRM, School Management, Online Examination, Cafe Billing), our Student
                    Internship Academy, and supported utility, BBPS, recharge, PAN, and fintech
                    workflows.
                  </p>
                </div>
              </div>

              {/* 2. Getting Started & Account Setup */}
              <div id="getting-started" ref={setRef(1)} className={cardClass('getting-started')}>
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-extrabold text-slate-50 sm:text-2xl">
                    Getting Started &amp; Account Setup
                  </h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {gettingStartedSteps.map((item) => (
                    <div
                      key={item.step}
                      className="rounded-xl border border-slate-800 bg-[#0B1120]/80 p-4"
                    >
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-r from-sky-400 to-blue-600 text-xs font-extrabold text-slate-950">
                        {item.step}
                      </span>
                      <h3 className="mt-3 text-base font-bold text-slate-50">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-6 text-slate-400">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Solutions & Services */}
              <div
                id="solutions-services"
                ref={setRef(2)}
                className={cardClass('solutions-services')}
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
                    <Layers className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-extrabold text-slate-50 sm:text-2xl">
                    Solutions &amp; Engineering Services
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {solutionGuides.map((doc) => (
                    <Link
                      key={doc.title}
                      to={doc.href}
                      className="group flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0B1120]/80 p-4 transition-all hover:border-sky-400/50 hover:bg-slate-800/70"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/15 border border-sky-500/30 text-sky-400">
                            {doc.icon}
                          </span>
                          <ArrowRight className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-sky-400" />
                        </div>
                        <h3 className="mt-3 text-base font-extrabold text-slate-50 group-hover:text-sky-400">
                          {doc.title}
                        </h3>
                        <p className="mt-1 text-xs font-semibold text-sky-400/90">{doc.stack}</p>
                        <p className="mt-1.5 text-sm leading-6 text-slate-400">{doc.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-slate-800 bg-[#0B1120]/70 p-4 sm:p-5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-sky-400 mb-3">
                    Core Software Development Services
                  </h3>
                  <ul className="space-y-2.5 text-sm leading-6 text-slate-300">
                    {coreServices.map((service) => (
                      <li key={service} className="flex gap-3">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 4. Software Catalog & Pricing Plans */}
              <div
                id="software-products"
                ref={setRef(3)}
                className={cardClass('software-products')}
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
                    <Package className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-extrabold text-slate-50 sm:text-2xl">
                    Software Catalog &amp; Pricing Plans
                  </h2>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-sky-400">
                      Ready-to-Deploy Software Suite
                    </h3>
                    <Link
                      to="/software"
                      className="text-xs font-semibold text-sky-400 hover:underline inline-flex items-center gap-1"
                    >
                      View Software Page <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {softwareCatalogItems.map((item) => (
                      <div
                        key={item.name}
                        className="rounded-xl border border-slate-800 bg-[#0B1120]/80 p-3.5"
                      >
                        <h4 className="text-sm font-bold text-slate-50">{item.name}</h4>
                        <p className="mt-1 text-xs leading-5 text-slate-400">{item.summary}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-sky-400">
                      Product Plans &amp; Academy
                    </h3>
                    <Link
                      to="/product"
                      className="text-xs font-semibold text-sky-400 hover:underline inline-flex items-center gap-1"
                    >
                      View Pricing Page <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {pricingOverview.map((item) => (
                      <div
                        key={item.plan}
                        className="rounded-xl border border-slate-800 bg-[#0B1120]/80 p-4"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
                            {item.audience}
                          </span>
                          <span className="text-sm font-extrabold text-slate-50">{item.price}</span>
                        </div>
                        <h4 className="mt-1 text-base font-bold text-slate-50">{item.plan}</h4>
                        <p className="mt-1.5 text-xs leading-5 text-slate-400">{item.highlights}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-xs leading-5 text-slate-400">
                    All product plans support Monthly and Yearly billing (save 20% on Yearly), a
                    14-day free trial with no credit card required, and payments via major credit
                    cards, UPI, and bank transfers.
                  </p>
                </div>
              </div>

              {/* 5. Payments, BBPS & Refunds */}
              <div
                id="payments-workflow"
                ref={setRef(4)}
                className={cardClass('payments-workflow')}
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-extrabold text-slate-50 sm:text-2xl">
                    Payments, BBPS &amp; Refund Workflow
                  </h2>
                </div>
                <p className="mb-4 text-[15px] leading-7 text-slate-300">
                  In addition to SaaS and custom software, Apphany supports utility bill payments,
                  BBPS transactions, mobile/DTH recharges, bookings, insurance assistance, PAN
                  services, and credit or loan-related services. Transaction statuses follow four
                  clear stages:
                </p>
                <ul className="space-y-3 text-[15px] leading-7 text-slate-300">
                  {[
                    'Initiated — Request validated and forwarded securely to the payment gateway, bank, or biller network.',
                    'Pending — Awaiting confirmation from the bank, operator, or BBPS central unit. Do not refresh or repeat the payment while pending.',
                    'Completed — Service delivered successfully with confirmation and transaction reference ID. Real-time services become non-cancellable once processed.',
                    'Failed / Reversed — Eligible failed, duplicate, or pre-processing cancelled payments are acknowledged within 24–48 business hours and refunded to the original payment method in 5–10 business days after approval.',
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs leading-6 text-slate-400">
                  Note: One-time registration fees, API testing charges, completed real-time
                  services, and errors caused by incorrect user-entered account or mobile numbers are
                  non-refundable. See our{' '}
                  <Link
                    to="/cancellation-refund-policy"
                    className="font-semibold text-sky-400 hover:underline"
                  >
                    Cancellation &amp; Refund Policy
                  </Link>{' '}
                  for full details.
                </p>
              </div>

              {/* 6. API Integration & Security */}
              <div id="api-security" ref={setRef(5)} className={cardClass('api-security')}>
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-extrabold text-slate-50 sm:text-2xl">
                    API Integration, Security &amp; Compliance
                  </h2>
                </div>
                <ul className="space-y-3 text-[15px] leading-7 text-slate-300">
                  {[
                    'REST & GraphQL APIs — Clean, documented endpoints designed for reliable bank, biller, payment gateway, and enterprise SaaS integrations.',
                    'Zero-Trust Encryption & Token Vault — TLS/HTTPS is enforced in transit with AES-256 encryption and role-based access controls; keep bearer tokens and client secrets strictly server-side.',
                    'Sandbox & Evaluation Access — Evaluate API flows in sandbox mode before production activation (sandbox/API testing setup charges are non-refundable once credentials are provisioned).',
                    'Webhooks & Idempotency — Verify callback signatures and attach idempotency keys to avoid duplicate orders during network retries.',
                    'Regulatory Alignment — KYC, AML, and sensitive data workflows follow applicable RBI, NPCI, and UIDAI compliance expectations and our Privacy Policy.',
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 7. Troubleshooting */}
              <div id="troubleshooting" ref={setRef(6)} className={cardClass('troubleshooting')}>
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
                    <Wrench className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-extrabold text-slate-50 sm:text-2xl">
                    Troubleshooting
                  </h2>
                </div>
                <ul className="space-y-3 text-[15px] leading-7 text-slate-300">
                  {[
                    'Registration & Contact Form Validation — Ensure your email is valid, mobile number is exactly 10 digits, passwords are at least 6 characters and match, and the Terms & Conditions checkbox is selected.',
                    'Payment Deducted While Pending — Do not pay a second time. Note your Order/Transaction ID, date, amount, and service type, and wait for reconciliation or contact support@apphany.in.',
                    'API Authorization Errors (401/403) — Confirm your bearer token is active, Content-Type is application/json, and your server IP matches your whitelisted configuration.',
                    'Before Initiating a Chargeback — Please reach out to Apphany Technologies PVT.LTD first with your transaction reference so our team can verify and resolve the case directly.',
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 8. FAQs */}
              <div id="faqs" ref={setRef(7)} className={cardClass('faqs')}>
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
                    <HelpCircle className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-extrabold text-slate-50 sm:text-2xl">
                    Frequently Asked Questions
                  </h2>
                </div>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div
                      key={faq.q}
                      className="rounded-xl border border-slate-800 bg-[#0B1120]/80 p-4"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-50">{faq.q}</h3>
                      <p className="mt-1.5 text-sm leading-6 text-slate-400">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 9. Support & Office Information */}
              <div id="support" ref={setRef(8)} className={cardClass('support')}>
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
                    <Headphones className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-extrabold text-slate-50 sm:text-2xl">
                    Support, Policies &amp; Office Info
                  </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 mb-5">
                  <div className="rounded-xl border border-slate-800 bg-[#0B1120]/80 p-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400">
                      <Mail className="h-4 w-4" /> Support &amp; Grievance Email
                    </div>
                    <a
                      href="mailto:support@apphany.in"
                      className="block text-sm font-bold text-slate-50 hover:text-sky-400"
                    >
                      support@apphany.in
                    </a>
                    <p className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Clock className="h-3.5 w-3.5 text-sky-400" /> Mon–Sat, 9:30 AM–6:30 PM
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-[#0B1120]/80 p-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400">
                      <MapPin className="h-4 w-4" /> Registered Office
                    </div>
                    <p className="text-xs leading-5 text-slate-300">
                      Apphany Technologies PVT.LTD, Office No. 506, 5th Floor, Chordia&apos;s Kosmos
                      (A Block), Plot No. E-5, Dr. Rajendra Prasad Nagar E, Village Badarwas, Jaipur,
                      Rajasthan – 302019
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                  <Link
                    to="/privacy-policy"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/70 px-3.5 py-2 font-semibold text-slate-200 hover:border-sky-400/50 hover:text-sky-300 transition-colors"
                  >
                    <ShieldCheck className="h-4 w-4 text-sky-400" /> Privacy Policy
                  </Link>
                  <Link
                    to="/terms-and-conditions"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/70 px-3.5 py-2 font-semibold text-slate-200 hover:border-sky-400/50 hover:text-sky-300 transition-colors"
                  >
                    Terms &amp; Conditions
                  </Link>
                  <Link
                    to="/cancellation-refund-policy"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/70 px-3.5 py-2 font-semibold text-slate-200 hover:border-sky-400/50 hover:text-sky-300 transition-colors"
                  >
                    Cancellation &amp; Refund Policy
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/70 px-3.5 py-2 font-semibold text-slate-200 hover:border-sky-400/50 hover:text-sky-300 transition-colors"
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </main>
          </div>

          {/* Bottom Support Callout */}
          <div className="relative mt-10 grid w-full overflow-hidden rounded-[28px] border border-sky-500/30 bg-gradient-to-br from-slate-900 via-[#0f2442] to-slate-900 text-slate-50 shadow-[0_20px_50px_rgba(2,6,23,0.75)] md:grid-cols-[1.35fr_0.65fr]">
            <div className="relative flex gap-5 p-7 sm:p-9 lg:p-10">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-500/10">
                <Info className="h-6 w-6 text-sky-400" />
              </div>
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-400">
                  Technical &amp; user help
                </p>
                <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl text-slate-50">
                  Need Help Integrating or Using Apphany?
                </h3>
                <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                  Share your software requirements, API integration questions, or transaction
                  reference ID and our support team will guide you step by step.
                </p>
              </div>
            </div>
            <div className="relative flex items-center border-t border-slate-800 bg-slate-950/40 p-7 md:border-l md:border-t-0 sm:p-9 lg:p-10">
              <div className="w-full">
                <p className="mb-4 text-sm leading-6 text-slate-400">
                  Available Mon–Sat, 9:30 AM–6:30 PM for product, billing &amp; developer queries.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-sky-400 to-blue-600 px-6 py-3.5 font-bold text-slate-950 shadow-[0_0_24px_rgba(14,165,233,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                >
                  Contact Support Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
