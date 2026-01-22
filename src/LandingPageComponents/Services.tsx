import { ArrowUpRight, Code, Smartphone, Network, Palette, Brain, Cpu } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "We create responsive, high-performance websites and web applications using the latest technologies, ensuring seamless user experiences, robust functionality, and scalable solutions tailored to your business needs."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "We develop intuitive, feature-rich mobile applications for both Android and iOS, delivering smooth performance, offline capabilities, and a native-like experience, using the most suitable technologies for your project."
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "System Design",
      description: "We design scalable and robust software systems, from backend services to cloud infrastructure, ensuring seamless performance, strong security, and fully maintainable solutions tailored to your unique business needs."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "We design engaging, user-friendly interfaces with a focus on usability, accessibility, and modern design principles, helping your products stand out and improve user retention."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI and ML Solutions",
      description: "We implement AI and machine learning solutions tailored to your business, including predictive analytics, natural language processing, and intelligent automation to drive smarter decisions."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "IoT Solutions",
      description: "We create connected devices and IoT ecosystems that collect, analyze, and act on real-time data, enabling automation, monitoring, and intelligent insights for your operations."
    }
  ];

  return (
    <div className='pt-24 pb-16 md:py-24'>
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