import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const consultLink = 'https://app.cal.com/vaibhav-arde';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="flex items-center gap-3"
          >
            <img src="/logo.jpg" alt="Sarathi AI Labs Logo" className="h-16 w-16 object-contain rounded" />
            <span className="font-semibold text-lg tracking-tight text-foreground">
              Sarathi AI Labs
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            <button
              onClick={() => scrollToSection('solutions')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('founder')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Contact
            </button>
            <Button
              asChild
              size="sm"
              className="rounded-full px-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              <a href={consultLink} target="_blank" rel="noopener noreferrer" data-cal-link="vaibhav-arde">Book a Consultation</a>
            </Button>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50">
          <nav className="px-6 py-6 space-y-1">
            <button
              onClick={() => scrollToSection('solutions')}
              className="block w-full text-left py-3 text-base font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('founder')}
              className="block w-full text-left py-3 text-base font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-3 text-base font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              Contact
            </button>
            <div className="pt-4">
              <Button asChild className="w-full rounded-full">
                <a href={consultLink} target="_blank" rel="noopener noreferrer" data-cal-link="vaibhav-arde">Book a Consultation</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;