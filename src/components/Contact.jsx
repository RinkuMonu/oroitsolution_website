import React, { useState } from 'react';
import { Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto-reset handled if needed
    }, 4000);
  };

  return (
    <section id="contact" className="relative bg-white pt-10 sm:pt-14 pb-0 overflow-hidden text-gray-800">

      {/* Cards container overlapping the map */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-[-60px] sm:mb-[-100px] lg:mb-[-160px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start justify-center">

          {/* Left Column: 3 Contact Info Cards */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">

            {/* Card 1: Contact */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 flex items-start space-x-3.5 sm:space-x-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#155cd5] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
              </div>
              <div className="min-w-0">
                <h4 className="text-[#155cd5] font-bold text-sm sm:text-base mb-1">Contact</h4>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">087418 86688</p>
                <p className="text-xs sm:text-sm text-gray-600 font-medium truncate">oroitsolution@gmail.com</p>
              </div>
            </div>

            {/* Card 2: Address */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 flex items-start space-x-3.5 sm:space-x-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#155cd5] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
              </div>
              <div className="min-w-0">
                <h4 className="text-[#155cd5] font-bold text-sm sm:text-base mb-1">Address</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Plot No 97, Dakshinpuri - I Shrikishan,</p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Sanganer, Jagatpura, Jaipur,</p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Shri Kishanpura, Rajasthan 302017</p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">India</p>
              </div>
            </div>

            {/* Card 3: Schedule */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 flex items-start space-x-3.5 sm:space-x-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#155cd5] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
              </div>
              <div className="min-w-0">
                <h4 className="text-[#155cd5] font-bold text-sm sm:text-base mb-1">Schedule</h4>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">24 Hours / 7 Days Open</p>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">Office time: 10 AM - 6:00 PM</p>
              </div>
            </div>

          </div>

          {/* Right Column: Ready to Get Started Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-5 sm:p-8 lg:p-10 shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-gray-100 transition-all">

              <div className="text-center mb-5 sm:mb-6">
                <span className="text-xs sm:text-[13px] font-bold text-[#155cd5] uppercase tracking-wider block mb-1">
                  Get in Touch
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight">
                  Ready to Get Started
                </h3>
                <p className="text-xs sm:text-[13px] text-gray-500 mt-1.5 max-w-lg mx-auto leading-relaxed">
                  Have a question or looking to build a new software product? Contact our expert team today.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-8 sm:py-10 space-y-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">Message Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                    }}
                    className="mt-3 px-6 py-2 bg-[#155cd5] text-white rounded-full text-xs font-semibold hover:bg-blue-700 transition cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                        className="w-full rounded-full border border-gray-200 bg-white px-4 sm:px-5 py-2.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#155cd5] focus:ring-1 focus:ring-[#155cd5] transition shadow-sm"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="w-full rounded-full border border-gray-200 bg-white px-4 sm:px-5 py-2.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#155cd5] focus:ring-1 focus:ring-[#155cd5] transition shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        className="w-full rounded-full border border-gray-200 bg-white px-4 sm:px-5 py-2.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#155cd5] focus:ring-1 focus:ring-[#155cd5] transition shadow-sm"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        className="w-full rounded-full border border-gray-200 bg-white px-4 sm:px-5 py-2.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#155cd5] focus:ring-1 focus:ring-[#155cd5] transition shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Row 3: Type Message */}
                  <div>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type Message"
                      required
                      className="w-full rounded-2xl border border-gray-200 bg-white p-3.5 sm:p-4 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#155cd5] focus:ring-1 focus:ring-[#155cd5] transition shadow-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-3 rounded-full bg-[#155cd5] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
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

      {/* Full-width Map in the background */}
      <div className="w-full h-[320px] sm:h-[420px] lg:h-[480px] relative z-0 mt-0">
        <iframe
          src="https://maps.google.com/maps?q=Kota,%20Rajasthan,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0 grayscale-[15%] contrast-[105%]"
          loading="lazy"
          allowFullScreen
          title="Office Location Map"
        />
        {/* Soft gradient edge at the top for seamless blending */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/70 to-transparent pointer-events-none" />
      </div>

    </section>
  );
}