import React, { useState } from 'react';
import { Calculator, ArrowLeft, RefreshCcw } from 'lucide-react';

export const BasicCalculator = () => {
  const [display, setDisplay] = useState('');
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);
  const [expression, setExpression] = useState('');
  const [error, setError] = useState('');

  const appendDigit = (digit) => {
    setError('');
    setDisplay((prev) => prev + digit);
    setExpression((prev) =>
      firstNumber !== null && operation ? `${firstNumber} ${operationSymbol(operation)} ${display + digit}` : prev + digit
    );
  };

  const appendDecimal = () => {
    setError('');
    if (!display.includes('.')) {
      const newDisplay = display === '' ? '0.' : display + '.';
      setDisplay(newDisplay);
      setExpression((prev) =>
        firstNumber !== null && operation ? `${firstNumber} ${operationSymbol(operation)} ${newDisplay}` : newDisplay
      );
    }
  };

  const operationSymbol = (op) => {
    switch (op) {
      case 'add': return '+';
      case 'subtract': return '−';
      case 'multiply': return '×';
      case 'divide': return '÷';
      default: return '';
    }
  };

  const setOperationType = (op) => {
    setError('');
    if (display === '') {
      setError('Please enter a number first!');
      return;
    }
    const number = parseFloat(display);
    if (isNaN(number)) {
      setError('Please enter a valid number!');
      return;
    }
    setFirstNumber(number);
    setOperation(op);
    setDisplay('');
    setExpression(`${number} ${operationSymbol(op)}`);
  };

  const calculate = () => {
    setError('');
    if (display === '' || firstNumber === null || operation === null) {
      setError('Please enter a complete expression!');
      return;
    }

    const number2 = parseFloat(display);
    if (isNaN(number2)) {
      setError('Please enter a valid second number!');
      return;
    }

    let result;
    switch (operation) {
      case 'add':
        result = firstNumber + number2;
        break;
      case 'subtract':
        result = firstNumber - number2;
        break;
      case 'multiply':
        result = firstNumber * number2;
        break;
      case 'divide':
        if (number2 === 0) {
          setError('Cannot divide by zero!');
          setExpression('');
          setDisplay('');
          return;
        }
        result = firstNumber / number2;
        break;
      default:
        setError('Invalid operation!');
        return;
    }

    setDisplay(result.toFixed(2));
    setExpression(result.toFixed(2));
    setFirstNumber(null);
    setOperation(null);
  };

  const handleBack = () => {
    setError('');
    if (display === '') {
      if (operation) {
        setOperation(null);
        setDisplay(firstNumber ? firstNumber.toString() : '');
        setExpression(firstNumber ? firstNumber.toString() : '');
      }
      return;
    }
    const newDisplay = display.slice(0, -1);
    setDisplay(newDisplay);
    setExpression(
      firstNumber !== null && operation
        ? `${firstNumber} ${operationSymbol(operation)} ${newDisplay}`
        : newDisplay
    );
  };

  const handleReset = () => {
    setDisplay('');
    setFirstNumber(null);
    setOperation(null);
    setExpression('');
    setError('');
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-12 sm:py-16">
      <div className="container max-w-sm sm:max-w-md mx-auto px-4 sm:px-6 bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
        <div className="flex items-center space-x-2 mb-6">
          <Calculator className="w-8 h-8 text-green-500" aria-hidden="true" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Basic Calculator
          </h1>
        </div>

        {/* Display */}
        <div className="mb-6">
          <input
            id="display"
            type="text"
            value={error || expression || '0'}
            readOnly
            className="w-full px-4 py-3 sm:py-4 text-lg sm:text-xl text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none text-right font-mono"
            aria-label="Calculator display"
          />
          {error && (
            <p className="text-sm text-red-500 mt-2 text-center" aria-live="polite">
              {error}
            </p>
          )}
        </div>

        {/* Keypad */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {/* Number Buttons */}
          {['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'].map((digit) => (
            <button
              key={digit}
              onClick={() => (digit === '.' ? appendDecimal() : appendDigit(digit))}
              className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-3 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              aria-label={`Enter ${digit}`}
            >
              {digit}
            </button>
          ))}

          {/* Operation Buttons */}
          {[
            { symbol: '+', op: 'add' },
            { symbol: '−', op: 'subtract' },
            { symbol: '×', op: 'multiply' },
            { symbol: '÷', op: 'divide' },
          ].map(({ symbol, op }) => (
            <button
              key={op}
              onClick={() => setOperationType(op)}
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-label={`Select ${op} operation`}
            >
              {symbol}
            </button>
          ))}

          {/* Action Buttons */}
          <button
            onClick={calculate}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Calculate result"
          >
            =
          </button>
          <button
            onClick={handleBack}
            className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
            aria-label="Remove last digit"
          >
            <ArrowLeft className="w-4 sm:w-5 h-4 sm:h-5 mx-auto" aria-hidden="true" />
          </button>
          <button
            onClick={handleReset}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            aria-label="Reset calculator"
          >
            <RefreshCcw className="w-4 sm:w-5 h-4 sm:h-5 mx-auto" aria-hidden="true" />
          </button>
        </div>


      </div>
    </section>
  );
};