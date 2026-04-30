
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const PrivacyPolicy = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mypctcalculator.com/" },
      { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://mypctcalculator.com/privacy" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy – MyPCTCalculator.com</title>
        <meta name="description" content="Read the privacy policy for MyPCTCalculator.com." />
        <link rel="canonical" href="https://mypctcalculator.com/privacy" />
        
        <meta property="og:title" content="Privacy Policy – MyPCTCalculator.com" />
        <meta property="og:description" content="Read the privacy policy for MyPCTCalculator.com." />
        <meta property="og:url" content="https://mypctcalculator.com/privacy" />
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
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-[hsl(var(--text-secondary))] font-medium mb-12">Last updated: April 23, 2026</p>
            
            <p>
              At mypctcalculator.com, we believe in keeping things simple — and that includes our approach to your privacy. This policy explains what information we collect when you use our website, why we collect it, and how we keep it safe.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Information we collect</h2>
            <p>
              Our calculators run entirely in your browser. When you enter numbers into our percentage calculators, that data never leaves your device. We do not store, transmit, or analyze the mathematical inputs or results you generate.
            </p>
            <p>
              If you choose to contact us via email, we will collect your email address and any information you provide in your message solely for the purpose of responding to your inquiry.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Cookies and similar technologies</h2>
            <p>
              We use minimal cookies necessary for the basic functioning of the website, such as remembering your dark mode preference. We do not use tracking cookies to follow you across the internet or build a profile of your browsing habits.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Analytics</h2>
            <p>
              We use basic, privacy-focused analytics to understand how many people visit the site and which pages are most popular. This data is aggregated and anonymized. We cannot identify individual users from this analytics data.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Children</h2>
            <p>
              Our website is designed for a general audience and is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us so we can promptly delete it.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Changes to this policy</h2>
            <p>
              We may update this privacy policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. We encourage you to review this policy periodically to stay informed about how we protect your privacy.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Contact</h2>
            <p>
              If you have any questions or concerns about this privacy policy or our data practices, please reach out to us at <a href="mailto:dvando@gmail.com" className="text-primary hover:underline">dvando@gmail.com</a>.
            </p>
          </article>
        </main>
      </div>
    </>
  );
};

export default PrivacyPolicy;
