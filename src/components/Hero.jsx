import React from 'react';
import { ArrowDown, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.jpg';
import { motion } from 'framer-motion';

export const Hero = () => {
  const scrollToCalculators = () => {
    const calculatorsSection = document.getElementById('Calculators');
    if (calculatorsSection) {
      calculatorsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 ">
      {/* Background Image with Optimized Loading */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage}), linear-gradient(to right, #1a202c, #2d3748)`,
          willChange: 'transform',
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/50" />
      </div>

      {/* Main Content */}
      <div className="relative  container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            Free Online Calculators for{' '}
            <span className="text-green-400">Every Need</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Fast, accurate, and easy-to-use tools for math, finance, health, and more. Start calculating instantly with our professional calculator suite.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/all-calculator">
              <button
                className="bg-green-500 cursor-pointer hover:bg-green-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-md font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="Start Calculating Now"
              >
                <span className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                  Start Calculating Now
                </span>
              </button>
            </Link>
            <Link to="/all-calculator">
              <button
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 sm:px-8 sm:py-4 rounded-md font-semibold text-base sm:text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                aria-label="Learn More"
              >
                Learn More
              </button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center"
          >
            <div className="text-white">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-2">8</div>
              <div className="text-sm sm:text-base text-gray-300">Free Calculators</div>
            </div>
            <div className="text-white">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-sm sm:text-base text-gray-300">Free to Use</div>
            </div>
            <div className="text-white">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-sm sm:text-base text-gray-300">Available</div>
            </div>
            <div className="text-white">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-2">0</div>
              <div className="text-sm sm:text-base text-gray-300">Login Required</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <button
          onClick={scrollToCalculators}
          className="text-white hover:text-green-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
          aria-label="Scroll to Calculators section"
        >
          <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
};