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
    q: 'What is a good tip percentage?',
    a: '15-20% is standard in the US. 15% for average service, 18% for good service, and 20% or more for excellent service. For delivery, 10-15% or a minimum of $3-5 is common.',
  },
  {
    q: 'How do I calculate a tip without a calculator?',
    a: 'To find 20%, move the decimal one place left to get 10%, then double it. For 15%, find 10% and add half of that. Example: 20% of $45 = $4.50 x 2 = $9.00.',
  },
  {
    q: 'Should I tip on the pre-tax or post-tax amount?',
    a: 'Either is acceptable. Tipping on the pre-tax amount is technically correct, but most people tip on the total bill for simplicity. The difference is usually small.',
  },
  {
    q: 'Does this calculator store my data?',
    a: 'No. All calculations happen in your browser. Nothing is sent to a server, stored, or shared. No account required.',
  },
];

const relatedCalcs = [
  { name: 'Discount Calculator', path: '/discount-calculator', desc: 'Find the sale price after % off' },
  { name: 'Sales Tax Calculator', path: '/sales-tax-calculator', desc: 'Add tax or find pre-tax amount' },
  { name: 'What Percent Is It?', path: '/what-percent-calculator', desc: 'Find what % one number is of another' },
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

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState('20');
  const [result, setResult] = useState(null);

  const calculateTip = (e) => {
    e.preventDefault();
    const bill = parseFloat(billAmount);
    const tipPct = parseFloat(tipPercentage);
    if (isNaN(bill) || isNaN(tipPct)) return;
    const tip = bill * (tipPct / 100);
    const total = bill + tip;
    setResult({ bill, tipPct, tipAmount: tip, totalAmount: total });
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
      { "@type": "ListItem", "position": 2, "name": "Tip Calculator", "item": "https://mypctcalculator.com/tip-calculator" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Tip Calculator - Split the Bill Instantly</title>
        <meta name="description" content="Calculate the tip on any bill amount. Choose your tip percentage and split among any number of people. Free and instant." />
        <link rel="canonical" href="https://mypctcalculator.com/tip-calculator" />
        <meta property="og:title" content="Tip Calculator - Split the Bill Instantly" />
        <meta property="og:description" content="Calculate the tip on any bill amount. Choose your tip percentage and split among any number of people. Free and instant." />
        <meta property="og:url" content="https://mypctcalculator.com/tip-calculator" />
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
              <span className="text-foreground font-medium">Tip Calculator</span>
            </nav>
          </div>

          {/* Calculator section */}
          <section className="py-[48px] md:py-[64px] px-4 sm:px-6 lg:px-8 section-light-bg">
            <div className="max-w-3xl mx-auto text-center mb-[48px]">
              <h1 className="mb-[16px] section-heading">Tip Calculator</h1>
              <p className="text-[18px] max-w-2xl mx-auto">
                Instantly figure out how much to tip and the final total.
              </p>
            </div>

            <motion.div
              className="calc-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <form onSubmit={calculateTip} className="space-y-[24px]">
                <div className="space-y-[8px]">
                  <label htmlFor="billAmount" className="calc-label">Bill Amount ($)</label>
                  <input
                    id="billAmount"
                    type="number"
                    step="0.01"
                    min="0"
                    inputMode="decimal"
                    placeholder="0.00"
                    className="calc-input"
                    value={billAmount}
                    onChange={(e) => setBillAmount(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-[8px]">
                  <label htmlFor="tipPercentage" className="calc-label">Tip Percent (%)</label>
                  <input
                    id="tipPercentage"
                    type="number"
                    step="0.1"
                    min="0"
                    inputMode="decimal"
                    placeholder="20"
                    className="calc-input"
                    value={tipPercentage}
                    onChange={(e) => setTipPercentage(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn-calculate mt-[16px]">
                  Calculate Tip
                </button>
              </form>

              {result && (
                <motion.div
                  className="mt-[32px] pt-[32px] border-t border-border text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-[16px] font-semibold text-foreground mb-[8px]">Total Bill</p>
                  <div className="calc-result-value">{formatCurrency(result.totalAmount)}</div>
                  <div className="calc-result-formula">
                    Tip Amount: {formatCurrency(result.tipAmount)} ({result.tipPct}% of {formatCurrency(result.bill)})
                  </div>
                </motion.div>
              )}
            </motion.div>
          </section>

          {/* AdSense - after calculator */}
          <AdSenseZone slot="8991515885" />

          {/* How tipping works */}
          <motion.section
            className="py-[56px] md:py-[72px] px-4 sm:px-6 lg:px-8 section-white-bg border-b border-border"
            variants={sectionFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="section-heading mb-[24px]">How tip percentage works</h2>
              <div className="space-y-[16px] text-[17px]">
                <p>
                  A tip is calculated as a percentage of your bill. To find the tip amount, multiply the bill by the tip percentage divided by 100.
                </p>
                <div className="formula-code-box">Tip = Bill x (Tip % / 100)</div>
                <p>
                  <strong className="text-foreground font-semibold">Example:</strong> A $85 bill with a 20% tip. $85 x (20 / 100) = $85 x 0.20 = $17.00 tip. Total = $85 + $17 = $102.00.
                </p>
                <p>
                  In the US, 15-20% is standard for sit-down restaurants. For delivery, 10-15% or a flat $3-5 minimum is typical. For exceptional service, 20-25% is a great way to show appreciation.
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

export default TipCalculator;
