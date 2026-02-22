import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useData } from '../../context/DataContext';
import { Section } from '../ui/Section';
import { Code, Shirt, Megaphone, Image as ImageIcon, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

const iconMap: Record<string, React.ReactNode> = {
  'Code': <Code size={32} />,
  'Shirt': <Shirt size={32} />,
  'Megaphone': <Megaphone size={32} />,
  'Image': <ImageIcon size={32} />,
};

export const Services = () => {
  const { t } = useLanguage();
  const { services } = useData();

  return (
    <Section id="services" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-slate-900 dark:text-white">
          {t('services.title')}
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div 
            key={service.id}
            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 hover:-translate-y-2 transition-transform duration-300 group"
          >
            <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
              {iconMap[service.icon]}
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
              {service.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
              {service.description}
            </p>
            <Button variant="ghost" size="sm" className="p-0 hover:bg-transparent hover:text-primary">
              {t('services.learnMore')} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
};
