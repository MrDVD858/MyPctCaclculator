import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const sectionFadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const faqs = [
  {
    q: 'How do I calculate a discount?',
    a: 'Multiply the original price by the discount percentage divided by 100, then subtract from the original. Example: 20% off $80 = $80 x 0.20 = $16 saved, so the sale price is $64.',
  },
  {
    q: 'How do I find what percentage off a sale price is?',
    a: 'Subtract the sale price from the original price, divide by the original price, then multiply by 100. Example: ($100 - $75) / $100 x 100 = 25% off.',
  },
  {
    q: 'What is the difference between discount and markdown?',
    a: 'A discount is a reduction offered to a buyer, often temporary. A markdown is a permanent reduction in the listed price. In practice, both are calculated the same way as a percentage off the original price.',
  },
  {
    q: 'Does this calculator store my data?',
    a: 'No. All calculations happen in your browser. Nothing is sent to a server, stored, or shared. No account required.',
  },
];

const relatedCalcs = [
  { name: 'Tip Calculator', path: '/tip-calculator', desc: 'Calculate tip and split the bill' },
  { name: 'Sales Tax Calculator', path: '/sales-tax-calculator', desc: 'Add tax or find pre-tax amount' },
  { name: 'Margin Calculator', path: '/margin-calculator', desc: 'Find profit margin and markup' },
];

const FaqItem = ({ faq }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-accordion-item" data-open={open ? 'true' : 'false'}>
      <button
        className="faq-accordion-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{faq.q}</span>
        <span className="faq-accordion-icon" aria-hidden="true">
          <Plus className="w-3 h-3" />
        </span>
      </button>
      <div className="faq-accordion-body" aria-hidden={!open}>
        <p>{faq.a}</p>
      </div>
    </div>
  );
};

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

const DiscountCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [result, setResult] = useState(null);

  const calculateDiscount = (e) => {
    e.preventDefault();
    const price = parseFloat(originalPrice);
    const discountPct = parseFloat(discountPercentage);
    if (isNaN(price) || isNaN(discountPct)) return;
    const saved = price * (discountPct / 100);
    const finalPrice = price - saved;
    setResult({ originalPrice: price, discountPct, amountSaved: saved, finalPrice });
  };

  const formatCurrency = (val) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mypctcalculator.com/" },
      { "@type": "ListItem", "position": 2, "name": "Discount Calculator", "item": "https://mypctcalculator.com/discount-calculator" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Discount Calculator - Find Sale Price and Savings</title>
        <meta name="description" content="Enter any price and discount percentage to instantly see the sale price and how much you save. Free and instant." />
        <link rel="canonical" href="https://mypctcalculator.com/discount-calculator" />
        <meta property="og:title" content="Discount Calculator - Find Sale Price and Savings" />
        <meta property="og:description" content="Enter any price and discount percentage to instantly see the sale price and how much you save. Free and instant." />
        <meta property="og:url" content="https://mypctcalculator.com/discount-calculator" />
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
              <span className="text-foreground font-medium">Discount Calculator</span>
            </nav>
          </div>

          {/* Calculator section */}
          <section className="py-[48px] md:py-[64px] px-4 sm:px-6 lg:px-8 section-light-bg">
            <div className="max-w-3xl mx-auto text-center mb-[48px]">
              <h1 className="mb-[16px] section-heading">Discount Calculator</h1>
              <p className="text-[18px] max-w-2xl mx-auto">
                Find the final sale price and see exactly how much you are saving.
              </p>
            </div>

            <motion.div
              className="calc-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <form onSubmit={calculateDiscount} className="space-y-[24px]">
                <div className="space-y-[8px]">
                  <label htmlFor="originalPrice" className="calc-label">Original Price ($)</label>
                  <input
                    id="originalPrice"
                    type="number"
                    step="0.01"
                    min="0"
                    inputMode="decimal"
                    placeholder="100.00"
                    className="calc-input"
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-[8px]">
                  <label htmlFor="discountPercentage" className="calc-label">Discount Percent (%)</label>
                  <input
                    id="discountPercentage"
                    type="number"
                    step="0.1"
                    min="0"
                    max="100"
                    inputMode="decimal"
                    placeholder="20"
                    className="calc-input"
                    value={discountPercentage}
                    onChange={(e) => setDiscountPercentage(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn-calculate mt-[16px]">
                  Calculate Sale Price
                </button>
              </form>

              {result && (
                <motion.div
                  className="mt-[32px] pt-[32px] border-t border-border text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-[16px] font-semibold text-foreground mb-[8px]">Final Price</p>
                  <div className="calc-result-value">{formatCurrency(result.finalPrice)}</div>
                  <div className="calc-result-formula">
                    You save {formatCurrency(result.amountSaved)} ({result.discountPct}% of {formatCurrency(result.originalPrice)})
                  </div>
                </motion.div>
              )}
            </motion.div>
          </section>

          {/* AdSense - after calculator */}
          <AdSenseZone slot="8991515885" />

          {/* How it works */}
          <motion.section
            className="py-[56px] md:py-[72px] px-4 sm:px-6 lg:px-8 section-white-bg border-b border-border"
            variants={sectionFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="section-heading mb-[24px]">How discount percentage works</h2>
              <div className="space-y-[16px] text-[17px]">
                <p>
                  A discount is calculated by multiplying the original price by the discount rate. Subtract that amount from the original price to get the sale price.
                </p>
                <div className="formula-code-box">Sale Price = Original Price x (1 - Discount% / 100)</div>
                <p>
                  <strong className="text-foreground font-semibold">Example:</strong> A $120 item with a 25% discount. $120 x (1 - 0.25) = $120 x 0.75 = $90.00 sale price. You save $30.
                </p>
                <p>
                  To work backwards and find what percentage off a sale price is, divide the savings by the original price and multiply by 100. Example: saved $30 on a $120 item = ($30 / $120) x 100 = 25% off.
                </p>
              </div>
            </div>
          </motion.section>

          {/* AdSense - between how it works and FAQ */}
          <AdSenseZone slot="8991515885" />

          {/* FAQ */}
          <motion.section
            className="py-[56px] md:py-[72px] px-4 sm:px-6 lg:px-8 section-light-bg"
            variants={sectionFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-[40px]">
                <p className="text-[12px] font-bold uppercase tracking-widest text-[hsl(var(--purple-accent))] mb-3">FAQ</p>
                <h2 className="section-heading">Frequently asked questions</h2>
              </div>
              <div>
                {faqs.map((faq, index) => (
                  <FaqItem key={index} faq={faq} />
                ))}
              </div>
            </div>
          </motion.section>

          {/* Related calculators */}
          <motion.section
            className="py-[48px] px-4 sm:px-6 lg:px-8 section-white-bg border-t border-border"
            variants={sectionFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-[20px] font-bold section-heading mb-[20px]">Related calculators</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedCalcs.map((calc) => (
                  <Link
                    key={calc.path}
                    to={calc.path}
                    className="tool-card"
                  >
                    <div className="tool-card-name">{calc.name}</div>
                    <div className="tool-card-desc">{calc.desc}</div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.section>

        </main>

        <Footer />
      </div>
    </>
  );
};

export default DiscountCalculator;
