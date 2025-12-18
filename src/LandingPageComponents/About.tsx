function About() {
  return (
    <div className="bg-gray-50 py-16 md:py-20 lg:py-24">
      {/* Section Header */}
      <div className="mb-12">
        <h3 className="text-purple-600 font-semibold text-sm  tracking-wider mb-4">
          ABOUT US
        </h3>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 mb-6 leading-tight">
          Our Company Specialize In IT<br />
          Solutions & Technology with Passion
        </h1>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-5xl">
          Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. Holistic deliver end-to-end architectures rather than economically sound benefits. Progressively simplify end-to-end paradigms. Assertively streamline interactive interfaces after value-added infrastructure.
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
            <div className="text-4xl md:text-5xl font-bold mb-1">12+</div>
            <div className="text-sm md:text-base font-medium">Years Experience</div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-8">
          {/* First Feature */}
          <div>
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-4">
              We Try To Give All Kind Of Technology Solution As Your Requirements And We Are The Best In Field.
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. Holistic deliver end-to-end architectures rather than economically sound benefits. Progressively simplify end-to-end paradigms. Assertively streamline interactive interfaces.
            </p>
          </div>

          {/* Second Feature */}
          <div>
            <h2 className="text-2xl md:text-3xl font-no text-gray-900 mb-4">
              Provide IT Services To Hundreds Of SME Customers Across A Diverse Range Of Sectors.
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. Holistic deliver end-to-end architectures rather than economically sound benefits. Progressively simplify end-to-end paradigms. Assertively streamline interactive interfaces.
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