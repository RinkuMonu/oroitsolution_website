import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'SaaS Development',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep state or reset after notification
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a358c] text-white relative border-t border-blue-400/20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-200 bg-blue-500/30 px-3.5 py-1.5 rounded-full border border-blue-300/30">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight leading-tight">
              Let's Build Something Powerful Together
            </h2>
            <p className="mt-4 text-base text-blue-100/90 leading-relaxed">
              Have a question about our services, software products, or need a custom enterprise solution? Our engineering experts are ready to assist you.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/40 border border-blue-400/30 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-blue-200" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-blue-200">Email Us</h4>
                  <p className="text-base text-white font-medium">contact@oroitsolution.com</p>
                  <p className="text-xs text-blue-300">support@oroitsolution.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/40 border border-blue-400/30 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-blue-200" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-blue-200">Call Us Directly</h4>
                  <p className="text-base text-white font-medium">+91 98765 43210</p>
                  <p className="text-xs text-blue-300">Mon - Sat, 9:00 AM - 7:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/40 border border-blue-400/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-blue-200" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-blue-200">Headquarters</h4>
                  <p className="text-base text-white font-medium">Oro IT Solution Pvt. Ltd.</p>
                  <p className="text-xs text-blue-300">Tech Hub Towers, Cyber City, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0e44ab]/80 border border-blue-400/30 rounded-2xl p-8 sm:p-10 shadow-2xl relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-300 rounded-full flex items-center justify-center mx-auto border border-emerald-400/40">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                  <p className="text-blue-100 max-w-md mx-auto text-sm">
                    Your inquiry has been received successfully. One of our solution architects will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-white text-blue-900 rounded-lg font-semibold text-sm hover:bg-blue-50 transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Send Us a Message</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-blue-200 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#0a358c] border border-blue-400/30 rounded-lg px-4 py-3 text-white placeholder-blue-300/50 text-sm focus:outline-none focus:border-white transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-blue-200 mb-2">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-[#0a358c] border border-blue-400/30 rounded-lg px-4 py-3 text-white placeholder-blue-300/50 text-sm focus:outline-none focus:border-white transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-blue-200 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 00000"
                        className="w-full bg-[#0a358c] border border-blue-400/30 rounded-lg px-4 py-3 text-white placeholder-blue-300/50 text-sm focus:outline-none focus:border-white transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-blue-200 mb-2">
                        Service of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#0a358c] border border-blue-400/30 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition"
                      >
                        <option value="SaaS Development">Smart SaaS Solutions</option>
                        <option value="Cloud Architecture">Cloud & DevOps Architecture</option>
                        <option value="Enterprise Software">Custom Software Engineering</option>
                        <option value="AI Automation">AI & Workflow Automation</option>
                        <option value="Cybersecurity">Enterprise Cybersecurity</option>
                        <option value="Managed IT">24/7 Managed IT Support</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-blue-200 mb-2">
                      Project Details / Requirements *
                    </label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what your business needs..."
                      className="w-full bg-[#0a358c] border border-blue-400/30 rounded-lg px-4 py-3 text-white placeholder-blue-300/50 text-sm focus:outline-none focus:border-white transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-[#0a358c] hover:bg-blue-50 font-bold py-3.5 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center text-sm uppercase tracking-wider cursor-pointer"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Submit Inquiry
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
