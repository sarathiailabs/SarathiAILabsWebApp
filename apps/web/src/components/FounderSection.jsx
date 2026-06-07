import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  '15+ years in software quality and automation',
  'Led engineering and QA initiatives across organizations',
  'Built automation frameworks adopted by multiple teams',
  'Trained hundreds of professionals and engineering teams',
  'Evolved into AI and Agentic systems',
];

const FounderSection = () => {
  return (
    <div className="space-y-16 lg:space-y-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-2xl sm:text-3xl font-semibold text-primary mb-10 tracking-widest uppercase">
          The Journey
        </p>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-3xl mx-auto"
          style={{ letterSpacing: '-0.03em' }}
        >
          Built on Engineering Excellence
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-5 text-muted-foreground leading-relaxed text-lg pt-1"
        >
          <p>
            Sarathi AI Labs was founded on a simple belief: technology should amplify human potential.
          </p>
          <p>
            With over 15 years of experience spanning software engineering, quality engineering, automation, AI solutions, consulting, and professional training, our founder has helped organizations transform ideas into scalable solutions and deliver measurable business outcomes.
          </p>
          <p>
            Today, we bring that same engineering rigor to AI — helping teams
            adopt intelligent technology with confidence and purpose.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {milestones.map((milestone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-5 py-5 border-b border-border/50 last:border-0"
            >
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary tracking-tight">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="text-foreground text-base leading-relaxed pt-1">
                {milestone}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FounderSection;
