import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const SolutionShowcase = ({ title, description, features, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative p-9 sm:p-10 rounded-3xl border border-border/60 bg-card hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500"
    >
      <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-8 leading-relaxed">{description}</p>
      <ul className="space-y-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
              <Check className="w-3 h-3 text-primary" strokeWidth={2.5} />
            </div>
            <span className="text-foreground/80 text-sm leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SolutionShowcase;
