import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Section } from '../ui/Section';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import meImage from '../../assets/ME.png';

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
        {/* Right: Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative px-4 md:px-8 max-w-md mx-auto"
        >
            {/* Background Offset Accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 transform translate-x-6 translate-y-6 md:translate-x-8 md:translate-y-8 rounded-[2.5rem] -z-10 opacity-80"></div>
            
            {/* Main Image Container */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-200 dark:bg-slate-800 border-4 border-slate-50 dark:border-slate-900 aspect-[4/5] group">
                 <img 
                    src={meImage} 
                    alt="Hossain Uddin Ahamad" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gray-900/40 mix-blend-color group-hover:opacity-0 transition-opacity duration-700"></div>
            </div>
            
            {/* Floating Experience Badge */}
            <motion.div 
               animate={{ y: [0, -15, 0], rotate: [-2, 2, -2] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-12 -left-6 md:-left-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md py-4 px-6 rounded-2xl shadow-2xl border border-white/20 flex flex-col items-center gap-1 z-10"
            >
                <div className="text-primary font-bold text-4xl font-heading drop-shadow-sm">5+</div>
                <div className="text-sm text-slate-700 dark:text-slate-300 font-medium text-center leading-tight uppercase tracking-wider">Years<br/>Experience</div>
            </motion.div>
            
            {/* Small decorative dot */}
            <motion.div 
               animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-500 rounded-full blur-md -z-10"
            ></motion.div>
        </motion.div>
      </div>
    </Section>
  );
};
