import React from 'react';
import { Link } from 'react-router-dom';
import PolicyLayout from './PolicyLayout';

const productDocs = [
  {
    title: 'Mobile Application',
    description:
      'Learn about mobile application access, installation, account setup, and available features.',
  },
  {
    title: 'Web Application',
    description:
      'Understand web application functionality, dashboard navigation, user management, and platform settings.',
  },
  {
    title: 'AI / ML Solutions',
    description:
      'Explore information about our AI and Machine Learning solutions, their functionality, and implementation.',
  },
  {
    title: 'CRM / HRM Solutions',
    description:
      'Find guidance related to customer relationship management, employee management, and business workflows.',
  },
];

const listSections = [
  {
    title: '2. Getting Started',
    description:
      'Get started with ORO IT solutions by exploring our platforms and understanding their basic functionalities.',
    items: [
      'Account Registration and Login',
      'User Account Setup',
      'Dashboard Overview',
      'Profile Management',
      'Basic Platform Navigation',
    ],
  },
  {
    title: '4. User Guides and Tutorials',
    description:
      'Our user guides provide step-by-step instructions to help users understand and manage platform features.',
    items: [
      'How to access your account',
      'How to manage user profiles',
      'How to navigate the dashboard',
      'How to manage application settings',
      'How to use available features',
    ],
  },
  {
    title: '5. Technical Documentation',
    description:
      'Technical documentation provides relevant information for developers and technical users working with our software solutions.',
    items: [
      'API Documentation',
      'Integration Guidelines',
      'System Configuration',
      'Security Guidelines',
      'Technical Requirements',
    ],
  },
  {
    title: '6. Frequently Asked Questions (FAQs)',
    description:
      'Find answers to common questions related to our products and services.',
    items: [
      'How can I register on the platform?',
      'How can I access my dashboard?',
      'How can I update my account details?',
      'How can I get technical assistance?',
      'Where can I find product information?',
    ],
  },
  {
    title: '7. Troubleshooting',
    description:
      'If you experience any technical difficulties while using our platforms, refer to the troubleshooting information or contact our support team for assistance.',
    items: [
      'Login and account access issues',
      'Application errors',
      'Technical difficulties',
      'Connectivity issues',
    ],
  },
];

function BulletSection({ title, description, items }) {
  return (
    <section>
      <h2 className="text-[15px] sm:text-base font-bold text-gray-900 mb-2">
        {title}
      </h2>
      <p className="text-[13px] sm:text-sm text-gray-500 leading-relaxed mb-3">
        {description}
      </p>
      <ul className="list-disc pl-6 sm:pl-8 space-y-1.5 text-[13px] sm:text-sm text-gray-800 leading-relaxed">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default function Documentation() {
  const [gettingStarted, ...remainingListSections] = listSections;

  return (
    <PolicyLayout
      title="Documentation"
      subtitle="ORO IT SOLUTION PVT. LTD."
      headerDivider
      footerNote="ORO IT SOLUTION PVT. LTD. is committed to providing clear documentation and helpful resources to support users of its digital solutions."
    >
      {/* 1. Introduction */}
      <section>
        <h2 className="text-[15px] sm:text-base font-bold text-gray-900 mb-2">
          1. Introduction
        </h2>
        <p className="text-[13px] sm:text-sm text-gray-500 leading-relaxed">
          Welcome to the ORO IT SOLUTION PVT. LTD. Documentation Center. This page provides information and guidance
          about our software products, digital solutions, applications, and services. Our documentation is designed to
          help users understand and use our platforms effectively.
        </p>
      </section>

      {/* 2. Getting Started */}
      <BulletSection {...gettingStarted} />

      {/* 3. Our Product Documentation */}
      <section>
        <h2 className="text-[15px] sm:text-base font-bold text-gray-900 mb-3">
          3. Our Product Documentation
        </h2>
        <div className="space-y-4">
          {productDocs.map((doc) => (
            <div key={doc.title}>
              <h3 className="text-sm sm:text-[15px] font-bold text-gray-900 mb-1.5">
                {doc.title}
              </h3>
              <p className="text-[13px] sm:text-sm text-gray-500 leading-relaxed">
                {doc.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4-7. Guides, Technical Docs, FAQs, Troubleshooting */}
      {remainingListSections.map((section) => (
        <BulletSection key={section.title} {...section} />
      ))}

      {/* 8. Support and Assistance */}
      <section>
        <h2 className="text-[15px] sm:text-base font-bold text-gray-900 mb-2">
          8. Support and Assistance
        </h2>
        <p className="text-[13px] sm:text-sm text-gray-500 leading-relaxed">
          For additional information, technical assistance, or product-related queries, please contact the ORO IT
          SOLUTION PVT. LTD. support team through our{' '}
          <Link to="/contact" className="text-[#155cd5] hover:underline font-medium">
            Contact Us
          </Link>{' '}
          page.
        </p>
      </section>
    </PolicyLayout>
  );
}
