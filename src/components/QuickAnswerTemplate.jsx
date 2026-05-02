import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

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

export default function QuickAnswerTemplate({ x, y, answer, isMoney }) {
  const pct = x;
  const num = y.toString().replace('$', '');
  const canonicalUrl = `https://mypctcalculator.com/what-is-${pct}-percent-of-${num}`;
  const decimal = parseFloat(pct) / 100;

  const relatedLinks = [
    { label: `What is ${pct}% of ${Math.round(parseFloat(num) * 2)}?`, path: `/what-is-${pct}-percent-of-${Math.round(parseFloat(num) * 2)}` },
    { label: `What is ${pct}% of ${Math.round(parseFloat(num) / 2)}?`, path: `/what-is-${pct}-percent-of-${Math.round(parseFloat(num) / 2)}` },
    { label: `What is ${Math.round(parseFloat(pct) * 2)}% of ${num}?`, path: `/what-is-${Math.round(parseFloat(pct) * 2)}-percent-of-${num}` },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is ${pct}% of ${y}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${pct}% of ${y} is ${answer}. Multiply ${num} by ${decimal} to get ${answer}.`,
        },
      },
      {
        "@type": "Question",
        "name": `How do you calculate ${pct}% of ${y}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `To calculate ${pct}% of ${y}, divide ${pct} by 100 to get ${decimal}, then multiply by ${num}. The result is ${answer}.`,
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mypctcalculator.com/" },
      { "@type": "ListItem", "position": 2, "name": "Quick Answers", "item": "https://mypctcalculator.com/quick-answers" },
      { "@type": "ListItem", "position": 3, "name": `What is ${pct}% of ${y}?`, "item": canonicalUrl },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{`What is ${pct}% of ${y}? Answer: ${answer}`}</title>
        <meta name="description" content={`${pct}% of ${y} is ${answer}. See the step-by-step formula and use our free percentage calculator for any calculation.`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`What is ${pct}% of ${y}? Answer: ${answer}`} />
        <meta property="og:description" content={`${pct}% of ${y} is ${answer}. See the step-by-step formula and use our free percentage calculator.`} />
        <meta property="og:url" content={canonicalUrl} />
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
              <Link to="/quick-answers" className="hover:text-[hsl(var(--purple-accent))] transition-colors">Quick Answers</Link>
              <span className="mx-2 opacity-40">/</span>
              <span className="text-foreground font-medium">{pct}% of {y}</span>
            </nav>
          </div>

          {/* Answer section */}
          <section className="py-[48px] md:py-[64px] px-4 sm:px-6 lg:px-8 section-light-bg">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-[36px] md:text-[48px] font-bold mb-[24px] section-heading">
                What is {pct}% of {y}?
              </h1>
              <div className="calc-card mb-[24px]">
                <p className="text-[16px] font-semibold text-foreground mb-[8px]">Answer</p>
                <div className="calc-result-value">{answer}</div>
                <div className="calc-result-formula">
                  {pct}% of {y} = {answer}
                </div>
              </div>
              <Link
                to="/what-percent-calculator"
                className="btn-calculate inline-block"
              >
                Calculate any percentage
              </Link>
            </div>
          </section>

          {/* AdSense - after answer */}
          <AdSenseZone slot="8991515885" />

          {/* How to calculate */}
          <section className="py-[56px] md:py-[72px] px-4 sm:px-6 lg:px-8 section-white-bg border-b border-border">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-heading mb-[24px]">How to calculate {pct}% of {y}</h2>
              <div className="space-y-[16px] text-[17px]">
                <p>
                  To find a percentage of a number, convert the percentage to a decimal by dividing by 100, then multiply by the number.
                </p>
                <div className="formula-code-box">({pct} / 100) x {num} = {answer}</div>
                <p>
                  <strong className="text-foreground font-semibold">Step by step:</strong> First, divide {pct} by 100 to get {decimal}. Then multiply {decimal} by {num} to get the final answer of {answer}.
                </p>
                <p>
                  You can also think of it as moving the decimal: {pct}% means {pct} out of every 100. So for every 100 in {num}, you take {pct}. Multiply the two together and you get {answer}.
                </p>
              </div>
            </div>
          </section>

          {/* AdSense - before related */}
          <AdSenseZone slot="8991515885" />

          {/* Related quick answers */}
          <section className="py-[48px] px-4 sm:px-6 lg:px-8 section-light-bg border-b border-border">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-[20px] font-bold section-heading mb-[20px]">Related quick answers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="tool-card"
                  >
                    <div className="tool-card-name">{item.label}</div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Back to index */}
          <section className="py-[32px] px-4 sm:px-6 lg:px-8 section-white-bg">
            <div className="max-w-3xl mx-auto text-center">
              <Link to="/quick-answers" className="hover:text-[hsl(var(--purple-accent))] text-[15px] transition-colors">
                Browse all Quick Answers
              </Link>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
}
