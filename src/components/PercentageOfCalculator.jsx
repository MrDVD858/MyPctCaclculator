
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const PercentageOfCalculator = () => {
  const [percentage, setPercentage] = useState('');
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    setError('');
    setResult(null);

    const percentageValue = parseFloat(percentage);
    const numberValue = parseFloat(number);

    if (isNaN(percentageValue) || isNaN(numberValue)) {
      setError('Please enter valid numbers');
      return;
    }

    if (percentage.trim() === '' || number.trim() === '') {
      setError('Please fill in all fields');
      return;
    }

    const calculatedResult = (percentageValue / 100) * numberValue;
    setResult(calculatedResult);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCalculate();
    }
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-lg transition-all duration-200">
      <h3 className="text-xl font-semibold mb-4">What is X% of Y?</h3>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="percentage-1">Percentage (%)</Label>
          <Input
            id="percentage-1"
            type="number"
            placeholder="e.g., 25"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="mt-1 text-foreground"
          />
        </div>

        <div>
          <Label htmlFor="number-1">Of number</Label>
          <Input
            id="number-1"
            type="number"
            placeholder="e.g., 200"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            onKeyPress={handleKeyPress}
            className="mt-1 text-foreground"
          />
        </div>

        <button 
          onClick={handleCalculate}
          className="btn-calculate"
        >
          Calculate
        </button>

        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}

        {result !== null && (
          <div className="mt-4 p-4 bg-secondary rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Result:</p>
            <p className="text-2xl font-semibold">{result.toLocaleString('en-US', { maximumFractionDigits: 2 })}</p>
            <p className="text-sm text-muted-foreground mt-2">
              {percentage}% of {number} = {result.toLocaleString('en-US', { maximumFractionDigits: 2 })}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PercentageOfCalculator;
