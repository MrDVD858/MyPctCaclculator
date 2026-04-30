import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TrendingUp, TrendingDown } from 'lucide-react';

const PercentageChangeCalculator = () => {
  const [oldValue, setOldValue] = useState('');
  const [newValue, setNewValue] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    setError('');
    setResult(null);

    const oldNum = parseFloat(oldValue);
    const newNum = parseFloat(newValue);

    if (isNaN(oldNum) || isNaN(newNum)) {
      setError('Please enter valid numbers');
      return;
    }

    if (oldValue.trim() === '' || newValue.trim() === '') {
      setError('Please fill in all fields');
      return;
    }

    if (oldNum === 0) {
      setError('Old value cannot be zero');
      return;
    }

    const calculatedResult = ((newNum - oldNum) / oldNum) * 100;
    setResult(calculatedResult);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCalculate();
    }
  };

  return (
    <div className="border-2 border-border rounded-xl p-6 transition-all duration-200 hover:border-primary/50">
      <h3 className="text-xl font-semibold mb-4">Percentage change between two numbers</h3>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="old-value">Old value</Label>
          <Input
            id="old-value"
            type="number"
            placeholder="e.g., 100"
            value={oldValue}
            onChange={(e) => setOldValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="mt-1 text-foreground"
          />
        </div>

        <div>
          <Label htmlFor="new-value">New value</Label>
          <Input
            id="new-value"
            type="number"
            placeholder="e.g., 150"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="mt-1 text-foreground"
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
          <div className="mt-4 p-4 bg-secondary rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Result:</p>
            <div className="flex items-center gap-2">
              {result > 0 ? (
                <TrendingUp className="w-6 h-6 text-green-600" />
              ) : result < 0 ? (
                <TrendingDown className="w-6 h-6 text-red-600" />
              ) : null}
              <p className={`text-2xl font-semibold ${result > 0 ? 'text-green-600' : result < 0 ? 'text-red-600' : ''}`}>
                {result > 0 ? '+' : ''}{result.toLocaleString('en-US', { maximumFractionDigits: 2 })}%
              </p>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Change from {oldValue} to {newValue}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PercentageChangeCalculator;