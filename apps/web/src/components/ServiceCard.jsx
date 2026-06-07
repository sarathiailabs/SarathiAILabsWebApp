import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, outcome, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group"
    >
      <div className="mb-6">
        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-8 h-8 text-primary" />
        </div>
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-card-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{description}</p>
      <div className="pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-sm font-medium text-primary">
          <ArrowRight className="w-4 h-4" />
          <span>{outcome}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;