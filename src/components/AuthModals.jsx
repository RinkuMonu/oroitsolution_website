import React, { useState } from 'react';
import { 
  X, 
  User, 
  Mail, 
  Phone, 
  Home, 
  MapPin, 
  Building2, 
  Lock, 
  Eye, 
  EyeOff, 
  Briefcase, 
  Check, 
  CheckCircle2, 
  ArrowLeft
} from 'lucide-react';

export default function AuthModals({ isOpen, mode, onClose, onSwitchMode }) {
  const [submitted, setSubmitted] = useState(false);
  const [accountType, setAccountType] = useState('personal'); // 'personal' | 'business'
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [errorTerms, setErrorTerms] = useState(false);

  // Form fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    state: '',
    city: '',
    pincode: '',
    password: '',
    confirmPassword: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculatePasswordStrength = (pass) => {
    if (!pass) return { label: '', color: 'bg-gray-200', width: 'w-0' };
    if (pass.length < 6) return { label: 'Weak', color: 'bg-red-500', width: 'w-1/4' };
    if (pass.length < 10) return { label: 'Medium', color: 'bg-amber-500', width: 'w-2/4' };
    return { label: 'Strong', color: 'bg-emerald-500', width: 'w-full' };
  };

  const passwordStrength = calculatePasswordStrength(formData.password);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'register' && !agreed) {
      setErrorTerms(true);
      return;
    }
    setErrorTerms(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 md:p-6 bg-black/75 backdrop-blur-md overflow-y-auto no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden animate-fade-in py-3 sm:py-6">
      
      {/* Modal Main Box */}
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-auto border border-gray-100/50 max-h-[95vh] sm:max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-40 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 flex items-center justify-center transition cursor-pointer shadow-sm border border-gray-200/50 active:scale-95 touch-manipulation"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-16 sm:py-20 px-6 sm:px-8 text-center space-y-4 my-auto">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              {mode === 'login' ? 'Welcome Back!' : 'Account Created Successfully!'}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
              {mode === 'login' 
                ? 'Logging you in to the client dashboard...' 
                : 'Welcome to ORO IT Solution. Your account is ready.'}
            </p>
          </div>
        ) : mode === 'login' ? (
          /* ================= LOGIN VIEW ================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            
            {/* Left Column: Purple / Indigo Brand Panel (Visible on lg screens) */}
            <div className="hidden lg:flex lg:col-span-5 bg-gradient-to-br from-[#3b52d4] via-[#4a3fc0] to-[#5b2ec6] text-white p-6 sm:p-8 flex-col justify-between relative overflow-hidden">
              
              {/* Background soft glow rings */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

              <div className="relative z-10">
                {/* Logo */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2.5 inline-block border border-white/15">
                  <img
                    src="/footer-logo.png"
                    alt="ORO IT SOLUTION"
                    className="h-10 sm:h-12 w-auto object-contain brightness-110"
                  />
                </div>

                {/* Headings */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-6 tracking-tight">
                  Welcome to <span className="text-[#ff9e00]">ORO IT</span> Solution
                </h3>
                <p className="text-xs sm:text-[13px] text-white/80 mt-2 leading-relaxed font-normal">
                  Sign in to access your personalized dashboard and continue your digital journey with us.
                </p>

                {/* Feature Checklist */}
                <div className="space-y-3 mt-6 sm:mt-8">
                  {[
                    'Secure & Encrypted Platform',
                    '24/7 Professional Support',
                    'Advanced Analytics Dashboard',
                    'Multi-Device Synchronization',
                    'Real-time Notifications'
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-center text-xs sm:text-[13px] text-white/95 font-medium">
                      <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center mr-2.5 shrink-0 text-xs font-bold border border-amber-300/30">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metrics Bar */}
              <div className="relative z-10 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-white/15 grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-lg sm:text-2xl font-extrabold text-white">50K+</div>
                  <div className="text-[10px] sm:text-[11px] text-white/70 mt-0.5">Happy Clients</div>
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-extrabold text-white">99.9%</div>
                  <div className="text-[10px] sm:text-[11px] text-white/70 mt-0.5">Uptime</div>
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-extrabold text-white">24/7</div>
                  <div className="text-[10px] sm:text-[11px] text-white/70 mt-0.5">Support</div>
                </div>
              </div>

            </div>

            {/* Right Column: Login Form */}
            <div className="lg:col-span-7 p-5 sm:p-8 md:p-10 flex flex-col justify-center bg-white">
              
              {/* Mobile/Tablet brand tag */}
              <div className="lg:hidden flex items-center justify-center mb-4">
                <span className="text-[#3b52d4] font-black text-xl tracking-tight">ORO IT <span className="text-[#ff9e00]">SOLUTION</span></span>
              </div>

              <div className="text-center mb-5 sm:mb-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                  Welcome Back
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                  Sign in to your ORO IT Solution account
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 max-w-md mx-auto w-full">
                
                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                      className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3b52d4] focus:ring-1 focus:ring-[#3b52d4] transition shadow-sm"
                    />
                  </div>
                </div>

                {/* Password & Forgot Password */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-semibold text-gray-700">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <a
                      href="#forgot"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Password reset link sent to your registered email address.');
                      }}
                      className="text-xs text-[#3b52d4] hover:underline font-medium"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      placeholder="Enter your password"
                      className="w-full rounded-xl border border-gray-200 pl-10 pr-10 py-2.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3b52d4] focus:ring-1 focus:ring-[#3b52d4] transition shadow-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-2.5 text-gray-400 hover:text-gray-600 cursor-pointer p-1"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="pt-0.5">
                  <label className="flex items-center space-x-2 text-xs text-gray-600 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded border-gray-300 text-[#3b52d4] focus:ring-[#3b52d4] cursor-pointer"
                    />
                    <span>Remember me</span>
                  </label>
                </div>

                {/* Sign In Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#3b52d4] via-[#4a3fc0] to-[#5b2ec6] hover:opacity-95 shadow-md hover:shadow-lg transition-all transform active:scale-[0.99] cursor-pointer"
                  >
                    Sign In
                  </button>
                </div>

                {/* Or continue with Divider */}
                <div className="relative py-2 text-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <span className="relative bg-white px-3 text-[11px] text-gray-400 font-medium">
                    Or continue with
                  </span>
                </div>

                {/* Social Login Buttons: Google, Facebook, Twitter */}
                <div className="grid grid-cols-3 gap-2">
                  {/* Google */}
                  <button
                    type="button"
                    onClick={() => alert('Signing in with Google...')}
                    className="flex items-center justify-center py-2 px-1.5 sm:px-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition cursor-pointer text-[11px] sm:text-xs font-semibold text-gray-700 shadow-sm"
                  >
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-1.5 shrink-0" viewBox="0 0 24 24">
                      <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z" />
                      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z" />
                      <path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.8s.2-2.1.4-2.8L1.9 6.3C.7 8.7 0 10.3 0 12s.7 3.3 1.9 5.7l3.7-2.9z" />
                      <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.2L1.9 16C3.7 19.7 7.5 23 12 23z" />
                    </svg>
                    <span className="truncate">Google</span>
                  </button>

                  {/* Facebook */}
                  <button
                    type="button"
                    onClick={() => alert('Signing in with Facebook...')}
                    className="flex items-center justify-center py-2 px-1.5 sm:px-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition cursor-pointer text-[11px] sm:text-xs font-semibold text-gray-700 shadow-sm"
                  >
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-1.5 text-[#1877F2] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span className="truncate">Facebook</span>
                  </button>

                  {/* Twitter */}
                  <button
                    type="button"
                    onClick={() => alert('Signing in with Twitter...')}
                    className="flex items-center justify-center py-2 px-1.5 sm:px-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition cursor-pointer text-[11px] sm:text-xs font-semibold text-gray-700 shadow-sm"
                  >
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-1.5 text-[#1DA1F2] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                    </svg>
                    <span className="truncate">Twitter</span>
                  </button>
                </div>

                {/* Switch to Register & Back Home */}
                <div className="text-center pt-2 space-y-1.5">
                  <p className="text-xs text-gray-500">
                    Don't have an account?{' '}
                    <button
                      type="button"
                      onClick={() => onSwitchMode('register')}
                      className="text-[#3b52d4] font-bold hover:underline cursor-pointer"
                    >
                      Create Account
                    </button>
                  </p>
                  <div>
                    <button
                      type="button"
                      onClick={onClose}
                      className="inline-flex items-center text-xs text-gray-400 hover:text-gray-700 transition cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                      Back to Home
                    </button>
                  </div>
                </div>

              </form>

            </div>

          </div>
        ) : (
          /* ================= REGISTER VIEW ================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            
            {/* Left Column: Purple / Indigo Brand Panel (Visible on lg screens) */}
            <div className="hidden lg:flex lg:col-span-5 bg-gradient-to-br from-[#3b52d4] via-[#4a3fc0] to-[#5b2ec6] text-white p-6 sm:p-8 flex-col justify-between relative overflow-hidden">
              
              {/* Background soft glow rings */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

              <div className="relative z-10">
                {/* Logo */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2.5 inline-block border border-white/15">
                  <img
                    src="/footer-logo.png"
                    alt="ORO IT SOLUTION"
                    className="h-10 sm:h-12 w-auto object-contain brightness-110"
                  />
                </div>

                {/* Headings */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-6 tracking-tight">
                  Join <span className="text-[#ff9e00]">ORO IT Solution</span>
                </h3>
                <p className="text-xs sm:text-[13px] text-white/80 mt-2 leading-relaxed font-normal">
                  Create your account to access premium services and transform your digital experience.
                </p>

                {/* Feature Checklist */}
                <div className="space-y-3 mt-6 sm:mt-8">
                  {[
                    'Secure & Encrypted Platform',
                    '24/7 Professional Support',
                    'Advanced Analytics Dashboard',
                    'Multi-Device Synchronization',
                    'Real-time Notifications'
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-center text-xs sm:text-[13px] text-white/95 font-medium">
                      <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center mr-2.5 shrink-0 text-xs font-bold border border-amber-300/30">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metrics Bar */}
              <div className="relative z-10 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-white/15 grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-lg sm:text-2xl font-extrabold text-white">50K+</div>
                  <div className="text-[10px] sm:text-[11px] text-white/70 mt-0.5">Happy Clients</div>
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-extrabold text-white">99.9%</div>
                  <div className="text-[10px] sm:text-[11px] text-white/70 mt-0.5">Uptime</div>
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-extrabold text-white">24/7</div>
                  <div className="text-[10px] sm:text-[11px] text-white/70 mt-0.5">Support</div>
                </div>
              </div>

            </div>

            {/* Right Column: Register Form */}
            <div className="lg:col-span-7 p-4 sm:p-6 md:p-8 flex flex-col justify-start bg-white">
              
              {/* Mobile/Tablet brand tag */}
              <div className="lg:hidden flex items-center justify-center mb-3">
                <span className="text-[#3b52d4] font-black text-xl tracking-tight">ORO IT <span className="text-[#ff9e00]">SOLUTION</span></span>
              </div>

              <div className="text-center mb-4 sm:mb-5">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                  Create Your Account
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                  Join ORO IT Solution and start your digital journey
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                
                {/* Account Type Selector */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Account Type <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    
                    {/* Personal Option */}
                    <button
                      type="button"
                      onClick={() => setAccountType('personal')}
                      className={`p-2.5 sm:p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center cursor-pointer ${
                        accountType === 'personal'
                          ? 'border-[#3b52d4] bg-blue-50/50 shadow-sm ring-1 ring-[#3b52d4]'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mb-1 ${
                        accountType === 'personal' ? 'bg-[#3b52d4]/10 text-[#3b52d4]' : 'bg-gray-100 text-gray-400'
                      }`}>
                        <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gray-800">Personal</span>
                      <span className="text-[10px] text-gray-400">For individuals</span>
                    </button>

                    {/* Business Option */}
                    <button
                      type="button"
                      onClick={() => setAccountType('business')}
                      className={`p-2.5 sm:p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center cursor-pointer ${
                        accountType === 'business'
                          ? 'border-[#3b52d4] bg-blue-50/50 shadow-sm ring-1 ring-[#3b52d4]'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mb-1 ${
                        accountType === 'business' ? 'bg-[#3b52d4]/10 text-[#3b52d4]' : 'bg-gray-100 text-gray-400'
                      }`}>
                        <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gray-800">Business</span>
                      <span className="text-[10px] text-gray-400">For companies</span>
                    </button>

                  </div>
                </div>

                {/* Row 1: Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Enter full name"
                        className="w-full rounded-xl border border-gray-200 pl-9 pr-3 py-2 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3b52d4] focus:ring-1 focus:ring-[#3b52d4] transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter email"
                        className="w-full rounded-xl border border-gray-200 pl-9 pr-3 py-2 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3b52d4] focus:ring-1 focus:ring-[#3b52d4] transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Mobile Number & Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Enter mobile number"
                        className="w-full rounded-xl border border-gray-200 pl-9 pr-3 py-2 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3b52d4] focus:ring-1 focus:ring-[#3b52d4] transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Address
                    </label>
                    <div className="relative">
                      <Home className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter your address"
                        className="w-full rounded-xl border border-gray-200 pl-9 pr-3 py-2 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3b52d4] focus:ring-1 focus:ring-[#3b52d4] transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 3: State, City, Pincode (Responsive: 1 col on mobile, 3 on sm+) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">State</label>
                    <div className="relative">
                      <MapPin className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="State"
                        className="w-full rounded-xl border border-gray-200 pl-8 pr-2.5 py-2 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3b52d4] focus:ring-1 focus:ring-[#3b52d4] transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">City</label>
                    <div className="relative">
                      <Building2 className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City"
                        className="w-full rounded-xl border border-gray-200 pl-8 pr-2.5 py-2 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3b52d4] focus:ring-1 focus:ring-[#3b52d4] transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Pincode</label>
                    <div className="relative">
                      <MapPin className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        placeholder="Pincode"
                        className="w-full rounded-xl border border-gray-200 pl-8 pr-2.5 py-2 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3b52d4] focus:ring-1 focus:ring-[#3b52d4] transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 4: Password & Confirm Password */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder="Create strong password"
                        className="w-full rounded-xl border border-gray-200 pl-9 pr-9 py-2 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3b52d4] focus:ring-1 focus:ring-[#3b52d4] transition"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2.5 top-2 text-gray-400 hover:text-gray-600 cursor-pointer p-1"
                      >
                        {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Confirm Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        placeholder="Confirm password"
                        className="w-full rounded-xl border border-gray-200 pl-9 pr-9 py-2 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3b52d4] focus:ring-1 focus:ring-[#3b52d4] transition"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-2.5 top-2 text-gray-400 hover:text-gray-600 cursor-pointer p-1"
                      >
                        {showConfirmPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="space-y-1 pt-0.5">
                    <div className="flex items-center justify-between text-[11px] text-gray-500">
                      <span>Password strength</span>
                      <span className="font-semibold text-gray-700">{passwordStrength.label}</span>
                    </div>
                    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className={`h-full ${passwordStrength.color} ${passwordStrength.width} transition-all duration-300`} />
                    </div>
                  </div>
                )}

                {/* Terms and Conditions Checkbox */}
                <div className="pt-1">
                  <label className="flex items-start space-x-2 text-xs text-gray-600 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => {
                        setAgreed(e.target.checked);
                        if (e.target.checked) setErrorTerms(false);
                      }}
                      className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#3b52d4] focus:ring-[#3b52d4] cursor-pointer shrink-0"
                    />
                    <span className="leading-tight text-[11px] sm:text-xs">
                      I agree to the <span className="text-[#3b52d4] hover:underline font-medium">Terms & Conditions</span> and <span className="text-[#3b52d4] hover:underline font-medium">Privacy Policy</span>
                    </span>
                  </label>
                  {errorTerms && (
                    <p className="text-[11px] text-red-500 mt-1 pl-6 font-medium animate-shake">
                      You must agree to the terms before registering
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#3b52d4] via-[#4a3fc0] to-[#5b2ec6] hover:opacity-95 shadow-md hover:shadow-lg transition-all transform active:scale-[0.99] cursor-pointer"
                  >
                    Create Account
                  </button>
                </div>

                {/* Switch to Sign In & Back Home */}
                <div className="text-center pt-2 space-y-1">
                  <p className="text-xs text-gray-500">
                    Already have an account?{' '}
                    <button
                      type="button"
                      onClick={() => onSwitchMode('login')}
                      className="text-[#3b52d4] font-bold hover:underline cursor-pointer"
                    >
                      Sign In
                    </button>
                  </p>
                  <div>
                    <button
                      type="button"
                      onClick={onClose}
                      className="inline-flex items-center text-xs text-gray-400 hover:text-gray-700 transition cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                      Back to Home
                    </button>
                  </div>
                </div>

              </form>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}