import React, { useEffect } from 'react';

/** Shared responsive section block for legal, policy, and informational pages. */
export function PolicySection({ section }) {
  return (
    <section className="min-w-0">
      <h2 className="text-[15px] sm:text-base lg:text-lg font-bold text-slate-50 mb-1.5 sm:mb-2 break-words">
        {section.title}
      </h2>

      {section.intro && (
        <p className="text-[13px] sm:text-sm lg:text-[15px] text-slate-400 leading-relaxed mb-1.5 break-words">
          {section.intro}
        </p>
      )}

      {section.labeledItems && (
        <ul className="space-y-1.5 text-[13px] sm:text-sm lg:text-[15px] text-slate-400 leading-relaxed break-words">
          {section.labeledItems.map((entry) => (
            <li key={entry.label}>
              <strong className="font-semibold text-slate-200">{entry.label}:</strong>{' '}
              {entry.value}
            </li>
          ))}
        </ul>
      )}

      {section.items && (
        <ul className="space-y-1.5 text-[13px] sm:text-sm lg:text-[15px] text-slate-400 leading-relaxed break-words">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {section.content && (
        <p className="text-[13px] sm:text-sm lg:text-[15px] text-slate-400 leading-relaxed break-words">
          {section.content}
        </p>
      )}
    </section>
  );
}

/** Shared responsive document layout for legal, policy, and support pages. */
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
  }, [title]);

  return (
    <div className="flex-1 w-full bg-[#0B1120] text-slate-50 py-6 sm:py-10 lg:py-14 px-3 sm:px-6 lg:px-8 overflow-x-clip">
      <div className="w-full max-w-[920px] xl:max-w-[980px] mx-auto bg-slate-900/75 rounded-2xl border border-slate-800 shadow-[0_18px_45px_rgba(2,6,23,0.65)] px-4 py-6 sm:px-8 sm:py-9 lg:px-12 lg:py-12 min-w-0">
        <header
          className={`text-center mb-6 sm:mb-8 ${
            headerDivider ? 'border-b border-slate-800 pb-5 sm:pb-6' : ''
          }`}
        >
          <h1 className="text-xl min-[380px]:text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-50 tracking-tight leading-snug break-words">
            {title}
          </h1>
          {subtitle && (
            <p className="text-[11px] min-[380px]:text-xs sm:text-sm text-sky-400 mt-1.5 font-semibold break-words">
              {subtitle}
            </p>
          )}
        </header>

        {intro && (
          <p className="text-[13px] min-[380px]:text-sm sm:text-[15px] lg:text-base text-slate-300 leading-relaxed mb-6 break-words">
            {intro}
          </p>
        )}

        <div className="space-y-6 lg:space-y-7 min-w-0">
          {children}

          {contactTitle && (
            <section className="min-w-0">
              <h2 className="text-[15px] sm:text-base lg:text-lg font-bold text-slate-50 mb-2 break-words">
                {contactTitle}
              </h2>
              <p className="text-[13px] sm:text-sm lg:text-[15px] text-slate-400 leading-relaxed mb-3 break-words">
                {contactIntro}
              </p>
              <div className="text-[13px] sm:text-sm lg:text-[15px] text-slate-300 leading-relaxed space-y-1">
                <p className="font-bold text-slate-100">Apphany Technologies PVT.LTD</p>
                <p className="text-slate-400">
                  Office Address: Office No. 506, 5th Floor, Chordia&apos;s Kosmos (A Block), Plot
                  No. E-5, Dr. Rajendra Prasad Nagar E, Village Badarwas, Jaipur, Rajasthan – 302019
                </p>
                <p className="text-slate-400">
                  Email:{' '}
                  <a
                    href="mailto:support@apphany.in"
                    className="inline-block py-0.5 text-sky-400 hover:underline transition-colors [overflow-wrap:anywhere]"
                  >
                    support@apphany.in
                  </a>
                </p>
              </div>
            </section>
          )}

          {footerNote && (
            <p className="border-t border-slate-800 pt-4 sm:pt-5 mt-6 sm:mt-8 text-xs sm:text-[13px] lg:text-sm text-slate-400 leading-relaxed break-words">
              {footerNote}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
