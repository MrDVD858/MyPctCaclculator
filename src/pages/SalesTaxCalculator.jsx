import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const sectionFadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const faqs = [
  {
    q: 'How do I calculate sales tax?',
    a: 'Multiply the pre-tax price by the tax rate divided by 100. Example: $200 item with 8% tax = $200 x 0.08 = $16 tax, making the total $216.',
  },
  {
    q: 'What is the average sales tax rate in the US?',
    a: 'The average combined state and local sales tax rate in the US is around 7-8%, but it varies widely from 0% in states like Oregon and Montana to over 10% in some parts of Tennessee and Louisiana.',
  },
  {
    q: 'How do I find the pre-tax price from a total?',
    a: 'Divide the total price by 1 plus the tax rate as a decimal. Example: $216 total with 8% tax = $216 / 1.08 = $200 pre-tax price.',
  },
  {
    q: 'Is sales tax calculated before or after discounts?',
    a: 'Sales tax is generally calculated on the final discounted price, not the original price. Apply any discounts first, then calculate the tax on the reduced amount.',
  },
];

const relatedCalcs = [
  { name: 'Discount Calculator', path: '/discount-calculator', desc: 'Find the sale price after % off' },
  { name: 'Tip Calculator', path: '/tip-calculator', desc: 'Calculate tip and split the bill' },
  { name: 'Margin Calculator', path: '/margin-calculator', desc: 'Find profit margin and markup' },
];

const FaqItem = ({ faq }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-accordion-item" data-open={open ? 'true' : 'false'}>
      <button
        className="faq-accordion-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{faq.q}</span>
        <span className="faq-accordion-icon" aria-hidden="true">
          <Plus className="w-3 h-3" />
        </span>
      </button>
      <div className="faq-accordion-body" aria-hidden={!open}>
        <p>{faq.a}</p>
      </div>
    </div>
  );
};

