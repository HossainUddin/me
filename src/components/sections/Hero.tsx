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
           {/* Abstract Shapes / Visual Placeholder */}
           <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
              {/* Spinning Glowing Orb Behind Image */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-tr from-primary/60 to-purple-500/60 rounded-full blur-[80px] -z-10"
              />
              
              {/* Main Image Container */}
              <motion.div 
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative z-10 bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-700 max-w-[85%] aspect-[3/4] rotate-[-3deg] hover:rotate-0 transition-transform duration-500"
              >
                  <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative bg-slate-100 dark:bg-slate-900">
                    <img 
                      src={meImage} 
                      alt="Hossain Uddin Ahamad" 
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-110" 
                    />
                    {/* Subtle Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
              </motion.div>
              
              {/* Floating Element 1 */}
              <motion.div
                 animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 10, 0] }}
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                 className="absolute -top-4 right-4 sm:-top-8 sm:right-8 w-20 h-20 sm:w-24 sm:h-24 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center border border-white/50 dark:border-slate-700/50 z-20"
              >
                  <span className="text-4xl sm:text-5xl drop-shadow-md">🎨</span>
              </motion.div>

               {/* Floating Element 2 */}
               <motion.div
                 animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                 className="absolute bottom-10 -left-6 sm:bottom-16 sm:-left-10 px-6 py-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full shadow-2xl border border-white/50 dark:border-slate-700/50 z-20"
              >
                 <span className="font-bold text-sm sm:text-base bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                    Frontend Dev
                 </span>
              </motion.div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};
