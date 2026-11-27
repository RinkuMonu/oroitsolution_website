import React, { useState } from 'react';

export default function Blog() {
  const [failedImages, setFailedImages] = useState({});
  const [authorImgError, setAuthorImgError] = useState(false);

  const markImageFailed = (index) => {
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  const insights = [
    {
      image: 'https://oroitsolution.info/front/images/blog/1.jpg',
      author: 'BY SOFTWARE EXPERTS',
      title: 'How Technology Is Transforming Modern Businesses',
      description:
        'Discover how innovative software solutions, web applications, and SaaS technologies are helping businesses streamline operations, improve efficiency, and accelerate digital growth.',
    },
    {
      image: 'https://oroitsolution.info/front/images/blog/2.jpg',
      author: 'BY APPHANY TECHNOLOGIES TEAM',
      title: 'Why Custom Software Solutions Matter for Growing Businesses',
      description:
        'Every business has unique needs. Discover how custom software, web applications, and scalable SaaS platforms help businesses streamline operations, improve efficiency, and grow digitally.',
    },
    {
      image: 'https://oroitsolution.info/front/images/blog/3.jpg',
      author: 'BY APPHANY TECHNOLOGIES TEAM',
      title: 'Digital Transformation: Building Smarter Business Solutions',
      description:
        'Discover how modern software development, innovative web applications, and smart SaaS solutions help businesses automate workflows, enhance productivity, and achieve sustainable growth.',
    },
  ];

  return (
    <section className="bg-[#0B1120] py-12 sm:py-16 lg:py-20 overflow-hidden border-b border-slate-800/70">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-14">
          <span className="inline-block text-xs sm:text-sm font-semibold text-sky-400 px-5 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10">
            Latest Insights
          </span>

          <h2 className="text-2xl min-[480px]:text-3xl sm:text-4xl font-extrabold text-slate-50 mt-4 tracking-tight">
            Tech News &amp; Updates
          </h2>

          <p className="text-xs min-[400px]:text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            Stay updated with the latest trends, innovations, and insights shaping the future of
            technology across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {insights.map((item, index) => (
            <div
              key={index}
              className="flex flex-col min-w-0 group rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden hover:border-sky-400/50 hover:-translate-y-1 transition-all duration-300 shadow-[0_12px_32px_rgba(2,6,23,0.45)]"
            >
              <div className="relative overflow-hidden aspect-[16/10] bg-gradient-to-br from-slate-800 to-slate-900">
                {!failedImages[index] ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={() => markImageFailed(index)}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 opacity-90"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-[#0B1120] via-slate-900 to-slate-800">
                    <div className="w-11 h-11 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center mb-2 text-sky-400">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-semibold text-sky-300 uppercase tracking-wider">Tech Insights</span>
                  </div>
                )}

                <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-[#0B1120]/90 backdrop-blur-md border border-sky-400/30 text-sky-300 rounded-full pl-2 pr-3.5 py-1 shadow-md">
                  {!authorImgError ? (
                    <img
                      src="https://oroitsolution.info/front/images/blog/b6.jpg"
                      alt="Author"
                      onError={() => setAuthorImgError(true)}
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover border border-sky-400/50"
                    />
                  ) : (
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-sky-500/20 border border-sky-400/50 flex items-center justify-center text-[10px] font-bold text-sky-300">
                      A
                    </span>
                  )}
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-wide whitespace-nowrap">
                    {item.author}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-slate-50 leading-snug mb-2.5 group-hover:text-sky-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
