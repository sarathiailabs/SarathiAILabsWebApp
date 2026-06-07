import React from 'react';
import { motion } from 'framer-motion';

const PillarCard = ({ icon: Icon, title, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative bg-card border border-border/60 rounded-2xl p-10 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500"
    >
      <div className="mb-8">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-500">
          <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
        </div>
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-base">{description}</p>
    </motion.div>
  );
};

export default PillarCard;
