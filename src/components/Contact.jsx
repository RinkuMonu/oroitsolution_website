import React, { useState } from 'react';
import { Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (name === 'phone') {
      setFormData({ ...formData, phone: value.replace(/\D/g, '').slice(0, 10) });
      return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'Valid email is required';
    }
    if (formData.phone.trim() && formData.phone.trim().length !== 10) {
      nextErrors.phone = 'Enter a valid 10-digit phone number';
    }
    if (!formData.message.trim()) nextErrors.message = 'Message is required';

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#0B1120] pt-12 sm:pt-16 pb-0 overflow-hidden text-slate-50"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-10 sm:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start justify-center">
          {/* Left Column: 3 Contact Info Cards */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            {/* Card 1: Email */}
            <div className="bg-slate-900/90 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-[0_14px_34px_rgba(2,6,23,0.65)] border border-slate-800 hover:border-sky-400/40 flex items-start space-x-3.5 sm:space-x-4 transition-all duration-300 hover:-translate-y-0.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 flex items-center justify-center shrink-0 shadow-[0_0_16px_rgba(14,165,233,0.3)] mt-0.5">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sky-400 font-bold text-sm sm:text-base mb-1">Email</h4>
                <a
                  href="mailto:support@apphany.in"
                  className="block text-xs sm:text-sm text-slate-300 hover:text-sky-400 font-medium [overflow-wrap:anywhere] transition-colors"
                >
                  support@apphany.in
                </a>
              </div>
            </div>

            {/* Card 2: Address */}
            <div className="bg-slate-900/90 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-[0_14px_34px_rgba(2,6,23,0.65)] border border-slate-800 hover:border-sky-400/40 flex items-start space-x-3.5 sm:space-x-4 transition-all duration-300 hover:-translate-y-0.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 flex items-center justify-center shrink-0 shadow-[0_0_16px_rgba(14,165,233,0.3)] mt-0.5">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sky-400 font-bold text-sm sm:text-base mb-1">Address</h4>
                <p className="text-xs sm:text-sm text-slate-100 font-semibold leading-relaxed">
                  Apphany Technologies PVT.LTD
                </p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Office No. 506, 5th Floor, Chordia&apos;s Kosmos (A Block), Plot No. E-5, Dr.
                  Rajendra Prasad Nagar E, Village Badarwas, Jaipur, Rajasthan – 302019
                </p>
              </div>
            </div>

            {/* Card 3: Schedule */}
            <div className="bg-slate-900/90 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-[0_14px_34px_rgba(2,6,23,0.65)] border border-slate-800 hover:border-sky-400/40 flex items-start space-x-3.5 sm:space-x-4 transition-all duration-300 hover:-translate-y-0.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 flex items-center justify-center shrink-0 shadow-[0_0_16px_rgba(14,165,233,0.3)] mt-0.5">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sky-400 font-bold text-sm sm:text-base mb-1">Schedule</h4>
                <p className="text-xs sm:text-sm text-slate-300 font-medium">
                  Mon–Sat: 9:30 AM to 6:30 PM
                </p>
                <p className="text-xs sm:text-sm text-slate-400 font-medium">Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* Right Column: Ready to Get Started Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#0F172A]/95 backdrop-blur-md rounded-2xl p-5 min-[420px]:p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(2,6,23,0.8)] border border-slate-800 transition-all">
              <div className="text-center mb-5 sm:mb-6">
                <span className="text-xs sm:text-[13px] font-bold text-sky-400 uppercase tracking-wider block mb-1">
                  Get in Touch
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-50 tracking-tight">
                  Ready to Get Started
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-400 mt-1.5 max-w-lg mx-auto leading-relaxed">
                  Have a question or looking to build a new software product? Contact our expert
                  team today.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-8 sm:py-10 space-y-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-500/15 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-50">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                    }}
                    className="mt-3 px-6 py-2.5 bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 rounded-lg text-xs font-bold hover:brightness-110 transition cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                        className="w-full rounded-xl border border-slate-700 bg-slate-900/90 px-4 sm:px-5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
                      />
                      {errors.name && <p className="mt-1 text-xs text-rose-400 pl-1">{errors.name}</p>}
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="w-full rounded-xl border border-slate-700 bg-slate-900/90 px-4 sm:px-5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
                      />
                      {errors.email && <p className="mt-1 text-xs text-rose-400 pl-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={10}
                        placeholder="Phone"
                        className="w-full rounded-xl border border-slate-700 bg-slate-900/90 px-4 sm:px-5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
                      />
                      {errors.phone && <p className="mt-1 text-xs text-rose-400 pl-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        className="w-full rounded-xl border border-slate-700 bg-slate-900/90 px-4 sm:px-5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type Message"
                      required
                      className="w-full rounded-2xl border border-slate-700 bg-slate-900/90 p-3.5 sm:p-4 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition resize-none"
                    />
                    {errors.message && <p className="mt-1 text-xs text-rose-400 pl-1">{errors.message}</p>}
                  </div>

                  <div className="text-center pt-1 sm:pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-sky-400 to-blue-600 hover:brightness-110 text-slate-950 font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_24px_rgba(14,165,233,0.3)] transition-all cursor-pointer"
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Seamless Midnight Map */}
      <div className="w-full h-[300px] min-[420px]:h-[340px] sm:h-[400px] lg:h-[440px] relative bg-[#0B1120] border-t border-slate-800/80">
        <iframe
          src="https://maps.google.com/maps?q=Chordia%27s%20Kosmos,%20Plot%20No.%20E-5,%20Dr.%20Rajendra%20Prasad%20Nagar%20E,%20Badarwas,%20Jaipur,%20Rajasthan%20302019,%20India&t=&z=16&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0 invert-[92%] hue-rotate-[185deg] contrast-[104%] saturate-[85%] brightness-[95%]"
          loading="lazy"
          allowFullScreen
          title="Apphany Technologies Office Location Map"
        />
        <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#0B1120] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#0B1120] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
