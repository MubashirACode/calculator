import React, { useState } from 'react';
import { Heart, RefreshCcw } from 'lucide-react';

export const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const calculateBMI = () => {
    setError('');
    setResult('');

    const w = parseFloat(weight);
    const h = parseFloat(height);

    // Validation
    if (isNaN(w) || isNaN(h)) {
      setError('Please enter valid numbers for weight and height.');
      return;
    }
    if (w <= 0) {
      setError('Weight must be a positive number.');
      return;
    }
    if (h <= 0) {
      setError('Height must be a positive number.');
      return;
    }

    const bmi = w / (h * h);
    let category;
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi < 25) {
      category = 'Normal';
    } else if (bmi < 30) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }

    setResult(`BMI: ${bmi.toFixed(2)} (${category})`);
  };

  const handleReset = () => {
    setWeight('');
    setHeight('');
    setResult('');
    setError('');
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-12 sm:py-16">
      <div className="container max-w-md sm:max-w-lg mx-auto px-4 sm:px-6 bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
        <div className="flex items-center space-x-2 mb-6 justify-center">
          <Heart className="w-8 h-8 text-green-500" aria-hidden="true" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            BMI Calculator
          </h1>
        </div>
        <p className="text-base sm:text-lg text-gray-600 mb-8 text-center leading-relaxed">
          Calculate your Body Mass Index (BMI) based on weight and height.
        </p>

        {/* Input Fields */}
        <div className="space-y-4 sm:space-y-6">
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight (kg)"
            className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors duration-300"
            aria-label="Weight in kilograms"
            required
          />
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter height (m)"
            className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors duration-300"
            aria-label="Height in meters"
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 justify-center">
          <button
            onClick={calculateBMI}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Calculate BMI"
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

        {/* Ad Placeholder */}
        <div className="mt-8 p-4 sm:p-6 bg-gray-100 rounded-lg text-center">
          <p className="text-sm sm:text-base text-gray-600">
            Ad Space (Insert Google AdSense Code Here)
          </p>
          {/* Uncomment and replace with actual AdSense code */}
          {/*
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID" crossOrigin="anonymous"></script>
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
            data-ad-slot="YOUR_AD_SLOT_ID"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
          */}
        </div>
      </div>
    </section>
  );
};