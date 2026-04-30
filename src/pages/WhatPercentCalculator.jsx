
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const WhatPercentCalculator = () => {
  const [part, setPart] = useState('');
  const [whole, setWhole] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const calculatePercentage = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const x = parseFloat(part);
    const y = parseFloat(whole);

    if (isNaN(x) || isNaN(y)) {
      setError('Please enter valid numbers for both fields.');
      return;
    }

    if (y === 0) {
      setError('The "Whole" value cannot be zero.');
      return;
    }

    const percentage = (x / y) * 100;

    setResult({
      part: x,
      whole: y,
      percentage: percentage.toFixed(2)
    });
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mypctcalculator.com/" },
      { "@type": "ListItem", "position": 2, "name": "What Percent Calculator", "item": "https://mypctcalculator.com/what-percent-calculator" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>What Percent Calculator – X is What % of Y?</title>
        <meta name="description" content="Find what percentage one number is of another. Instantly calculate what percent X is of Y." />
        <link rel="canonical" href="https://mypctcalculator.com/what-percent-calculator" />
        
        <meta property="og:title" content="What Percent Calculator – X is What % of Y?" />
        <meta property="og:description" content="Find what percentage one number is of another. Instantly calculate what percent X is of Y." />
        <meta property="og:url" content="https://mypctcalculator.com/what-percent-calculator" />
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
              <h1 className="mb-[16px] section-heading">What Percent Calculator</h1>
              <p className="text-[18px] max-w-2xl mx-auto">
                Find out exactly what percentage one number is of another.
              </p>
            </div>

            <motion.div 
              className="calc-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <form onSubmit={calculatePercentage} className="space-y-[24px]">
                <div className="space-y-[8px]">
                  <Label htmlFor="part" className="calc-label">Part (X)</Label>
                  <Input
                    id="part"
                    type="number"
                    step="any"
                    inputMode="decimal"
                    placeholder="e.g. 25"
                    className="calc-input"
                    value={part}
                    onChange={(e) => setPart(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-[8px]">
                  <Label htmlFor="whole" className="calc-label">Whole (Y)</Label>
                  <Input
                    id="whole"
                    type="number"
                    step="any"
                    inputMode="decimal"
                    placeholder="e.g. 50"
                    className="calc-input"
                    value={whole}
                    onChange={(e) => setWhole(e.target.value)}
                    required
                  />
                </div>

                {error && (
                  <p className="text-sm text-destructive font-medium mt-2">{error}</p>
                )}

                <Button type="submit" className="btn-calculate mt-[16px]">
                  Calculate Percentage
                </Button>
              </form>

              {result && (
                <motion.div 
                  className="mt-[32px] pt-[32px] border-t border-border text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-[18px] font-medium text-foreground mb-[8px]">
                    {result.part} is <span className="font-bold text-primary text-2xl">{result.percentage}%</span> of {result.whole}
                  </p>
                  <div className="calc-result-formula mt-4">
                    Formula: ({result.part} / {result.whole}) × 100 = {result.percentage}%
                  </div>
                </motion.div>
              )}
            </motion.div>
          </section>

          <section className="py-[64px] md:py-[96px] px-4 sm:px-6 lg:px-8 section-white-bg border-t border-border">
            <div className="max-w-3xl mx-auto">
              <h2 className="mb-[32px] section-heading">Understanding "X is what percent of Y?"</h2>
              <div className="space-y-[24px] text-[17px]">
                <p>
                  This calculation shows up every time you want to know how big one number is compared to another. It answers questions like: "What was my score on the test?", "What percentage of the budget have we spent?", or "How much of the pizza is left?"
                </p>

                <div className="bg-muted/50 rounded-xl p-6 md:p-8 mt-8">
                  <h3 className="mb-[16px] text-xl font-bold text-foreground">The Formula</h3>
                  <div className="bg-background border border-border rounded-lg p-4 font-mono text-lg mb-4 text-center shadow-sm">
                    Percentage = (X / Y) × 100
                  </div>
                  <p className="text-[hsl(var(--text-secondary))]">
                    You simply divide the part (X) by the whole (Y). This gives you a decimal. To turn that decimal into a recognizable percentage, you multiply it by 100.
                  </p>
                </div>

                <div className="mt-[48px]">
                  <h3 className="mb-[16px] section-heading">Example Calculation</h3>
                  <p className="mb-[16px]">
                    Suppose you want to know: <strong>25 is what percent of 50?</strong>
                  </p>
                  <ul className="list-disc pl-[24px] space-y-[8px] text-[hsl(var(--text-secondary))]">
                    <li><strong>Part (X):</strong> 25</li>
                    <li><strong>Whole (Y):</strong> 50</li>
                    <li><strong>Divide:</strong> 25 / 50 = 0.5</li>
                    <li><strong>Multiply:</strong> 0.5 × 100 = <strong className="text-foreground font-semibold">50%</strong></li>
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

export default WhatPercentCalculator;
