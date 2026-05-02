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
    q: 'What is percentage difference?',
    a: 'Percentage difference compares two numbers without treating either as the original. It divides the absolute difference by the average of the two values, then multiplies by 100. This makes the comparison symmetrical.',
  },
  {
    q: 'What is the difference between percentage change and percentage difference?',
    a: 'Percentage change has a clear starting value (the original) and measures how much it changed. Percentage difference has no defined starting point and compares two equal-status values against their average. Use percentage change for before-vs-after; use percentage difference when neither value is the baseline.',
  },
  {
    q: 'Can percentage difference exceed 100%?',
    a: 'Yes. If the two values are very far apart relative to their average, the result can exceed 100%. For example, comparing 1 and 99 gives an absolute difference of 98 and an average of 50, so the percentage difference is (98 / 50) x 100 = 196%.',
  },
  {
    q: 'Does this calculator store my data?',
    a: 'No. All calculations happen in your browser. Nothing is sent to a server, stored, or shared. No account required.',
  },
];

const relatedCalcs = [
  { name: 'Percentage Change Calculator', path: '/percentage-change-calculator', desc: 'Find % increase or decrease' },
  { name: 'What Percent Is It?', path: '/what-percent-calculator', desc: 'Find what % one number is of another' },
  { name: 'Grade Calculator', path: '/grade-calculator', desc: 'Convert score to grade percentage' },
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
      setResult({ v1: val1, v2: val2, diff: 0, average: 0, percentDiff: '0.00' });
      return;
    }
    const diff = Math.abs(val1 - val2);
    const average = (val1 + val2) / 2;
    if (average === 0) {
      setError('Cannot calculate percentage difference when the average of the two numbers is zero.');
      return;
    }
    const percentDiff = (diff / Math.abs(average)) * 100;
    setResult({
      v1: val1,
      v2: val2,
      diff,
      average: Math.abs(average),
      percentDiff: percentDiff.toFixed(2),
    });
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
      { "@type": "ListItem", "position": 2, "name": "Percentage Difference Calculator", "item": "https://mypctcalculator.com/percentage-difference-calculator" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Percentage Difference Calculator - Compare Any Two Values</title>
        <meta name="description" content="Calculate the percentage difference between two numbers. Find the relative difference between any two values instantly. Free and instant." />
        <link rel="canonical" href="https://mypctcalculator.com/percentage-difference-calculator" />
        <meta property="og:title" content="Percentage Difference Calculator - Compare Any Two Values" />
        <meta property="og:description" content="Calculate the percentage difference between two numbers. Find the relative difference between any two values instantly. Free and instant." />
        <meta property="og:url" content="https://mypctcalculator.com/percentage-difference-calculator" />
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
              <span className="text-foreground font-medium">Percentage Difference Calculator</span>
            </nav>
          </div>

          {/* Calculator section */}
          <section className="py-[48px] md:py-[64px] px-4 sm:px-6 lg:px-8 section-light-bg">
            <div className="max-w-3xl mx-auto text-center mb-[48px]">
              <h1 className="mb-[16px] section-heading">Percentage Difference Calculator</h1>
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
                  <label htmlFor="v1" className="calc-label">Value 1</label>
                  <input
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
                  <label htmlFor="v2" className="calc-label">Value 2</label>
                  <input
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
                  <p className="text-sm text-destructive font-medium">{error}</p>
                )}

                <button type="submit" className="btn-calculate mt-[16px]">
                  Calculate Difference
                </button>
              </form>

              {result && (
                <motion.div
                  className="mt-[32px] pt-[32px] border-t border-border text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-[16px] font-semibold text-foreground mb-[8px]">Percentage Difference</p>
                  <div className="calc-result-value">{result.percentDiff}%</div>
                  <div className="calc-result-formula">
                    |{result.v1} - {result.v2}| = {result.diff} | Average = {result.average} | ({result.diff} / {result.average}) x 100
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
              <h2 className="section-heading mb-[24px]">How percentage difference works</h2>
              <div className="space-y-[16px] text-[17px]">
                <p>
                  Percentage difference is used when neither value is clearly the starting point. Instead of dividing by the original value, you divide by the average of the two numbers so the comparison is symmetrical in both directions.
                </p>
                <div className="formula-code-box">% Difference = (|V1 - V2| / ((V1 + V2) / 2)) x 100</div>
                <p>
                  <strong className="text-foreground font-semibold">Example:</strong> Compare 100 and 150. Difference = |100 - 150| = 50. Average = (100 + 150) / 2 = 125. Result = (50 / 125) x 100 = 40% difference.
                </p>
                <p>
                  This is different from percentage change, which uses only the original value as the denominator. Use percentage difference when comparing two equal-status values such as two prices, two measurements, or two survey results.
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

export default PercentageDifferenceCalculator;
