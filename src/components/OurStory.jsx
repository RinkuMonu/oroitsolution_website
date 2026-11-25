import React, { useState } from 'react';

export default function OurStory() {

  const [activeTab, setActiveTab] = useState("Our Vision");

  const tabContent = {
    "Who We Are": [
      "We are a technology-driven software company focused on building innovative digital solutions for businesses. Our team combines technical expertise, creativity, and modern technologies to deliver reliable software products.",
      "We believe in understanding our clients' needs and transforming their ideas into meaningful digital experiences through quality development and continuous support."
    ],

    "Our Vision": [
      "Our vision is to make technology accessible and useful for businesses of all sizes. We aim to develop innovative digital solutions that simplify business processes, improve productivity and support long-term business growth.",
      "We strive to build a trusted technology company by focusing on software quality, continuous improvement and customer satisfaction."
    ],

    "Our Story": [
      "Our journey is driven by a passion for technology and a commitment to solving real-world business challenges. We started with a simple goal: to help businesses grow through smart and effective software solutions.",
      "With a focus on innovation, teamwork and continuous learning, we continue to explore modern technologies and build solutions that create value for our clients."
    ]
  };

  const tabs = ["Who We Are", "Our Vision", "Our Story"];

  return (
    <section className="bg-[#fafafa] py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-12 overflow-hidden">

      <div className="max-w-[1400px] mx-auto mt-2 sm:mt-6 lg:mt-8 px-1 sm:px-2">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">

          {/* Left Side - Image */}
          <div className="relative w-full max-w-lg lg:max-w-none mx-auto">

            {/* Dotted Background */}
            <div
              className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 opacity-50"
              style={{
                backgroundImage: "radial-gradient(#bdbdbd 1.5px, transparent 1.5px)",
                backgroundSize: "18px 18px"
              }}
            ></div>

            <img
              src="https://oroitsolution.info/front/images/about/about-img1.jpg"
              alt="Our Team Working Together"
              className="relative z-10 w-full h-[220px] min-[400px]:h-[260px] sm:h-[340px] md:h-[380px] lg:h-[440px] object-cover rounded-xl sm:rounded-sm shadow-md"
            />

          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col ml-0 lg:ml-5 w-full min-w-0">

            {/* Section Label */}
            <div className="flex items-center gap-3 mb-3 sm:mb-5">

              <span className="w-6 sm:w-7 h-[2px] bg-blue-600"></span>

              <span className="text-xs sm:text-base lg:text-lg font-bold tracking-wider text-black uppercase">
                OUR STORY
              </span>

            </div>

            {/* Main Heading */}
            <h2 className="text-2xl min-[400px]:text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Our team comes with the experience and knowledge
            </h2>

            {/* Tabs */}
            <div className="grid grid-cols-3 gap-1 sm:flex sm:flex-wrap sm:gap-2 bg-gray-100 p-1 sm:p-2 rounded-lg mb-5 sm:mb-7 w-full">

              {tabs.map((tab) => (

                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-1.5 sm:px-5 py-2 sm:py-2.5 rounded-md text-[11px] min-[380px]:text-xs sm:text-base font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap text-center ${
                    activeTab === tab
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-white text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </button>

              ))}

            </div>

            {/* Tab Content */}
            <div key={activeTab}>

              {tabContent[activeTab].map((paragraph, index) => (

                <p
                  key={index}
                  className="text-xs min-[400px]:text-sm sm:text-base text-gray-600 leading-relaxed sm:leading-7 mb-3 sm:mb-4"
                >
                  {paragraph}
                </p>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
