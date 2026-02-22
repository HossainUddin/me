import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from './Button';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  delay?: number;
}

export const Section = ({ id, className, children, delay = 0 }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn('py-14 md:py-20 px-6 md:px-12 max-w-7xl mx-auto', className)}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};
