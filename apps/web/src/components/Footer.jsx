import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="Sarathi AI Labs Logo" className="h-8 w-8 object-contain rounded" />
              <span className="font-semibold text-lg tracking-tight text-foreground">
                Sarathi AI Labs
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-3 max-w-sm">
              Empowering people and businesses through intelligent technology.
            </p>
          </div>

          <nav className="flex flex-wrap gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('founder')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Contact
            </button>
            <a
              href="mailto:vaibhav.arde@sarathiailabs.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              vaibhav.arde@sarathiailabs.com
            </a>
          </nav>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground/60">
            © 2026 Sarathi AI Labs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;