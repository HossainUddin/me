import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Facebook, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 pt-16 pb-8 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <a href="#" className="text-2xl font-bold font-heading text-slate-900 dark:text-white block mb-4">
              Hossain<span className="text-primary">.dev</span>
            </a>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Creates modern, high-performance websites and stunning graphics to help your business grow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-slate-900 dark:text-white">{t('nav.home')}</h4>
             <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Services</a></li>
            </ul>
          </div>

           {/* Services */}
           <div>
            <h4 className="font-bold mb-6 text-slate-900 dark:text-white">{t('nav.services')}</h4>
             <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">T-Shirt Design</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Banner Design</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
             <h4 className="font-bold mb-6 text-slate-900 dark:text-white">Connect</h4>
             <div className="flex space-x-4">
                <a href="#" className="p-2 bg-slate-200 dark:bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all"><Facebook size={18} /></a>
                <a href="#" className="p-2 bg-slate-200 dark:bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all"><Instagram size={18} /></a>
                <a href="#" className="p-2 bg-slate-200 dark:bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all"><Linkedin size={18} /></a>
                <a href="#" className="p-2 bg-slate-200 dark:bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all"><Twitter size={18} /></a>
             </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-sm text-slate-500">
          {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};
