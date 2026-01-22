function About() {
  return (
    <div className="bg-gray-50 pt-24 pb-12 md:pb-16 md:pt-28">
      {/* Section Header */}
      <div className="mb-12">
        <h3 className="text-purple-600 font-semibold text-sm  tracking-wider mb-4">
          ABOUT US
        </h3>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl  font-medium text-gray-900 mb-6 leading-tight">
          Our Company Specialize In IT<br />
          Solutions & Technology with Passion
        </h1>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-5xl">
          Dtechel is a technology startup transforming business operations through innovative software solutions and scalable IT systems, while creating new IT solutions for community growth and development.

        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Side - Images */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            {/* Top Image */}
            <div className="col-span-2">
              <div className="bg-gray-300 rounded-2xl h-64 md:h-80 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-600">
                  [Team Meeting Image]
                </div>
              </div>
            </div>

            {/* Bottom Image */}
            <div className="col-span-2">
              <div className="bg-gray-300 rounded-2xl h-60 md:h-50 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-600">
                  [Business Discussion Image]
                </div>
              </div>
            </div>
          </div>

          {/* Experience Badge */}
          <div className="absolute bottom-8 left-8 bg-orange-500 text-white rounded-2xl p-6 shadow-2xl">
            <div className="text-4xl md:text-5xl font-bold mb-1">7+</div>
            <div className="text-sm md:text-base font-medium">Years Experience</div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-8">
          {/* First Feature */}
          <div>
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-4">
              Delivering Technology Solutions That Matter
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-2">
              Dtechel is a technology startup committed to providing a wide range of IT and software solutions tailored to meet unique business requirements. We design and build scalable, secure, and efficient technology systems that enable business growth, streamline operations, and drive digital transformation.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Our mission is to empower businesses with innovative technology while also creating IT solutions that contribute to community growth and sustainable development.
            </p>
          </div>

          {/* Second Feature */}
          <div>
            <h2 className="text-2xl md:text-3xl font-no text-gray-900 mb-4">
              Our Approach & Impact
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Our team works with passion and dedication to deliver end-to-end solutions, including software development, system design, digital platforms, and technology consulting. We focus on quality, innovation, and long-term value for our clients.<br />

              We proudly support small and medium-sized enterprises across diverse industries, helping them adopt modern technologies, improve productivity, and achieve sustainable success.
            </p>
          </div>



          {/* CTA Button */}
          <div>
            <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              MORE ABOUT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;