import React from 'react';

export default function Partners() {
  return (
    <section id="partners" className="bg-white pt-10 sm:pt-16 pb-12 sm:pb-16 text-center relative border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Pill Badge */}
        <div className="inline-block">
          <span className="px-4 sm:px-5 py-1.5 rounded-full border border-[#155cd5] text-[#155cd5] text-xs sm:text-sm font-semibold tracking-wide bg-blue-50/40">
            Our Trusted Partners
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 sm:mt-4 tracking-tight">
          Building Success Together
        </h2>

        {/* Subtitle / Paragraph */}
        <p className="text-xs min-[400px]:text-sm sm:text-base text-gray-500 max-w-2xl mx-auto mt-2.5 sm:mt-4 leading-relaxed font-normal">
          We are proud to work with businesses and organizations across different industries. At ORO IT SOLUTION, we build long-term relationships by delivering reliable IT services, innovative software solutions, and technology that drives business growth.
        </p>

      </div>
    </section>
  );
}