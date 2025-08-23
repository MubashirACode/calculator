import React, { useState } from 'react';
import { DollarSign, RefreshCcw } from 'lucide-react';

export const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('PKR');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const currencies = [
    { value: 'USD', label: 'USD (US Dollar)' },
    { value: 'PKR', label: 'PKR (Pakistani Rupee)' },
    { value: 'EUR', label: 'EUR (Euro)' },
    { value: 'GBP', label: 'GBP (British Pound)' },
    { value: 'INR', label: 'INR (Indian Rupee)' },
  ];

  const convertCurrency = async () => {
    setError('');
    setResult('');
    const parsedAmount = parseFloat(amount);

    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setError('Please enter a valid positive amount.');
      return;
    }

    if (fromCurrency === toCurrency) {
      setError('Please select different currencies for conversion.');
      return;
    }

    try {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      const rate = data.rates[toCurrency];
      if (!rate) {
        throw new Error('Invalid currency rate.');
      }
      const converted = (parsedAmount * rate).toFixed(2);
      setResult(`${parsedAmount} ${fromCurrency} = ${converted} ${toCurrency}`);
    } catch (err) {
      setError('Error fetching exchange rates. Please try again later.');
    }
  };

  const handleReset = () => {
    setAmount('');
    setFromCurrency('USD');
    setToCurrency('PKR');
    setResult('');
    setError('');
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-12 sm:py-16">
      <div className="container max-w-md sm:max-w-lg mx-auto px-4 sm:px-6 bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
        <div className="flex items-center space-x-2 mb-6 justify-center">
          <DollarSign className="w-8 h-8 text-green-500" aria-hidden="true" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Currency Converter
          </h1>
        </div>
        <p className="text-base sm:text-lg text-gray-600 mb-8 text-center leading-relaxed">
          Convert between currencies like USD to PKR and more using real-time rates.
        </p>

        {/* Input Fields */}
        <div className="space-y-4 sm:space-y-6">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors duration-300"
            aria-label="Amount to convert"
            required
          />
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors duration-300"
            aria-label="From currency"
          >
            {currencies.map((currency) => (
              <option key={currency.value} value={currency.value}>
                {currency.label}
              </option>
            ))}
          </select>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors duration-300"
            aria-label="To currency"
          >
            {currencies.map((currency) => (
              <option key={currency.value} value={currency.value}>
                {currency.label}
              </option>
            ))}
          </select>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 justify-center">
          <button
            onClick={convertCurrency}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Convert currency"
          >
            Convert
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

        {/* Attribution */}
        <div className="text-sm text-gray-600 mt-4 text-center">
          Exchange rates provided by <a href="https://www.exchangerate-api.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">ExchangeRate-API</a>
        </div>


      </div>
    </section>
  );
};