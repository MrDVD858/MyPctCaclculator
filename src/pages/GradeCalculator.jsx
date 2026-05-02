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
    q: 'How is a grade percentage calculated?',
    a: 'Divide your earned points by the total possible points, then multiply by 100. Example: 42 out of 50 = (42 / 50) x 100 = 84%.',
  },
  {
    q: 'How do I convert a percentage to a letter grade?',
    a: 'The standard US scale is: 90-100% is an A, 80-89% is a B, 70-79% is a C, 60-69% is a D, and below 60% is an F. Some schools use plus and minus grades within those ranges.',
  },
  {
    q: 'What percentage do I need to pass a class?',
    a: 'Passing requirements vary by institution. Most colleges require a D (60%) or C (70%) to receive credit. Check your syllabus or school policy for the exact threshold.',
  },
  {
    q: 'Does this calculator store my data?',
    a: 'No. All calculations happen in your browser. Nothing is sent to a server, stored, or shared. No account required.',
  },
];

const relatedCalcs = [
  { name: 'Percentage Change Calculator', path: '/percentage-change-calculator', desc: 'Find % increase or decrease' },
  { name: 'What Percent Is It?', path: '/what-percent-calculator', desc: 'Find what % one number is of another' },
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

const GradeCalculator = () => {
  const [score, setScore] = useState('');
  const [total, setTotal] = useState('');
  const [result, setResult] = useState(null);

  const calculateGrade = (e) => {
    e.preventDefault();
    const s = parseFloat(score);
    const t = parseFloat(total);
    if (isNaN(s) || isNaN(t) || t === 0) return;
    const percentage = (s / t) * 100;
    let letter = 'F';
    if (percentage >= 90) letter = 'A';
    else if (percentage >= 80) letter = 'B';
    else if (percentage >= 70) letter = 'C';
    else if (percentage >= 60) letter = 'D';
    setResult({ score: s, total: t, percentage: percentage.toFixed(2), letter });
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
      { "@type": "ListItem", "position": 2, "name": "Grade Calculator", "item": "https://mypctcalculator.com/grade-calculator" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Grade Calculator - Calculate Your Grade Percentage</title>
        <meta name="description" content="Enter your score and total possible points to instantly calculate your grade percentage and letter grade. Free and fast." />
        <link rel="canonical" href="https://mypctcalculator.com/grade-calculator" />
        <meta property="og:title" content="Grade Calculator - Calculate Your Grade Percentage" />
        <meta property="og:description" content="Enter your score and total possible points to instantly calculate your grade percentage and letter grade. Free and fast." />
        <meta property="og:url" content="https://mypctcalculator.com/grade-calculator" />
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
              <span className="text-foreground font-medium">Grade Calculator</span>
            </nav>
          </div>

          {/* Calculator section */}
          <section className="py-[48px] md:py-[64px] px-4 sm:px-6 lg:px-8 section-light-bg">
            <div className="max-w-3xl mx-auto text-center mb-[48px]">
              <h1 className="mb-[16px] section-heading">Grade Calculator</h1>
              <p className="text-[18px] max-w-2xl mx-auto">
                Enter your score and total points to instantly find your grade percentage and letter grade.
              </p>
            </div>

            <motion.div
              className="calc-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <form onSubmit={calculateGrade} className="space-y-[24px]">
                <div className="space-y-[8px]">
                  <label htmlFor="score" className="calc-label">Score (Points Earned)</label>
                  <input
                    id="score"
                    type="number"
                    step="any"
                    inputMode="decimal"
                    placeholder="e.g. 42"
                    className="calc-input"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-[8px]">
                  <label htmlFor="total" className="calc-label">Total Possible Points</label>
                  <input
                    id="total"
                    type="number"
                    step="any"
                    min="0.00001"
                    inputMode="decimal"
                    placeholder="e.g. 50"
                    className="calc-input"
                    value={total}
                    onChange={(e) => setTotal(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn-calculate mt-[16px]">
                  Calculate Grade
                </button>
              </form>

              {result && (
                <motion.div
                  className="mt-[32px] pt-[32px] border-t border-border text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-[16px] font-semibold text-foreground mb-[8px]">Grade: {result.letter}</p>
                  <div className="calc-result-value">{result.percentage}%</div>
                  <div className="calc-result-formula">
                    Formula: ({result.score} / {result.total}) x 100
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
              <h2 className="section-heading mb-[24px]">How grade percentage works</h2>
              <div className="space-y-[16px] text-[17px]">
                <p>
                  A grade percentage tells you what fraction of the total possible points you earned, expressed as a percentage. It is the most common way to communicate academic performance.
                </p>
                <div className="formula-code-box">Grade % = (Points Earned / Total Possible) x 100</div>
                <p>
                  <strong className="text-foreground font-semibold">Example:</strong> You scored 38 out of 45 points. (38 / 45) x 100 = 84.44%. On the standard US letter grade scale, that is a B.
                </p>
                <p>
                  Standard US letter grade scale: A = 90-100%, B = 80-89%, C = 70-79%, D = 60-69%, F = below 60%. Plus and minus grades (A-, B+, etc.) typically span 3-point ranges within each letter band.
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

export default GradeCalculator;
