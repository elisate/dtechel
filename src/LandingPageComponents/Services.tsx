import { ArrowUpRight, Code, Smartphone, Network, Palette, Brain, Cpu } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Assertively streamline interactive interfaces after value-added infrastructures."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Assertively streamline interactive interfaces after value-added infrastructures."
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "System Design",
      description: "Assertively streamline interactive interfaces after value-added infrastructures."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Assertively streamline interactive interfaces after value-added infrastructures."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI and ML Solutions",
      description: "Assertively streamline interactive interfaces after value-added infrastructures."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "IoT Solutions",
      description: "Assertively streamline interactive interfaces after value-added infrastructures."
    }
  ];

  return (
    <div className='py-16 md:py-24'>
      <div >
        {/* Section Header */}
       <span className='text-purple-600 font-semibold text-sm  tracking-wider mb-4'> SERVICES</span>
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 mb-4">
            Our best services
          </h2>
        </div>


        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-6 text-white">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Learn More Link */}
              <button className="flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all duration-300">
                LEARN MORE
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;