import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-900 text-slate-400" id="main-footer">
      {/* Upper Footer section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          
          {/* Column 1: Brand details */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <Logo variant="dark" iconSize="md" />
            </div>
            <p className="text-sm font-light leading-relaxed text-slate-400">
              Premium gym equipment, fitness accessories, and workout essentials designed to help you train smarter, stronger, and better. Transform your training today.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  onClick={handleLinkClick}
                  className="transition-colors hover:text-white"
                >
                  Home Screen
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  onClick={handleLinkClick}
                  className="transition-colors hover:text-white"
                >
                  Shop Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={handleLinkClick}
                  className="transition-colors hover:text-white"
                >
                  About Our Mission
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  onClick={handleLinkClick}
                  className="transition-colors hover:text-white"
                >
                  Fitness Articles
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className="transition-colors hover:text-white"
                >
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact Info</h3>
            <div className="mt-2 space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                <span>
                  125 Wellness Avenue<br />
                  New York, NY 10001
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-orange-500" />
                <a href="tel:+15551234567" className="hover:text-white">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-orange-500" />
                <a href="mailto:support@fitzee.com" className="hover:text-white">
                  support@fitzee.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Business Hours */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Business Hours</h3>
            <div className="mt-2 space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                <div>
                  <div className="flex justify-between gap-4">
                    <span>Mon – Fri:</span>
                    <span className="text-white">9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-4 mt-1">
                    <span>Saturday:</span>
                    <span className="text-white">10:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-4 mt-1">
                    <span>Sunday:</span>
                    <span className="text-red-400 font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Lower copyright section */}
        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-xs">
          <p className="leading-normal">
            &copy; {currentYear} Fitzee Fitness Solutions. All rights reserved. Designed to help you build strength, power, and high-performance habits safely.
          </p>
        </div>
      </div>
    </footer>
  );
}
