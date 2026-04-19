import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

import logoFull from '../../assets/logo-full1.png';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-slate-300">
      <div className="container mx-auto px-4 md:px-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">

          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoFull} alt="LeadsHub Logo" className="h-46 w-auto object-contain" />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mt-2">
              Empowering ad professionals and businesses to scale efficiently through smart targeting and high-quality lead generation.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="https://www.instagram.com/leadsartist?igsh=MXV2OW1nNHRjY3V6ZA==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors duration-300">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold mb-2">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-sm hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link to="/about-us" className="text-sm hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="text-sm hover:text-indigo-400 transition-colors">Pricing</Link></li>
              <li><Link to="/contact-us" className="text-sm hover:text-indigo-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Important Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold mb-2">Important Links</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="https://leadshub.com/expert-login" className="text-sm hover:text-indigo-400 transition-colors">Login as Expert</a></li>
              <li><a href="https://leadshub.com/client-login" className="text-sm hover:text-indigo-400 transition-colors">Login as Client</a></li>
              <li><a href="https://leadshub.com/terms-of-service" className="text-sm hover:text-indigo-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="https://leadshub.com/privacy-policy" className="text-sm hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold mb-2">Contact</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Kanpur Nagar, Uttar Pradesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <a href="mailto:contact@leadshub.com" className="text-sm hover:text-white transition-colors">contact@leadshub.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <a href="tel:+916390002006" className="text-sm hover:text-white transition-colors">+91-6390002006</a>
              </li>
            </ul>
            <a
              href="https://wa.me/+916390002006"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-green-500 transition-colors w-fit"
            >
              WhatsApp Us
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} LeadsHub. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://leadshub.com/terms-of-service" className="hover:text-slate-300 transition-colors">Terms and Conditions</a>
            <a href="https://leadshub.com/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
