import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils.js';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

const Header = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);

    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Close dropdown when clicking outside */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /* Close dropdown on route change */
  useEffect(() => {
    setDropdownOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

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

  const otherLinks = [
    { name: 'Quick Answers', path: '/quick-answers' },
    { name: 'About', path: '/about' },
  ];

  const isCalculatorActive = calculatorLinks.some(link => location.pathname === link.path);

  return (
    <header className={cn("h-[70px] sticky top-0 z-50 flex items-center nav-header", isScrolled && "scrolled")}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 font-bold text-[18px] text-foreground shrink-0 transition-opacity hover:opacity-90"
        >
          <div
            className="w-[30px] h-[30px] rounded-[8px] flex items-center justify-center text-white text-[14px] font-black flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #4F1FB8 0%, #7C3AED 100%)' }}
          >
            %
          </div>
          <span>
            <span className="text-foreground">mypct</span>
            <span style={{ color: 'hsl(262 80% 50%)' }}>calculator</span>
            <span className="text-foreground">.com</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-[28px]">
          <Link
            to="/"
            className={cn(
              "text-[15px] font-semibold nav-link",
              location.pathname === '/' && "nav-link-active"
            )}
          >
            Home
          </Link>

          {/* Custom dropdown - no Radix, no body padding-right, no shake */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={cn(
                "flex items-center gap-1 text-[15px] font-semibold nav-link bg-transparent border-none cursor-pointer p-0",
                (isCalculatorActive || dropdownOpen) && "nav-link-active"
              )}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Calculators
              <ChevronDown
                className="w-4 h-4 opacity-70"
                style={{
                  transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                }}
              />
            </button>

            {/* Dropdown panel */}
            {dropdownOpen && (
              <div className="nav-dropdown">
                {calculatorLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "nav-dropdown-item",
                      location.pathname === link.path && "nav-dropdown-item-active"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {otherLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-[15px] font-semibold nav-link",
                  isActive && "nav-link-active"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Trust pill */}
          <span className="hidden lg:inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-border text-[hsl(var(--text-secondary))] select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
            No data stored
          </span>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-surface text-[hsl(var(--text-secondary))] hover:text-foreground transition-colors ml-1"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Nav */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-surface text-[hsl(var(--text-secondary))] hover:text-foreground transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 text-foreground transition-colors hover:text-[hsl(var(--nav-active-text))]"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-l border-border overflow-y-auto">
              <SheetTitle className="text-left font-bold text-[18px] mb-6 flex items-center gap-2.5">
                <div
                  className="w-[28px] h-[28px] rounded-[7px] flex items-center justify-center text-white text-[13px] font-black flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #4F1FB8 0%, #7C3AED 100%)' }}
                >
                  %
                </div>
                mypctcalculator.com
              </SheetTitle>

              <div className="flex flex-col gap-6">
                <nav className="flex flex-col gap-[16px]">
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-[16px] font-semibold py-2 border-b border-border/50 transition-colors relative",
                      location.pathname === '/' ? "text-[hsl(var(--nav-active-text))]" : "text-foreground"
                    )}
                  >
                    Home
                    {location.pathname === '/' && (
                      <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[hsl(var(--nav-active-text))] rounded-sm" />
                    )}
                  </Link>

                  <div className="pt-2">
                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">
                      Calculators
                    </h3>
                    <div className="flex flex-col gap-3 pl-2">
                      {calculatorLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                          <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "text-[15px] transition-colors",
                              isActive
                                ? "text-[hsl(var(--nav-active-text))] font-semibold"
                                : "text-foreground hover:text-primary"
                            )}
                          >
                            {link.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <div className="flex flex-col gap-4">
                      {otherLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                          <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "text-[16px] font-semibold transition-colors",
                              isActive
                                ? "text-[hsl(var(--nav-active-text))]"
                                : "text-foreground"
                            )}
                          >
                            {link.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
};

export default Header;
