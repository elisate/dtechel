import { Instagram, Github, Linkedin } from 'lucide-react';
import ceo from "../assets/ceo.jpg"
import tech_lead from "../assets/tech_lead.jpg"
import dev1 from "../assets/dev1.png"
import dev2 from "../assets/dev2.png"

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "DUSHIMIYIMANA Elisa",
      position: "Chief Executive Officer",
      image: ceo,
      socials: {
        // facebook: "#",
        instagram: "https://www.instagram.com/elyse.dushimirimana",
        twitter: "https://x.com/Dushelisa",
        github: "https://github.com/elisate",
        linkedin: "#"
      }
    },
    {
      id: 2,
      name: "NIGANZE Alain",
      position: "Tech Lead",
      image: tech_lead,
      socials: {
        // facebook: "#",
        instagram: "#",
        twitter: "#",
        github: "#",
        linkedin: "#"
      }
    },
    {
      id: 3,
      name: "Bonheur Cedrick",
      position: "Software Developer",
      image: dev1,
      socials: {
        // facebook: "#",
        instagram: "#",
        twitter: "#",
        github: "#",
        linkedin: "#"
      }
    },
    {
      id: 4,
      name: "ITANGISHATSE MUSA",
      position: "Software Developer",
      image: dev2,
      socials: {
        // facebook: "#",
        instagram: "#",
        twitter: "#",
        github: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <div className='bg-gray-50 pt-24 pb-12 md:py-16'>
      <div >
        {/* Section Header */}
        <div >
          <span className="text-purple-600 font-semibold text-sm tracking-wider mb-4">
            OUR TEAM
          </span>

          <div className='text-center mb-[3rem]'><h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 mb-4">
            Our Professional Team Members
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
                  {/* <a
                    href={member.socials.facebook}
                    className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5 fill-current" />
                  </a> */}
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
                    aria-label="X"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                  </a>
                  <a
                    href={member.socials.github}
                    className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors duration-300"
                    aria-label="Github"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={member.socials.linkedin}
                    className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors duration-300"
                    aria-label="Linkedin"
                  >
                    <Linkedin className="w-5 h-5" />
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
              <div >
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