
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const DiscountCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [result, setResult] = useState(null);

  const calculateDiscount = (e) => {
    e.preventDefault();
    const price = parseFloat(originalPrice);
    const discountPct = parseFloat(discountPercentage);

    if (isNaN(price) || isNaN(discountPct)) return;

    const saved = price * (discountPct / 100);
    const finalPrice = price - saved;

    setResult({
      originalPrice: price,
      discountPct,
      amountSaved: saved,
      finalPrice
    });
  };

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(val);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I calculate a discount?",
        "acceptedAnswer": { "@type": "Answer", "text": "Discounted price = Original price × (1 - discount% / 100). Example: 20% off $80 = $80 × 0.80 = $64." }
      },
      {
        "@type": "Question",
        "name": "How do I find what percentage off a sale price is?",
        "acceptedAnswer": { "@type": "Answer", "text": "% off = ((original - sale) / original) × 100." }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mypctcalculator.com/" },
      { "@type": "ListItem", "position": 2, "name": "Discount Calculator", "item": "https://mypctcalculator.com/discount-calculator" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Discount Calculator – Find Sale Price & Savings</title>
        <meta name="description" content="Enter any price and discount percentage to instantly see the sale price and how much you save." />
        <link rel="canonical" href="https://mypctcalculator.com/discount-calculator" />
        
        <meta property="og:title" content="Discount Calculator – Find Sale Price & Savings" />
        <meta property="og:description" content="Enter any price and discount percentage to instantly see the sale price and how much you save." />
        <meta property="og:url" content="https://mypctcalculator.com/discount-calculator" />
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
              <h1 className="mb-[16px] section-heading">Discount Calculator</h1>
              <p className="text-[18px] max-w-2xl mx-auto">
                Find the final sale price and see exactly how much you're saving.
              </p>
            </div>

            <motion.div 
              className="calc-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <form onSubmit={calculateDiscount} className="space-y-[24px]">
                <div className="space-y-[8px]">
                  <label htmlFor="originalPrice" className="calc-label">
                    Original Price ($)
                  </label>
                  <input
                    id="originalPrice"
                    type="number"
                    step="0.01"
                    min="0"
                    inputMode="decimal"
                    placeholder="100.00"
                    className="calc-input"
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-[8px]">
                  <label htmlFor="discountPercentage" className="calc-label">
                    Discount Percent (%)
                  </label>
                  <input
                    id="discountPercentage"
                    type="number"
                    step="0.1"
                    min="0"
                    max="100"
                    inputMode="decimal"
                    placeholder="20"
                    className="calc-input"
                    value={discountPercentage}
                    onChange={(e) => setDiscountPercentage(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn-calculate mt-[16px]">
                  Calculate Sale Price
                </button>
              </form>

              {result && (
                <motion.div 
                  className="mt-[32px] pt-[32px] border-t border-border text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-[16px] font-semibold text-foreground mb-[8px]">
                    Final Price
                  </p>
                  <div className="calc-result-value">
                    {formatCurrency(result.finalPrice)}
                  </div>
                  <div className="calc-result-formula">
                    You save {formatCurrency(result.amountSaved)} ({result.discountPct}% of {formatCurrency(result.originalPrice)})
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

export default DiscountCalculator;
