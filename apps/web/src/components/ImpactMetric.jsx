import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ImpactMetric = ({ value, suffix = '', label, description, index = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-bold text-foreground mb-3 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {count}
        <span className="text-primary">{suffix}</span>
      </div>
      <div className="text-base font-semibold text-foreground mb-1">{label}</div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default ImpactMetric;
