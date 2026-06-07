import React from 'react';
import { motion } from 'framer-motion';

const ProblemCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
    >
      <div className="mb-6">
        <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center">
          <Icon className="w-7 h-7 text-destructive" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-card-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ProblemCard;