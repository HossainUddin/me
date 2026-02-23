import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { Button } from '../ui/Button';
import { useNavigate, useLocation } from 'react-router-dom';

// IMPORTANT: Install react-scroll first: npm install react-scroll @types/react-scroll

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage(); // Kept for text content, language switching removed
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (target: string) => {
      setIsOpen(false);
      navigate('/', { state: { scrollTo: target } });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), to: 'hero' },
    { name: t('nav.about'), to: 'about' },
    { name: t('nav.portfolio'), to: 'portfolio' },
    { name: t('nav.services'), to: 'services' },
    { name: t('nav.contact'), to: 'cta' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
          Hossain<span className="text-primary">.dev</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.to}
              onClick={() => handleNav(link.to)}
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary cursor-pointer transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => handleNav('cta')}>
            <Button size="sm">{t('nav.hire')}</Button>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-xl md:hidden flex flex-col items-center py-8 space-y-6"
          >
            {navLinks.map((link) => (
              <button
                key={link.to}
                onClick={() => handleNav(link.to)}
                className="text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-primary"
              >
                {link.name}
              </button>
            ))}
            <div className="flex items-center space-x-6 pt-4">
              <button onClick={toggleTheme}>
                 {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
             <button onClick={() => handleNav('cta')}>
               <Button size="sm">{t('nav.hire')}</Button>
             </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
