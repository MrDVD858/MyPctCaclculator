
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const PercentageChangeCalculator = () => {
  const [initialValue, setInitialValue] = useState('');
  const [finalValue, setFinalValue] = useState('');
  const [result, setResult] = useState(null);

  const calculateChange = (e) => {
    e.preventDefault();
    const v1 = parseFloat(initialValue);
    const v2 = parseFloat(finalValue);

    if (isNaN(v1) || isNaN(v2) || v1 === 0) return;

    const difference = v2 - v1;
    const change = (difference / Math.abs(v1)) * 100;
    const isIncrease = change > 0;
    const isDecrease = change < 0;

    setResult({
      v1,
      v2,
      difference: Math.abs(difference),
      change: Math.abs(change).toFixed(2),
      isIncrease,
      isDecrease
    });
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I calculate percentage increase?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Subtract the original value from the new value, divide the result by the original value, and multiply by 100."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between percent increase and decrease?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An increase means the new value is higher than the original, resulting in a positive percentage. A decrease means the new value is lower, resulting in a negative percentage."
        }
      },
      {
        "@type": "Question",
        "name": "Can percentage change exceed 100%",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, a percentage increase can exceed 100% (e.g., if a value doubles, it's a 100% increase; if it triples, it's a 200% increase). However, a percentage decrease cannot exceed 100% unless the value becomes negative."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mypctcalculator.com/" },
      { "@type": "ListItem", "position": 2, "name": "Percentage Change Calculator", "item": "https://mypctcalculator.com/percentage-change-calculator" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Percentage Change Calculator – Increase & Decrease</title>
        <meta name="description" content="Calculate the percentage increase or decrease between any two numbers. Great for tracking prices and statistics." />
        <link rel="canonical" href="https://mypctcalculator.com/percentage-change-calculator" />
        
        <meta property="og:title" content="Percentage Change Calculator – Increase & Decrease" />
        <meta property="og:description" content="Calculate the percentage increase or decrease between any two numbers. Great for tracking prices and statistics." />
        <meta property="og:url" content="https://mypctcalculator.com/percentage-change-calculator" />
        <meta property="og:site_name" content="Percentage Calculator" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://mypctcalculator.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://mypctcalculator.com/og-image.png" />

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
          <section className="py-[48px] md:py-[80px] px-4 sm:px-6 lg:px-8 section-light-bg">
            <div className="max-w-3xl mx-auto text-center mb-[48px]">
              <h1 className="mb-[16px] section-heading">Percent Change Calculator</h1>
              <p className="text-[18px] max-w-2xl mx-auto">
                Calculate the exact percentage increase or decrease between two numbers.
              </p>
            </div>

            <motion.div 
              className="calc-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <form onSubmit={calculateChange} className="space-y-[24px]">
                <div className="space-y-[8px]">
                  <label htmlFor="initialValue" className="calc-label">
                    Original Value
                  </label>
                  <input
                    id="initialValue"
                    type="number"
                    step="any"
                    inputMode="decimal"
                    placeholder="e.g. 50"
                    className="calc-input"
                    value={initialValue}
                    onChange={(e) => setInitialValue(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-[8px]">
                  <label htmlFor="finalValue" className="calc-label">
                    New Value
                  </label>
                  <input
                    id="finalValue"
                    type="number"
                    step="any"
                    inputMode="decimal"
                    placeholder="e.g. 75"
                    className="calc-input"
                    value={finalValue}
                    onChange={(e) => setFinalValue(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn-calculate mt-[16px]">
                  Calculate Change
                </button>
              </form>

              {result && (
                <motion.div 
                  className="mt-[32px] pt-[32px] border-t border-border text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-[16px] font-semibold text-foreground mb-[8px]">
                    {result.isIncrease ? 'Increase' : result.isDecrease ? 'Decrease' : 'No Change'}
                  </p>
                  <div className="calc-result-value">
                    {result.change}%
                  </div>
                  <div className="calc-result-formula">
                    Formula: (({result.v2} - {result.v1}) / |{result.v1}|) × 100
                  </div>
                </motion.div>
              )}
            </motion.div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PercentageChangeCalculator;
