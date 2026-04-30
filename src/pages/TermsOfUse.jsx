
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const TermsOfUse = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mypctcalculator.com/" },
      { "@type": "ListItem", "position": 2, "name": "Terms of Service", "item": "https://mypctcalculator.com/terms" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Terms of Service – MyPCTCalculator.com</title>
        <meta name="description" content="Read the terms of service for MyPCTCalculator.com." />
        <link rel="canonical" href="https://mypctcalculator.com/terms" />
        
        <meta property="og:title" content="Terms of Service – MyPCTCalculator.com" />
        <meta property="og:description" content="Read the terms of service for MyPCTCalculator.com." />
        <meta property="og:url" content="https://mypctcalculator.com/terms" />
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
            <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>
            <p className="text-[hsl(var(--text-secondary))] font-medium mb-12">Last updated: April 23, 2026</p>
            
            <p>
              Welcome to mypctcalculator.com. By accessing or using our website, you agree to be bound by these Terms of Use. If you disagree with any part of these terms, please do not use our website.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Use of the site</h2>
            <p>
              You may use our calculators and tools for personal, educational, or commercial purposes. The service is provided entirely free of charge. You agree to use the site only for lawful purposes and in a way that does not infringe upon the rights of, restrict, or inhibit anyone else's use of the website.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">No warranty</h2>
            <p>
              While we strive to ensure our calculators are accurate, all tools on mypctcalculator.com are provided "as is" and "as available" without any warranty of any kind. We do not guarantee that the calculations will be 100% error-free. You should always double-check important calculations before relying on them for financial, academic, or professional decisions.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Intellectual property</h2>
            <p>
              The design, layout, code, and text content of mypctcalculator.com are owned by us. You may not copy, reproduce, or republish our content or design without explicit permission. However, you are free to link to our calculators or share the results you generate.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Prohibited conduct</h2>
            <p>
              You agree not to attempt to interfere with the proper functioning of the website. This includes, but is not limited to, introducing viruses, attempting to gain unauthorized access to our servers, or using automated scripts (scraping) in a way that overburdens our infrastructure.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, mypctcalculator.com and its operators shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, use of, or inability to use the website or any errors in its calculations.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Governing law</h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict-of-laws provisions. Any disputes arising out of or relating to these Terms or your use of the site shall be resolved in the state or federal courts located in California.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Changes</h2>
            <p>
              We reserve the right to modify or replace these Terms of Use at any time. We will post the revised terms on this page and update the "Last updated" date. Your continued use of the website after any changes indicates your acceptance of the new terms.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Contact</h2>
            <p>
              If you have any questions about these Terms of Use, please contact us at <a href="mailto:dvando@gmail.com" className="text-primary hover:underline">dvando@gmail.com</a>.
            </p>
          </article>
        </main>
      </div>
    </>
  );
};

export default TermsOfUse;
