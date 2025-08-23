import React from 'react';
import { Rocket, ShieldCheck, Smartphone, Bookmark, History, Palette, Calculator } from 'lucide-react';
import { motion } from 'framer-motion';
export const Features = () => {
  const features = [
    {
      id: 'lightning-fast',
      title: 'Lightning Fast',
      description: 'Instant calculations with optimized algorithms for maximum speed and efficiency.',
      icon: Rocket,
      color: 'bg-green-100 group-hover:bg-green-500',
    },
    {
      id: 'privacy-focused',
      title: 'Privacy Focused',
      description: "Your calculations stay private. We don't store or track your personal data.",
      icon: ShieldCheck,
      color: 'bg-green-100 group-hover:bg-green-500',
    },
    {
      id: 'mobile-optimized',
      title: 'Mobile Optimized',
      description: 'Perfect user experience across all devices, from desktop to mobile.',
      icon: Smartphone,
      color: 'bg-green-100 group-hover:bg-green-500',
    },
    {
      id: 'save-share',
      title: 'Save & Share',
      description: 'Bookmark results and share calculations with colleagues and friends easily.',
      icon: Bookmark,
      color: 'bg-green-100 group-hover:bg-green-500',
    },

    {
      id: 'beautiful-interface',
      title: 'Beautiful Interface',
      description: 'Clean, intuitive design that makes complex calculations simple and enjoyable.',
      icon: Palette,
      color: 'bg-green-100 group-hover:bg-green-500',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <motion.h2

            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tight">
            Powerful <span className="text-green-500">Features</span>
          </motion.h2>
          <motion.p

            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}

            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the best in online calculations with our feature-rich platform designed for professionals, students, and everyday users.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div

          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}


          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300`}
                >
                  <Icon
                    className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 group-hover:text-white transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div

          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'backInOut' }}



          className="mt-10 sm:mt-12 lg:mt-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-6 sm:p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Ready to Start Calculating?
          </h3>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-green-100">
            Join thousands of users who trust our calculators for their daily needs.
          </p>
          <button
            className="bg-white text-green-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-500"
            aria-label="Get Started Now"
          >
            <span className="flex items-center justify-center gap-2">
              <Calculator className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              Get Started Now
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};