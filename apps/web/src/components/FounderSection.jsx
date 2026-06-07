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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm font-medium text-primary mb-6 tracking-widest uppercase">
          The Journey
        </p>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8"
          style={{ letterSpacing: '-0.03em' }}
        >
          Built on Engineering Excellence
        </h2>
        <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
          <p>
            Sarathi AI Labs was founded on a simple belief: technology should
            amplify what people can do, not replace them.
          </p>
          <p>
            With over 15 years of hands-on experience in software quality,
            automation, and engineering leadership, our founder has helped
            organizations at every stage build systems that deliver real results.
          </p>
          <p>
            Today, we bring that same engineering rigor to AI — helping teams
            adopt intelligent technology with confidence and purpose.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
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
  );
};

export default FounderSection;
