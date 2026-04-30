
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Calculator } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const WhatIsPage = () => {
  const { pct: pctParam, value: valueParam } = useParams();

  // Parse parameters and handle potential invalid numbers
  const pct = parseFloat(pctParam);
  const value = parseFloat(valueParam);

  const isValid = !isNaN(pct) && !isNaN(value);

  // Helper to format numbers nicely (up to 2 decimal places, removing trailing zeros)
  const formatNumber = (num) => {
    if (isNaN(num)) return '';
    return Number(num.toFixed(2)).toString();
  };

  const result = isValid ? (pct * value) / 100 : 0;
  const formattedResult = formatNumber(result);
  const formattedPct = formatNumber(pct);
  const formattedValue = formatNumber(value);

  const canonicalUrl = `https://mypctcalculator.com/what-is-${pctParam}-percent-of-${valueParam}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mypctcalculator.com/" },
      { "@type": "ListItem", "position": 2, "name": `What is ${pctParam}% of ${valueParam}?`, "item": canonicalUrl }
    ]
  };

  if (!isValid) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center p-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Invalid Numbers</h1>
          <p className="text-muted-foreground mb-8">Please check the URL and ensure both the percentage and value are valid numbers.</p>
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 font-medium transition-colors">
            Go to Calculator
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`What is ${formattedPct}% of ${formattedValue}? — Answer: ${formattedResult}`}</title>
        <meta name="description" content={`${formattedPct}% of ${formattedValue} is ${formattedResult}. Use our free percentage calculator to instantly solve any percentage problem.`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={`What is ${formattedPct}% of ${formattedValue}?`} />
        <meta property="og:description" content={`${formattedPct}% of ${formattedValue} is ${formattedResult}. Free instant answer.`} />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full">
          {/* Header & Main Answer */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              What is {formattedPct}% of {formattedValue}?
            </h1>
            
            <div className="bg-card text-card-foreground shadow-lg rounded-2xl p-8 md:p-12 border border-border">
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                {formattedPct}% of {formattedValue} =
              </p>
              <div className="text-6xl md:text-8xl font-extrabold text-primary tracking-tighter" style={{ letterSpacing: '-0.03em' }}>
                {formattedResult}
              </div>
            </div>
          </div>

          {/* Explanation Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">How We Calculated This</h2>
            <div className="bg-muted/50 rounded-xl p-6 md:p-8">
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                To find {formattedPct} percent of {formattedValue}, you multiply the base value by the percentage, and then divide the result by 100. Here is the math:
              </p>
              <div className="bg-background border border-border rounded-lg p-4 font-mono text-lg md:text-xl text-center shadow-sm">
                {formattedValue} × {formattedPct} ÷ 100 = <span className="font-bold text-primary">{formattedResult}</span>
              </div>
              <p className="text-muted-foreground mt-6 text-sm">
                Alternatively, you can convert {formattedPct}% to a decimal by moving the decimal point two spaces to the left ({formatNumber(pct / 100)}), and then multiply that by {formattedValue}.
              </p>
            </div>
          </section>

          {/* Related Examples Table */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Related Examples</h2>
            <div className="border rounded-xl overflow-hidden bg-card shadow-sm">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="w-[60%] text-foreground font-semibold">Question</TableHead>
                    <TableHead className="text-right text-foreground font-semibold">Answer</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-base">What is {formattedPct}% of {formatNumber(value / 2)}?</TableCell>
                    <TableCell className="text-right font-semibold text-base">{formatNumber((pct * (value / 2)) / 100)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-base">What is {formattedPct}% of {formatNumber(value * 2)}?</TableCell>
                    <TableCell className="text-right font-semibold text-base">{formatNumber((pct * (value * 2)) / 100)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-base">What is {formatNumber(pct * 2)}% of {formattedValue}?</TableCell>
                    <TableCell className="text-right font-semibold text-base">{formatNumber(((pct * 2) * value) / 100)}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          {/* Bottom Call to Action */}
          <div className="text-center py-8 border-t border-border">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
              <Calculator className="w-6 h-6 text-primary" />
            </div>
            <p className="text-lg font-medium mb-4">Need a different calculation?</p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors hover:underline"
            >
              Try our Percentage Calculator <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default WhatIsPage;
