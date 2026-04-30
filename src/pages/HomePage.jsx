import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  DollarSign,
  Tag,
  Receipt,
  GraduationCap,
  TrendingUp,
  ArrowUpDown,
  Shuffle,
  Percent,
  Plus,
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PercentageOfCalculator from '@/components/PercentageOfCalculator.jsx';

const tools = [
  {
    name: 'Tip Calculator',
    path: '/tip-calculator',
    icon: DollarSign,
    desc: 'Calculate tips and split bills by any percentage.',
    popular: true,
  },
  {
    name: 'Discount Calculator',
    path: '/discount-calculator',
    icon: Tag,
    desc: 'Find the sale price after a percentage off.',
    popular: true,
  },
  {
    name: 'Sales Tax Calculator',
    path: '/sales-tax-calculator',
    icon: Receipt,
    desc: 'Add tax to a price or find the pre-tax amount.',
  },
  {
    name: 'Grade Calculator',
    path: '/grade-calculator',
    icon: GraduationCap,
    desc: 'Calculate your grade or the score you need to pass.',
  },
  {
    name: 'Margin Calculator',
    path: '/margin-calculator',
    icon: TrendingUp,
    desc: 'Find profit margin, markup percentage, and revenue.',
  },
  {
    name: 'Percent Change',
    path: '/percentage-change-calculator',
    icon: ArrowUpDown,
    desc: 'Calculate the percentage increase or decrease between two values.',
  },
  {
    name: 'Percent Difference',
    path: '/percentage-difference-calculator',
    icon: Shuffle,
    desc: 'Find the relative difference between two numbers.',
  },
  {
    name: 'What Percent Is It?',
    path: '/what-percent-calculator',
    icon: Percent,
    desc: 'Instantly find what percentage X is of Y.',
  },
];

