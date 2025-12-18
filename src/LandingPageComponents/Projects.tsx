import { ArrowUpRight } from 'lucide-react';

function Projects() {
  const projects = [
    {
      id: 1,
      category: "TECH",
      title: "Tech Cover Industry",
      description: "There are many variations of passages",
      image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&q=80",
      titleColor: "text-gray-900"
    },
    {
      id: 2,
      category: "TECH",
      title: "Application Integration",
      description: "There are many variations of passages",
      image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&q=80",
      titleColor: "text-orange-500"
    },
    {
      id: 3,
      category: "TECH",
      title: "Database Design",
      description: "There are many variations of passages",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80",
      titleColor: "text-gray-900"
    }
  ];

  return (
    <div className=' bg-white'>
      <div className="py-16 md:py-24">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          
            <span className="text-purple-600 font-semibold text-sm  tracking-wider mb-2">
              PROJECT
            </span>
         
          <div className='text-center mb-10'>
             <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 mb-4">
            Awesome Works For Our Clients
          </h2>
          </div>
         
    
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-gray-900 hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content Card */}
              <div className="bg-white p-6 sm:p-8 -mt-16 mx-4 sm:mx-6 relative z-10 rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                {/* Category Badge */}
                <span className="inline-block bg-purple-100 text-purple-600 text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className={`text-xl sm:text-2xl font-medium mb-2  group-hover:text-orange-500 transition-colors duration-300`}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {project.description}
                </p>

                {/* View Project Link */}
                <button className="flex items-center gap-2 text-gray-900 font-semibold text-sm hover:gap-3 transition-all duration-300 group/btn">
                  View Project
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:text-orange-500 transition-colors" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;