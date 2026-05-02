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
    q: 'How do I calculate percentage increase?',
    a: 'Subtract the original value from the new value, divide by the original value, then multiply by 100. Example: from 50 to 75 = ((75 - 50) / 50) x 100 = 50% increase.',
  },
  {
    q: 'How do I calculate percentage decrease?',
    a: 'Same formula. Subtract the original from the new value (you will get a negative number), divide by the original, then multiply by 100. Example: from 80 to 60 = ((60 - 80) / 80) x 100 = -25%, so a 25% decrease.',
  },
  {
    q: 'Can percentage change exceed 100%?',
    a: 'Yes, a percentage increase can exceed 100%. If a value doubles it is a 100% increase; if it triples it is a 200% increase. A percentage decrease cannot exceed 100% unless the value becomes negative.',
  },
  {
    q: 'Does this calculator store my data?',
    a: 'No. All calculations happen in your browser. Nothing is sent to a server, stored, or shared. No account required.',
  },
];

const relatedCalcs = [
  { name: 'Percentage Difference Calculator', path: '/percentage-difference-calculator', desc: 'Compare two values symmetrically' },
  { name: 'Grade Calculator', path: '/grade-calculator', desc: 'Convert score to grade percentage' },
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
    setResult({
      v1,
      v2,
      change: Math.abs(change).toFixed(2),
      isIncrease: change > 0,
      isDecrease: change < 0,
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
      { "@type": "ListItem", "position": 2, "name": "Percentage Change Calculator", "item": "https://mypctcalculator.com/percentage-change-calculator" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Percentage Change Calculator - Increase and Decrease</title>
        <meta name="description" content="Calculate the percentage increase or decrease between any two numbers. Great for tracking prices, stats, and more. Free and instant." />
        <link rel="canonical" href="https://mypctcalculator.com/percentage-change-calculator" />
        <meta property="og:title" content="Percentage Change Calculator - Increase and Decrease" />
        <meta property="og:description" content="Calculate the percentage increase or decrease between any two numbers. Great for tracking prices, stats, and more. Free and instant." />
        <meta property="og:url" content="https://mypctcalculator.com/percentage-change-calculator" />
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
              <span className="text-foreground font-medium">Percentage Change Calculator</span>
            </nav>
          </div>

          {/* Calculator section */}
          <section className="py-[48px] md:py-[64px] px-4 sm:px-6 lg:px-8 section-light-bg">
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
                  <label htmlFor="initialValue" className="calc-label">Original Value</label>
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
                  <label htmlFor="finalValue" className="calc-label">New Value</label>
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
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-[16px] font-semibold text-foreground mb-[8px]">
                    {result.isIncrease ? 'Percentage Increase' : result.isDecrease ? 'Percentage Decrease' : 'No Change'}
                  </p>
                  <div className="calc-result-value">{result.change}%</div>
                  <div className="calc-result-formula">
                    Formula: (({result.v2} - {result.v1}) / |{result.v1}|) x 100
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
              <h2 className="section-heading mb-[24px]">How percentage change works</h2>
              <div className="space-y-[16px] text-[17px]">
                <p>
                  Percentage change tells you how much a value has grown or shrunk relative to its starting point. A positive result means an increase; a negative result means a decrease.
                </p>
                <div className="formula-code-box">% Change = ((New Value - Original Value) / |Original Value|) x 100</div>
                <p>
                  <strong className="text-foreground font-semibold">Increase example:</strong> A stock price goes from $50 to $75. ((75 - 50) / 50) x 100 = 50% increase.
                </p>
                <p>
                  <strong className="text-foreground font-semibold">Decrease example:</strong> A product price drops from $80 to $60. ((60 - 80) / 80) x 100 = -25%, so a 25% decrease.
                </p>
                <p>
                  The absolute value of the original is used as the denominator so the formula works correctly when starting from a negative number.
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

export default PercentageChangeCalculator;
