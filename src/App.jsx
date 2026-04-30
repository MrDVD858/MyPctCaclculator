
import React, { useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Footer from './components/Footer.jsx';

// Main Pages
import HomePage from './pages/HomePage.jsx';
import TipCalculator from './pages/TipCalculator.jsx';
import DiscountCalculator from './pages/DiscountCalculator.jsx';
import GradeCalculator from './pages/GradeCalculator.jsx';
import SalesTaxCalculator from './pages/SalesTaxCalculator.jsx';
import PercentageChangeCalculator from './pages/PercentageChangeCalculator.jsx';
import PercentageDifferenceCalculator from './pages/PercentageDifferenceCalculator.jsx';
import MarginCalculator from './pages/MarginCalculator.jsx';
import WhatPercentCalculator from './pages/WhatPercentCalculator.jsx';

// Dynamic Template
import WhatIsPage from './pages/WhatIsPage.jsx';

// Legal & Info Pages
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsOfUse from './pages/TermsOfUse.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

// Quick Answers Index
import QuickAnswersIndex from './pages/QuickAnswersIndex.jsx';

// Quick Answers - General
import WhatIs10PercentOf1000 from './pages/QuickAnswers/WhatIs10PercentOf1000.jsx';
import WhatIs20PercentOf1000 from './pages/QuickAnswers/WhatIs20PercentOf1000.jsx';
import WhatIs15PercentOf1000 from './pages/QuickAnswers/WhatIs15PercentOf1000.jsx';
import WhatIs10PercentOf500 from './pages/QuickAnswers/WhatIs10PercentOf500.jsx';
import WhatIs20PercentOf500 from './pages/QuickAnswers/WhatIs20PercentOf500.jsx';
import WhatIs15PercentOf200 from './pages/QuickAnswers/WhatIs15PercentOf200.jsx';
import WhatIs10PercentOf200 from './pages/QuickAnswers/WhatIs10PercentOf200.jsx';
import WhatIs20PercentOf200 from './pages/QuickAnswers/WhatIs20PercentOf200.jsx';
import WhatIs5PercentOf1000 from './pages/QuickAnswers/WhatIs5PercentOf1000.jsx';
import WhatIs25PercentOf1000 from './pages/QuickAnswers/WhatIs25PercentOf1000.jsx';
import WhatIs10PercentOf100 from './pages/QuickAnswers/WhatIs10PercentOf100.jsx';
import WhatIs20PercentOf100 from './pages/QuickAnswers/WhatIs20PercentOf100.jsx';
import WhatIs15PercentOf100 from './pages/QuickAnswers/WhatIs15PercentOf100.jsx';
import WhatIs10PercentOf50 from './pages/QuickAnswers/WhatIs10PercentOf50.jsx';
import WhatIs20PercentOf50 from './pages/QuickAnswers/WhatIs20PercentOf50.jsx';
import WhatIs10PercentOf300 from './pages/QuickAnswers/WhatIs10PercentOf300.jsx';
import WhatIs20PercentOf300 from './pages/QuickAnswers/WhatIs20PercentOf300.jsx';
import WhatIs15PercentOf300 from './pages/QuickAnswers/WhatIs15PercentOf300.jsx';
import WhatIs10PercentOf400 from './pages/QuickAnswers/WhatIs10PercentOf400.jsx';
import WhatIs20PercentOf400 from './pages/QuickAnswers/WhatIs20PercentOf400.jsx';

// Quick Answers - Money
import WhatIs10PercentOf20Money from './pages/QuickAnswers/WhatIs10PercentOf20Money.jsx';
import WhatIs20PercentOf20Money from './pages/QuickAnswers/WhatIs20PercentOf20Money.jsx';
import WhatIs15PercentOf50Money from './pages/QuickAnswers/WhatIs15PercentOf50Money.jsx';
import WhatIs25PercentOf50Money from './pages/QuickAnswers/WhatIs25PercentOf50Money.jsx';
import WhatIs10PercentOf150Money from './pages/QuickAnswers/WhatIs10PercentOf150Money.jsx';
import WhatIs20PercentOf150Money from './pages/QuickAnswers/WhatIs20PercentOf150Money.jsx';
import WhatIs15PercentOf150Money from './pages/QuickAnswers/WhatIs15PercentOf150Money.jsx';
import WhatIs10PercentOf250Money from './pages/QuickAnswers/WhatIs10PercentOf250Money.jsx';
import WhatIs20PercentOf250Money from './pages/QuickAnswers/WhatIs20PercentOf250Money.jsx';
import WhatIs15PercentOf250Money from './pages/QuickAnswers/WhatIs15PercentOf250Money.jsx';

// Component to handle client-side navigation to sitemap.xml
function SitemapRedirect() {
  useEffect(() => {
    window.location.href = '/sitemap.xml';
  }, []);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-background">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tip-calculator" element={<TipCalculator />} />
            <Route path="/discount-calculator" element={<DiscountCalculator />} />
            <Route path="/grade-calculator" element={<GradeCalculator />} />
            <Route path="/sales-tax-calculator" element={<SalesTaxCalculator />} />
            <Route path="/percentage-change-calculator" element={<PercentageChangeCalculator />} />
            <Route path="/percentage-difference-calculator" element={<PercentageDifferenceCalculator />} />
            <Route path="/margin-calculator" element={<MarginCalculator />} />
            <Route path="/what-percent-calculator" element={<WhatPercentCalculator />} />
            
            {/* Legal & Info Pages */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfUse />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Quick Answers Index */}
            <Route path="/quick-answers" element={<QuickAnswersIndex />} />

            {/* Quick Answers - General */}
            <Route path="/what-is-10-percent-of-1000" element={<WhatIs10PercentOf1000 />} />
            <Route path="/what-is-20-percent-of-1000" element={<WhatIs20PercentOf1000 />} />
            <Route path="/what-is-15-percent-of-1000" element={<WhatIs15PercentOf1000 />} />
            <Route path="/what-is-10-percent-of-500" element={<WhatIs10PercentOf500 />} />
            <Route path="/what-is-20-percent-of-500" element={<WhatIs20PercentOf500 />} />
            <Route path="/what-is-15-percent-of-200" element={<WhatIs15PercentOf200 />} />
            <Route path="/what-is-10-percent-of-200" element={<WhatIs10PercentOf200 />} />
            <Route path="/what-is-20-percent-of-200" element={<WhatIs20PercentOf200 />} />
            <Route path="/what-is-5-percent-of-1000" element={<WhatIs5PercentOf1000 />} />
            <Route path="/what-is-25-percent-of-1000" element={<WhatIs25PercentOf1000 />} />
            <Route path="/what-is-10-percent-of-100" element={<WhatIs10PercentOf100 />} />
            <Route path="/what-is-20-percent-of-100" element={<WhatIs20PercentOf100 />} />
            <Route path="/what-is-15-percent-of-100" element={<WhatIs15PercentOf100 />} />
            <Route path="/what-is-10-percent-of-50" element={<WhatIs10PercentOf50 />} />
            <Route path="/what-is-20-percent-of-50" element={<WhatIs20PercentOf50 />} />
            <Route path="/what-is-10-percent-of-300" element={<WhatIs10PercentOf300 />} />
            <Route path="/what-is-20-percent-of-300" element={<WhatIs20PercentOf300 />} />
            <Route path="/what-is-15-percent-of-300" element={<WhatIs15PercentOf300 />} />
            <Route path="/what-is-10-percent-of-400" element={<WhatIs10PercentOf400 />} />
            <Route path="/what-is-20-percent-of-400" element={<WhatIs20PercentOf400 />} />

            {/* Quick Answers - Money */}
            <Route path="/what-is-10-percent-of-20" element={<WhatIs10PercentOf20Money />} />
            <Route path="/what-is-20-percent-of-20" element={<WhatIs20PercentOf20Money />} />
            <Route path="/what-is-15-percent-of-50" element={<WhatIs15PercentOf50Money />} />
            <Route path="/what-is-25-percent-of-50" element={<WhatIs25PercentOf50Money />} />
            <Route path="/what-is-10-percent-of-150" element={<WhatIs10PercentOf150Money />} />
            <Route path="/what-is-20-percent-of-150" element={<WhatIs20PercentOf150Money />} />
            <Route path="/what-is-15-percent-of-150" element={<WhatIs15PercentOf150Money />} />
            <Route path="/what-is-10-percent-of-250" element={<WhatIs10PercentOf250Money />} />
            <Route path="/what-is-20-percent-of-250" element={<WhatIs20PercentOf250Money />} />
            <Route path="/what-is-15-percent-of-250" element={<WhatIs15PercentOf250Money />} />

            {/* Dynamic What Is Page */}
            <Route path="/what-is-:pct-percent-of-:value" element={<WhatIsPage />} />

            {/* Sitemap Route */}
            <Route path="/sitemap.xml" element={<SitemapRedirect />} />

            {/* Catch-all route for unknown paths */}
            <Route path="*" element={
              <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
                <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
                <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
                <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist or has been moved.</p>
                <a href="/" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4">
                  Back to Home
                </a>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
