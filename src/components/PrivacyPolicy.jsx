import { useState, useRef, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Shield,
  Database,
  UserCheck,
  Share2,
  Lock,
  Clock,
  User,
  Link as LinkIcon,
  FileText,
} from 'lucide-react';

const InfoIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);


const privacySections = [
  {
    id: 'introduction',
    icon: <Shield />,
    title: 'Introduction',
    content: [
      'Our goal is to ensure that your personal and financial information is handled responsibly, securely, and in compliance with applicable laws and regulatory guidelines, including those prescribed by the Reserve Bank of India (RBI), National Payments Corporation of India (NPCI), and Unique Identification Authority of India (UIDAI).',
      'By using our services, you consent to the collection and use of your information in accordance with this Privacy Policy. We only gather information that is essential to provide seamless transactions, meet compliance obligations, and enhance user experience. We do not sell or rent your personal data to unauthorized third parties.',
      'We encourage all users to read this policy carefully to understand how we handle your information and to exercise your rights effectively.',
    ],
  },
  {
    id: 'information-we-collect',
    icon: <Database />,
    title: 'Information We Collect',
    content: [
      'At Apphany Technologies PVT.LTD, we are committed to collecting only such information that is necessary for providing our financial and utility services in a safe, secure, and legally compliant manner. The categories of information we may collect include:',
      'Personal Information — such as your full name, contact details, Aadhaar, PAN, and KYC-related data.',
      'Financial Information — including bank details, UPI IDs, wallet data, and transaction history.',
      'Technical Information — like IP address, device details, and usage logs.',
      'Service-Related Information — including transaction IDs, logs, and bill payment records.',
      'Disclaimer: All information collected is used only for lawful, service-related, and regulatory purposes.',
    ],
  },
  {
    id: 'how-we-use-your-information',
    icon: <Shield />,
    title: 'How We Use Your Information',
    content: [
      'Your information is used solely to deliver secure and compliant services.',
      'Identity Verification — For KYC and AML compliance under RBI/NPCI/UIDAI.',
      'Security & Fraud Prevention — To detect and prevent unauthorized access.',
      'Customer Support — For grievance handling and dispute resolution.',
      'Notifications — To send alerts, updates, and confirmations.',
      'Service Improvement — To enhance reliability and user experience.',
      'Disclaimer: Your data is never sold or misused beyond the purposes stated herein.',
    ],
  },
  {
    id: 'data-sharing',
    icon: <UserCheck />,
    title: 'Data Sharing and Disclosure',
    content: [
      'We do not sell or rent user data. However, your data may be shared:',
      'With Regulators — RBI, NPCI, UIDAI, and other authorities for compliance.',
      'With Service Providers — Banks, payment gateways, and telecom partners for processing transactions.',
      'For Legal Obligations — When required by law or court orders.',
      'During Business Transfers — In mergers or acquisitions, under this same policy.',
      'Disclaimer: We ensure that any third party receiving data maintains equivalent protection standards.',
    ],
  },
  {
    id: 'data-security',
    icon: <Share2 />,
    title: 'Data Security',
    content: [
      'We prioritize the confidentiality and integrity of all user information.',
      'Encryption — All sensitive data is encrypted and transmitted securely.',
      'Access Controls — Only authorized personnel can access data.',
      'Fraud Monitoring — Continuous surveillance for suspicious activities.',
      'Infrastructure Protection — Firewalls, intrusion detection, and audits.',
      'Data Minimization — We retain only what’s necessary for compliance.',
      'User Responsibility — Users must safeguard login and OTP credentials.',
      'Disclaimer: Despite all measures, no system is 100% secure; usage implies consent.',
    ],
  },
  {
    id: 'data-retention',
    icon: <Lock />,
    title: 'Data Retention',
    content: [
      'We retain data only as long as required for business or legal reasons.',
      'Legal Compliance — RBI, NPCI, and UIDAI mandate certain retention periods.',
      'Support — Retained for grievance resolution and dispute handling.',
      'Security Logs — Stored for fraud monitoring and compliance.',
      'Data Minimization — Deleted or anonymized once no longer required.',
      'User Rights — Deletion requests are honored unless restricted by law.',
      'Disclaimer: Retention is governed by Indian regulations and may override user requests.',
    ],
  },
  {
    id: 'user-rights',
    icon: <Clock />,
    title: 'Your Rights',
    content: [
      'You have the right to:',
      'Access — View personal and financial data we hold about you.',
      'Correct — Request updates to inaccurate or outdated information.',
      'Delete — Request deletion of personal data (subject to legal limits).',
      'Opt-Out — Restrict non-essential communications.',
      'Raise Concerns — Contact our Grievance Officer for any issues.',
      'Disclaimer: Some rights may be limited under Indian financial laws.',
    ],
  },
  {
    id: 'cookies',
    icon: <User />,
    title: 'Cookies and Tracking',
    content: [
      'We use cookies and similar technologies to improve service functionality and security.',
      'Purpose — To enhance navigation, analytics, personalization, and fraud detection.',
      'Types — Essential, performance, functional, and analytical cookies.',
      'Control — Users may block cookies, though it may limit platform functionality.',
      'Disclaimer: By continuing to use our platform, you consent to our cookie usage.',
    ],
  },
  {
    id: 'third-party-links',
    icon: <Lock />,
    title: 'Third-Party Links',
    content:
      'Our services may contain links to third-party websites or payment gateways. We are not responsible for their privacy practices. Please review their respective policies before sharing data. Interaction with third-party platforms is at your own discretion.',
  },
  {
    id: 'childrens-privacy',
    icon: <Clock />,
    title: 'Children’s Privacy',
    content:
      'Our services are intended only for users aged 18 and above. We do not knowingly collect data from minors. Parents or guardians may contact us to have such information removed.',
  },
  {
    id: 'grievance-officer',
    icon: <User />,
    title: 'Grievance Officer',
    content: [
      'In compliance with Indian law, we have appointed a Grievance Officer to address privacy-related concerns.',
      'Grievance Officer',
      'Apphany Technologies PVT.LTD',
      "Office Address: Office No. 506, 5th Floor, Chordia's Kosmos (A Block), Plot No. E-5, Dr. Rajendra Prasad Nagar E, Village Badarwas, Jaipur, Rajasthan – 302019",
      'Email: support@apphany.in',
      'All complaints will be acknowledged and resolved promptly.',
    ],
  },
  {
    id: 'policy-updates',
    icon: <LinkIcon />,
    title: 'Policy Updates',
    content:
      'This Privacy Policy may be updated periodically to reflect changes in laws or technology. The latest version will always be available on our website with the effective date. Continued use of our services indicates acceptance of the revised policy.',
  },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('introduction');
  const sectionRefs = useRef([]);

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

    const observedSections = sectionRefs.current.filter(Boolean);
    observedSections.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    const handleScroll = () => {
      if (
        observedSections.length > 0 &&
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40
      ) {
        setActiveSection(observedSections[observedSections.length - 1].id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observedSections.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
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

  return (
    <section className="privacy-policy-page min-h-screen bg-[#0B1120] text-slate-50">
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-[#0B1120] px-4 py-14 text-slate-50 sm:py-18 border-b border-slate-800/80">
        <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-sky-500/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-400">
            <Shield className="h-4 w-4" /> Trust &amp; Transparency
          </div>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-50 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Learn how Apphany collects, protects, and responsibly uses your information.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-[#0F172A]/60 border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            <aside className="lg:w-[30%] xl:w-[27%]">
              <div className="sticky top-24 rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-md p-4 shadow-[0_14px_35px_rgba(2,6,23,0.65)] sm:p-5 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto no-scrollbar">
                <h2 className="mb-4 hidden items-center border-b border-slate-800 pb-4 text-lg font-extrabold text-slate-50 lg:flex">
                  <InfoIcon className="w-5 h-5 mr-2 text-sky-400" />
                  On this page
                </h2>
                <ul className="flex touch-pan-x gap-2 overflow-x-auto pb-2 no-scrollbar lg:grid lg:grid-cols-1 lg:gap-1.5 lg:overflow-visible lg:pb-0">
                  {privacySections.map((section, index) => (
                    <li key={index} className="shrink-0 lg:w-full">
                      <button
                        type="button"
                        onClick={() => scrollToSection(section.id)}
                        className={`flex w-auto items-center whitespace-nowrap rounded-xl px-3 py-2.5 text-left text-sm transition-all duration-200 cursor-pointer lg:w-full lg:whitespace-normal ${
                          activeSection === section.id
                            ? 'bg-gradient-to-r from-sky-400 to-blue-600 font-bold text-slate-950 shadow-[0_0_16px_rgba(14,165,233,0.28)]'
                            : 'font-medium text-slate-400 hover:bg-slate-800/70 hover:text-sky-300'
                        }`}
                      >
                        <span
                          className={`mr-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg [&>svg]:h-4 [&>svg]:w-4 ${
                            activeSection === section.id
                              ? 'bg-slate-950/15 text-slate-950'
                              : 'bg-sky-500/10 text-sky-400'
                          }`}
                        >
                          {section.icon}
                        </span>
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <main className="min-w-0 lg:w-[70%] xl:w-[73%]">
              <div className="mb-8 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/75 shadow-[0_18px_45px_rgba(2,6,23,0.65)]">
                <div className="border-b border-slate-800 bg-slate-900/90 p-6 sm:p-8">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                      <FileText className="h-8 w-8" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-400">
                        Official document
                      </p>
                      <h2 className="mt-1 text-2xl font-extrabold text-slate-50 sm:text-3xl">
                        Your privacy matters to us
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        Please review the details below to understand your choices and our
                        responsibilities.
                      </p>
                    </div>
                  </div>
                </div>
                <dl className="grid gap-px bg-slate-800 sm:grid-cols-2">
                  <div className="bg-[#0B1120] p-5 sm:p-6">
                    <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Effective Date
                    </dt>
                    <dd className="mt-2 font-bold text-sky-400">27 November 2026</dd>
                  </div>
                  <div className="bg-[#0B1120] p-5 sm:p-6">
                    <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Brand &amp; operator
                    </dt>
                    <dd className="mt-2 font-bold text-slate-50">Apphany</dd>
                    <dd className="mt-1 text-xs text-slate-400">
                      Powered and operated by Apphany Technologies PVT.LTD
                    </dd>
                  </div>
                </dl>
              </div>

              {privacySections.map((section, index) => (
                <div
                  key={index}
                  id={section.id}
                  ref={(el) => {
                    sectionRefs.current[index] = el;
                  }}
                  className={`scroll-mt-28 mb-5 rounded-2xl border bg-slate-900/70 p-5 transition-all duration-300 sm:p-7 ${
                    activeSection === section.id
                      ? 'border-sky-400/50 shadow-[0_14px_35px_rgba(14,165,233,0.12)]'
                      : 'border-slate-800 shadow-[0_8px_24px_rgba(2,6,23,0.45)] hover:border-slate-700'
                  }`}
                >
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 [&_svg]:h-6 [&_svg]:w-6">
                      <span>{section.icon}</span>
                    </div>
                    <h2 className="text-xl font-extrabold text-slate-50 sm:text-2xl">
                      {section.title}
                    </h2>
                  </div>
                  {Array.isArray(section.content) ? (
                    <ul className="space-y-3 text-[15px] leading-7 text-slate-300">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />{' '}
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-[15px] leading-7 text-slate-300">{section.content}</div>
                  )}
                </div>
              ))}
            </main>
          </div>

          {/* Additional Info Card */}
          <div className="relative mt-10 grid w-full overflow-hidden rounded-[28px] border border-sky-500/30 bg-gradient-to-br from-slate-900 via-[#0f2442] to-slate-900 text-slate-50 shadow-[0_20px_50px_rgba(2,6,23,0.75)] md:grid-cols-[1.35fr_0.65fr]">
            <div className="relative flex gap-5 p-7 sm:p-9 lg:p-10">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-500/10">
                <InfoIcon className="h-6 w-6 text-sky-400" />
              </div>
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-400">
                  Privacy support
                </p>
                <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl text-slate-50">
                  Need More Information?
                </h3>
                <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                  If you have any questions about our privacy practices or how we handle your data,
                  please do not hesitate to contact our privacy team.
                </p>
              </div>
            </div>
            <div className="relative flex items-center border-t border-slate-800 bg-slate-950/40 p-7 md:border-l md:border-t-0 sm:p-9 lg:p-10">
              <div className="w-full">
                <p className="mb-4 text-sm leading-6 text-slate-400">
                  Our team is ready to help with privacy-related questions.
                </p>
                <RouterLink
                  to="/contact"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-sky-400 to-blue-600 px-6 py-3.5 font-bold text-slate-950 shadow-[0_0_24px_rgba(14,165,233,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                >
                  Contact Privacy Team
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
