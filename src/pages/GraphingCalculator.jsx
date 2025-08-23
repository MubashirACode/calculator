import React, { useState, useRef, useEffect } from 'react';
import { BarChart, RefreshCcw } from 'lucide-react';
import { evaluate } from 'mathjs';
import Chart from 'chart.js/auto';

export const GraphingCalculator = () => {
  const [funcInput, setFuncInput] = useState('');
  const [error, setError] = useState('');
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const plotGraph = () => {
    setError('');
    if (!funcInput) {
      setError('Please enter a function (e.g., x^2, sin(x)).');
      return;
    }

    try {
      const xValues = [];
      const yValues = [];
      for (let x = -10; x <= 10; x += 0.1) {
        xValues.push(x);
        const y = evaluate(funcInput, { x });
        if (!isFinite(y)) {
          throw new Error('Function produces undefined or infinite values.');
        }
        yValues.push(y);
      }

      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels: xValues,
          datasets: [
            {
              label: funcInput,
              data: yValues,
              borderColor: '#10b981', // green-500
              borderWidth: 2,
              fill: false,
              pointRadius: 0, // No points for smoother line
              tension: 0.1, // Slight curve for smoothness
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 1.5, // Compact aspect ratio
          scales: {
            x: {
              title: { display: true, text: 'X', color: '#1f2937', font: { size: 14 } },
              grid: { color: '#e5e7eb' }, // gray-200
            },
            y: {
              title: { display: true, text: 'Y', color: '#1f2937', font: { size: 14 } },
              grid: { color: '#e5e7eb' },
            },
          },
          plugins: {
            legend: {
              labels: { color: '#1f2937', font: { size: 12 } },
            },
          },
        },
      });
    } catch (e) {
      setError('Invalid function. Please use valid syntax (e.g., x^2, sin(x)).');
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    }
  };

  const handleReset = () => {
    setFuncInput('');
    setError('');
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
      chartInstanceRef.current = null;
    }
  };

  // Cleanup chart on component unmount
  useEffect(() => {
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-12 sm:py-16">
      <div className="container max-w-md sm:max-w-2xl mx-auto px-4 sm:px-6 bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
        <div className="flex items-center space-x-2 mb-6 justify-center">
          <BarChart className="w-8 h-8 text-green-500" aria-hidden="true" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Graphing Calculator
          </h1>
        </div>
        <p className="text-base sm:text-lg text-gray-600 mb-8 text-center leading-relaxed">
          Enter a function (e.g., x^2, sin(x)) to plot its graph.
        </p>

        {/* Input Field */}
        <div className="space-y-4 sm:space-y-6">
          <input
            type="text"
            value={funcInput}
            onChange={(e) => setFuncInput(e.target.value)}
            placeholder="Enter function (e.g., x^2, sin(x))"
            className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors duration-300 font-mono"
            aria-label="Function to plot"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 justify-center">
          <button
            onClick={plotGraph}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Plot graph"
          >
            Plot
          </button>
          <button
            onClick={handleReset}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            aria-label="Reset input and graph"
          >
            <span className="flex items-center gap-2 justify-center">
              <RefreshCcw className="w-4 sm:w-5 h-4 sm:h-5" aria-hidden="true" />
              Reset
            </span>
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div
            className="mt-6 text-base sm:text-lg font-medium text-red-500 text-center"
            aria-live="polite"
          >
            {error}
          </div>
        )}

        {/* Graph Canvas */}
        <div className="mt-6">
          <canvas
            id="graph"
            ref={chartRef}
            className="max-w-full"
            aria-label="Function graph"
          ></canvas>
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