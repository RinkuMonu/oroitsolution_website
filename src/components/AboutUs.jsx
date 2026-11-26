import React from 'react';
import PolicyLayout from './PolicyLayout';

const aboutSections = [
  {
    title: 'Our Vision',
    content:
      'To become a trusted technology partner by delivering innovative software solutions that simplify complex business processes and empower digital growth.',
  },
  {
    title: 'Our Mission',
    content:
      'Our mission is to design and develop high-quality software products that are secure, user-friendly, and scalable, while maintaining transparency, reliability, and long-term value for our clients.',
  },
  {
    title: 'What We Do',
    items: [
      'SaaS Product Development',
      'Custom Web & Mobile Application Development',
      'Fintech & API Integrations',
      'KYC, Verification & Compliance Solutions',
      'Cloud-based Enterprise Systems',
    ],
  },
  {
    title: 'Why Choose Us',
    items: [
      'Experienced development and architecture team',
      'Security-first and compliance-driven approach',
      'Scalable and future-ready solutions',
      'Client-centric development methodology',
      'Reliable post-deployment support',
    ],
  },
  {
    title: 'Our Core Values',
    content:
      'Integrity, innovation, accountability, and customer success guide every solution we build and every partnership we form.',
  },
];

export default function AboutUs() {
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
          ) : (
            <p className="text-[13px] sm:text-sm text-gray-600 leading-relaxed">
              {section.content}
            </p>
          )}
        </section>
      ))}
    </PolicyLayout>
  );
}
