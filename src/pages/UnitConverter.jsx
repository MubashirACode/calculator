import React, { useState, useEffect } from 'react';
import { Ruler, RefreshCcw } from 'lucide-react';

export const UnitConverter = () => {
  const [category, setCategory] = useState('length');
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const units = {
    length: {
      cm: { value: 1, label: 'Centimeter' },
      inch: { value: 2.54, label: 'Inch' },
      meter: { value: 100, label: 'Meter' },
      foot: { value: 30.48, label: 'Foot' },
    },
    weight: {
      gram: { value: 1, label: 'Gram' },
      kg: { value: 1000, label: 'Kilogram' },
      pound: { value: 453.592, label: 'Pound' },
      ounce: { value: 28.3495, label: 'Ounce' },
    },
    temperature: {
      celsius: { value: 'c', label: 'Celsius' },
      fahrenheit: { value: 'f', label: 'Fahrenheit' },
      kelvin: { value: 'k', label: 'Kelvin' },
    },
  };

  // Populate units based on category
  useEffect(() => {
    const availableUnits = Object.keys(units[category]);
    setFromUnit(availableUnits[0]);
    setToUnit(availableUnits[1] || availableUnits[0]);
    setResult('');
    setError('');
  }, [category]);

  const convertUnit = () => {
    setError('');
    setResult('');
    const parsedValue = parseFloat(value);

    if (isNaN(parsedValue)) {
      setError('Please enter a valid value.');
      return;
    }

    if (fromUnit === toUnit) {
      setError('Please select different units for conversion.');
      return;
    }

    let result;
    if (category === 'temperature') {
      if (fromUnit === 'kelvin' && parsedValue < 0) {
        setError('Kelvin temperature cannot be negative.');
        return;
      }

      let celsius;
      if (fromUnit === 'celsius') celsius = parsedValue;
      else if (fromUnit === 'fahrenheit') celsius = (parsedValue - 32) * 5 / 9;
      else if (fromUnit === 'kelvin') celsius = parsedValue - 273.15;

      if (toUnit === 'celsius') result = celsius;
      else if (toUnit === 'fahrenheit') result = celsius * 9 / 5 + 32;
      else if (toUnit === 'kelvin') {
        result = celsius + 273.15;
        if (result < 0) {
          setError('Resulting Kelvin temperature cannot be negative.');
          return;
        }
      }
    } else {
      const baseValue = parsedValue * units[category][fromUnit].value;
      result = baseValue / units[category][toUnit].value;
    }

    setResult(`${parsedValue} ${units[category][fromUnit].label} = ${result.toFixed(2)} ${units[category][toUnit].label}`);
  };

  const handleReset = () => {
    setValue('');
    setCategory('length');
    setFromUnit(Object.keys(units.length)[0]);
    setToUnit(Object.keys(units.length)[1]);
    setResult('');
    setError('');
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-12 sm:py-16">
      <div className="container max-w-md sm:max-w-lg mx-auto px-4 sm:px-6 bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
        <div className="flex items-center space-x-2 mb-6 justify-center">
          <Ruler className="w-8 h-8 text-green-500" aria-hidden="true" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Unit Converter
          </h1>
        </div>
        <p className="text-base sm:text-lg text-gray-600 mb-8 text-center leading-relaxed">
          Convert units like length, weight, and temperature with ease.
        </p>

        {/* Input Fields */}
        <div className="space-y-4 sm:space-y-6">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors duration-300"
            aria-label="Select unit category"
          >
            <option value="length">Length</option>
            <option value="weight">Weight</option>
            <option value="temperature">Temperature</option>
          </select>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter value"
            className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors duration-300"
            aria-label="Value to convert"
            required
          />
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors duration-300"
            aria-label="From unit"
          >
            {Object.entries(units[category]).map(([unit, { label }]) => (
              <option key={unit} value={unit}>
                {label}
              </option>
            ))}
          </select>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors duration-300"
            aria-label="To unit"
          >
            {Object.entries(units[category]).map(([unit, { label }]) => (
              <option key={unit} value={unit}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 justify-center">
          <button
            onClick={convertUnit}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Convert unit"
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