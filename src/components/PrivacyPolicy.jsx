import React from 'react';
import PolicyLayout from './PolicyLayout';

const privacySections = [
  {
    title: '1. Objective',
    content:
      'This Privacy Policy ("Policy") defines how ORO IT SOLUTION PVT.LTD("we","our","us") collects, uses, stores, protects and discloses personal information from users of our website, products, and services.',
  },
  {
    title: '2. Scope',
    content:
      'This Policy applies to all individuals and businesses accessing or using our online platforms, mobile applications, software services, APIs, or third-party integrations.',
  },
  {
    title: '3. Information We Collect',
    labeledItems: [
      { label: 'Personal Data', value: 'Name, email, phone, company details.' },
      { label: 'Account Data', value: 'Username, password, preferences.' },
      { label: 'Technical Data', value: 'IP address, device identifiers, logs.' },
      { label: 'Usage Data', value: 'Feature interactions, page visits.' },
    ],
  },
  {
    title: '4. Purpose of Collection',
    intro: 'We use collected information to:',
    items: [
      'Provide and maintain our services',
      'Authenticate and protect user accounts',
      'Improve product experience through analytics',
      'Send important notices, updates, and support responses',
    ],
  },
  {
    title: '5. Legal Basis',
    content:
      'Where applicable, we process personal data with user consent, contractual necessity, legal compliance, and legitimate business interests.',
  },
  {
    title: '6. Data Sharing & Disclosure',
    intro: 'We do not sell personal data. Information may be shared with:',
    items: [
      'Service providers supporting platform functionality',
      'Legal and regulatory authorities if required',
      'Third parties with explicit user consent',
    ],
  },
  {
    title: '7. Data Security',
    content:
      'We deploy technical and organizational safeguards to protect data against unauthorized access, alteration, disclosure or destruction.',
  },
  {
    title: '8. Cookies & Tracking',
    content:
      'Cookies and similar technologies are used to analyze site usage, remember preferences, and improve service delivery. Users may customize cookie choices via browser settings.',
  },
  {
    title: '9. Retention',
    content:
      'Personal data is retained only as long as necessary to fulfill service, legal, and compliance needs.',
  },
  {
    title: '10. User Rights',
    intro: 'Users may request:',
    items: [
      'Access or correction of personal data',
      'Deletion or restriction of processing',
      'Data portability requests',
      'Withdrawal of consent (where applicable)',
    ],
  },
  {
    title: '11. Third-Party Sites',
    content:
      'Our services may contain external links. We are not responsible for privacy practices on third-party sites.',
  },
  {
    title: '12. Changes to Policy',
    content:
      'We may update this Policy periodically. Updates will be posted here with revised dates.',
  },
];

export default function PrivacyPolicy() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      subtitle="ORO IT SOLUTION PVT. LTD."
    >
      {privacySections.map((section) => (
        <section key={section.title}>
          <h2 className="text-[15px] sm:text-base font-bold text-gray-900 mb-1.5">
            {section.title}
          </h2>

          {section.intro && (
            <p className="text-[13px] sm:text-sm text-gray-600 leading-relaxed mb-1">
              {section.intro}
            </p>
          )}

          {section.labeledItems && (
            <ul className="space-y-1 text-[13px] sm:text-sm text-gray-600 leading-relaxed">
              {section.labeledItems.map((entry) => (
                <li key={entry.label}>
                  <strong className="font-semibold text-gray-800">{entry.label}:</strong>{' '}
                  {entry.value}
                </li>
              ))}
            </ul>
          )}

          {section.items && (
            <ul className="space-y-1 text-[13px] sm:text-sm text-gray-600 leading-relaxed">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          {section.content && (
            <p className="text-[13px] sm:text-sm text-gray-600 leading-relaxed">
              {section.content}
            </p>
          )}
        </section>
      ))}

      {/* 13. Grievance & Contact */}
      <section>
        <h2 className="text-[15px] sm:text-base font-bold text-gray-900 mb-1.5">
          13. Grievance &amp; Contact
        </h2>
        <p className="text-[13px] sm:text-sm text-gray-600 leading-relaxed mb-1.5">
          For concerns about this Policy:
        </p>
        <div className="space-y-1 text-[13px] sm:text-sm text-gray-600 leading-relaxed">
          <p>
            <strong className="font-semibold text-gray-800">Email:</strong>{' '}
            <a
              href="mailto:support@oroitsolution.com"
              className="text-gray-700 hover:text-[#155cd5] hover:underline transition-colors break-all"
            >
              support@oroitsolution.com
            </a>
          </p>
          <p>
            <strong className="font-semibold text-gray-800">Address:</strong> ORO IT SOLUTION PVT.LTD.
          </p>
          <p>
            Plot No 97, Dakshinpuri - I Shrikishan, Sanganer, Jagatpura, Jaipur, Shri Kishanpura, Rajasthan 302017
          </p>
        </div>
      </section>
    </PolicyLayout>
  );
}
