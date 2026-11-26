import React from 'react';
import PolicyLayout from './PolicyLayout';

const termsSections = [
  {
    title: '1. User Eligibility',
    content:
      'You must be legally capable of entering into a binding agreement to use our Services. By registering, you confirm that the information provided is accurate and complete.',
  },
  {
    title: '2. User Account',
    content:
      'Users are responsible for maintaining the confidentiality of their account credentials. Any activity carried out through your account shall be deemed as performed by you.',
  },
  {
    title: '3. Acceptable Use',
    items: [
      'Do not use the platform for unlawful or fraudulent activities',
      'Do not attempt to gain unauthorized access to systems or data',
      'Do not misuse APIs, services, or platform features',
      'Comply with applicable laws and regulations',
    ],
  },
  {
    title: '4. Services & Availability',
    content:
      'We strive to ensure uninterrupted access to our Services; however, we do not guarantee continuous availability and reserve the right to modify or suspend Services without prior notice.',
  },
  {
    title: '5. Intellectual Property',
    content:
      'All content, software, trademarks, logos, and intellectual property displayed on the platform remain the exclusive property of ORO IT SOLUTION PVT. LTD. Unauthorized use is strictly prohibited.',
  },
  {
    title: '6. Fees & Payments',
    content:
      'Certain services may require payment. Users agree to pay all applicable charges as per the pricing displayed at the time of purchase.',
  },
  {
    title: '7. Termination of Access',
    content:
      'We reserve the right to suspend or terminate user accounts if these Terms are violated or if misuse of the Services is detected.',
  },
  {
    title: '8. Limitation of Liability',
    content:
      'ORO IT SOLUTION PVT. LTD. shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our Services.',
  },
  {
    title: '9. Privacy Policy',
    content:
      'Use of our Services is also governed by our Privacy Policy. By using the platform, you consent to data handling as described therein.',
  },
  {
    title: '10. Changes to Terms',
    content:
      'We may revise these Terms at any time. Updated Terms will be posted on this page, and continued use of the Services constitutes acceptance.',
  },
  {
    title: '11. Governing Law',
    content:
      'These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of Indian courts.',
  },
];

export default function TermsConditions() {
  return (
    <PolicyLayout
      title="Terms & Conditions"
      intro={
        <>
          These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of the website, applications,
          software, and services (&quot;Services&quot;) provided by{' '}
          <strong className="font-semibold text-gray-800">ORO IT SOLUTION PVT. LTD.</strong> By accessing or using our
          Services, you agree to be bound by these Terms.
        </>
      }
      contactTitle="12. Contact Information"
      contactIntro="For any questions regarding these Terms, please contact us at:"
    >
      {termsSections.map((section) => (
        <section key={section.title}>
          <h2 className="text-[15px] sm:text-base font-bold text-gray-900 mb-1.5">
            {section.title}
          </h2>
          {section.items ? (
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-[13px] sm:text-sm text-gray-600 leading-relaxed">
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
