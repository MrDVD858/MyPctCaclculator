
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

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

    setResult({
      score: s,
      total: t,
      percentage: percentage.toFixed(2),
      letter
    });
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is a final grade calculated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Divide your earned points by the total possible points, then multiply by 100 to get your percentage."
        }
      },
      {
        "@type": "Question",
        "name": "What percentage do I need to pass a class?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Passing grades vary by institution, but typically a D (60-69%) or C (70-79%) is required to pass."
        }
      },
      {
        "@type": "Question",
        "name": "How do I convert a percentage to a letter grade?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally, 90-100% is an A, 80-89% is a B, 70-79% is a C, 60-69% is a D, and below 60% is an F."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mypctcalculator.com/" },
      { "@type": "ListItem", "position": 2, "name": "Grade Calculator", "item": "https://mypctcalculator.com/grade-calculator" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Grade Calculator – Calculate Your Final Grade</title>
        <meta name="description" content="Find out what grade you need on your final exam or calculate your current course grade. Free and fast." />
        <link rel="canonical" href="https://mypctcalculator.com/grade-calculator" />
        
        <meta property="og:title" content="Grade Calculator – Calculate Your Final Grade" />
        <meta property="og:description" content="Find out what grade you need on your final exam or calculate your current course grade. Free and fast." />
        <meta property="og:url" content="https://mypctcalculator.com/grade-calculator" />
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
              <h1 className="mb-[16px] section-heading">Grade / Percent Finder</h1>
              <p className="text-[18px] max-w-2xl mx-auto">
                Find out what percent one number is of another instantly.
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
                  <label htmlFor="score" className="calc-label">
                    Part (Score / Value)
                  </label>
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
                  <label htmlFor="total" className="calc-label">
                    Whole (Total Possible)
                  </label>
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
                  Calculate Percentage
                </button>
              </form>

              {result && (
                <motion.div 
                  className="mt-[32px] pt-[32px] border-t border-border text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-[16px] font-semibold text-foreground mb-[8px]">
                    Result (Grade: {result.letter})
                  </p>
                  <div className="calc-result-value">
                    {result.percentage}%
                  </div>
                  <div className="calc-result-formula">
                    Formula: ({result.score} / {result.total}) × 100
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

export default GradeCalculator;
