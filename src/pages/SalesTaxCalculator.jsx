
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const SalesTaxCalculator = () => {
  const [price, setPrice] = useState('');
  const [taxRate, setTaxRate] = useState('');
  const [result, setResult] = useState(null);

  const calculateTax = (e) => {
    e.preventDefault();
    const p = parseFloat(price);
    const r = parseFloat(taxRate);

    if (isNaN(p) || isNaN(r)) return;

    const taxAmount = p * (r / 100);
    const total = p + taxAmount;

    setResult({
      price: p,
      rate: r,
      taxAmount,
      total
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
        "name": "How do I calculate sales tax?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Multiply the pre-tax price by the sales tax rate divided by 100. Add this tax amount to the original price for the total."
        }
      },
      {
        "@type": "Question",
        "name": "What is the average US sales tax rate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The average combined state and local sales tax rate in the US is around 7-8%, though it varies widely by location."
        }
      },
      {
        "@type": "Question",
        "name": "Is sales tax included in the listed price?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In the United States, sales tax is usually added at the register and is not included in the listed price. In many other countries, the listed price includes the tax (like VAT)."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mypctcalculator.com/" },
      { "@type": "ListItem", "position": 2, "name": "Sales Tax Calculator", "item": "https://mypctcalculator.com/sales-tax-calculator" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Sales Tax Calculator – Add Tax to Any Price</title>
        <meta name="description" content="Calculate the total price after sales tax. Enter your item price and local tax rate for an instant result." />
        <link rel="canonical" href="https://mypctcalculator.com/sales-tax-calculator" />
        <meta name="google-site-verification" content="google8cecd6a8937048c7" />
        
        <meta property="og:title" content="Sales Tax Calculator – Add Tax to Any Price" />
        <meta property="og:description" content="Calculate the total price after sales tax. Enter your item price and local tax rate for an instant result." />
        <meta property="og:url" content="https://mypctcalculator.com/sales-tax-calculator" />
        <meta property="og:site_name" content="Percentage Calculator" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://mypctcalculator.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://mypctcalculator.com/og-image.png" />

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5193834725888549" crossOrigin="anonymous"></script>
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
          <section className="py-12 md:py-16 section-light-bg">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to all calculators
              </Link>

              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center justify-center p-3 bg-purple-500/10 rounded-2xl mb-4"
                >
                  <Building2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </motion.div>
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold mb-4 section-heading"
                  style={{ letterSpacing: '-0.02em' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Sales Tax Calculator
                </motion.h1>
                <motion.p 
                  className="text-lg text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Quickly calculate how much tax you owe and the final total price.
                </motion.p>
              </div>

              <motion.div 
                className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <form onSubmit={calculateTax} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="price" className="text-sm font-medium">
                        Pre-Tax Price
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-muted-foreground sm:text-sm">$</span>
                        </div>
                        <Input
                          id="price"
                          type="number"
                          step="0.01"
                          min="0"
                          placeholder="0.00"
                          className="pl-7"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="taxRate" className="text-sm font-medium">
                        Sales Tax Rate
                      </Label>
                      <div className="relative">
                        <Input
                          id="taxRate"
                          type="number"
                          step="0.001"
                          min="0"
                          placeholder="e.g. 7.5"
                          className="pr-8"
                          value={taxRate}
                          onChange={(e) => setTaxRate(e.target.value)}
                          required
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="text-muted-foreground sm:text-sm">%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button type="submit" className="btn-calculate w-full md:w-auto">
                      Calculate Total
                    </button>
                  </div>
                </form>
              </motion.div>

              {result && (
                <motion.div 
                  className="mt-8 bg-muted/30 border rounded-2xl p-6 md:p-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center space-y-6 border-b md:border-b-0 md:border-r border-border pb-8 md:pb-0 md:pr-8">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">
                          Tax Amount
                        </p>
                        <p className="text-3xl md:text-4xl font-semibold text-foreground/80">
                          {formatCurrency(result.taxAmount)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">
                          Total Price
                        </p>
                        <p className="text-4xl md:text-5xl font-bold text-primary" style={{ letterSpacing: '-0.02em' }}>
                          {formatCurrency(result.total)}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <h3 className="font-medium mb-4 text-foreground section-heading">Breakdown</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center text-muted-foreground">
                          <span>Original Price:</span>
                          <span className="font-medium text-foreground">{formatCurrency(result.price)}</span>
                        </div>
                        <div className="flex justify-between items-center text-muted-foreground">
                          <span>Tax ({result.rate}%):</span>
                          <span className="font-medium text-foreground">+{formatCurrency(result.taxAmount)}</span>
                        </div>
                        <div className="flex justify-between items-center font-medium pt-3 mt-3 border-t">
                          <span>Final Amount:</span>
                          <span className="text-base">{formatCurrency(result.total)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </section>

          <section className="py-12 md:py-16 section-white-bg border-t border-border">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-6 section-heading">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-card rounded-lg px-6 border shadow-sm">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    How do I calculate sales tax?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Multiply the purchase price by the tax rate divided by 100. For example, $200 item with 8% tax = $200 × 0.08 = $16 tax, making the total $216.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="bg-card rounded-lg px-6 border shadow-sm">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    What is the average sales tax rate in the US?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    The average combined state and local sales tax rate in the US is around 7-8%, but it varies widely from 0% in states like Oregon and Montana to over 10% in some parts of Tennessee and Louisiana.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="bg-card rounded-lg px-6 border shadow-sm">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Do I pay sales tax on food and groceries?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    It depends on your state. Many states exempt groceries from sales tax entirely, some tax them at a reduced rate, and some apply full sales tax.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="bg-card rounded-lg px-6 border shadow-sm">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    How do I calculate the pre-tax price from a total?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Divide the total price by 1 plus the tax rate as a decimal. For example, $216 total with 8% tax = $216 ÷ 1.08 = $200 pre-tax price.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="bg-card rounded-lg px-6 border shadow-sm">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Is sales tax calculated before or after discounts?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Sales tax is generally calculated on the final discounted price, not the original price.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SalesTaxCalculator;
