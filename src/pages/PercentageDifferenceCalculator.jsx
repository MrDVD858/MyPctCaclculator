
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const PercentageDifferenceCalculator = () => {
  const [v1, setV1] = useState('');
  const [v2, setV2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const calculateDifference = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const val1 = parseFloat(v1);
    const val2 = parseFloat(v2);

    if (isNaN(val1) || isNaN(val2)) {
      setError('Please enter valid numbers for both values.');
      return;
    }

    if (val1 === 0 && val2 === 0) {
      setResult({ v1: val1, v2: val2, diff: 0, percentDiff: '0.00' });
      return;
    }

    const diff = Math.abs(val1 - val2);
    const average = (val1 + val2) / 2;

    if (average === 0) {
      setError('Cannot calculate percentage difference when the average of the two numbers is exactly zero.');
      return;
    }

    const percentDiff = (diff / Math.abs(average)) * 100;

    setResult({
      v1: val1,
      v2: val2,
      diff,
      average: Math.abs(average),
      percentDiff: percentDiff.toFixed(2)
    });
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mypctcalculator.com/" },
      { "@type": "ListItem", "position": 2, "name": "Percentage Difference Calculator", "item": "https://mypctcalculator.com/percentage-difference-calculator" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Percentage Difference Calculator</title>
        <meta name="description" content="Calculate the percentage difference between two numbers. Find the relative difference between any two values instantly." />
        <link rel="canonical" href="https://mypctcalculator.com/percentage-difference-calculator" />
        
        <meta property="og:title" content="Percentage Difference Calculator" />
        <meta property="og:description" content="Calculate the percentage difference between two numbers. Find the relative difference between any two values instantly." />
        <meta property="og:url" content="https://mypctcalculator.com/percentage-difference-calculator" />
        <meta property="og:site_name" content="Percentage Calculator" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
          <section className="py-[48px] md:py-[80px] px-4 sm:px-6 lg:px-8 section-light-bg">
            <div className="max-w-3xl mx-auto text-center mb-[48px]">
              <h1 className="mb-[16px] section-heading">Percentage Difference</h1>
              <p className="text-[18px] max-w-2xl mx-auto">
                Find the relative difference between any two values instantly.
              </p>
            </div>

            <motion.div 
              className="calc-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <form onSubmit={calculateDifference} className="space-y-[24px]">
                <div className="space-y-[8px]">
                  <Label htmlFor="v1" className="calc-label">Value 1</Label>
                  <Input
                    id="v1"
                    type="number"
                    step="any"
                    inputMode="decimal"
                    placeholder="e.g. 100"
                    className="calc-input"
                    value={v1}
                    onChange={(e) => setV1(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-[8px]">
                  <Label htmlFor="v2" className="calc-label">Value 2</Label>
                  <Input
                    id="v2"
                    type="number"
                    step="any"
                    inputMode="decimal"
                    placeholder="e.g. 150"
                    className="calc-input"
                    value={v2}
                    onChange={(e) => setV2(e.target.value)}
                    required
                  />
                </div>

                {error && (
                  <p className="text-sm text-destructive font-medium mt-2">{error}</p>
                )}

                <Button type="submit" className="btn-calculate mt-[16px]">
                  Calculate Difference
                </Button>
              </form>

              {result && (
                <motion.div 
                  className="mt-[32px] pt-[32px] border-t border-border text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-[16px] font-semibold text-foreground mb-[8px]">
                    Percentage Difference
                  </p>
                  <div className="calc-result-value">
                    {result.percentDiff}%
                  </div>
                  <div className="calc-result-formula mt-4">
                    Difference: {result.diff} <br />
                    Average: {result.average} <br />
                    ({result.diff} / {result.average}) × 100
                  </div>
                </motion.div>
              )}
            </motion.div>
          </section>

          <section className="py-[64px] md:py-[96px] px-4 sm:px-6 lg:px-8 section-white-bg border-t border-border">
            <div className="max-w-3xl mx-auto">
              <h2 className="mb-[32px] section-heading">How to calculate percentage difference</h2>
              <div className="space-y-[24px] text-[17px]">
                <p>
                  Percentage difference is used when you want to compare two numbers, but neither number is clearly the "original" or "starting" value. Instead of comparing the difference to one specific number, you compare it to the <strong>average</strong> of the two numbers.
                </p>

                <div className="bg-muted/50 rounded-xl p-6 md:p-8 mt-8">
                  <h3 className="mb-[16px] text-xl font-bold text-foreground">The Formula</h3>
                  <div className="bg-background border border-border rounded-lg p-4 font-mono text-lg mb-4 text-center shadow-sm">
                    % Difference = |V1 - V2| / ((V1 + V2) / 2) × 100
                  </div>
                  <ol className="list-decimal pl-[24px] space-y-[8px] text-[hsl(var(--text-secondary))] mt-6">
                    <li><strong className="text-foreground">Find the absolute difference:</strong> Subtract one value from the other and ignore any negative sign.</li>
                    <li><strong className="text-foreground">Find the average:</strong> Add the two values together and divide by 2.</li>
                    <li><strong className="text-foreground">Divide and multiply:</strong> Divide the absolute difference by the average, then multiply by 100 to get the percentage.</li>
                  </ol>
                </div>

                <div className="mt-[48px]">
                  <h3 className="mb-[16px] section-heading">Example Calculation</h3>
                  <p className="mb-[16px]">
                    Let's say you want to find the percentage difference between <strong>100</strong> and <strong>150</strong>.
                  </p>
                  <ul className="list-disc pl-[24px] space-y-[8px] text-[hsl(var(--text-secondary))]">
                    <li>Difference: |100 - 150| = 50</li>
                    <li>Average: (100 + 150) / 2 = 125</li>
                    <li>Divide: 50 / 125 = 0.4</li>
                    <li>Percentage: 0.4 × 100 = <strong className="text-foreground font-semibold">40% difference</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PercentageDifferenceCalculator;
