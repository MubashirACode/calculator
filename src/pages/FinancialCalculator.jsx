import React, { useState } from 'react';
import { DollarSign, RefreshCcw } from 'lucide-react';

export const FinancialCalculator = () => {
  const [type, setType] = useState('compound');
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [payments, setPayments] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const calculationTypes = [
    { value: 'compound', label: 'Compound Interest', description: 'Calculate future value with compound interest' },
    { value: 'emi', label: 'Loan EMI', description: 'Calculate monthly EMI for a loan' },
  ];

  const calculateFinancial = () => {
    setError('');
    setResult('');

    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const n = parseFloat(payments) || 12; // Default to 12 for compound if not specified

    // Validation
    if (isNaN(p) || isNaN(r) || isNaN(t) || (type === 'emi' && isNaN(n))) {
      setError('Please enter valid numbers for all required fields.');
      return;
    }
    if (p <= 0) {
      setError('Principal amount must be positive.');
      return;
    }
    if (r < 0) {
      setError('Interest rate cannot be negative.');
      return;
    }
    if (t <= 0) {
      setError('Time period must be positive.');
      return;
    }
    if (type === 'emi' && n <= 0) {
      setError('Payments per year must be positive.');
      return;
    }

    let result;
    if (type === 'compound') {
      result = p * Math.pow(1 + r / n, n * t);
      setResult(`Future Value: ${result.toFixed(2)}`);
    } else {
      const monthlyRate = r / n;
      const totalPayments = n * t;
      result = (p * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
      setResult(`Monthly EMI: ${result.toFixed(2)}`);
    }
  };

  const handleReset = () => {
    setType('compound');
    setPrincipal('');
    setRate('');
    setTime('');
    setPayments('');
    setResult('');
    setError('');
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-12 sm:py-16">
      <div className="container max-w-md sm:max-w-lg mx-auto px-4 sm:px-6 bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
        <div className="flex items-center space-x-2 mb-6 justify-center">
          <DollarSign className="w-8 h-8 text-green-500" aria-hidden="true" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Financial Calculator
          </h1>
        </div>
        <p className="text-base sm:text-lg text-gray-600 mb-8 text-center leading-relaxed">
          {calculationTypes.find((calc) => calc.value === type).description}
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
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="Enter principal amount"
            className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors duration-300"
            aria-label="Principal amount"
            required
          />
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter annual interest rate (%)"
            className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors duration-300"
            aria-label="Annual interest rate"
            required
          />
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Enter time (years)"
            className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors duration-300"
            aria-label="Time period in years"
            required
          />
          {type === 'emi' && (
            <input
              type="number"
              value={payments}
              onChange={(e) => setPayments(e.target.value)}
              placeholder="Enter payments per year (e.g., 12 for monthly)"
              className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors duration-300"
              aria-label="Payments per year"
              required
            />
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 justify-center">
          <button
            onClick={calculateFinancial}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Calculate financial result"
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