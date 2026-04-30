
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function QuickAnswerTemplate({ x, y, answer, isMoney }) {
  const pct = x;
  const num = y.toString().replace('$', '');
  const canonicalUrl = `https://mypctcalculator.com/what-is-${pct}-percent-of-${num}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mypctcalculator.com/" },
      { "@type": "ListItem", "position": 2, "name": `What is ${pct}% of ${y}?`, "item": canonicalUrl }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{`What is ${pct}% of ${y}?`}</title>
        <meta name="description" content={`${pct}% of ${y} is ${answer}. Free instant answer – use our calculator for any percentage question.`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full text-center">
          <div className="mb-8 text-left">
            <Link to="/quick-answers" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Quick Answers
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What is {pct}% of {y}?</h1>
          <div className="text-6xl md:text-8xl font-extrabold text-primary mb-8">{answer}</div>
          <p className="text-xl text-muted-foreground mb-12">
            {pct}% of {y} is exactly {answer}.
          </p>
          <div className="bg-muted/30 border rounded-2xl p-8 text-left">
            <h2 className="text-2xl font-semibold mb-4">How to calculate it</h2>
            <p className="text-lg mb-4">To find {pct}% of {y}, you can use the standard percentage formula:</p>
            <div className="bg-background border rounded-lg p-4 font-mono text-lg mb-4">
              ({pct} ÷ 100) × {num} = {answer.toString().replace('$', '')}
            </div>
            <p className="text-lg">
              First, convert {pct}% to a decimal by dividing by 100 (which gives {pct / 100}). Then, multiply that decimal by {y} to get your final answer of {answer}.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
