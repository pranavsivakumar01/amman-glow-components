import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-electric-gray-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">
                Sri Amman <span className="text-electric-yellow">Groups</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-4 text-lg">
              Strong Connections, Stronger Future. Your trusted partner for electrical, steel, and roofing solutions.
            </p>
            <div className="flex space-x-4">
            <a
  href="https://www.instagram.com/ammanroofing/"
  target="_blank"
  rel="noopener noreferrer"
  className="relative group"
>
  <Instagram className="h-7 w-7 text-pink-500 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />

  {/* Add colorful gradient glow effect */}
  <span className="absolute inset-0 rounded-full blur-lg opacity-70 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 animate-pulse -z-10"></span>
</a>

              
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4 text-electric-yellow">Our Businesses</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors text-lg">Home</Link></li>
              <li><Link to="/electricals" className="text-gray-300 hover:text-white transition-colors text-lg">⚡ Electricals</Link></li>
              <li><Link to="/steel" className="text-gray-300 hover:text-white transition-colors text-lg">🏗️ Steel</Link></li>
              <li><Link to="/roofing" className="text-gray-300 hover:text-white transition-colors text-lg">🏠 Roofing</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-lg">📞 Contact Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4 text-electric-yellow">Business Hours</h3>
            <ul className="space-y-3 text-lg">
              <li className="text-gray-300">
                <strong className="text-white">Mon - Sat:</strong><br/>
                9:00 AM - 8:00 PM
              </li>
              <li className="text-gray-300">
                <strong className="text-white">Sunday:</strong><br/>
                HOILIDAY 
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4 text-electric-yellow">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 text-electric-yellow flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-lg">Sankari Main Rd, Magudanchavadi, Tamil Nadu 637103</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 mr-3 text-electric-yellow" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-white transition-colors text-lg">+91 9443357881</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 mr-3 text-electric-yellow" />
                <a href="mailto:sriammanele@gmail.com" className="text-gray-300 hover:text-white transition-colors text-lg">sriammanele@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-lg">
            &copy; {new Date().getFullYear()} Sri Amman Groups. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
