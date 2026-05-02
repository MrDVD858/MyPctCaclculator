import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

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

const CategorySection = ({ title, items }) => (
  <section className="mb-[56px]">
    <h2 className="text-[22px] font-bold section-heading mb-[20px]">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {items.map((item) => (
        <Link key={item.path} to={item.path} className="tool-card">
          <div className="tool-card-name">{item.label}</div>
        </Link>
      ))}
    </div>
  </section>
);

const QuickAnswersIndex = () => {

  const generalAnswers = [
    { path: '/what-is-10-percent-of-1000', label: 'What is 10% of 1000?' },
    { path: '/what-is-20-percent-of-1000', label: 'What is 20% of 1000?' },
    { path: '/what-is-15-percent-of-1000', label: 'What is 15% of 1000?' },
    { path: '/what-is-10-percent-of-500', label: 'What is 10% of 500?' },
    { path: '/what-is-20-percent-of-500', label: 'What is 20% of 500?' },
    { path: '/what-is-15-percent-of-200', label: 'What is 15% of 200?' },
    { path: '/what-is-10-percent-of-200', label: 'What is 10% of 200?' },
    { path: '/what-is-20-percent-of-200', label: 'What is 20% of 200?' },
    { path: '/what-is-5-percent-of-1000', label: 'What is 5% of 1000?' },
    { path: '/what-is-25-percent-of-1000', label: 'What is 25% of 1000?' },
    { path: '/what-is-10-percent-of-100', label: 'What is 10% of 100?' },
    { path: '/what-is-20-percent-of-100', label: 'What is 20% of 100?' },
    { path: '/what-is-15-percent-of-100', label: 'What is 15% of 100?' },
    { path: '/what-is-10-percent-of-50', label: 'What is 10% of 50?' },
    { path: '/what-is-20-percent-of-50', label: 'What is 20% of 50?' },
    { path: '/what-is-10-percent-of-300', label: 'What is 10% of 300?' },
    { path: '/what-is-20-percent-of-300', label: 'What is 20% of 300?' },
    { path: '/what-is-15-percent-of-300', label: 'What is 15% of 300?' },
    { path: '/what-is-10-percent-of-400', label: 'What is 10% of 400?' },
    { path: '/what-is-20-percent-of-400', label: 'What is 20% of 400?' },
  ];

  const moneyAnswers = [
    { path: '/what-is-10-percent-of-20', label: 'What is 10% of $20?' },
    { path: '/what-is-20-percent-of-20', label: 'What is 20% of $20?' },
    { path: '/what-is-15-percent-of-50', label: 'What is 15% of $50?' },
    { path: '/what-is-25-percent-of-50', label: 'What is 25% of $50?' },
    { path: '/what-is-10-percent-of-150', label: 'What is 10% of $150?' },
    { path: '/what-is-20-percent-of-150', label: 'What is 20% of $150?' },
    { path: '/what-is-15-percent-of-150', label: 'What is 15% of $150?' },
    { path: '/what-is-10-percent-of-250', label: 'What is 10% of $250?' },
    { path: '/what-is-20-percent-of-250', label: 'What is 20% of $250?' },
    { path: '/what-is-15-percent-of-250', label: 'What is 15% of $250?' },
  ];

  const tipAnswers = [
    { path: '/what-is-10-percent-of-30', label: 'What is 10% of $30?' },
    { path: '/what-is-15-percent-of-30', label: 'What is 15% of $30?' },
    { path: '/what-is-20-percent-of-30', label: 'What is 20% of $30?' },
    { path: '/what-is-18-percent-of-50', label: 'What is 18% of $50?' },
    { path: '/what-is-20-percent-of-75', label: 'What is 20% of $75?' },
    { path: '/what-is-15-percent-of-75', label: 'What is 15% of $75?' },
    { path: '/what-is-20-percent-of-40', label: 'What is 20% of $40?' },
    { path: '/what-is-18-percent-of-100', label: 'What is 18% of $100?' },
    { path: '/what-is-20-percent-of-120', label: 'What is 20% of $120?' },
    { path: '/what-is-15-percent-of-200', label: 'What is 15% of $200?' },
    { path: '/what-is-20-percent-of-45', label: 'What is 20% of $45?' },
    { path: '/what-is-15-percent-of-45', label: 'What is 15% of $45?' },
    { path: '/what-is-20-percent-of-55', label: 'What is 20% of $55?' },
    { path: '/what-is-15-percent-of-55', label: 'What is 15% of $55?' },
    { path: '/what-is-20-percent-of-65', label: 'What is 20% of $65?' },
    { path: '/what-is-15-percent-of-65', label: 'What is 15% of $65?' },
    { path: '/what-is-20-percent-of-85', label: 'What is 20% of $85?' },
    { path: '/what-is-15-percent-of-85', label: 'What is 15% of $85?' },
    { path: '/what-is-20-percent-of-95', label: 'What is 20% of $95?' },
    { path: '/what-is-15-percent-of-95', label: 'What is 15% of $95?' },
    { path: '/what-is-20-percent-of-110', label: 'What is 20% of $110?' },
    { path: '/what-is-20-percent-of-130', label: 'What is 20% of $130?' },
    { path: '/what-is-20-percent-of-160', label: 'What is 20% of $160?' },
    { path: '/what-is-20-percent-of-180', label: 'What is 20% of $180?' },
    { path: '/what-is-20-percent-of-200', label: 'What is 20% of $200?' },
    { path: '/what-is-18-percent-of-75', label: 'What is 18% of $75?' },
    { path: '/what-is-18-percent-of-120', label: 'What is 18% of $120?' },
    { path: '/what-is-18-percent-of-150', label: 'What is 18% of $150?' },
    { path: '/what-is-18-percent-of-200', label: 'What is 18% of $200?' },
    { path: '/what-is-20-percent-of-140', label: 'What is 20% of $140?' },
  ];

  const discountAnswers = [
    { path: '/what-is-10-percent-of-25', label: 'What is 10% of $25?' },
    { path: '/what-is-20-percent-of-25', label: 'What is 20% of $25?' },
    { path: '/what-is-25-percent-of-100', label: 'What is 25% of $100?' },
    { path: '/what-is-30-percent-of-100', label: 'What is 30% of $100?' },
    { path: '/what-is-50-percent-of-100', label: 'What is 50% of $100?' },
    { path: '/what-is-15-percent-of-80', label: 'What is 15% of $80?' },
    { path: '/what-is-20-percent-of-80', label: 'What is 20% of $80?' },
    { path: '/what-is-25-percent-of-200', label: 'What is 25% of $200?' },
    { path: '/what-is-30-percent-of-150', label: 'What is 30% of $150?' },
    { path: '/what-is-40-percent-of-50', label: 'What is 40% of $50?' },
  ];

  const gradeAnswers = [
    { path: '/what-is-90-percent-of-100', label: 'What is 90% of 100?' },
    { path: '/what-is-80-percent-of-100', label: 'What is 80% of 100?' },
    { path: '/what-is-75-percent-of-100', label: 'What is 75% of 100?' },
    { path: '/what-is-45-percent-of-50', label: 'What is 45% of 50?' },
    { path: '/what-is-40-percent-of-50', label: 'What is 40% of 50?' },
    { path: '/what-is-38-percent-of-50', label: 'What is 38% of 50?' },
    { path: '/what-is-36-percent-of-40', label: 'What is 36% of 40?' },
    { path: '/what-is-27-percent-of-30', label: 'What is 27% of 30?' },
    { path: '/what-is-18-percent-of-20', label: 'What is 18% of 20?' },
    { path: '/what-is-85-percent-of-200', label: 'What is 85% of 200?' },
    { path: '/what-is-48-percent-of-50', label: 'What is 48% of 50?' },
    { path: '/what-is-47-percent-of-50', label: 'What is 47% of 50?' },
    { path: '/what-is-46-percent-of-50', label: 'What is 46% of 50?' },
    { path: '/what-is-19-percent-of-20', label: 'What is 19% of 20?' },
    { path: '/what-is-17-percent-of-20', label: 'What is 17% of 20?' },
    { path: '/what-is-95-percent-of-100', label: 'What is 95% of 100?' },
    { path: '/what-is-85-percent-of-100', label: 'What is 85% of 100?' },
    { path: '/what-is-70-percent-of-100', label: 'What is 70% of 100?' },
    { path: '/what-is-65-percent-of-100', label: 'What is 65% of 100?' },
    { path: '/what-is-72-percent-of-80', label: 'What is 72% of 80?' },
    { path: '/what-is-64-percent-of-80', label: 'What is 64% of 80?' },
    { path: '/what-is-54-percent-of-60', label: 'What is 54% of 60?' },
    { path: '/what-is-48-percent-of-60', label: 'What is 48% of 60?' },
    { path: '/what-is-35-percent-of-40', label: 'What is 35% of 40?' },
    { path: '/what-is-28-percent-of-30', label: 'What is 28% of 30?' },
    { path: '/what-is-150-percent-of-200', label: 'What is 150% of 200?' },
    { path: '/what-is-160-percent-of-200', label: 'What is 160% of 200?' },
    { path: '/what-is-170-percent-of-200', label: 'What is 170% of 200?' },
    { path: '/what-is-180-percent-of-200', label: 'What is 180% of 200?' },
    { path: '/what-is-140-percent-of-200', label: 'What is 140% of 200?' },
  ];

  const largeNumberAnswers = [
    { path: '/what-is-10-percent-of-2000', label: 'What is 10% of 2000?' },
    { path: '/what-is-20-percent-of-2000', label: 'What is 20% of 2000?' },
    { path: '/what-is-15-percent-of-2000', label: 'What is 15% of 2000?' },
    { path: '/what-is-25-percent-of-2000', label: 'What is 25% of 2000?' },
    { path: '/what-is-10-percent-of-5000', label: 'What is 10% of 5000?' },
    { path: '/what-is-20-percent-of-5000', label: 'What is 20% of 5000?' },
    { path: '/what-is-15-percent-of-5000', label: 'What is 15% of 5000?' },
    { path: '/what-is-25-percent-of-5000', label: 'What is 25% of 5000?' },
    { path: '/what-is-10-percent-of-10000', label: 'What is 10% of 10000?' },
    { path: '/what-is-20-percent-of-10000', label: 'What is 20% of 10000?' },
    { path: '/what-is-15-percent-of-10000', label: 'What is 15% of 10000?' },
    { path: '/what-is-25-percent-of-10000', label: 'What is 25% of 10000?' },
    { path: '/what-is-10-percent-of-50000', label: 'What is 10% of 50000?' },
    { path: '/what-is-20-percent-of-50000', label: 'What is 20% of 50000?' },
    { path: '/what-is-15-percent-of-50000', label: 'What is 15% of 50000?' },
    { path: '/what-is-10-percent-of-100000', label: 'What is 10% of 100000?' },
    { path: '/what-is-20-percent-of-100000', label: 'What is 20% of 100000?' },
    { path: '/what-is-15-percent-of-100000', label: 'What is 15% of 100000?' },
    { path: '/what-is-5-percent-of-10000', label: 'What is 5% of 10000?' },
    { path: '/what-is-5-percent-of-50000', label: 'What is 5% of 50000?' },
    { path: '/what-is-30-percent-of-1000', label: 'What is 30% of 1000?' },
    { path: '/what-is-40-percent-of-1000', label: 'What is 40% of 1000?' },
    { path: '/what-is-50-percent-of-1000', label: 'What is 50% of 1000?' },
    { path: '/what-is-30-percent-of-5000', label: 'What is 30% of 5000?' },
    { path: '/what-is-50-percent-of-5000', label: 'What is 50% of 5000?' },
  ];

  const smallPctAnswers = [
    { path: '/what-is-1-percent-of-1000', label: 'What is 1% of 1000?' },
    { path: '/what-is-2-percent-of-1000', label: 'What is 2% of 1000?' },
    { path: '/what-is-3-percent-of-1000', label: 'What is 3% of 1000?' },
    { path: '/what-is-1-percent-of-500', label: 'What is 1% of 500?' },
    { path: '/what-is-2-percent-of-500', label: 'What is 2% of 500?' },
    { path: '/what-is-3-percent-of-500', label: 'What is 3% of 500?' },
    { path: '/what-is-5-percent-of-500', label: 'What is 5% of 500?' },
    { path: '/what-is-1-percent-of-100', label: 'What is 1% of 100?' },
    { path: '/what-is-2-percent-of-100', label: 'What is 2% of 100?' },
    { path: '/what-is-3-percent-of-100', label: 'What is 3% of 100?' },
    { path: '/what-is-5-percent-of-100', label: 'What is 5% of 100?' },
    { path: '/what-is-1-percent-of-200', label: 'What is 1% of 200?' },
    { path: '/what-is-2-percent-of-200', label: 'What is 2% of 200?' },
    { path: '/what-is-5-percent-of-200', label: 'What is 5% of 200?' },
    { path: '/what-is-1-percent-of-10000', label: 'What is 1% of 10000?' },
    { path: '/what-is-2-percent-of-10000', label: 'What is 2% of 10000?' },
    { path: '/what-is-3-percent-of-10000', label: 'What is 3% of 10000?' },
    { path: '/what-is-1-percent-of-50000', label: 'What is 1% of 50000?' },
    { path: '/what-is-2-percent-of-50000', label: 'What is 2% of 50000?' },
    { path: '/what-is-1-percent-of-5000', label: 'What is 1% of 5000?' },
    { path: '/what-is-2-percent-of-5000', label: 'What is 2% of 5000?' },
    { path: '/what-is-3-percent-of-5000', label: 'What is 3% of 5000?' },
    { path: '/what-is-5-percent-of-5000', label: 'What is 5% of 5000?' },
    { path: '/what-is-1-percent-of-300', label: 'What is 1% of 300?' },
    { path: '/what-is-2-percent-of-300', label: 'What is 2% of 300?' },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mypctcalculator.com/" },
      { "@type": "ListItem", "position": 2, "name": "Quick Answers", "item": "https://mypctcalculator.com/quick-answers" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Quick Percentage Answers - Common Calculations</title>
        <meta name="description" content="Browse instant answers to the most common percentage questions. Tips, discounts, grades, large numbers, and more. Free and instant." />
        <link rel="canonical" href="https://mypctcalculator.com/quick-answers" />
        <meta name="google-site-verification" content="google8cecd6a8937048c7" />
        <meta property="og:title" content="Quick Percentage Answers - Common Calculations" />
        <meta property="og:description" content="Browse instant answers to the most common percentage questions. Tips, discounts, grades, large numbers, and more. Free and instant." />
        <meta property="og:url" content="https://mypctcalculator.com/quick-answers" />
        <meta property="og:site_name" content="Percentage Calculator" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://mypctcalculator.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://mypctcalculator.com/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">

          {/* Breadcrumb */}
          <div className="px-4 sm:px-6 lg:px-8 pt-5 pb-0 max-w-5xl mx-auto w-full">
            <nav className="text-[13px] text-[hsl(var(--text-secondary))]">
              <Link to="/" className="hover:text-[hsl(var(--purple-accent))] transition-colors">Home</Link>
              <span className="mx-2 opacity-40">/</span>
              <span className="text-foreground font-medium">Quick Answers</span>
            </nav>
          </div>

          {/* Header + first 2 categories */}
          <section className="py-[48px] md:py-[64px] px-4 sm:px-6 lg:px-8 section-light-bg">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-[48px]"
              >
                <h1 className="mb-[16px] section-heading">Quick Answers</h1>
                <p className="text-[18px] max-w-2xl">
                  Instant answers and step-by-step formulas for the most common percentage calculations.
                </p>
              </motion.div>
              <CategorySection title="What is X% of Y?" items={generalAnswers} />
              <CategorySection title="Money and Shopping" items={moneyAnswers} />
            </div>
          </section>

          <AdSenseZone slot="8991515885" />

          <section className="py-[48px] md:py-[64px] px-4 sm:px-6 lg:px-8 section-white-bg">
            <div className="max-w-5xl mx-auto">
              <CategorySection title="Tip Calculations" items={tipAnswers} />
              <CategorySection title="Discount Calculations" items={discountAnswers} />
            </div>
          </section>

          <AdSenseZone slot="8991515885" />

          <section className="py-[48px] md:py-[64px] px-4 sm:px-6 lg:px-8 section-light-bg">
            <div className="max-w-5xl mx-auto">
              <CategorySection title="Grade and Test Scores" items={gradeAnswers} />
            </div>
          </section>

          <AdSenseZone slot="8991515885" />

          <section className="py-[48px] md:py-[64px] px-4 sm:px-6 lg:px-8 section-white-bg">
            <div className="max-w-5xl mx-auto">
              <CategorySection title="Large Numbers" items={largeNumberAnswers} />
            </div>
          </section>

          <AdSenseZone slot="8991515885" />

          <section className="py-[48px] md:py-[64px] px-4 sm:px-6 lg:px-8 section-light-bg">
            <div className="max-w-5xl mx-auto">
              <CategorySection title="Small Percentages" items={smallPctAnswers} />
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
};

export default QuickAnswersIndex;
