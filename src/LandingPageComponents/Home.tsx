import { Play, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import bg1 from "../assets/bg1.jpg"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-blue-50 overflow-hidden">
      {/* Decorative Stars */}
      <div className="absolute top-20 sm:top-20 md:top-24 lg:top-20 left-4 sm:left-10 text-purple-600 opacity-70 z-0 animate-bounce">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="sm:w-10 sm:h-10">
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
        </svg>
      </div>
      <div className="absolute top-12 sm:top-12 md:top-16 right-1/4 sm:right-1/4 text-orange-500 opacity-70 z-0 animate-pulse">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="sm:w-6 sm:h-6">
          <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
        </svg>
      </div>
      <div className="absolute bottom-32 sm:bottom-32 md:bottom-36 lg:bottom-32 left-4 sm:left-20 text-purple-600 opacity-70 z-0 animate-pulse">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="sm:w-8 sm:h-8">
          <path d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z" />
        </svg>
      </div>
      <div className="absolute bottom-1/4 right-4 sm:right-20 text-orange-500 opacity-70 z-0 animate-pulse">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="sm:w-7 sm:h-7">
          <path d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z" />
        </svg>
      </div>
      <div className="absolute top-1/3 right-4 sm:right-10 text-black opacity-50 z-0 animate-pulse">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="sm:w-5 sm:h-5">
          <path d="M12 2L13 9L20 10L13 11L12 18L11 11L4 10L11 9L12 2Z" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto pt-24 sm:pt-20 md:pt-24 lg:pt-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-12 lg:py-0 relative z-10">

          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Welcome Badge */}
            <div className="flex items-center space-x-2">
              <div className="w-12 h-0.5 bg-purple-600"></div>
              <span className="text-purple-600 font-semibold text-sm lg:text-base tracking-wide">
                Welcome To Dtechel
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 leading-tight">
                We Are Ready
              </h1>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight">
                <span className="bg-orange-500 text-white px-3 py-1 inline-block">
                  To Provide
                </span>
              </h1>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 leading-tight">
                IT Solutions
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base lg:text-lg max-w-xl leading-relaxed">
              We help businesses grow with modern technology solutions. Our dedicated team of skilled professionals delivers reliable, scalable, and efficient software solutions tailored to your needs.</p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6">
              <Link to="/services">  <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-300 font-medium text-sm lg:text-base transform hover:scale-105 shadow-lg">
                EXPLORE SERVICES
              </button></Link>

              <button className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors duration-300 font-semibold text-sm lg:text-base group">
                <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full border-2 border-orange-500 flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
                  <Play className="w-4 h-4 lg:w-5 lg:h-5 text-orange-500 group-hover:text-white fill-current" />
                </div>
                <span>Watch A Video</span>
              </button>
            </div>
          </div>

          {/* Right Content - Image Section */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="w-full h-auto object-cover"
              />
{/* <img src={bg1} alt="bg1" className="w-full h-auto object-cover"/> */}
              {/* Stats Card - Top Right */}
              <div className="absolute top-4 right-4 bg-white rounded-xl shadow-xl p-3 lg:p-4 cursor-pointer">
                <div className="text-right">
                  <div className="text-2xl lg:text-3xl font-bold text-orange-500">1000+</div>
                  <div className="text-xs lg:text-sm text-gray-600 font-medium">Happy Clients</div>
                  <div className="flex items-center justify-end mt-1 space-x-1">
                    <Star className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-400 fill-current" />
                    <span className="text-xs lg:text-sm font-semibold">4.9 (Review)</span>
                  </div>
                </div>
              </div>

              {/* Dtechel Review Card - Bottom Left */}
              <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-xl p-3 lg:p-4 cursor-pointer">
                <div className="text-xs text-gray-500 mb-1">REVIEWED ON</div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg lg:text-xl font-bold text-gray-900">Dtechel</span>
                </div>
                <div className="flex items-center mt-1 space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3 h-3 lg:w-4 lg:h-4 text-red-500 fill-current" />
                  ))}
                </div>
                <div className="text-xs text-gray-500 mt-1">1k+ REVIEWS</div>
              </div>
            </div>

            {/* Decorative Image - Bottom Right */}
            <div className="hidden lg:block absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              {/* <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop"
                alt="Professional"
                className="w-full h-full object-cover"
              /> */}
              <img src={bg1} alt="bg1" className="w-full h-full object-cover"/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}