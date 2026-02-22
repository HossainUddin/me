import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Section } from '../ui/Section';

export const TrustBar = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t('stats.projects'), value: '50+' },
    { label: t('stats.delivery'), value: '100%' },
    { label: t('stats.satisfaction'), value: '5★' },
    { label: t('stats.design'), value: '∞' },
  ];

  return (
    <div className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold font-heading">{stat.value}</div>
              <div className="text-sm md:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
