import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Brain,
  Workflow,
  Code2,
  Bot,
  AppWindow,
  TestTubes,
  GraduationCap,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PillarCard from '@/components/PillarCard.jsx';
import ProductCard from '@/components/ProductCard.jsx';
import SolutionShowcase from '@/components/SolutionShowcase.jsx';
import ImpactMetric from '@/components/ImpactMetric.jsx';
import FounderSection from '@/components/FounderSection.jsx';
import ContactForm from '@/components/ContactForm.jsx';

const HomePage = () => {
  const consultLink = 'https://app.cal.com/vaibhav-arde';

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Sarathi AI Labs — Empowering People and Businesses Through Intelligent Technology
        </title>
        <meta
          name="description"
          content="We believe people and businesses achieve extraordinary results when empowered by intelligent technology. AI agents, applications, quality engineering, and training."
        />
      </Helmet>

      <Header />

      <main>
        {/* ─────────────────────────────────────────────────────────────
            Section 1 — Hero (WHY)
        ───────────────────────────────────────────────────────────── */}
        <section
          id="home"
          className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
        >
          {/* Abstract background glows */}
          <div
            className="hero-glow absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15"
            style={{ animation: 'float 8s ease-in-out infinite' }}
          />
          <div
            className="hero-glow absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-400/10"
            style={{ animation: 'float 10s ease-in-out infinite 2s' }}
          />
          <div className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/[0.06]" />

          {/* Subtle background logo watermark */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.13] dark:opacity-[0.15] overflow-hidden select-none z-0"
            style={{ animation: 'float 12s ease-in-out infinite' }}
          >
            <img
              src="/logo.jpg"
              alt=""
              className="w-[600px] sm:w-[800px] md:w-[1000px] h-auto object-contain mix-blend-multiply dark:mix-blend-screen filter grayscale"
            />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-2xl sm:text-3xl font-semibold text-primary mb-10 tracking-widest uppercase"
              >
                Sarathi AI Labs
              </motion.p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.08] tracking-tight">
                <span className="text-gradient">Empowering People</span>
                <br />
                <span className="text-gradient">and Businesses</span>
                <br />
                <span className="text-foreground">Through Intelligent</span>
                <br />
                <span className="text-foreground">Technology</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                We believe people and businesses achieve extraordinary results
                when empowered by intelligent technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="text-base h-14 px-8 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/25"
                >
                  <a href={consultLink} target="_blank" rel="noopener noreferrer" data-cal-link="vaibhav-arde">Book a Consultation</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('solutions')}
                  className="text-base h-14 px-8 rounded-full transition-all duration-300 group"
                >
                  Explore Our Solutions
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            Section 2 — The Belief
        ───────────────────────────────────────────────────────────── */}
        <section id="belief" className="py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-2xl sm:text-3xl font-semibold text-primary mb-10 tracking-widest uppercase">
                Our Belief
              </p>

              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 leading-tight"
                style={{ letterSpacing: '-0.03em' }}
              >
                Technology should amplify
                <br className="hidden md:block" />
                {' '}human potential.
              </h2>

              <div className="w-16 h-px bg-border mx-auto mb-10" />

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
                The most successful organizations don't adopt technology for the
                sake of technology. They use it to unlock new levels of
                creativity, productivity, and innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            Section 3 — How We Help
        ───────────────────────────────────────────────────────────── */}
        <section id="approach" className="py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <p className="text-2xl sm:text-3xl font-semibold text-primary mb-10 tracking-widest uppercase">
                How We Help
              </p>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
                style={{ letterSpacing: '-0.03em' }}
              >
                Turning Intelligence Into Impact
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                By combining AI, automation, and engineering excellence, we help
                organizations move faster, reduce complexity, and deliver better
                outcomes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <PillarCard
                icon={Brain}
                title="AI"
                description="Intelligent agents and applications that augment human decision-making, automate complex workflows, and create new possibilities."
                index={0}
              />
              <PillarCard
                icon={Workflow}
                title="Automation"
                description="End-to-end automation systems that eliminate repetitive work, accelerate delivery, and let your team focus on what matters most."
                index={1}
              />
              <PillarCard
                icon={Code2}
                title="Engineering Excellence"
                description="Modern engineering practices, quality systems, and scalable architectures that form the foundation for sustainable innovation."
                index={2}
              />
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            Section 4 — What We Build
        ───────────────────────────────────────────────────────────── */}
        <section id="solutions" className="py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <p className="text-2xl sm:text-3xl font-semibold text-primary mb-10 tracking-widest uppercase">
                What We Build
              </p>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
                style={{ letterSpacing: '-0.03em' }}
              >
                Built for Modern Organizations
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                Solutions designed to help teams achieve more with intelligent
                technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
              <ProductCard
                icon={Bot}
                title="AI Agents"
                outcome="Autonomous systems that work alongside your team"
                index={0}
              />
              <ProductCard
                icon={AppWindow}
                title="AI-Powered Applications"
                outcome="Intelligent products built for the modern enterprise"
                index={1}
              />
              <ProductCard
                icon={TestTubes}
                title="Quality Engineering Systems"
                outcome="Scalable testing that keeps pace with delivery"
                index={2}
              />
              <ProductCard
                icon={Lightbulb}
                title="AI Consulting"
                outcome="Strategic guidance for confident AI adoption"
                index={3}
              />
              <ProductCard
                icon={GraduationCap}
                title="Corporate Training"
                outcome="Upskill your team in AI and automation"
                index={4}
              />
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            Section 5 — Featured Solutions
        ───────────────────────────────────────────────────────────── */}
        <section id="featured" className="py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <p className="text-2xl sm:text-3xl font-semibold text-primary mb-10 tracking-widest uppercase">
                Solutions In Depth
              </p>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
                style={{ letterSpacing: '-0.03em' }}
              >
                Explore What's Possible
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SolutionShowcase
                title="AI Agents"
                description="Intelligent agents that automate complex business processes and work autonomously alongside your team."
                features={[
                  'Business process automation at scale',
                  'Intelligent workflow orchestration',
                  'Autonomous operations and monitoring',
                ]}
                index={0}
              />
              <SolutionShowcase
                title="AI Applications"
                description="Custom AI-powered products and tools built to solve real problems for your organization."
                features={[
                  'AI-first product development',
                  'Enterprise-grade solutions',
                  'Internal productivity tools',
                ]}
                index={1}
              />
              <SolutionShowcase
                title="Quality Engineering"
                description="Modern quality systems that scale with your team and keep confidence high across every release."
                features={[
                  'Playwright modernization and migration',
                  'AI-powered test generation and maintenance',
                  'Scalable automation frameworks',
                ]}
                index={2}
              />
              <SolutionShowcase
                title="Training Programs"
                description="Comprehensive programs to upskill your team in AI, automation, and modern engineering practices."
                features={[
                  'Agentic AI development workshops',
                  'Playwright automation bootcamps',
                  'Corporate AI enablement programs',
                ]}
                index={3}
              />
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            Section 6 — Impact
        ───────────────────────────────────────────────────────────── */}
        <section id="impact" className="py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <p className="text-2xl sm:text-3xl font-semibold text-primary mb-10 tracking-widest uppercase">
                Impact
              </p>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
                style={{ letterSpacing: '-0.03em' }}
              >
                Helping Teams Achieve More
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 max-w-4xl mx-auto">
              <ImpactMetric
                value={10}
                suffix="×"
                label="Faster Delivery"
                description="Automation acceleration"
                index={0}
              />
              <ImpactMetric
                value={95}
                suffix="%"
                label="Better Quality"
                description="Test coverage achieved"
                index={1}
              />
              <ImpactMetric
                value={40}
                suffix="%"
                label="More Productive"
                description="Engineering time saved"
                index={2}
              />
              <ImpactMetric
                value={15}
                suffix="+"
                label="Years Experience"
                description="In engineering excellence"
                index={3}
              />
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            Section 7 — Founder Story
        ───────────────────────────────────────────────────────────── */}
        <section id="founder" className="py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FounderSection />
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            Section 8 — Final CTA
        ───────────────────────────────────────────────────────────── */}
        <section id="contact" className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-cyan-700" />
          <div className="hero-glow absolute top-0 right-0 w-[500px] h-[500px] bg-white/5" />
          <div className="hero-glow absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                  style={{ letterSpacing: '-0.03em' }}
                >
                  The Future Belongs to Teams
                  <br className="hidden md:block" />
                  {' '}Empowered by Intelligent Technology
                </h2>

                <p className="text-lg text-white/80 mb-10 max-w-lg font-light leading-relaxed">
                  Have a project in mind, need testing automation scaled, or looking to deploy AI agents? Start a conversation with us or book a calendar session directly.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="text-base h-14 px-10 rounded-full transition-all duration-300 hover:shadow-xl w-full sm:w-auto"
                  >
                    <a href={consultLink} target="_blank" rel="noopener noreferrer" data-cal-link="vaibhav-arde">Book Calendar Call</a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;