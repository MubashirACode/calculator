import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, FunctionSquare, LineChart, DollarSign, Currency, Ruler, Percent, HeartPulse, Gift } from 'lucide-react';

export const Calculatorspage = () => {
  const calculators = [
    {
      id: 'basic',
      title: 'Basic Calculator',
      description: 'Simple arithmetic operations for everyday calculations',
      icon: Calculator,
      color: 'bg-blue-500 hover:bg-blue-600',
      href: '/basic',
    },
    {
      id: 'scientific',
      title: 'Scientific Calculator',
      description: 'Advanced mathematical functions and operations',
      icon: FunctionSquare,
      color: 'bg-purple-500 hover:bg-purple-600',
      href: '/scientific',
    },
    {
      id: 'graphing',
      title: 'Graphing Calculator',
      description: 'Visualize mathematical functions and equations',
      icon: LineChart,
      color: 'bg-green-500 hover:bg-green-600',
      href: '/graph',
    },
    {
      id: 'financial',
      title: 'Financial Calculator',
      description: 'Interest, loans, investments, and financial planning',
      icon: DollarSign,
      color: 'bg-yellow-500 hover:bg-yellow-600',
      href: '/financial',
    },
    {
      id: 'currency',
      title: 'Currency Converter',
      description: 'Real-time currency exchange rates and conversion',
      icon: Currency,
      color: 'bg-red-500 hover:bg-red-600',
      href: '/currceny',
    },
    {
      id: 'unit',
      title: 'Unit Converter',
      description: 'Convert between different units of measurement',
      icon: Ruler,
      color: 'bg-indigo-500 hover:bg-indigo-600',
      href: '/unit',
    },
    {
      id: 'percentage',
      title: 'Percentage Calculator',
      description: 'Calculate percentages, discounts, and increases',
      icon: Percent,
      color: 'bg-pink-500 hover:bg-pink-600',
      href: '/percent',
    },
    {
      id: 'bmi',
      title: 'BMI Calculator',
      description: 'Calculate Body Mass Index and health metrics',
      icon: HeartPulse,
      color: 'bg-teal-500 hover:bg-teal-600',
      href: '/bmical',
    },
  ];

  return (
    <section id="Calculators"   className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tight">
            Our Free <span className="text-green-500">Calculators</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive collection of professional calculators designed to handle all your mathematical, financial, and conversion needs.
          </p>
        </div>

        {/* Calculator Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {calculators.map((calculator) => {
            const Icon = calculator.icon; // Dynamically assign the icon component
            return (
              <Link
                key={calculator.id}
                to={calculator.href}
                className="block group focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label={`Try ${calculator.title}`}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden h-full">
                  <div className="p-4 sm:p-6">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 ${calculator.color} rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300 group-hover:scale-110 transform`}
                    >
                      <Icon className="text-white w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                      {calculator.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                      {calculator.description}
                    </p>
                    <div className="flex items-center text-green-500 font-medium text-sm sm:text-base group-hover:text-green-600 transition-colors duration-300">
                      <span>Try it now</span>
                      <i className="ri-arrow-right-line ml-2 transform group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-green-400 transition-all duration-300" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 sm:mt-10 lg:mt-12">
          <div className="inline-flex items-center bg-green-50 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-green-700">
            <Gift  className=''/>
            <span className="font-medium text-sm sm:text-base">All calculators are completely free to use!</span>
          </div>
        </div>
      </div>
    </section>
  );
};