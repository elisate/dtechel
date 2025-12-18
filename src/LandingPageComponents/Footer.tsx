import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:pl-[3rem] xl:pr-[3rem] py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div>
            <h2 className="text-white text-3xl font-bold mb-6">Dtechel</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Career
                </a>
              </li>
            </ul>
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
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={20} />
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
            © Copyright 2024, All Rights Reserved by company
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;