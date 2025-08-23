import React, { useState } from 'react';
import { Calculator, ArrowLeft, Plus, } from 'lucide-react';
import { evaluate } from 'mathjs';

export const ScientificCalculator = () => {
  const [display, setDisplay] = useState('');
  const [error, setError] = useState('');
  const [memory, setMemory] = useState(0);

  const appendToDisplay = (value, displayValue = value) => {
    setError('');
    setDisplay((prev) => prev + displayValue);
  };

  const appendFunction = (func) => {
    setError('');
    switch (func) {
      case 'sqrt':
        setDisplay((prev) => prev + 'sqrt(');
        break;
      case 'pow':
        setDisplay((prev) => prev + '^');
        break;
      case 'factorial':
        setDisplay((prev) => prev + '!');
        break;
      case 'pi':
        setDisplay((prev) => prev + 'pi');
        break;
      case 'e':
        setDisplay((prev) => prev + 'e');
        break;
      case 'log10':
        setDisplay((prev) => prev + 'log10(');
        break;
      case 'ln':
        setDisplay((prev) => prev + 'ln(');
        break;
      case 'asin':
      case 'acos':
      case 'atan':
        setDisplay((prev) => prev + func + '(');
        break;
      default:
        setDisplay((prev) => prev + func + '(');
    }
  };

  const toggleSign = () => {
    setError('');
    if (display === '') return;
    if (display.startsWith('-')) {
      setDisplay((prev) => prev.slice(1));
    } else {
      setDisplay((prev) => '-' + prev);
    }
  };

  const memoryAdd = () => {
    setError('');
    if (display === '') return;
    const value = parseFloat(display);
    if (!isNaN(value)) {
      setMemory((prev) => prev + value);
    }
  };

  const memorySubtract = () => {
    setError('');
    if (display === '') return;
    const value = parseFloat(display);
    if (!isNaN(value)) {
      setMemory((prev) => prev - value);
    }
  };

  const memoryRecall = () => {
    setError('');
    setDisplay(memory.toString());
  };

  const memoryClear = () => {
    setError('');
    setMemory(0);
  };

  const clearDisplay = () => {
    setDisplay('');
    setError('');
  };

  const handleBack = () => {
    setError('');
    setDisplay((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    setError('');
    if (display === '') {
      setError('Please enter an expression!');
      return;
    }

    try {
      // Replace display symbols with mathjs-compatible ones
      let expression = display
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/−/g, '-')
        .replace(/π/g, 'pi')
        .replace(/\^/g, '^')
        .replace(/x²/g, '^2');

      // Convert degrees to radians for trig functions
      expression = expression
        .replace(/sin\(/g, 'sin(deg2rad(')
        .replace(/cos\(/g, 'cos(deg2rad(')
        .replace(/tan\(/g, 'tan(deg2rad(')
        .replace(/asin\(/g, 'asin(')
        .replace(/acos\(/g, 'acos(')
        .replace(/atan\(/g, 'atan(')
        .replace(/log10\(/g, 'log10(')
        .replace(/ln\(/g, 'ln(');

      // Add closing parentheses for unbalanced expressions
      let openParens = (expression.match(/\(/g) || []).length;
      let closeParens = (expression.match(/\)/g) || []).length;
      expression += ')'.repeat(openParens - closeParens);

      // Evaluate using mathjs
      const scope = { deg2rad: (deg) => deg * (Math.PI / 180) };
      const result = evaluate(expression, scope);
      setDisplay(isFinite(result) ? result.toFixed(4) : 'Error');
    } catch (e) {
      setError('Invalid expression!');
      setDisplay('');
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-12 sm:py-16">
      <div className="container max-w-md sm:max-w-lg mx-auto px-4 sm:px-6 bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
        <div className="flex items-center space-x-2 mb-6">
          <Calculator className="w-8 h-8 text-green-500" aria-hidden="true" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Scientific Calculator
          </h1>
        </div>

        {/* Display */}
        <div className="mb-6">
          <input
            id="display"
            type="text"
            value={error || display || '0'}
            readOnly
            className="w-full px-4 py-3 sm:py-4 text-lg sm:text-xl text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none text-right font-mono"
            aria-label="Scientific calculator display"
          />
          {error && (
            <p className="text-sm text-red-500 mt-2 text-center" aria-live="polite">
              {error}
            </p>
          )}
        </div>

        {/* Keypad */}
        <div className="grid grid-cols-5 gap-2 sm:gap-3">
          {/* Row 1: Memory and Clear */}
          <button
            onClick={memoryClear}
            className="bg-purple-500 hover:bg-purple-600 text-white px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            aria-label="Memory clear"
          >
            MC
          </button>
          <button
            onClick={memoryRecall}
            className="bg-purple-500 hover:bg-purple-600 text-white px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            aria-label="Memory recall"
          >
            MR
          </button>
          <button
            onClick={memoryAdd}
            className="bg-purple-500 hover:bg-purple-600 text-white px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            aria-label="Memory add"
          >
            M+
          </button>
          <button
            onClick={memorySubtract}
            className="bg-purple-500 hover:bg-purple-600 text-white px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            aria-label="Memory subtract"
          >
            M−
          </button>
          <button
            onClick={clearDisplay}
            className="bg-red-500 hover:bg-red-600 text-white px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            aria-label="Clear display"
          >
            C
          </button>

          {/* Row 2: Functions */}
          <button
            onClick={() => appendFunction('sin')}
            className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Sine function"
          >
            sin
          </button>
          <button
            onClick={() => appendFunction('cos')}
            className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Cosine function"
          >
            cos
          </button>
          <button
            onClick={() => appendFunction('tan')}
            className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Tangent function"
          >
            tan
          </button>
          <button
            onClick={() => appendFunction('log10')}
            className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Logarithm base 10"
          >
            log
          </button>
          <button
            onClick={() => appendFunction('ln')}
            className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Natural logarithm"
          >
            ln
          </button>

          {/* Row 3: Inverse Trig and Constants */}
          <button
            onClick={() => appendFunction('asin')}
            className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Inverse sine function"
          >
            sin⁻¹
          </button>
          <button
            onClick={() => appendFunction('acos')}
            className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Inverse cosine function"
          >
            cos⁻¹
          </button>
          <button
            onClick={() => appendFunction('atan')}
            className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Inverse tangent function"
          >
            tan⁻¹
          </button>
          <button
            onClick={() => appendFunction('pi')}
            className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Pi constant"
          >
            π
          </button>
          <button
            onClick={() => appendFunction('e')}
            className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Euler's number"
          >
            e
          </button>

          {/* Row 4: Numbers and Operators */}
          <button
            onClick={() => appendToDisplay('7')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            aria-label="Enter 7"
          >
            7
          </button>
          <button
            onClick={() => appendToDisplay('8')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            aria-label="Enter 8"
          >
            8
          </button>
          <button
            onClick={() => appendToDisplay('9')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            aria-label="Enter 9"
          >
            9
          </button>
          <button
            onClick={() => appendToDisplay('/', '÷')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            aria-label="Divide"
          >
            ÷
          </button>
          <button
            onClick={() => appendFunction('sqrt')}
            className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Square root"
          >
            √
          </button>

          {/* Row 5: Numbers and Operators */}
          <button
            onClick={() => appendToDisplay('4')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            aria-label="Enter 4"
          >
            4
          </button>
          <button
            onClick={() => appendToDisplay('5')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            aria-label="Enter 5"
          >
            5
          </button>
          <button
            onClick={() => appendToDisplay('6')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            aria-label="Enter 6"
          >
            6
          </button>
          <button
            onClick={() => appendToDisplay('*', '×')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            aria-label="Multiply"
          >
            ×
          </button>
          <button
            onClick={() => appendFunction('pow')}
            className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Power"
          >
            x^y
          </button>

          {/* Row 6: Numbers and Operators */}
          <button
            onClick={() => appendToDisplay('1')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            aria-label="Enter 1"
          >
            1
          </button>
          <button
            onClick={() => appendToDisplay('2')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            aria-label="Enter 2"
          >
            2
          </button>
          <button
            onClick={() => appendToDisplay('3')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            aria-label="Enter 3"
          >
            3
          </button>
          <button
            onClick={() => appendToDisplay('-', '−')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            aria-label="Subtract"
          >
            −
          </button>
          <button
            onClick={() => appendToDisplay('(')}
            className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Left parenthesis"
          >
            (
          </button>

          {/* Row 7: Numbers and Operators */}
          <button
            onClick={() => appendToDisplay('0')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            aria-label="Enter 0"
          >
            0
          </button>
          <button
            onClick={() => appendToDisplay('.')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            aria-label="Decimal point"
          >
            .
          </button>
          <button
            onClick={() => appendFunction('factorial')}
            className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Factorial"
          >
            n!
          </button>
          <button
            onClick={() => appendToDisplay('+')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            aria-label="Add"
          >
            +
          </button>
          <button
            onClick={() => appendToDisplay(')')}
            className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Right parenthesis"
          >
            )
          </button>

          {/* Row 8: Sign and Equals */}
          <button
            onClick={toggleSign}
            className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Toggle sign"
          >
            <Plus className="w-4 sm:w-5 h-4 sm:h-5 mx-auto" aria-hidden="true" />
          </button>
          <button
            onClick={handleBack}
            className="bg-gray-600 hover:bg-gray-700 text-white px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
            aria-label="Remove last character"
          >
            <ArrowLeft className="w-4 sm:w-5 h-4 sm:h-5 mx-auto" aria-hidden="true" />
          </button>
          <button
            onClick={calculate}
            className="col-span-3 bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Calculate result"
          >
            =
          </button>
        </div>


      </div>
    </section>
  );
};