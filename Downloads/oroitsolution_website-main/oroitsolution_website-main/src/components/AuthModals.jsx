import React, { useState } from 'react';
import { X, LogIn, User, Lock, Mail, Building, CheckCircle2 } from 'lucide-react';

export default function AuthModals({ isOpen, mode, onClose, onSwitchMode, defaultService }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    company: '',
    service: defaultService || 'Smart SaaS Solutions',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-[#0d3ea0] border border-blue-400/40 rounded-2xl p-6 sm:p-8 shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-blue-200 hover:text-white p-1 rounded-lg hover:bg-blue-600/50 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-300 rounded-full flex items-center justify-center mx-auto border border-emerald-400/40">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-white">
              {mode === 'login' && 'Logged In Successfully!'}
              {mode === 'register' && 'Account Registered!'}
              {mode === 'get_started' && 'Request Received!'}
            </h3>
            <p className="text-xs text-blue-200">
              {mode === 'get_started' ? 'Our solution architect will connect with you shortly.' : 'Redirecting you to dashboard...'}
            </p>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600/50 border border-blue-400/30 text-white mb-3">
                {mode === 'login' && <LogIn className="w-6 h-6" />}
                {mode === 'register' && <User className="w-6 h-6" />}
                {mode === 'get_started' && <Building className="w-6 h-6" />}
              </div>
              <h3 className="text-2xl font-bold text-white">
                {mode === 'login' && 'Log In to Oro IT'}
                {mode === 'register' && 'Create Oro IT Account'}
                {mode === 'get_started' && 'Get Started with Oro IT'}
              </h3>
              <p className="text-xs text-blue-200 mt-1">
                {mode === 'login' && 'Access your client portal, projects & cloud telemetry'}
                {mode === 'register' && 'Register your company to access enterprise services'}
                {mode === 'get_started' && 'Kickstart your digital transformation with us'}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {(mode === 'register' || mode === 'get_started') && (
                <div>
                  <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-blue-300 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-[#082b75] border border-blue-400/30 rounded-lg pl-9 pr-4 py-2.5 text-white placeholder-blue-300/40 text-sm focus:outline-none focus:border-white transition"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-1">
                  Work Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-blue-300 absolute left-3 top-3.5" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-[#082b75] border border-blue-400/30 rounded-lg pl-9 pr-4 py-2.5 text-white placeholder-blue-300/40 text-sm focus:outline-none focus:border-white transition"
                  />
                </div>
              </div>

              {(mode === 'login' || mode === 'register') && (
                <div>
                  <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-blue-300 absolute left-3 top-3.5" />
                    <input
                      type="password"
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="••••••••"
                      className="w-full bg-[#082b75] border border-blue-400/30 rounded-lg pl-9 pr-4 py-2.5 text-white placeholder-blue-300/40 text-sm focus:outline-none focus:border-white transition"
                    />
                  </div>
                </div>
              )}

              {mode === 'get_started' && (
                <div>
                  <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-1">
                    Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#082b75] border border-blue-400/30 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-white transition"
                  >
                    <option value="Smart SaaS Solutions">Smart SaaS Solutions</option>
                    <option value="Cloud Architecture">Cloud & DevOps Architecture</option>
                    <option value="Enterprise Software">Custom Software Engineering</option>
                    <option value="AI Automation">AI & Workflow Automation</option>
                    <option value="Cybersecurity">Enterprise Cybersecurity</option>
                  </select>
                </div>
              )}

              <button
                type="submit"
                className="w-full mt-2 bg-white text-[#0d3ea0] hover:bg-blue-50 font-bold py-3 px-4 rounded-lg text-sm uppercase tracking-wider transition shadow cursor-pointer"
              >
                {mode === 'login' && 'Log In'}
                {mode === 'register' && 'Register Account'}
                {mode === 'get_started' && 'Submit Request'}
              </button>
            </form>

            {/* Switch Mode Links */}
            <div className="mt-6 pt-4 border-t border-blue-400/20 text-center text-xs text-blue-200">
              {mode === 'login' ? (
                <p>
                  Don't have an account?{' '}
                  <button
                    onClick={() => onSwitchMode('register')}
                    className="text-white font-bold underline hover:text-blue-100 cursor-pointer"
                  >
                    Register here
                  </button>
                </p>
              ) : mode === 'register' ? (
                <p>
                  Already have an account?{' '}
                  <button
                    onClick={() => onSwitchMode('login')}
                    className="text-white font-bold underline hover:text-blue-100 cursor-pointer"
                  >
                    Log In
                  </button>
                </p>
              ) : (
                <p>
                  Already an active client?{' '}
                  <button
                    onClick={() => onSwitchMode('login')}
                    className="text-white font-bold underline hover:text-blue-100 cursor-pointer"
                  >
                    Log In to Portal
                  </button>
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
