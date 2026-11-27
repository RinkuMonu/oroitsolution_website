import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { submitContactQuery } from '../utils/contactApi';
import {
  Mail,
  Clock,
  CheckCircle2,
  AlertCircle,
  Headphones,
  MessageSquareText,
  MapPin,
} from 'lucide-react';

export default function Connect() {
  const location = useLocation();
  const prefilledEmail = location.state?.email || '';
  const prefilledSubject = location.state?.subject || '';
  const prefillKey = `${prefilledEmail}|${prefilledSubject}`;
  const [prevPrefillKey, setPrevPrefillKey] = useState(prefillKey);

  const [formData, setFormData] = useState({
    name: '',
    email: prefilledEmail,
    phone: '',
    subject: prefilledSubject,
    message: '',
    terms: false,
  });

  if (prefillKey !== prevPrefillKey) {
    setPrevPrefillKey(prefillKey);
    if (prefilledEmail || prefilledSubject) {
      setFormData((prev) => ({
        ...prev,
        ...(prefilledEmail ? { email: prefilledEmail } : {}),
        ...(prefilledSubject ? { subject: prefilledSubject } : {}),
      }));
    }
  }

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState(null);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile Number is required';
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = 'Only digits are allowed';
    } else if (formData.phone.length !== 10) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.terms) newErrors.terms = 'You must accept the terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (submitFeedback) {
      setSubmitFeedback(null);
    }

    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
    } else if (name === 'name') {
      const lettersOnly = value.replace(/[^a-zA-Z\s.'-]/g, '');
      setFormData((prev) => ({ ...prev, [name]: lettersOnly }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitFeedback(null);
    if (!validate()) return;

    setSubmitting(true);

    try {
      await submitContactQuery({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        service: formData.subject,
      });

      setSubmitFeedback({
        type: 'success',
        text: 'Your message has been sent successfully. Our team will get back to you soon.',
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
        terms: false,
      });
      setErrors({});
    } catch {
      setSubmitFeedback({
        type: 'error',
        text: 'Failed to send message. Please try again later or email support@apphany.in.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0B1120] text-slate-50">
      {/* Contact Hero */}
      <section className="relative overflow-hidden bg-[#0B1120] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 border-b border-slate-800/80">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="text-center lg:text-left">
            <span className="inline-flex rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-400">
              Contact Apphany
            </span>
            <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-50 sm:text-4xl lg:text-[52px] lg:leading-[1.1]">
              Let&apos;s find the right <span className="text-sky-400">solution together.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 lg:mx-0 lg:text-lg">
              Questions about our services, partnership opportunities, or your account? Share your
              query and our support team will help you.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href="mailto:support@apphany.in"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-400 to-blue-600 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_24px_rgba(14,165,233,0.3)] transition-all hover:-translate-y-0.5 hover:brightness-110"
              >
                <Mail className="h-4 w-4" /> Email Us
              </a>
            </div>
          </div>

          {/* Support Visual Panel */}
          <div className="relative mx-auto w-full max-w-[600px]">
            <div className="relative overflow-hidden rounded-[24px] border border-slate-800 bg-slate-900/80 backdrop-blur-md p-6 sm:p-9 shadow-[0_20px_50px_rgba(2,6,23,0.75)]">
              <div className="relative space-y-5">
                <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 shadow-sm">
                      <Headphones className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-extrabold text-slate-50">Apphany Support Desk</p>
                      <p className="text-xs text-slate-400">Apphany Technologies PVT.LTD</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/30">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" /> Active
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="rounded-2xl border border-slate-800 bg-[#0B1120]/80 p-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400">
                      <Mail className="h-3.5 w-3.5" /> Direct Email
                    </div>
                    <p className="mt-2 text-sm font-bold text-slate-100 break-all">
                      support@apphany.in
                    </p>
                    <p className="mt-1 text-xs text-slate-400">Fast ticket acknowledgement</p>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-[#0B1120]/80 p-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400">
                      <MessageSquareText className="h-3.5 w-3.5" /> Response Time
                    </div>
                    <p className="mt-2 text-sm font-bold text-slate-100">Within 24–48 Hours</p>
                    <p className="mt-1 text-xs text-slate-400">Dedicated query handling</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-[#0B1120]/80 px-4 py-3.5 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-extrabold text-slate-100">Support hours</p>
                    <p className="mt-0.5 text-xs text-slate-400">Mon–Sat, 9:30 AM–6:30 PM</p>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400 border border-sky-500/30">
                    <Clock className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Introduction */}
      <section className="bg-[#0F172A] px-4 pt-12 text-center sm:px-6 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-400">
            Send us a message
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-slate-50 sm:text-3xl">
            How can we help you today?
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
            Complete the form or email us. We&apos;ll connect you with the right team.
          </p>
        </div>
      </section>

      {/* Form + Info Section */}
      <section className="bg-[#0F172A] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 border-b border-slate-800/80">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left Form */}
          <div className="rounded-[24px] border border-slate-800 bg-slate-900/75 p-6 shadow-[0_18px_45px_rgba(2,6,23,0.65)] sm:p-8">
            <h2 className="text-2xl font-extrabold text-slate-50">Tell us what you need</h2>
            <p className="mb-7 mt-2 text-sm leading-6 text-slate-400">
              Share your details below and our team will get back to you.
            </p>

            {submitFeedback && (
              <div
                className={`mb-5 flex items-start gap-2.5 rounded-xl border px-4 py-3 text-sm font-medium ${
                  submitFeedback.type === 'success'
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                    : 'border-rose-500/30 bg-rose-500/10 text-rose-300'
                }`}
              >
                {submitFeedback.type === 'success' ? (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                ) : (
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
                )}
                <span>{submitFeedback.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-4">
                <label className="mb-2 block text-sm font-semibold text-slate-300">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-700 bg-[#0B1120] px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                  placeholder="Enter your name"
                />
                {errors.name && <p className="mt-1 text-rose-400 text-xs font-medium">{errors.name}</p>}
              </div>

              <div className="mb-4">
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Business Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-700 bg-[#0B1120] px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                  placeholder="Enter your email"
                />
                {errors.email && <p className="mt-1 text-rose-400 text-xs font-medium">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  inputMode="numeric"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  className="w-full rounded-xl border border-slate-700 bg-[#0B1120] px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                  placeholder="Enter your phone number"
                />
                {errors.phone && <p className="mt-1 text-rose-400 text-xs font-medium">{errors.phone}</p>}
              </div>

              <div className="mb-4">
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Service / Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-700 bg-[#0B1120] px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                  placeholder="e.g., CRM Software, Mobile App, Custom Inquiry"
                />
              </div>

              <div className="mb-4">
                <label className="mb-2 block text-sm font-semibold text-slate-300">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-xl border border-slate-700 bg-[#0B1120] px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                  rows={3}
                  placeholder="Tell us about your needs.."
                />
                {errors.message && <p className="mt-1 text-rose-400 text-xs font-medium">{errors.message}</p>}
              </div>

              <div className="mb-4 flex items-center gap-2">
                <input
                  id="contact-terms"
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-slate-600 accent-sky-400"
                />
                <label htmlFor="contact-terms" className="text-sm text-slate-400">
                  I accept{' '}
                  <Link
                    to="/terms-and-conditions"
                    className="font-semibold text-sky-400 hover:underline"
                  >
                    terms &amp; conditions
                  </Link>
                  .
                </label>
              </div>
              {errors.terms && <p className="mb-4 text-rose-400 text-xs font-medium">{errors.terms}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-lg bg-gradient-to-r from-sky-400 to-blue-600 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_24px_rgba(14,165,233,0.3)] transition-all hover:-translate-y-0.5 hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {submitting ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>

          {/* Right Info Section */}
          <aside className="flex h-full flex-col rounded-[24px] border border-slate-800 bg-slate-900/75 p-6 text-slate-50 shadow-[0_18px_45px_rgba(2,6,23,0.65)] sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-400">
              Contact details
            </p>
            <h2 className="mt-3 max-w-lg text-2xl font-extrabold leading-tight sm:text-3xl text-slate-50">
              Reach our support team by email.
            </h2>
            <p className="mb-6 mt-3 text-sm leading-6 text-slate-400">
              Our support team is available to answer service, account and transaction-related
              questions.
            </p>

            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3 rounded-xl border border-slate-800 bg-[#0B1120]/80 p-3.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-sky-500/15 border border-sky-500/30 text-sky-400">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-bold text-slate-100">Email</p>
                  <p className="mt-1 text-sm text-sky-400">
                    <a href="mailto:support@apphany.in" className="hover:underline">
                      support@apphany.in
                    </a>
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 rounded-xl border border-slate-800 bg-[#0B1120]/80 p-3.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-sky-500/15 border border-sky-500/30 text-sky-400">
                  <Clock className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-bold text-slate-100">Office Hours:</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Mon–Sat: 9:30 AM to 6:30 PM <br />
                    Sun: Closed
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 rounded-xl border border-slate-800 bg-[#0B1120]/80 p-3.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-sky-500/15 border border-sky-500/30 text-sky-400">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-bold text-slate-100">Registered Office</p>
                  <p className="mt-1 text-sm leading-5 text-slate-400">
                    Apphany Technologies PVT.LTD
                    <br />
                    Office No. 506, 5th Floor, Chordia&apos;s Kosmos (A Block), Plot No. E-5, Dr.
                    Rajendra Prasad Nagar E, Village Badarwas, Jaipur, Rajasthan – 302019
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-auto pt-6">
              <div className="rounded-2xl border border-sky-500/30 bg-gradient-to-br from-slate-900 to-[#0f2341] p-5 text-slate-50 shadow-lg">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-400">
                  Before contacting support
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Keep your registered mobile number and transaction reference ready so we can
                  assist you more efficiently.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <Clock className="h-4 w-4" />
                  Support is available during published office hours
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
