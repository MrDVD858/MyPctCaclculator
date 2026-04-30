
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const About = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mypctcalculator.com/" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://mypctcalculator.com/about" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>About – MyPCTCalculator.com</title>
        <meta name="description" content="Learn about MyPCTCalculator.com – a free, fast, and ad-free percentage calculator built for everyday use." />
        <link rel="canonical" href="https://mypctcalculator.com/about" />
        
        <meta property="og:title" content="About – MyPCTCalculator.com" />
        <meta property="og:description" content="Learn about MyPCTCalculator.com – a free, fast, and ad-free percentage calculator built for everyday use." />
        <meta property="og:url" content="https://mypctcalculator.com/about" />
        <meta property="og:site_name" content="Percentage Calculator" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://mypctcalculator.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://mypctcalculator.com/og-image.png" />

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 w-full max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <article className="legal-content">
            <h1 className="text-4xl font-bold mb-8">About</h1>
            
            <p className="text-lg text-foreground mb-12 leading-relaxed">
              Welcome to mypctcalculator.com. I build simple, fast, and highly readable percentage calculators designed to give you the answer, the formula, and peace of mind — all on one screen.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">What's here</h2>
            <p>
              The site offers a suite of targeted tools for the most common percentage problems. Whether you need to figure out a tip, calculate a discount, determine a test grade, or find the percent change between two numbers, there's a dedicated calculator that requires no setup or login to use.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Why</h2>
            <p>
              Percentages are used every single day, yet finding a clear, ad-free, and mobile-friendly calculator online was surprisingly frustrating. I built this site because I wanted a tool that didn't just spit out a raw number, but actually showed the work. By displaying the underlying formula and a plain-English explanation, I hope to make math a little less intimidating.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">What's coming</h2>
            <p>
              I'm continually refining the existing calculators to make them faster and more intuitive on mobile devices. In the future, I plan to add more specialized tools for finance, retail, and education — keeping the same clean, minimalist design that users appreciate.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Who's behind it</h2>
            <p>
              This site is designed and maintained by an independent developer who believes utility websites should respect the user's time and attention. I don't believe in aggressive pop-ups, mandatory accounts, or confusing layouts. Just clean code and correct math.
            </p>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
