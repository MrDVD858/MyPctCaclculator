
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, ShoppingBag } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mypctcalculator.com/" },
      { "@type": "ListItem", "position": 2, "name": "Quick Answers", "item": "https://mypctcalculator.com/quick-answers" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Quick Percentage Answers – Common Calculations</title>
        <meta name="description" content="Browse quick answers to the most common percentage questions. Instant results for tips, discounts, and more." />
        <link rel="canonical" href="https://mypctcalculator.com/quick-answers" />
        <meta name="google-site-verification" content="google8cecd6a8937048c7" />
        
        <meta property="og:title" content="Quick Percentage Answers – Common Calculations" />
        <meta property="og:description" content="Browse quick answers to the most common percentage questions. Instant results for tips, discounts, and more." />
        <meta property="og:url" content="https://mypctcalculator.com/quick-answers" />
        <meta property="og:site_name" content="Percentage Calculator" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://mypctcalculator.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://mypctcalculator.com/og-image.png" />

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5193834725888549" crossOrigin="anonymous"></script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
          <div className="py-12 md:py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Link>

              <div className="mb-12">
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold mb-4"
                  style={{ letterSpacing: '-0.02em' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Quick Answers
                </motion.h1>
                <motion.p 
                  className="text-lg text-muted-foreground max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Find instant answers and step-by-step formulas for the most common percentage calculations.
                </motion.p>
              </div>

              <div className="space-y-16">
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold">What is X% of Y?</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {generalAnswers.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-center p-4 bg-card border rounded-xl hover:border-primary/50 hover:shadow-md transition-all duration-200 group"
                      >
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <ShoppingBag className="w-6 h-6 text-green-600 dark:text-green-500" />
                    </div>
                    <h2 className="text-2xl font-semibold">Money & Shopping</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {moneyAnswers.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-center p-4 bg-card border rounded-xl hover:border-green-500/50 hover:shadow-md transition-all duration-200 group"
                      >
                        <span className="font-medium text-foreground group-hover:text-green-600 dark:group-hover:text-green-500 transition-colors">
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.section>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default QuickAnswersIndex;
