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
        <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-slate-200 dark:bg-slate-800">
                 {/* Placeholder for About Image */}
                 <img 
                    src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Working" 
                    className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>
            
            {/* Simple decorative element */}
            <motion.div 
               animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 backdrop-blur-3xl rounded-full -z-10"
            ></motion.div>
            <motion.div 
               animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3], y: [0, -10, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500/20 backdrop-blur-3xl rounded-full -z-10"
            ></motion.div>
        </div>
      </div>
    </Section>
  );
};
