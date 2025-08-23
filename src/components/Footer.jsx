import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Facebook, Twitter, Linkedin, Instagram, ShieldCheck, User, Gift, Heart } from 'lucide-react';

export const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Calculators', href: 'all-calculator' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Support', href: 'mailto:codezavox@gmail.com', external: true },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookie' },
    { name: 'Disclaimer', href: '/disclamir' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/calchub', label: 'Facebook' },
    { icon: Linkedin, href: 'https://linkedin.com/company/calchub', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/codez_avox12/', label: 'Instagram' },
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-8 h-8 flex items-center justify-center bg-green-500 rounded-lg">
                <Calculator className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <span className="font-['Pacifico'] text-xl sm:text-2xl text-white">CalcHub</span>
            </div>
            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 max-w-md leading-relaxed">
              Your trusted source for free, accurate, and easy-to-use online calculators. Empowering students, professionals, and everyday users with powerful calculation tools.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center bg-gray-800 hover:bg-green-500 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label={`Follow us on ${social.label}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-4 sm:w-5 h-4 sm:h-5 text-white" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-green-400">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) =>
                link.external ? (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                      aria-label={link.name}
                    >
                      {link.name}
                    </a>
                  </li>
                ) : (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                      aria-label={link.name}
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-green-400">Legal</h3>
            <ul className="space-y-2 sm:space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label={link.name}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-xs sm:text-sm">
              © {new Date().getFullYear()} CalcHub. All rights reserved. Made with <Heart className="inline-block w-4 h-4 text-red-400" aria-hidden="true" /> for calculation enthusiasts worldwide.
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 sm:w-5 h-4 sm:h-5 text-green-400" aria-hidden="true" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-4 sm:w-5 h-4 sm:h-5 text-green-400" aria-hidden="true" />
                <span>No Registration Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Gift className="w-4 sm:w-5 h-4 sm:h-5 text-green-400" aria-hidden="true" />
                <span>100% Free</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};