import React from 'react';

export default function Blog() {

  const insights = [
    {
      image: "https://oroitsolution.info/front/images/blog/1.jpg",
      author: "BY SOFTWARE EXPERTS",
      title: "How Technology Is Transforming Modern Businesses",
      description: "Discover how innovative software solutions, web applications, and SaaS technologies are helping businesses streamline operations, improve efficiency, and accelerate digital growth."
    },
    {
      image: "https://oroitsolution.info/front/images/blog/2.jpg",
      author: "BY ORO IT TEAM",
      title: "Why Custom Software Solutions Matter for Growing Businesses",
      description: "Every business has unique needs. Discover how custom software, web applications, and scalable SaaS platforms help businesses streamline operations, improve efficiency, and grow digitally."
    },
    {
      image: "https://oroitsolution.info/front/images/blog/3.jpg",
      author: "BY ORO IT TEAM",
      title: "Digital Transformation: Building Smarter Business Solutions",
      description: "Discover how modern software development, innovative web applications, and smart SaaS solutions help businesses automate workflows, enhance productivity, and achieve sustainable growth."
    }
  ];

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16">

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-4">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-9 sm:mb-12 lg:mb-14">

          <span className="inline-block text-xs sm:text-sm font-semibold text-blue-600 px-5 sm:px-7 py-2 rounded-full border-2 border-blue-600">
            Latest Insights
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-4 sm:mt-5">
            Tech News & Updates
          </h2>

          <p className="text-sm sm:text-base text-gray-600 mt-3 sm:mt-4 leading-relaxed">
            Stay updated with the latest trends, innovations, and insights shaping
            the future of financial technology across the globe.
          </p>

        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-7">

          {insights.map((item, index) => (

            <div key={index} className="flex flex-col min-w-0">

              {/* Image */}
              <div className="relative overflow-hidden rounded-md aspect-[1.4/1]">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-[1.03]"
                />

                {/* Author Badge */}
                <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 flex items-center gap-2 bg-blue-600 text-white rounded-full pl-2 pr-3 sm:pr-4 py-1.5 sm:py-2 shadow-md">

                  <img
                    src="https://oroitsolution.info/front/images/blog/b6.jpg"
                    alt="Author"
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover border border-white"
                  />

                  <span className="text-[9px] sm:text-[11px] font-semibold whitespace-nowrap">
                    {item.author}
                  </span>

                </div>

              </div>

              {/* Content */}
              <div className="pt-5 sm:pt-6 lg:pt-7">

                <h3 className="text-4xl sm:text-xl lg:text-[22px] font-semibold text-gray-900 leading-snug mb-3 sm:mb-4">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
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
