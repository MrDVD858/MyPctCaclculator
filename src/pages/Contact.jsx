
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Mail } from 'lucide-react';

const Contact = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mypctcalculator.com/" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://mypctcalculator.com/contact" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Contact – MyPCTCalculator.com</title>
        <meta name="description" content="Get in touch with the team at MyPCTCalculator.com." />
        <link rel="canonical" href="https://mypctcalculator.com/contact" />
        
        <meta property="og:title" content="Contact – MyPCTCalculator.com" />
        <meta property="og:description" content="Get in touch with the team at MyPCTCalculator.com." />
        <meta property="og:url" content="https://mypctcalculator.com/contact" />
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
            <h1 className="text-4xl font-bold mb-8">Contact</h1>
            
            <p className="text-lg text-foreground mb-8">
              I'm always happy to hear from people using the site. Whether you found a bug, have a suggestion for a new calculator, or just want to say hello, you can reach me directly via email.
            </p>

            <div className="inline-flex items-center gap-3 bg-surface border border-border rounded-xl px-6 py-4 mb-12">
              <Mail className="w-6 h-6 text-primary" />
              <a href="mailto:contact@mypctcalculator.com" className="text-lg font-medium text-primary hover:underline">
                contact@mypctcalculator.com
              </a>
            </div>

            <h2 className="text-2xl font-bold mb-6">Good reasons to get in touch</h2>
            <ul className="space-y-4 text-[hsl(var(--text-secondary))] list-disc pl-6 marker:text-primary">
              <li>
                <strong className="text-foreground">Bug reports:</strong> If a calculation seems off, or if the site breaks on your specific device, please let me know. Include your browser and device info if possible.
              </li>
              <li>
                <strong className="text-foreground">Feature requests:</strong> Is there a specific type of percentage calculation you do every day that isn't covered here? Tell me about it.
              </li>
              <li>
                <strong className="text-foreground">Typo spotting:</strong> Found a grammatical error in one of the explanations? I'd love to fix it.
              </li>
              <li>
                <strong className="text-foreground">General feedback:</strong> If the site saved you time or helped you understand how percentages work, that's always great to hear.
              </li>
            </ul>
            
            <p className="mt-12 text-sm text-[hsl(var(--text-secondary))] italic">
              Note: I try to respond to all legitimate emails within a few days, but this is a side project, so please forgive any slight delays!
            </p>
          </article>
        </main>
      </div>
    </>
  );
};

export default Contact;
