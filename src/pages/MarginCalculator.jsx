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
    q: 'What is the difference between margin and markup?',
    a: 'Margin is profit divided by the selling price. Markup is profit divided by the cost. Example: buy for $50, sell for $100. Profit is $50. Margin = ($50 / $100) x 100 = 50%. Markup = ($50 / $50) x 100 = 100%.',
  },
  {
    q: 'Can profit margin exceed 100%?',
    a: 'No. Margin is based on the selling price, so it can only reach 100% if the item costs you nothing. Markup, however, can exceed 100% easily since it is based on cost.',
  },
  {
    q: 'What is a good profit margin?',
    a: 'It depends heavily on the industry. Grocery retail often runs 1-3% net margin. Software companies can see 20-40% or higher. A healthy gross margin for most product-based businesses is considered to be 50% or above.',
  },
  {
    q: 'Does this calculator store my data?',
    a: 'No. All calculations happen in your browser. Nothing is sent to a server, stored, or shared. No account required.',
  },
];

const relatedCalcs = [
  { name: 'Discount Calculator', path: '/discount-calculator', desc: 'Find the sale price after % off' },
  { name: 'Sales Tax Calculator', path: '/sales-tax-calculator', desc: 'Add tax or find pre-tax amount' },
  { name: 'Percentage Change Calculator', path: '/percentage-change-calculator', desc: 'Find % increase or decrease' },
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
      setError('Selling price cannot be zero to calculate margin.');
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
      isLoss: profit < 0,
    });
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
      { "@type": "ListItem", "position": 2, "name": "Profit Margin Calculator", "item": "https://mypctcalculator.com/margin-calculator" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Profit Margin Calculator - Find Margin and Markup</title>
        <meta name="description" content="Calculate profit margin percentage from cost and selling price. Instantly see gross profit, margin, and markup. Free and instant." />
        <link rel="canonical" href="https://mypctcalculator.com/margin-calculator" />
        <meta property="og:title" content="Profit Margin Calculator - Find Margin and Markup" />
        <meta property="og:description" content="Calculate profit margin percentage from cost and selling price. Instantly see gross profit, margin, and markup. Free and instant." />
        <meta property="og:url" content="https://mypctcalculator.com/margin-calculator" />
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
              <span className="text-foreground font-medium">Profit Margin Calculator</span>
            </nav>
          </div>

          {/* Calculator section */}
          <section className="py-[48px] md:py-[64px] px-4 sm:px-6 lg:px-8 section-light-bg">
            <div className="max-w-3xl mx-auto text-center mb-[48px]">
              <h1 className="mb-[16px] section-heading">Profit Margin Calculator</h1>
              <p className="text-[18px] max-w-2xl mx-auto">
                Find your gross profit, margin percentage, and markup from cost and selling price.
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
                  <label htmlFor="cost" className="calc-label">Cost ($)</label>
                  <input
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
                  <label htmlFor="sellingPrice" className="calc-label">Selling Price / Revenue ($)</label>
                  <input
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
                  <p className="text-sm text-destructive font-medium">{error}</p>
                )}

                <button type="submit" className="btn-calculate mt-[16px]">
                  Calculate Margin
                </button>
              </form>

              {result && (
                <motion.div
                  className="mt-[32px] pt-[32px] border-t border-border text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-[16px] font-semibold text-foreground mb-[8px]">
                    {result.isLoss ? 'Net Loss' : 'Profit Margin'}
                  </p>
                  <div className="calc-result-value">{result.margin}%</div>
                  <div className="calc-result-formula">
                    {result.isLoss ? 'Loss' : 'Profit'}: {formatCurrency(result.profit)} | Markup on cost: {result.markup}%
                  </div>
                  <div className="calc-result-formula mt-[4px]">
                    Formula: ({formatCurrency(result.selling)} - {formatCurrency(result.cost)}) / {formatCurrency(result.selling)} x 100
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
              <h2 className="section-heading mb-[24px]">Margin vs. markup explained</h2>
              <div className="space-y-[16px] text-[17px]">
                <p>
                  Margin and markup both measure profit, but they use different bases. Margin is profit as a percentage of the selling price. Markup is profit as a percentage of the cost. Confusing the two is a common pricing mistake.
                </p>
                <div className="formula-code-box">Margin = (Profit / Selling Price) x 100</div>
                <div className="formula-code-box">Markup = (Profit / Cost) x 100</div>
                <p>
                  <strong className="text-foreground font-semibold">Example:</strong> You buy a product for $50 and sell it for $100. Profit = $50. Margin = ($50 / $100) x 100 = 50%. Markup = ($50 / $50) x 100 = 100%.
                </p>
                <p>
                  Margin can never exceed 100% because you can never keep more revenue than you collect. Markup has no ceiling and is always higher than the equivalent margin percentage.
                </p>
              </div>
            </div>
          </motion.section>

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

export default MarginCalculator;