const faqs = [
  {
    q: 'How do I calculate a percentage of a number?',
    a: 'Multiply the number by the percentage and divide by 100. Example: 10% of 200 = 200 x 10 / 100 = 20.',
  },
  {
    q: 'How do I calculate percentage change?',
    a: 'Percentage change = ((new value - old value) / old value) x 100. Positive = increase, negative = decrease.',
  },
  {
    q: 'How do I calculate a restaurant tip?',
    a: 'Tip = Bill x (Tip % / 100). Example: 20% tip on a $50 bill = $10. Our Tip Calculator also splits the total among any number of people.',
  },
  {
    q: 'Do any of these calculators store my data?',
    a: 'No. All calculations run entirely in your browser. Nothing is ever sent to a server, stored, or shared. No account required.',
  },
  {
    q: 'Are these calculators free?',
    a: 'Yes - completely free, forever. No paywalls, no premium tiers, no hidden fees.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const sectionFadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardGrid = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

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

/* AdSense Zone 1 - Homepage Leaderboard (after hero) */
const AdSenseZone1 = () => {
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
        data-ad-slot="8991515885"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

/* AdSense Zone 2 - Homepage Mid-page (before FAQ) */
const AdSenseZone2 = () => {
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
        data-ad-slot="6332728807"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

const trustItems = [
  'No data stored',
  'No account needed',
  'Works on all devices',
  'Updated for 2025',
  'HTTPS secured',
];

const HomePage = () => {

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Percentage Calculator",
    "url": "https://mypctcalculator.com",
    "description": "Free online percentage calculator.",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "All",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Percentage Calculator - Free, Fast and Accurate</title>
        <meta name="description" content="Free percentage calculator. Find what is X% of Y, calculate percent change, tip amounts, discounts, and more. No sign-up needed, instant results." />
        <link rel="canonical" href="https://mypctcalculator.com/" />
        <meta property="og:title" content="Percentage Calculator - Free, Fast and Accurate" />
        <meta property="og:description" content="Free percentage calculator. Find what is X% of Y, calculate percent change, and more. No sign-up needed." />
        <meta property="og:url" content="https://mypctcalculator.com/" />
        <meta property="og:site_name" content="Percentage Calculator" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://mypctcalculator.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://mypctcalculator.com/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(webAppSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">

          <section className="hero-gradient hero-container px-4 sm:px-6 lg:px-8">
            <div className="hero-grid">

              <div className="hero-content">
                <motion.div
                  initial="hidden"
                  animate="show"
                  custom={0}
                  variants={fadeUp}
                  className="mb-6 flex justify-center lg:justify-start"
                >
                  <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-[13px] font-semibold rounded-full px-4 py-1.5 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    Free . No sign-up . Instant results
                  </span>
                </motion.div>

                <motion.h1
                  className="mb-5 text-white"
                  initial="hidden"
                  animate="show"
                  custom={0.08}
                  variants={fadeUp}
                >
                  Percentage Calculator - Fast, Free, and Actually Readable
                </motion.h1>

                <motion.p
                  className="text-lg md:text-xl max-w-xl mx-auto lg:mx-0 text-white/80 leading-relaxed mb-8"
                  initial="hidden"
                  animate="show"
                  custom={0.16}
                  variants={fadeUp}
                >
                  Skip the mental math. Enter your numbers and get the answer, the formula, and a plain-English explanation all on one screen.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-x-8 gap-y-3 justify-center lg:justify-start"
                  initial="hidden"
                  animate="show"
                  custom={0.24}
                  variants={fadeUp}
                >
                  {[
                    { value: '8', label: 'Free calculators' },
                    { value: '0', label: 'Sign-ups needed' },
                    { value: '100%', label: 'Free forever' },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-baseline gap-2">
                      <span className="text-[22px] font-bold text-white leading-none">{stat.value}</span>
                      <span className="text-[14px] text-white/55">{stat.label}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              <div className="hero-calculator">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="calculator-card w-full max-w-[480px]"
                >
                  <PercentageOfCalculator />
                </motion.div>
              </div>

            </div>
          </section>

          <div className="trust-bar">
            {trustItems.map((item, i) => (
              <span
                key={item}
                className="trust-bar-item"
                style={{ animationDelay: `${i * 90 + 350}ms` }}
              >
                <span className="trust-bar-dot" />
                {item}
              </span>
            ))}
          </div>

          <AdSenseZone1 />

          <motion.section
            className="py-[56px] md:py-[72px] px-4 sm:px-6 lg:px-8 section-white-bg border-b border-border"
            variants={sectionFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-[12px] font-bold uppercase tracking-widest text-[hsl(var(--purple-accent))] mb-3">
                  All Tools
                </p>
                <h2 className="section-heading mb-4">Every calculator you need</h2>
                <p className="text-[17px] text-[hsl(var(--text-secondary))] max-w-xl mx-auto">
                  Eight free calculators, all instant, all in one place. No account, no limits.
                </p>
              </div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                variants={cardGrid}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
              >
                {tools.map((tool) => (
                  <motion.div key={tool.path} variants={cardItem}>
                    <Link to={tool.path} className="tool-card h-full relative">
                      {tool.popular && (
                        <span
                          className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full"
                          style={{
                            background: 'hsl(var(--purple-light))',
                            color: 'hsl(var(--purple-accent))',
                            border: '1px solid hsl(var(--purple-accent) / 0.2)',
                          }}
                        >
                          Popular
                        </span>
                      )}
                      <div className="tool-card-icon">
                        <tool.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="tool-card-name">{tool.name}</div>
                        <div className="tool-card-desc mt-1">{tool.desc}</div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            className="py-[56px] md:py-[80px] px-4 sm:px-6 lg:px-8 section-light-bg"
            variants={sectionFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-[40px]">
                <p className="text-[12px] font-bold uppercase tracking-widest text-[hsl(var(--purple-accent))] mb-3">
                  The Basics
                </p>
                <h2 className="section-heading">How to calculate a percentage</h2>
              </div>

              <div className="space-y-[24px] text-[17px]">
                <p>
                  A percentage is just a fraction out of 100. The word itself comes from the Latin{' '}
                  <em className="italic text-foreground">per centum</em>, meaning "per hundred," and the symbol % is
                  shorthand for "divided by 100." Once you see a percent as a regular number divided by 100, every
                  percent problem turns into ordinary multiplication or division.
                </p>
                <p>
                  There are three flavors of percent question you will run into over and over, and every calculator on
                  this site is really just a friendlier way of solving one of them.
                </p>

                <div className="mt-[48px] mb-[24px]">
                  <h3 className="mb-[14px] section-heading">What is X% of Y?</h3>
                  <p className="mb-[16px]">
                    This is the tip-at-a-restaurant, tax-on-a-purchase, commission-on-a-sale version. To find X% of Y,
                    convert the percent to a decimal and multiply:
                  </p>
                  <div className="formula-code-box">X% of Y = (X / 100) x Y</div>
                  <p>
                    <strong className="text-foreground font-semibold">Example:</strong> 18% of $54 = (18 / 100) x 54 = 0.18 x 54 = $9.72.
                  </p>
                </div>

                <div className="mt-[48px] mb-[24px]">
                  <h3 className="mb-[14px] section-heading">What percent of Y is X?</h3>
                  <p className="mb-[16px]">
                    This shows up every time you want to know how big one number is compared to another:
                  </p>
                  <div className="formula-code-box">Percent = (X / Y) x 100</div>
                  <p>
                    <strong className="text-foreground font-semibold">Example:</strong> You scored 42 out of 50. (42 / 50) x 100 = 84%.
                  </p>
                </div>

                <div className="mt-[48px] mb-[24px]">
                  <h3 className="mb-[14px] section-heading">What is the percentage change from A to B?</h3>
                  <p className="mb-[16px]">
                    Use this when you want to describe how much a value grew or shrank:
                  </p>
                  <div className="formula-code-box">Percentage change = ((B - A) / A) x 100</div>
                  <p>
                    <strong className="text-foreground font-semibold">Example:</strong> A stock goes from $40 to $46. ((46 - 40) / 40) x 100 = 15% increase.
                  </p>
                </div>

                <div className="mt-[48px] mb-[24px]">
                  <h3 className="mb-[14px] section-heading">Quick mental-math tricks</h3>
                  <ul className="list-disc pl-[24px] space-y-[10px] text-[hsl(var(--text-secondary))]">
                    <li><strong className="text-foreground">X% of Y equals Y% of X.</strong> 4% of 50 is easier as 50% of 4 = 2.</li>
                    <li><strong className="text-foreground">To find 10%</strong>, move the decimal one place left. 10% of 45.0 is 4.5.</li>
                    <li><strong className="text-foreground">To find 5%</strong>, find 10% and cut it in half.</li>
                    <li><strong className="text-foreground">To find 20%</strong>, find 10% and double it.</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          <AdSenseZone2 />

          <motion.section
            className="py-[56px] md:py-[80px] px-4 sm:px-6 lg:px-8 section-white-bg border-t border-border"
            variants={sectionFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-[40px]">
                <p className="text-[12px] font-bold uppercase tracking-widest text-[hsl(var(--purple-accent))] mb-3">
                  FAQ
                </p>
                <h2 className="section-heading">Frequently asked questions</h2>
              </div>
              <div>
                {faqs.map((faq, index) => (
                  <FaqItem key={index} faq={faq} />
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

export default HomePage;
