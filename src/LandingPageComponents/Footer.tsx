import { Instagram, Github, Linkedin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import dt from '../assets/dt_removed.png';

function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:pl-[3rem] xl:pr-[3rem] py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div>
            <h2 className="text-white text-3xl font-bold mb-6 flex flex-row items-center gap-1"><img src={dt} alt="" className='
            h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110' />Dtechel</h2>
            <p className="text-gray-400 hover:text-white transition-colors leading-relaxed">
              Dtechel is a technology startup delivering innovative IT solutions for business transformation and community development.
            </p>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Help</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Delivery Details
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Free eBooks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Development Tutorial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  How to - Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  YouTube Playlist
                </a>
              </li>
            </ul>
          </div>

          {/* Extra Links Section */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Extra Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/blog" className="hover:text-white transition-colors">
                  Dtechel News
                </a>
              </li>
              <li>
                <a href="services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="project" className="hover:text-white transition-colors">
                  Our Projects
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-6">

            <a
              href="https://www.instagram.com/elyse.dushimirimana"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://x.com/Dushelisa"
              className="hover:text-white transition-colors"
              aria-label="X"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>



            <a
              href="https://github.com/elisate"
              className="hover:text-white transition-colors"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
            <a
              href="https://wa.me/0787239952"
              className="hover:text-white transition-colors"
              aria-label="Linkedin"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://wa.me/0787239952"
              className="hover:text-white transition-colors"
              aria-label="Whatsapp"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="YouTube"
            >

            </a>

          </div>

          {/* Bottom Links */}
          <div className="flex items-center gap-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Support
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm">
            © Copyright 2026, All Rights Reserved by Dtechel
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;