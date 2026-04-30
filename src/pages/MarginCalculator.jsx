
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const MarginCalculator = () => {
  const [cost, setCost] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const calculateMargin = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const c = parseFloat(cost);
    const s = parseFloat(sellingPrice);

    if (isNaN(c) || isNaN(s)) {
      setError('Please enter valid numbers for both cost and selling price.');
      return;
    }

    if (s === 0) {
      setError('Selling price cannot be zero to calculate margin percentage.');
      return;
    }

    const profit = s - c;
    const margin = (profit / s) * 100;
    const markup = c > 0 ? (profit / c) * 100 : 0;

    setResult({
      cost: c,
      selling: s,
      profit,
      margin: margin.toFixed(2),
      markup: markup.toFixed(2),
      isLoss: profit < 0
    });
  };

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(val);
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mypctcalculator.com/" },
      { "@type": "ListItem", "position": 2, "name": "Profit Margin Calculator", "item": "https://mypctcalculator.com/margin-calculator" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Profit Margin Calculator</title>
        <meta name="description" content="Calculate profit margin percentage from cost and selling price. Understand your profit margins and pricing strategy." />
        <link rel="canonical" href="https://mypctcalculator.com/margin-calculator" />
        
        <meta property="og:title" content="Profit Margin Calculator" />
        <meta property="og:description" content="Calculate profit margin percentage from cost and selling price. Understand your profit margins and pricing strategy." />
        <meta property="og:url" content="https://mypctcalculator.com/margin-calculator" />
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
              <h1 className="mb-[16px] section-heading">Profit Margin Calculator</h1>
              <p className="text-[18px] max-w-2xl mx-auto">
                Find your gross profit and margin percentage instantly based on cost and revenue.
              </p>
            </div>

            <motion.div 
              className="calc-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <form onSubmit={calculateMargin} className="space-y-[24px]">
                <div className="space-y-[8px]">
                  <Label htmlFor="cost" className="calc-label">Cost ($)</Label>
                  <Input
                    id="cost"
                    type="number"
                    step="0.01"
                    min="0"
                    inputMode="decimal"
                    placeholder="e.g. 50.00"
                    className="calc-input"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-[8px]">
                  <Label htmlFor="sellingPrice" className="calc-label">Selling Price / Revenue ($)</Label>
                  <Input
                    id="sellingPrice"
                    type="number"
                    step="0.01"
                    min="0"
                    inputMode="decimal"
                    placeholder="e.g. 100.00"
                    className="calc-input"
                    value={sellingPrice}
                    onChange={(e) => setSellingPrice(e.target.value)}
                    required
                  />
                </div>

                {error && (
                  <p className="text-sm text-destructive font-medium mt-2">{error}</p>
                )}

                <Button type="submit" className="btn-calculate mt-[16px]">
                  Calculate Margin
                </Button>
              </form>

              {result && (
                <motion.div 
                  className="mt-[32px] pt-[32px] border-t border-border text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        {result.isLoss ? 'Net Loss' : 'Gross Profit'}
                      </p>
                      <p className={`text-2xl font-bold ${result.isLoss ? 'text-destructive' : 'text-foreground'}`}>
                        {formatCurrency(result.profit)}
                      </p>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm font-medium text-muted-foreground mb-1">Profit Margin</p>
                      <p className={`text-2xl font-bold ${result.isLoss ? 'text-destructive' : 'text-primary'}`}>
                        {result.margin}%
                      </p>
                    </div>
                  </div>
                  
                  <div className="calc-result-formula text-sm">
                    Margin Formula: (({formatCurrency(result.selling)} - {formatCurrency(result.cost)}) / {formatCurrency(result.selling)}) × 100
                    {result.cost > 0 && (
                      <span className="block mt-2 text-muted-foreground">
                        (Equivalent to a {result.markup}% markup on cost)
                      </span>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </section>

          <section className="py-[64px] md:py-[96px] px-4 sm:px-6 lg:px-8 section-white-bg border-t border-border">
            <div className="max-w-3xl mx-auto">
              <h2 className="mb-[32px] section-heading">Margin vs. Markup</h2>
              <div className="space-y-[24px] text-[17px]">
                <p>
                  While margin and markup both deal with profit, they look at it from different angles. Confusing the two can lead to pricing errors and lower-than-expected profits.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-muted/30 border rounded-xl p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">Gross Margin</h3>
                    <p className="text-sm text-[hsl(var(--text-secondary))] mb-4">
                      Margin shows the percentage of revenue you keep as profit. It is based on the <strong>selling price</strong>.
                    </p>
                    <div className="bg-background border rounded-md p-3 font-mono text-sm shadow-sm text-center mb-4">
                      (Profit / Selling Price) × 100
                    </div>
                    <p className="text-sm text-[hsl(var(--text-secondary))]">
                      Margin can never exceed 100% (which would only happen if the item cost you exactly $0).
                    </p>
                  </div>

                  <div className="bg-muted/30 border rounded-xl p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">Markup</h3>
                    <p className="text-sm text-[hsl(var(--text-secondary))] mb-4">
                      Markup shows how much more you charge on top of your cost. It is based on the <strong>cost</strong>.
                    </p>
                    <div className="bg-background border rounded-md p-3 font-mono text-sm shadow-sm text-center mb-4">
                      (Profit / Cost) × 100
                    </div>
                    <p className="text-sm text-[hsl(var(--text-secondary))]">
                      Markup can easily exceed 100%. If you buy an item for $10 and sell it for $30, that's a 200% markup.
                    </p>
                  </div>
                </div>

                <div className="mt-[48px]">
                  <h3 className="mb-[16px] section-heading">Example Calculation</h3>
                  <p className="mb-[16px]">
                    Let's say you buy a product for <strong>$50</strong> and sell it for <strong>$100</strong>.
                  </p>
                  <ul className="list-disc pl-[24px] space-y-[8px] text-[hsl(var(--text-secondary))]">
                    <li><strong className="text-foreground">Profit:</strong> $100 (selling price) - $50 (cost) = $50 profit.</li>
                    <li><strong className="text-foreground">Margin:</strong> ($50 profit / $100 selling price) × 100 = <strong className="text-foreground font-semibold">50% Margin</strong></li>
                    <li><strong className="text-foreground">Markup:</strong> ($50 profit / $50 cost) × 100 = <strong className="text-foreground font-semibold">100% Markup</strong></li>
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

export default MarginCalculator;
