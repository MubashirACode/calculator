import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowLeft } from 'lucide-react';

export const Disclaimer = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
          <div className="flex items-center space-x-2 mb-6 justify-center">
            <AlertTriangle className="w-8 h-8 text-green-500" aria-hidden="true" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Disclaimer
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 mb-8 text-center leading-relaxed">
            Last Updated: August 23, 2025
          </p>

          <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">1. General Information</h2>
              <p>
                CalcHub ("we," "our," or "us") provides calculators, including Basic Calculator, Scientific Calculator, Currency Converter, Unit Converter, and BMI Calculator, for informational and educational purposes only. The results are not intended as professional advice.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">2. No Professional Advice</h2>
              <p>
                Our calculators, particularly the Financial Calculator and BMI Calculator, provide general calculations. They are not substitutes for professional financial, medical, or other advice. Consult qualified professionals for specific guidance.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">3. Accuracy of Information</h2>
              <p>
                We strive for accuracy, but we cannot guarantee that all calculations are error-free. Results depend on user inputs, and we are not responsible for incorrect or incomplete data provided by users.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">4. Third-Party Services</h2>
              <p>
                Our site uses third-party services like Google AdSense, which may display ads based on your browsing data. We are not responsible for the content or accuracy of these ads.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">5. Limitation of Liability</h2>
              <p>
                CalcHub is not liable for any damages, losses, or consequences arising from your use of our calculators. Use our services at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">6. Contact Us</h2>
              <p>
                For questions about this Disclaimer, contact us at <a href="mailto:codezavox@gmail.com" className="text-green-500 hover:text-green-600">codezavox@gmail.com</a>.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-flex items-center text-green-500 hover:text-green-600 font-medium text-sm sm:text-base"
              aria-label="Return to homepage"
            >
            <span className='flex items-center'><ArrowLeft size={20} className='items-center' /></span>    Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};