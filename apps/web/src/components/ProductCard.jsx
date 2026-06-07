import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProductCard = ({ icon: Icon, title, outcome, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex items-center justify-between p-7 sm:p-8 rounded-2xl border border-border/60 bg-card hover:bg-muted/50 hover:border-primary/20 transition-all duration-500 cursor-default"
    >
      <div className="flex items-center gap-5 sm:gap-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors duration-500">
          <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm">{outcome}</p>
        </div>
      </div>
      <ArrowUpRight className="w-5 h-5 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500 shrink-0 ml-4" />
    </motion.div>
  );
};

export default ProductCard;
