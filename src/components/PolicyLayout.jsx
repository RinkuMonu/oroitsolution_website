import React, { useEffect } from 'react';

/** Shared responsive document layout for legal and policy pages. */
export default function PolicyLayout({
  title,
  subtitle = 'Applicable to All Users',
  headerDivider = false,
  intro,
  contactTitle,
  contactIntro,
  footerNote,
  children,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#f8f9fb] text-gray-800 py-6 sm:py-10 px-3 sm:px-6 overflow-x-clip">
      <div className="max-w-[920px] mx-auto bg-white rounded-lg  sm:rounded-xl border border-gray-100 shadow-[0_2px_18px_rgba(0,0,0,0.04)] px-5 py-7 sm:px-10 sm:py-10">
        <header
          className={`text-center mb-6 sm:mb-8 ${headerDivider ? 'border-b border-gray-100 pb-5 sm:pb-6' : ''
            }`}
        >
          <h1 className="text-2xl min-[380px]:text-[26px] sm:text-3xl font-bold text-gray-900 tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xs sm:text-sm text-gray-400 mt-1.5 font-medium">
              {subtitle}
            </p>
          )}
        </header>

        {intro && (
          <p className="text-[13px] sm:text-sm text-gray-600 leading-relaxed mb-6">
            {intro}
          </p>
        )}

        <div className="space-y-5 sm:space-y-6">
          {children}

          {contactTitle && (
            <section>
              <h2 className="text-[15px] sm:text-base font-bold text-gray-900 mb-1.5">
                {contactTitle}
              </h2>
              <p className="text-[13px] sm:text-sm text-gray-600 leading-relaxed mb-3">
                {contactIntro}
              </p>
              <div className="text-[13px] sm:text-sm text-gray-700 leading-relaxed">
                <p className="font-bold text-gray-800">ORO IT SOLUTION PVT.LTD.</p>
                <p className="mt-0.5 text-gray-600">
                  Email:{' '}
                  <a
                    href="mailto:support@oroitsolution.com"
                    className="text-gray-700 hover:text-[#155cd5] hover:underline transition-colors break-all"
                  >
                    support@oroitsolution.com
                  </a>
                </p>
              </div>
            </section>
          )}
          {footerNote && (
            <p className="border-t border-gray-200 pt-4 mt-6 text-xs sm:text-[13px] text-gray-500 leading-relaxed">
              {footerNote}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
