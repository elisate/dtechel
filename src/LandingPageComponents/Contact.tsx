import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

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
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray- py-16 md:py-24">
            <span className='text-purple-600 font-semibold text-sm  tracking-wider mb-4'>CONTACT US</span>
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-7">

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 mb-4">
                        It's very easy to contact!
                    </h2>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    {/* Left Side - Contact Information */}
                    <div className="space-y-6">
                        {/* Contact Information Card */}
                        <div className="rounded-3xl p-10">
                            <div>
                                <h2 className="text-xl sm:text-2xl font-medium mb-3 text-gray-900">Contact Information</h2>
                                <p className="text-gray-600 mb-10">Fill out the form and our team will get back to you within 24 hours.</p>

                                <div className="space-y-8">
                                    {/* Call Us */}
                                    <div className="flex items-start gap-5 group">
                                        <div className="bg-orange-500 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <Phone className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-sm font-semibold mb-2 text-gray-900">Call Us</h3>
                                            <a href="tel:+250786176444" className="text-gray-600 hover:text-orange-500 transition-colors text-lg">
                                                +250 786 176 444
                                            </a>
                                        </div>
                                    </div>

                                    {/* Email Us */}
                                    <div className="flex items-start gap-5 group">
                                        <div className="bg-orange-500 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <Mail className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-sm font-semibold mb-2 text-gray-900">Email Us</h3>
                                            <a href="mailto:infodtechel@gmail.com" className="text-gray-600 hover:text-orange-500 transition-colors text-lg break-all">
                                            infodtechel@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Visit Us */}
                                    <div className="flex items-start gap-5 group">
                                        <div className="bg-orange-500 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <MapPin className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-sm font-semibold mb-2 text-gray-900">Visit Us</h3>
                                            <p className="text-gray-600 text-lg leading-relaxed">
                                                Kacyiru ,KG 33 AVE
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Media Section */}
                                <div className="mt-12 pt-8 border-t border-gray-200">


                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="bg-white rounded-3xl p-10 lg:p-12 shadow-xl border border-gray-100">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    value={formData.name}

                                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-0 focus:ring-orange-500 focus:border-orange-500 transition-all hover:border-gray-300"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    value={formData.email}

                                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all hover:border-gray-300"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Your Message *
                                </label>
                                <textarea
                                    name="message"
                                    placeholder="Tell us about your project or inquiry..."
                                    value={formData.message}
                                    rows={3}
                                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all resize-none hover:border-gray-300"
                                ></textarea>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className='bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-500 transition-all duration-300 transform hover:scale-105'
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