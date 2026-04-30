import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const calculatorLinks = [
    { name: 'Tip Calculator', path: '/tip-calculator' },
    { name: 'Discount Calculator', path: '/discount-calculator' },
    { name: 'Sales Tax Calculator', path: '/sales-tax-calculator' },
    { name: 'Grade Calculator', path: '/grade-calculator' },
    { name: 'Margin Calculator', path: '/margin-calculator' },
    { name: 'Percent Change', path: '/percentage-change-calculator' },
    { name: 'Percent Difference', path: '/percentage-difference-calculator' },
    { name: 'What Percent Is It?', path: '/what-percent-calculator' },
  ];

  const resourceLinks = [
    { name: 'Quick Answers', path: '/quick-answers' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Use', path: '/terms' },
  ];

  return (
    <footer className="bg-[hsl(var(--footer-bg))] text-[hsl(var(--footer-text))] mt-auto">

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 w-fit">
              <div
                className="w-[32px] h-[32px] rounded-[9px] flex items-center justify-center text-white text-[15px] font-black flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #a78bfa 100%)' }}
              >
                %
              </div>
              <span className="font-bold text-[17px] text-white">
                mypctcalculator.com
              </span>
            </Link>

            <p className="text-[14px] text-white/60 leading-relaxed max-w-[260px]">
              Free percentage calculators built for clarity — no sign-up, no clutter, instant answers.
            </p>

            {/* Feature pills — added "No data stored" for trust */}
            <div className="flex flex-wrap gap-2 mt-1">
              {['Free forever', 'No sign-up', 'Instant results', 'No data stored'].map((label) => (
                <span
                  key={label}
                  className="text-[11px] font-semibold px-3 py-1 rounded-full border border-white/15 text-white/50"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Calculators */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-5">
              Calculators
            </h3>
            <ul className="flex flex-col gap-3">
              {calculatorLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[14px] text-white/65 hover:text-white transition-colors duration-150 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-5">
              Resources
            </h3>
            <ul className="flex flex-col gap-3">
              {resourceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[14px] text-white/65 hover:text-white transition-colors duration-150 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-white/40">
            © 2026 mypctcalculator.com. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-[13px] text-white/40 hover:text-white/70 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-[13px] text-white/40 hover:text-white/70 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
