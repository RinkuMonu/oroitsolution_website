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
    <section className="bg-white py-10 sm:py-16 lg:py-20 overflow-hidden">

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-2 mb-2">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-14">

          <span className="inline-block text-xs sm:text-sm font-semibold text-blue-600 px-4 sm:px-7 py-1.5 sm:py-2 rounded-full border-2 border-blue-600">
            Latest Insights
          </span>

          <h2 className="text-2xl min-[480px]:text-3xl sm:text-4xl font-bold text-gray-900 mt-3.5 sm:mt-5 tracking-tight">
            Tech News & Updates
          </h2>

          <p className="text-xs min-[400px]:text-sm sm:text-base text-gray-600 mt-2 sm:mt-3 leading-relaxed">
            Stay updated with the latest trends, innovations, and insights shaping
            the future of technology across the globe.
          </p>

        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

          {insights.map((item, index) => (

            <div key={index} className="flex flex-col min-w-0 group">

              {/* Image */}
              <div className="relative overflow-hidden rounded-xl aspect-[16/10] shadow-sm">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />

                {/* Author Badge */}
                <div className="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 flex items-center gap-1.5 sm:gap-2 bg-blue-600 text-white rounded-full pl-2 pr-3 sm:pr-4 py-1 sm:py-1.5 shadow-md">

                  <img
                    src="https://oroitsolution.info/front/images/blog/b6.jpg"
                    alt="Author"
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover border border-white"
                  />

                  <span className="text-[9px] sm:text-[10px] font-semibold whitespace-nowrap">
                    {item.author}
                  </span>

                </div>

              </div>

              {/* Content */}
              <div className="pt-4 sm:pt-5">

                <h3 className="text-base min-[480px]:text-lg sm:text-xl lg:text-[21px] font-bold text-gray-900 leading-snug mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
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
