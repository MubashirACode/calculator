import { Calculator, Check, ShieldCheck, Smartphone, User } from 'lucide-react';

import { motion } from 'framer-motion';
export const About = () => {
  return (
    <motion.section

      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      viewport={{ once: true }}



      id="About" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Why Choose Our <span className="text-green-500">Calculators?</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Our mission is to provide free, reliable, and accessible calculators for students, professionals, and everyday users worldwide. We believe that powerful mathematical tools should be available to everyone, without barriers or costs. Our calculators are designed with simplicity and accuracy in mind, ensuring you get precise results every time. No registration required, no hidden fees, and fully optimized for all devices including mobile phones and tablets.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                  <Check color="#22c55e" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-base sm:text-lg">100% Free</h3>
                  <p className="text-gray-600 text-sm sm:text-base">No hidden costs or subscription fees</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                  <Smartphone color="#22c55e" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-base sm:text-lg">Mobile Friendly</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Works perfectly on all devices</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                  <User color="#22c55e" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-base sm:text-lg">No Registration</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Start using immediately</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                  <ShieldCheck color="#22c55e" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-base sm:text-lg">Accurate Results</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Precise calculations every time</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20person%20using%20calculator%20on%20modern%20laptop%20computer%2C%20clean%20workspace%20setup%2C%20natural%20lighting%2C%20focused%20on%20mathematical%20calculations%2C%20modern%20office%20environment%2C%20technology%20and%20productivity%2C%20realistic%20photography%20style%2C%20warm%20professional%20atmosphere&amp;width=600&amp;height=500&amp;seq=about-img-001&amp;orientation=landscape"
                alt="Professional using calculator on laptop"
                className="w-[90%] h-auto rounded-2xl shadow-2xl object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white rounded-xl shadow-lg p-4 max-w-[200px] sm:max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center bg-green-500 rounded-full flex-shrink-0">
                    <Calculator color="#ffff" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-base sm:text-lg">50,00+</div>
                    <div className="text-sm sm:text-base text-gray-600">Calculations Daily</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};