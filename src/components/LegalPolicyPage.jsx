import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, Info } from 'lucide-react';

export default function LegalPolicyPage({
  title,
  eyebrow = 'Customer protection',
  description,
  effectiveDate,
  sections = [],
  summary,
}) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? '');
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    const observed = sectionRefs.current.filter(Boolean);
    observed.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      if (
        observed.length > 0 &&
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40
      ) {
        setActiveSection(observed[observed.length - 1].id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observed.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <section className="min-h-screen bg-[#0B1120] text-slate-50">
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-[#0B1120] px-4 py-14 text-slate-50 sm:py-18 border-b border-slate-800/80">
        <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-sky-500/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-400">
            <ShieldCheck className="h-4 w-4" /> {eyebrow}
          </div>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-50 sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-[#0F172A]/60 border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            {/* Sticky Table of Contents Sidebar */}
            <aside className="lg:w-[30%] xl:w-[27%]">
              <div className="sticky top-24 rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-md p-4 shadow-[0_14px_35px_rgba(2,6,23,0.65)] sm:p-5 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto no-scrollbar">
                <h2 className="mb-4 hidden items-center border-b border-slate-800 pb-4 text-lg font-extrabold text-slate-50 lg:flex">
                  <Info className="w-5 h-5 mr-2 text-sky-400" />
                  On this page
                </h2>
                <ul className="flex touch-pan-x gap-2 overflow-x-auto pb-2 no-scrollbar lg:grid lg:grid-cols-1 lg:gap-1.5 lg:overflow-visible lg:pb-0">
                  {sections.map((section) => {
                    const isActive = activeSection === section.id;
                    return (
                      <li key={section.id} className="shrink-0 lg:w-full">
                        <button
                          type="button"
                          onClick={() => scrollToSection(section.id)}
                          className={`flex w-auto items-center whitespace-nowrap rounded-xl px-3 py-2.5 text-left text-sm transition-all duration-200 cursor-pointer lg:w-full lg:whitespace-normal ${
                            isActive
                              ? 'bg-gradient-to-r from-sky-400 to-blue-600 font-bold text-slate-950 shadow-[0_0_16px_rgba(14,165,233,0.28)]'
                              : 'font-medium text-slate-400 hover:bg-slate-800/70 hover:text-sky-300'
                          }`}
                        >
                          <span
                            className={`mr-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg [&>svg]:h-4 [&>svg]:w-4 ${
                              isActive
                                ? 'bg-slate-950/15 text-slate-950'
                                : 'bg-sky-500/10 text-sky-400'
                            }`}
                          >
                            {section.icon ?? <FileText />}
                          </span>
                          {section.title}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>

            {/* Policy Document & Section Cards */}
            <main className="min-w-0 lg:w-[70%] xl:w-[73%]">
              <div className="mb-8 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/75 shadow-[0_18px_45px_rgba(2,6,23,0.65)]">
                <div className="border-b border-slate-800 bg-slate-900/90 p-6 sm:p-8">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                      <FileText className="h-8 w-8" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-400">
                        Official document
                      </p>
                      <h2 className="mt-1 text-2xl font-extrabold text-slate-50 sm:text-3xl">
                        {title}
                      </h2>
                      {summary && (
                        <p className="mt-2 text-sm leading-6 text-slate-400">{summary}</p>
                      )}
                    </div>
                  </div>
                </div>

                <dl className="grid gap-px bg-slate-800 sm:grid-cols-2">
                  {effectiveDate && (
                    <div className="bg-[#0B1120] p-5 sm:p-6">
                      <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Effective Date
                      </dt>
                      <dd className="mt-2 font-bold text-sky-400">{effectiveDate}</dd>
                    </div>
                  )}
                  <div className={`bg-[#0B1120] p-5 sm:p-6 ${!effectiveDate ? 'sm:col-span-2' : ''}`}>
                    <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Brand &amp; operator
                    </dt>
                    <dd className="mt-2 font-bold text-slate-50">Apphany</dd>
                    <dd className="mt-1 text-xs text-slate-400">
                      Powered and operated by Apphany Technologies PVT.LTD
                    </dd>
                  </div>
                </dl>
              </div>

              {sections.map((section, index) => {
                const isActive = activeSection === section.id;
                return (
                  <div
                    key={section.id}
                    id={section.id}
                    ref={(el) => {
                      sectionRefs.current[index] = el;
                    }}
                    className={`scroll-mt-28 mb-5 rounded-2xl border bg-slate-900/70 p-5 transition-all duration-300 sm:p-7 ${
                      isActive
                        ? 'border-sky-400/50 shadow-[0_14px_35px_rgba(14,165,233,0.12)]'
                        : 'border-slate-800 shadow-[0_8px_24px_rgba(2,6,23,0.45)] hover:border-slate-700'
                    }`}
                  >
                    <div className="mb-5 flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 [&_svg]:h-6 [&_svg]:w-6">
                        <span>{section.icon ?? <FileText />}</span>
                      </div>
                      <h2 className="text-xl font-extrabold text-slate-50 sm:text-2xl">
                        {section.title}
                      </h2>
                    </div>

                    {Array.isArray(section.paragraphs) && section.paragraphs.length > 0 && (
                      <div className="space-y-3 text-[15px] leading-7 text-slate-300">
                        {section.paragraphs.map((paragraph, pIdx) => (
                          <p key={pIdx}>{paragraph}</p>
                        ))}
                      </div>
                    )}

                    {Array.isArray(section.items) && section.items.length > 0 && (
                      <ul
                        className={`space-y-3 text-[15px] leading-7 text-slate-300 ${
                          section.paragraphs?.length ? 'mt-4' : ''
                        }`}
                      >
                        {section.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex gap-3">
                            <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </main>
          </div>

          {/* Bottom Support Callout Card */}
          <div className="relative mt-10 grid w-full overflow-hidden rounded-[28px] border border-sky-500/30 bg-gradient-to-br from-slate-900 via-[#0f2442] to-slate-900 text-slate-50 shadow-[0_20px_50px_rgba(2,6,23,0.75)] md:grid-cols-[1.35fr_0.65fr]">
            <div className="relative flex gap-5 p-7 sm:p-9 lg:p-10">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-500/10">
                <Info className="h-6 w-6 text-sky-400" />
              </div>
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-400">
                  Customer support
                </p>
                <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl text-slate-50">
                  Need More Information?
                </h3>
                <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                  If you have any questions about a cancellation, failed transaction, or refund
                  status, reach out to our support team with your transaction details.
                </p>
              </div>
            </div>
            <div className="relative flex items-center border-t border-slate-800 bg-slate-950/40 p-7 md:border-l md:border-t-0 sm:p-9 lg:p-10">
              <div className="w-full">
                <p className="mb-4 text-sm leading-6 text-slate-400">
                  Our team typically acknowledges cancellation and refund queries within 24–48 business
                  hours.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-sky-400 to-blue-600 px-6 py-3.5 font-bold text-slate-950 shadow-[0_0_24px_rgba(14,165,233,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                >
                  Contact Support Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