const AdSenseZone = ({ slot }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <div className="adsense-zone">
      <span className="adsense-zone-label">Advertisement</span>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-5193834725888549"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

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
    setResult({ price: p, rate: r, taxAmount, total });
  };

  const formatCurrency = (val) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mypctcalculator.com/" },
      { "@type": "ListItem", "position": 2, "name": "Sales Tax Calculator", "item": "https://mypctcalculator.com/sales-tax-calculator" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Sales Tax Calculator - Add Tax to Any Price</title>
        <meta name="description" content="Calculate the total price after sales tax. Enter your item price and local tax rate for an instant result. Free and instant." />
        <link rel="canonical" href="https://mypctcalculator.com/sales-tax-calculator" />
        <meta name="google-site-verification" content="google8cecd6a8937048c7" />
        <meta property="og:title" content="Sales Tax Calculator - Add Tax to Any Price" />
        <meta property="og:description" content="Calculate the total price after sales tax. Enter your item price and local tax rate for an instant result. Free and instant." />
        <meta property="og:url" content="https://mypctcalculator.com/sales-tax-calculator" />
        <meta property="og:site_name" content="Percentage Calculator" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://mypctcalculator.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://mypctcalculator.com/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">

          {/* Breadcrumb */}
          <div className="px-4 sm:px-6 lg:px-8 pt-5 pb-0 max-w-3xl mx-auto w-full">
            <nav className="text-[13px] text-[hsl(var(--text-secondary))]">
              <Link to="/" className="hover:text-[hsl(var(--purple-accent))] transition-colors">Home</Link>
              <span className="mx-2 opacity-40">/</span>
              <span className="text-foreground font-medium">Sales Tax Calculator</span>
            </nav>
          </div>

          {/* Calculator section */}
          <section className="py-[48px] md:py-[64px] px-4 sm:px-6 lg:px-8 section-light-bg">
            <div className="max-w-3xl mx-auto text-center mb-[48px]">
              <h1 className="mb-[16px] section-heading">Sales Tax Calculator</h1>
              <p className="text-[18px] max-w-2xl mx-auto">
                Quickly calculate how much tax you owe and the final total price.
              </p>
            </div>

            <motion.div
              className="calc-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <form onSubmit={calculateTax} className="space-y-[24px]">
                <div className="space-y-[8px]">
                  <label htmlFor="price" className="calc-label">Pre-Tax Price ($)</label>
                  <input
                    id="price"
                    type="number"
                    step="0.01"
                    min="0"
                    inputMode="decimal"
                    placeholder="0.00"
                    className="calc-input"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-[8px]">
                  <label htmlFor="taxRate" className="calc-label">Sales Tax Rate (%)</label>
                  <input
                    id="taxRate"
                    type="number"
                    step="0.001"
                    min="0"
                    inputMode="decimal"
                    placeholder="7.5"
                    className="calc-input"
                    value={taxRate}
                    onChange={(e) => setTaxRate(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn-calculate mt-[16px]">
                  Calculate Total
                </button>
              </form>

              {result && (
                <motion.div
                  className="mt-[32px] pt-[32px] border-t border-border text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-[16px] font-semibold text-foreground mb-[8px]">Total Price</p>
                  <div className="calc-result-value">{formatCurrency(result.total)}</div>
                  <div className="calc-result-formula">
                    Tax Amount: {formatCurrency(result.taxAmount)} ({result.rate}% of {formatCurrency(result.price)})
                  </div>
                </motion.div>
              )}
            </motion.div>
          </section>

          {/* AdSense - after calculator */}
          <AdSenseZone slot="8991515885" />

          {/* How it works */}
          <motion.section
            className="py-[56px] md:py-[72px] px-4 sm:px-6 lg:px-8 section-white-bg border-b border-border"
            variants={sectionFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="section-heading mb-[24px]">How sales tax works</h2>
              <div className="space-y-[16px] text-[17px]">
                <p>
                  Sales tax is a percentage of the purchase price collected by the seller and remitted to the government. It is added on top of the listed price at checkout.
                </p>
                <div className="formula-code-box">Total = Pre-Tax Price x (1 + Tax Rate / 100)</div>
                <p>
                  <strong className="text-foreground font-semibold">Example:</strong> A $150 item with a 9% sales tax. $150 x 1.09 = $163.50 total. The tax amount is $13.50.
                </p>
                <p>
                  To reverse-calculate the pre-tax price from a total, divide the total by (1 + tax rate / 100). Example: $163.50 / 1.09 = $150.00 pre-tax price.
                </p>
              </div>
            </div>
          </motion.section>

          {/* AdSense - between how it works and FAQ */}
          <AdSenseZone slot="8991515885" />

          {/* FAQ */}
          <motion.section
            className="py-[56px] md:py-[72px] px-4 sm:px-6 lg:px-8 section-light-bg"
            variants={sectionFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-[40px]">
                <p className="text-[12px] font-bold uppercase tracking-widest text-[hsl(var(--purple-accent))] mb-3">FAQ</p>
                <h2 className="section-heading">Frequently asked questions</h2>
              </div>
              <div>
                {faqs.map((faq, index) => (
                  <FaqItem key={index} faq={faq} />
                ))}
              </div>
            </div>
          </motion.section>

          {/* Related calculators */}
          <motion.section
            className="py-[48px] px-4 sm:px-6 lg:px-8 section-white-bg border-t border-border"
            variants={sectionFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-[20px] font-bold section-heading mb-[20px]">Related calculators</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedCalcs.map((calc) => (
                  <Link
                    key={calc.path}
                    to={calc.path}
                    className="tool-card"
                  >
                    <div className="tool-card-name">{calc.name}</div>
                    <div className="tool-card-desc">{calc.desc}</div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.section>

        </main>

        <Footer />
      </div>
    </>
  );
};

export default SalesTaxCalculator;
