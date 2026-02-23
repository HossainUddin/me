import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/Button';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-scroll';
import meImage from '../../assets/ME.png';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background-light dark:via-background to-background-light dark:to-background blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        {/* Text Content */}
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-primary font-bold tracking-wider uppercase mb-4 text-sm md:text-base">
            {t('hero.greeting')}
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight">
             <span className="block text-slate-900 dark:text-white">Creative</span>
             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
               {t('hero.role').split('&')[0]}
             </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
            {t('hero.subtext')}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="portfolio" smooth={true} duration={500}>
              <Button size="lg" className="group">
                {t('hero.viewPortfolio')}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
             <Link to="cta" smooth={true} duration={500}>
              <Button variant="outline" size="lg">
                {t('hero.hireMe')}
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Visual Content */ }
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
           className="relative hidden md:block"
        >
           {/* Abstract Shapes / Illustration Placeholder */}
           <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative z-10 bg-slate-200 dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-300 dark:border-slate-700 h-full w-full flex items-center justify-center"
              >
                  <span className="text-slate-400">
                    <img src={meImage} alt="Hossain Uddin Ahamad" className="w-[80%] h-auto rounded-xl mx-auto drop-shadow-2xl" />
                  </span>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                 animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                 className="absolute -top-10 -right-10 w-24 h-24 bg-white dark:bg-slate-800 rounded-xl shadow-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 z-20"
              >
                  <span className="text-4xl">🎨</span>
              </motion.div>
               <motion.div
                 animate={{ y: [0, -15, 0], x: [0, -5, 0] }}
                 transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
                 className="absolute -bottom-5 -left-5 w-auto px-6 py-3 bg-white dark:bg-slate-800 rounded-full shadow-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 z-20"
              >
                 <span className="font-bold text-sm">Web Dev</span>
              </motion.div>
              <motion.div
                 animate={{ y: [0, -15, 0], x: [0, -5, 0] }}
                 transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
                 className="absolute bottom-6 -right-8 w-auto px-6 py-3 bg-white dark:bg-slate-800 rounded-full shadow-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 z-20"
              >
                 <span className="font-bold text-sm">Designer</span>
              </motion.div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};
