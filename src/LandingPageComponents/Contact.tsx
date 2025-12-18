import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
   
    message: ''
  });

 
  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      console.log('Form submitted:', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all required fields (name, email, and message)');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image with Progress Card */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black p-8">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                alt="Team collaboration" 
                className="w-full h-auto rounded-2xl"
              />
              
              {/* Progress Card Overlay */}
              <div className="absolute bottom-12 right-12 bg-orange-500 rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <p className="text-black font-bold text-lg mb-4">Weekly<br/>Progress</p>
                  <div className="relative w-24 h-24 mx-auto">
                    <svg className="transform -rotate-90 w-24 h-24">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#ffffff"
                        strokeWidth="8"
                        fill="none"
                        opacity="0.3"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#000000"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.75)}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-black">75%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="mb-8">
              <p className="text-purple-600 font-semibold text-sm uppercase tracking-wider mb-3">
                GET IN TOUCH
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                It's very easy<br/>to contact!
              </h1>
            </div>

            <div className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
               
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                 
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>

           

              <div>
                <textarea
                  name="message"
                  placeholder="Type message..."
                  value={formData.message}
           
                 
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wider"
              >
                Send Message Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;