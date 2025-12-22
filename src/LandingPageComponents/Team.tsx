import { Facebook, Instagram, Twitter } from 'lucide-react';

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Eleanor Pena",
      position: "Senior Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
      socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Ralph Edwards",
      position: "Senior Developer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
      socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Albert Flores",
      position: "Senior Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
      socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#"
      }
    },
    {
      id: 4,
      name: "Jerome Bell",
      position: "Senior Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
      socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <div className='bg-gray-50'>
      <div >
        {/* Section Header */}
        <div >
              <span className="text-purple-600 font-semibold text-xs sm:text-sm md:text-base tracking-wide uppercase mb-4">
                OUR TEAM
              </span>

<div className='text-center mb-[3rem]'><h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 mb-4">
              Our Professional Team Member
            </h2></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group cursor-pointer"
            >
              {/* Image Container with Dark Background */}
              <div className="relative bg-black rounded-2xl overflow-hidden mb-6 aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Social Icons - Show on hover */}
                <div className="absolute bottom-6 left-6 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <a
                    href={member.socials.facebook}
                    className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5 fill-current" />
                  </a>
                  <a
                    href={member.socials.instagram}
                    className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={member.socials.twitter}
                    className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5 fill-current" />
                  </a>
                </div>

                {/* Diagonal Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 20px,
                      rgba(255, 255, 255, 0.1) 20px,
                      rgba(255, 255, 255, 0.1) 21px
                    ),
                    repeating-linear-gradient(
                      -45deg,
                      transparent,
                      transparent 20px,
                      rgba(255, 255, 255, 0.1) 20px,
                      rgba(255, 255, 255, 0.1) 21px
                    )`
                  }}
                ></div>
              </div>

              {/* Member Info */}
              <div>
                <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-1 group-hover:text-orange-500 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;