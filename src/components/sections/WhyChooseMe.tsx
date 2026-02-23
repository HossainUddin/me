import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Section } from '../ui/Section';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyChooseMe = () => {
  const { t } = useLanguage();

  const features = [
    t('why.clean'),
    t('why.modern'),
    t('why.fast'),
    t('why.time'),
    t('why.rev'),
  ];

  return (
    <Section id="about" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-slate-900 dark:text-white">
            {t('why.title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            {t('why.desc')}
          </p>
          
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-3">
                <CheckCircle2 className="text-primary flex-shrink-0" />
                <span className="text-slate-800 dark:text-slate-200 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Visual */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
            <div className="relative aspect-[4/5] rounded-[2rem] rounded-tr-[5rem] rounded-bl-[5rem] overflow-hidden shadow-2xl bg-slate-200 dark:bg-slate-800 border-[8px] border-white dark:border-slate-800">
                 <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Working" 
                    className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay"></div>
            </div>
            
            {/* Floating Experience Badge */}
            <motion.div 
               animate={{ y: [0, -12, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -bottom-6 -left-6 md:-left-12 bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-4 z-10"
            >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl">
                    5+
                </div>
                <div className="pr-4">
                    <p className="font-bold text-slate-900 dark:text-white text-lg leading-tight">Years of</p>
                    <p className="text-sm text-slate-500 font-medium tracking-wide">Experience</p>
                </div>
            </motion.div>
            
            {/* Decorative dashed circle */}
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute -top-10 -right-10 w-40 h-40 border-2 border-dashed border-primary/40 rounded-full -z-10"
            ></motion.div>
        </motion.div>
      </div>
    </Section>
  );
};
