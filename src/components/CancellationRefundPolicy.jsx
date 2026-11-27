import LegalPolicyPage from './LegalPolicyPage';
import {
  FileText,
  XCircle,
  Ban,
  CheckCircle2,
  AlertCircle,
  Mail,
  SearchCheck,
  RefreshCw,
  Clock,
  Headphones,
} from 'lucide-react';

// Cancellation & refund rules for customers using Apphany Technologies PVT.LTD services.
const sections = [
  {
    id: 'scope',
    icon: <FileText />,
    title: 'Policy Scope',
    paragraphs: [
      'This Cancellation and Refund Policy explains when a user may cancel an order or service request and when a user may request a refund for a payment made through Apphany Technologies PVT.LTD.',
      'It applies to supported recharges, bill payments, bookings, software subscriptions, API onboarding requests, and other digital or financial services offered on our platform.',
    ],
  },
  {
    id: 'cancellation',
    icon: <XCircle />,
    title: 'Order & Service Cancellations',
    paragraphs: [
      'Users may initiate a cancellation request from their account or via support only before the order or transaction is submitted to, accepted by, or fulfilled by the relevant service provider.',
    ],
    items: [
      'If a cancellation request is accepted before processing, the order status will be marked as Cancelled in our system.',
      'Any amount already deducted for a successfully cancelled order will be refunded to the original payment method after verification.',
      'Scheduled or recurring service subscriptions must be cancelled prior to the next billing cycle to avoid upcoming renewal charges.',
      'Booking or enterprise software setup requests may be cancelled within the applicable pre-provisioning window communicated at purchase.',
    ],
  },
  {
    id: 'non-cancellable',
    icon: <Ban />,
    title: 'Non-Cancellable Transactions',
    paragraphs: [
      'Certain transactions are processed instantaneously or involve dedicated provisioning resources and cannot be cancelled once initiated:',
    ],
    items: [
      'Real-time mobile/DTH recharges, utility bill payments (BBPS), and instant transfers once transmitted to the operator or biller.',
      'Orders already dispatched, activated, or confirmed by a third-party vendor or service provider.',
      'API testing, sandbox evaluation, and onboarding setup charges once access or credentials have been provisioned.',
      'Requests submitted after the applicable cancellation window has expired.',
    ],
  },
  {
    id: 'eligible',
    icon: <CheckCircle2 />,
    title: 'Refund-Eligible Transactions',
    items: [
      'Payment was deducted from your account, but the transaction failed and was not automatically reversed.',
      'The order was properly cancelled within the eligible pre-processing cancellation window.',
      'The same transaction was charged more than once due to a duplicate debit.',
      'The service provider confirms that the requested service was not delivered.',
      'Apphany Technologies PVT.LTD or the provider approves a refund after investigating a verified technical error.',
    ],
  },
  {
    id: 'not-eligible',
    icon: <AlertCircle />,
    title: 'Non-Refundable Transactions',
    items: [
      'A recharge, bill payment, or other real-time service was completed successfully.',
      'The user entered an incorrect mobile number, account number, biller, beneficiary, or amount.',
      'An application or service was rejected because the user did not meet third-party eligibility requirements.',
      'API testing and technical evaluation fees, as demo evaluation access is provided prior to purchase.',
      'A disclosed processing, convenience, or service fee has already been incurred.',
      'The request falls outside the applicable provider’s cancellation or refund period.',
    ],
  },
  {
    id: 'request',
    icon: <Mail />,
    title: 'How to Request a Cancellation or Refund',
    paragraphs: [
      'To request a cancellation (for pending/unprocessed orders) or a refund, email support@apphany.in and provide your registered mobile number, order or transaction ID, date, amount, service type, and a clear explanation of the issue.',
      'Additional screenshots, bank statements, or reference proof may be requested when needed for verification.',
    ],
  },
  {
    id: 'review',
    icon: <SearchCheck />,
    title: 'Review and Verification',
    paragraphs: [
      'Apphany Technologies PVT.LTD will review internal records and may seek confirmation from the payment gateway, bank, biller, or service provider.',
      'Acknowledgement is generally provided within 24–48 business hours, although final verification may take longer when a third-party provider or bank is involved.',
    ],
  },
  {
    id: 'processing',
    icon: <RefreshCw />,
    title: 'Refund Processing & Timeline',
    paragraphs: [
      'An approved refund for a cancelled or failed transaction is normally returned to the original payment method used for the transaction.',
      'Processing commonly takes 5–10 business days after approval, depending on your bank or payment provider’s settlement cycle.',
    ],
  },
  {
    id: 'pending',
    icon: <Clock />,
    title: 'Pending Transactions',
    paragraphs: [
      'A pending status does not mean that a transaction has failed. Users should not make the same payment again until the original status is confirmed.',
      'Pending cases may be automatically completed or reversed to your original account after bank and provider reconciliation.',
    ],
  },
  {
    id: 'support',
    icon: <Headphones />,
    title: 'Support and Escalation',
    paragraphs: [
      'If a cancellation refund is delayed beyond the communicated timeline, contact support with the original case reference.',
      'Users should contact Apphany Technologies PVT.LTD before initiating a bank chargeback so the transaction can first be investigated through the normal resolution process.',
    ],
  },
];

export default function CancellationRefundPolicy() {
  return (
    <LegalPolicyPage
      title="Cancellation and Refund Policy"
      eyebrow="Customer protection"
      description="Clear information about order cancellations, failed transactions, refund eligibility, and processing timelines."
      effectiveDate="27 November 2026"
      sections={sections}
      summary="Orders may be cancelled only before processing begins. Successful real-time services and API testing fees are non-refundable, while valid cancellations, failed, duplicate, or undelivered transactions qualify for refund to the original payment method after verification."
    />
  );
}
