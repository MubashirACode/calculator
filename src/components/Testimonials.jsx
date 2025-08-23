import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
export const Testimonials = () => {
  const testimonials = [
    {
      id: 'sarah-johnson',
      name: 'Sarah Johnson',
      role: 'Mathematics Teacher',
      quote: 'These calculators have transformed how I teach math. My students love the interactive graphing calculator, and I appreciate the accuracy of all tools.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20mathematics%20teacher%20smiling%20confidently%2C%20wearing%20glasses%20and%20professional%20attire%2C%20warm%20classroom%20background%2C%20friendly%20and%20approachable%2C%20realistic%20portrait%20photography%20style&width=100&height=100&seq=testimonial-1&orientation=squarish',
    },
    {
      id: 'michael-chen',
      name: 'Michael Chen',
      role: 'Financial Advisor',
      quote: 'The financial calculator is incredibly comprehensive. I use it daily for client consultations and it never fails to provide accurate investment calculations.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20male%20financial%20advisor%20in%20business%20suit%2C%20confident%20and%20trustworthy%20expression%2C%20modern%20office%20background%2C%20realistic%20portrait%20photography%20style&width=100&height=100&seq=testimonial-2&orientation=squarish',
    },
    {
      id: 'emily-rodriguez',
      name: 'Emily Rodriguez',
      role: 'Engineering Student',
      quote: 'As an engineering student, I rely on these calculators for complex calculations. The scientific calculator has all the functions I need for my coursework.',
      image: 'https://readdy.ai/api/search-image?query=Young%20female%20engineering%20student%20with%20notebook%20and%20calculator%2C%20focused%20and%20determined%20expression%2C%20university%20library%20background%2C%20realistic%20portrait%20photography%20style&width=100&height=100&seq=testimonial-3&orientation=squarish',
    },

  ];

  return (
    <section id='Testimonials' className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <motion.h2

            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}

            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tight">
            What Our <span className="text-green-500">Users Say</span>
          </motion.h2>
          <motion.p

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}

            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied users who trust our calculators for their professional and personal calculation needs.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <motion.div


          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}

          className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-100"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400"
                    fill="currentColor"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed italic">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}, ${testimonial.role}`}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-base sm:text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <div className="text-center mt-8 sm:mt-10 lg:mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-gray-600">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-500 mb-2">5,00+</div>
              <div className="text-sm sm:text-base">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-500 mb-2">4.9/5</div>
              <div className="text-sm sm:text-base">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-500 mb-2">3K+</div>
              <div className="text-sm sm:text-base">Calculations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};