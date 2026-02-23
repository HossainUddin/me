import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion, useInView, animate } from 'framer-motion';

const AnimatedCounter = ({ value }: { value: string }) => {
  const match = value.match(/^(\d+)(.*)$/);
  
  if (!match) {
    return <span>{value}</span>;
  }
  
  const targetNumber = parseInt(match[1], 10);
  const suffix = match[2];
  
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, targetNumber, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (val) => {
          if (ref.current) {
             ref.current.textContent = Math.floor(val).toString();
          }
        }
      });
      return controls.stop;
    }
  }, [isInView, targetNumber]);

  return (
    <span>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
};

export const TrustBar = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t('stats.projects'), value: '50+' },
    { label: t('stats.delivery'), value: '100%' },
    { label: t('stats.satisfaction'), value: '5★' },
    { label: t('stats.design'), value: '∞' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-primary text-white py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={item} className="space-y-3">
              <div className="text-4xl md:text-5xl font-bold font-heading drop-shadow-sm">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-sm md:text-base opacity-90 font-medium tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
