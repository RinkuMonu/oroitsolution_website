import React from 'react';

export default function Empowering() {
  return (
    <section className="w-full bg-gradient-to-r from-[#2160d5] to-[#203db5] text-white px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">

      <div className="max-w-[900px] mx-auto text-center">

        {/* Heading */}
        <h2 className="text-xl min-[400px]:text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 sm:mb-5">
          Empowering Businesses with
          <br className="hidden sm:block" />
          <span> Innovative Technology Solutions</span>
        </h2>

        {/* Description */}
        <p className="text-xs min-[400px]:text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-7 max-w-[850px] mx-auto mb-6 sm:mb-8 text-blue-50/90">
          At ORO IT SOLUTION, we deliver innovative software development, web
          applications, and scalable SaaS solutions tailored to modern business
          needs. From custom software to digital platforms, we help businesses
          streamline operations, improve productivity, and accelerate digital
          transformation. Build your future with reliable technology and smarter
          solutions.
        </p>

        {/* Button */}
        <a
          href="#contact"
          className="inline-block w-full sm:w-auto border border-white rounded-md px-7 sm:px-8 py-3 text-sm sm:text-base font-semibold tracking-wide hover:bg-white hover:text-blue-700 transition-all duration-300 text-center"
        >
          GET STARTED
        </a>

      </div>

    </section>
  );
}
