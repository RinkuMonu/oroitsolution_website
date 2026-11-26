import React from 'react';
import PolicyLayout from './PolicyLayout';

const policySections = [
  {
    title: '1. Order Cancellation by User',
    content: (
      <>
        If a user initiates the cancellation of an order from their account, the order will be marked as{' '}
        <strong className="font-semibold text-gray-800">Cancelled</strong> on our system. Any amount deducted for the
        cancelled order shall be refunded to the user&apos;s original payment method or respective account, subject to
        successful verification.
      </>
    ),
  },
  {
    title: '2. Failed or Unsuccessful Transactions',
    content:
      'In cases where a transaction fails due to technical issues, bank-related problems, network failures, or any other unforeseen conditions, the deducted amount (if any) will be refunded to the user\u2019s respective account automatically.',
  },
  {
    title: '3. Refund Processing Timeline',
    content: (
      <>
        Refunds are initiated after confirmation of cancellation or transaction failure. The credited amount may take{' '}
        <strong className="font-semibold text-gray-800">5–7 working days</strong> (or as per banking norms) to reflect
        in the user&apos;s account, depending on the payment provider or bank.
      </>
    ),
  },
  {
    title: '4. Mode of Refund',
    content:
      'All refunds will be processed through the original mode of payment used for the transaction, unless otherwise specified or required by law.',
  },
  {
    title: '5. Partial or Delayed Refunds',
    content:
      'In rare cases, refunds may be delayed due to bank processing times, holidays, or compliance checks. Users are advised to contact support if the refund is not received within the stated timeline.',
  },
  {
    title: '6. API Testing Charges',
    content:
      'A non-refundable fee will be charged from users for API testing purposes. This fee covers the cost of providing access or Tech Support technical evaluation support.',
  },
  {
    title: '7. Non-Refundable API Testing Fee',
    content: (
      <>
        The API testing fee is strictly <strong className="font-semibold text-gray-800">non-refundable</strong>. As users
        are provided with a working demo of the API and given the opportunity to evaluate services and raise queries
        before proceeding, no refund will be issued for API testing charges under any circumstances.
      </>
    ),
  },
  {
    title: '8. Non-Refundable Scenarios',
    content:
      'Completed and successfully processed services may not be eligible for refunds unless explicitly stated or required under applicable laws.',
  },
  {
    title: '9. Changes to This Policy',
    content:
      'ORO IT SOLUTION PVT. LTD. reserves the right to modify or update this Cancellation & Refund Policy at any time. Any changes will be effective immediately upon posting on this page.',
  },
];

export default function CancellationRefundPolicy() {
  return (
    <PolicyLayout
      title="Cancellation & Refund Policy"
      intro={
        <>
          This Cancellation &amp; Refund Policy outlines the terms under which{' '}
          <strong className="font-semibold text-gray-800">ORO IT SOLUTION PVT. LTD.</strong> processes order
          cancellations and refunds for services and transactions carried out on our platform. By using our services,
          you agree to the terms stated below.
        </>
      }
      contactTitle="10. Contact & Support"
      contactIntro="For any questions or concerns regarding cancellations or refunds, please contact our support team:"
    >
      {policySections.map((section) => (
        <section key={section.title}>
          <h2 className="text-[15px] sm:text-base font-bold text-gray-900 mb-1.5">
            {section.title}
          </h2>
          <p className="text-[13px] sm:text-sm text-gray-600 leading-relaxed">
            {section.content}
          </p>
        </section>
      ))}
    </PolicyLayout>
  );
}
