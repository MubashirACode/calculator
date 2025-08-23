import React, { useState } from 'react';
import { Percent, RefreshCcw } from 'lucide-react';

export const PercentageCalculator = () => {
  const [type, setType] = useState('percentageOf');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const calculationTypes = [
    { value: 'percentageOf', label: 'What is X% of Y?', input1Label: 'Enter percentage (X)', input2Label: 'Enter value (Y)' },
    { value: 'percentageChange', label: 'Percentage Change from A to B', input1Label: 'Enter initial value (A)', input2Label: 'Enter final value (B)' },
    { value: 'findPercentage', label: 'X is what % of Y?', input1Label: 'Enter value (X)', input2Label: 'Enter total (Y)' },
  ];

  const calculatePercentage = () => {
    setError('');
    setResult('');
    const val1 = parseFloat(input1);
    const val2 = parseFloat(input2);

    if (isNaN(val1) || isNaN(val2)) {
      setError('Please enter valid numbers for both inputs.');
      return;
    }

    let result;
    switch (type) {
      case 'percentageOf':
        if (val1 < 0) {
          setError('Percentage cannot be negative.');
          return;
        }
        result = (val1 / 100) * val2;
        setResult(`${val1}% of ${val2} = ${result.toFixed(2)}`);
        break;
      case 'percentageChange':
        if (val1 === 0) {
          setError('Initial value cannot be zero for percentage change.');
          return;
        }
        result = ((val2 - val1) / val1) * 100;
        setResult(`Percentage change from ${val1} to ${val2} = ${result.toFixed(2)}%`);
        break;
      case 'findPercentage':
        if (val2 === 0) {
          setError('Total value cannot be zero.');
          return;
        }
        if (val1 < 0 || val2 < 0) {
          setError('Values cannot be negative.');
          return;
        }
        result = (val1 / val2) * 100;
        setResult(`${val1} is ${result.toFixed(2)}% of ${val2}`);
        break;
      default:
        setError('Invalid calculation type.');
    }
  };

  const handleReset = () => {
    setType('percentageOf');
    setInput1('');
    setInput2('');
    setResult('');
    setError('');
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-12 sm:py-16">
      <div className="container max-w-md sm:max-w-lg mx-auto px-4 sm:px-6 bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
        <div className="flex items-center space-x-2 mb-6 justify-center">
          <Percent className="w-8 h-8 text-green-500" aria-hidden="true" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Percentage Calculator
          </h1>
        </div>
        <p className="text-base sm:text-lg text-gray-600 mb-8 text-center leading-relaxed">
          Calculate percentages, like X% of Y, percentage change, or find what % X is of Y.
        </p>

        {/* Input Fields */}
        <div className="space-y-4 sm:space-y-6">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors duration-300"
            aria-label="Select calculation type"
          >
            {calculationTypes.map((calc) => (
              <option key={calc.value} value={calc.value}>
                {calc.label}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            placeholder={calculationTypes.find((calc) => calc.value === type).input1Label}
            className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors duration-300"
            aria-label={calculationTypes.find((calc) => calc.value === type).input1Label}
            required
          />
          <input
            type="number"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            placeholder={calculationTypes.find((calc) => calc.value === type).input2Label}
            className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors duration-300"
            aria-label={calculationTypes.find((calc) => calc.value === type).input2Label}
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 justify-center">
          <button
            onClick={calculatePercentage}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Calculate percentage"
          >
            Calculate
          </button>
          <button
            onClick={handleReset}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            aria-label="Reset inputs"
          >
            <span className="flex items-center gap-2 justify-center">
              <RefreshCcw className="w-4 sm:w-5 h-4 sm:h-5" aria-hidden="true" />
              Reset
            </span>
          </button>
        </div>

        {/* Result and Error */}
        <div
          className={`mt-6 text-base sm:text-lg font-medium ${error ? 'text-red-500' : 'text-gray-900'} text-center`}
          aria-live="polite"
        >
          {error || result}
        </div>

      
      </div>
    </section>
  );
};