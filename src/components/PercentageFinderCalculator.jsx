import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const PercentageFinderCalculator = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [totalNumber, setTotalNumber] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    setError('');
    setResult(null);

    const firstValue = parseFloat(firstNumber);
    const totalValue = parseFloat(totalNumber);

    if (isNaN(firstValue) || isNaN(totalValue)) {
      setError('Please enter valid numbers');
      return;
    }

    if (firstNumber.trim() === '' || totalNumber.trim() === '') {
      setError('Please fill in all fields');
      return;
    }

    if (totalValue === 0) {
      setError('Total number cannot be zero');
      return;
    }

    const calculatedResult = (firstValue / totalValue) * 100;
    setResult(calculatedResult);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCalculate();
    }
  };

  return (
    <div className="bg-muted rounded-xl p-6 transition-all duration-200">
      <h3 className="text-xl font-semibold mb-4">X is what percentage of Y?</h3>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="first-number">First number</Label>
          <Input
            id="first-number"
            type="number"
            placeholder="e.g., 50"
            value={firstNumber}
            onChange={(e) => setFirstNumber(e.target.value)}
            onKeyPress={handleKeyPress}
            className="mt-1 text-foreground bg-background"
          />
        </div>

        <div>
          <Label htmlFor="total-number">Total number</Label>
          <Input
            id="total-number"
            type="number"
            placeholder="e.g., 200"
            value={totalNumber}
            onChange={(e) => setTotalNumber(e.target.value)}
            onKeyPress={handleKeyPress}
            className="mt-1 text-foreground bg-background"
          />
        </div>

        <Button 
          onClick={handleCalculate} 
          className="w-full transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
        >
          Calculate
        </Button>

        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}

        {result !== null && (
          <div className="mt-4 p-4 bg-background rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Result:</p>
            <p className="text-2xl font-semibold">{result.toLocaleString('en-US', { maximumFractionDigits: 2 })}%</p>
            <p className="text-sm text-muted-foreground mt-2">
              {firstNumber} is {result.toLocaleString('en-US', { maximumFractionDigits: 2 })}% of {totalNumber}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PercentageFinderCalculator;