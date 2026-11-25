import React from 'react';

export default function Partners() {
  const partners = [
    { name: 'TechCorp Global', category: 'Enterprise IT' },
    { name: 'CloudScale SaaS', category: 'Cloud Infrastructure' },
    { name: 'Apex Solutions', category: 'FinTech Platforms' },
    { name: 'DataSphere AI', category: 'Machine Learning' },
    { name: 'NexaCore Labs', category: 'Web & Mobile' },
    { name: 'InnovateX Systems', category: 'Smart Logistics' }
  ];

  return (
    <section id="partners" className="bg-white pt-14 sm:pt-20 pb-8 text-center relative border-t border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Pill Badge */}
        <div className="inline-block">
          <span className="px-4 sm:px-5 py-1.5 rounded-full border border-[#155cd5] text-[#155cd5] text-xs sm:text-sm font-semibold tracking-wide bg-blue-50/40">
            Our Trusted Partners
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl min-[480px]:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 sm:mt-4 tracking-tight">
          Building Success Together
        </h2>

        {/* Subtitle / Paragraph matching user image */}
        <p className="text-xs min-[400px]:text-sm sm:text-base text-gray-500 max-w-2xl mx-auto mt-3 sm:mt-4 leading-relaxed font-normal">
          We are proud to work with businesses and organizations across different industries. At ORO IT SOLUTION, we build long-term relationships by delivering reliable IT services, innovative software solutions, and technology that drives business growth.
        </p>

        {/* Partner brand strip */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100/80">
          <div className="grid grid-cols-2 min-[500px]:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4 items-center justify-center">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="py-3 px-2 sm:py-3.5 sm:px-3 rounded-xl border border-gray-100/80 bg-gray-50/60 hover:bg-white hover:shadow-md hover:border-blue-200 transition-all duration-300 group flex flex-col items-center justify-center cursor-default"
              >
                <span className="text-xs sm:text-sm font-bold text-gray-700 group-hover:text-[#155cd5] transition-colors truncate w-full text-center">
                  {partner.name}
                </span>
                <span className="text-[10px] sm:text-[11px] text-gray-400 mt-0.5 truncate w-full text-center">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}