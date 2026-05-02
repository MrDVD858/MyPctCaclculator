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
    q: 'How do I find what percent one number is of another?',
    a: 'Divide the part by the whole, then multiply by 100. Example: 25 is what percent of 200? (25 / 200) x 100 = 12.5%.',
  },
  {
    q: 'What is the difference between percent and percentage?',
    a: 'Percent (%) refers to a rate out of 100. Percentage is the result of calculating that rate. In everyday use the two words are interchangeable, but technically "15 percent" is the rate and "the percentage is 15" is the result.',
  },
  {
    q: 'Can a percentage be greater than 100?',
    a: 'Yes. If the part is larger than the whole, the result exceeds 100%. Example: 150 is what percent of 100? (150 / 100) x 100 = 150%. This is common when comparing an actual value to a target or budget.',
  },
  {
    q: 'Does this calculator store my data?',
    a: 'No. All calculations happen in your browser. Nothing is sent to a server, stored, or shared. No account required.',
  },
];

const relatedCalcs = [
  { name: 'Grade Calculator', path: '/grade-calculator', desc: 'Convert score to grade percentage' },
  { name: 'Percentage Change Calculator', path: '/percentage-change-calculator', desc: 'Find % increase or decrease' },
  { name: 'Discount Calculator', path: '/discount-calculator', desc: 'Find the sale price after % off' },
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
      setError('The Whole value cannot be zero.');
      return;
    }
    const percentage = (x / y) * 100;
    setResult({ part: x, whole: y, percentage: percentage.toFixed(2) });
  };

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
      { "@type": "ListItem", "position": 2, "name": "What Percent Calculator", "item": "https://mypctcalculator.com/what-percent-calculator" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>What Percent Calculator - X is What Percent of Y?</title>
        <meta name="description" content="Find what percentage one number is of another. Instantly calculate what percent X is of Y. Free and instant." />
        <link rel="canonical" href="https://mypctcalculator.com/what-percent-calculator" />
        <meta property="og:title" content="What Percent Calculator - X is What Percent of Y?" />
        <meta property="og:description" content="Find what percentage one number is of another. Instantly calculate what percent X is of Y. Free and instant." />
        <meta property="og:url" content="https://mypctcalculator.com/what-percent-calculator" />
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
              <span className="text-foreground font-medium">What Percent Calculator</span>
            </nav>
          </div>

          {/* Calculator section */}
          <section className="py-[48px] md:py-[64px] px-4 sm:px-6 lg:px-8 section-light-bg">
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
                  <label htmlFor="part" className="calc-label">Part (X)</label>
                  <input
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
                  <label htmlFor="whole" className="calc-label">Whole (Y)</label>
                  <input
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
                  <p className="text-sm text-destructive font-medium">{error}</p>
                )}

                <button type="submit" className="btn-calculate mt-[16px]">
                  Calculate Percentage
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
                    {result.part} is what percent of {result.whole}
                  </p>
                  <div className="calc-result-value">{result.percentage}%</div>
                  <div className="calc-result-formula">
                    Formula: ({result.part} / {result.whole}) x 100 = {result.percentage}%
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
              <h2 className="section-heading mb-[24px]">How to find what percent X is of Y</h2>
              <div className="space-y-[16px] text-[17px]">
                <p>
                  This calculation answers questions like: what was my test score as a percentage, what portion of the budget has been spent, or how much of a task is complete? You divide the part by the whole to get a decimal, then multiply by 100.
                </p>
                <div className="formula-code-box">Percentage = (X / Y) x 100</div>
                <p>
                  <strong className="text-foreground font-semibold">Example:</strong> 25 is what percent of 200? (25 / 200) x 100 = 12.5%. So 25 is 12.5% of 200.
                </p>
                <p>
                  The result can exceed 100% if the part is larger than the whole. For example, if actual sales of $120 are compared to a $100 target, the result is 120%, meaning you exceeded the target by 20%.
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

export default WhatPercentCalculator;
