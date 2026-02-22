import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';

export const Pricing = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: t('pricing.basic'),
      price: '৳49',
      features: ['Basic Web/Design', '2 Revisions', '3 Days Delivery', 'Source File'],
      recommended: false,
    },
    {
      name: t('pricing.standard'),
      price: '৳99',
      features: ['Standard Web/Design', '5 Revisions', '5 Days Delivery', 'Source File', 'Priority Support'],
      recommended: true,
    },
    {
      name: t('pricing.premium'),
      price: '৳199',
      features: ['Premium Web/Design', 'Unlimited Revisions', '7 Days Delivery', 'Source File', 'VIP Support', 'Commercial Use'],
      recommended: false,
    },
  ];

  return (
    <Section id="pricing" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-slate-900 dark:text-white">
          {t('pricing.title')}
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-2xl border transition-all duration-300 ${
              plan.recommended
                ? 'bg-white dark:bg-slate-800 border-primary shadow-2xl scale-105 z-10'
                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-primary/50'
            }`}
          >
            {plan.recommended && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                {t('pricing.recommended')}
              </div>
            )}

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold text-primary mb-6">{plan.price}</div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <Check className="text-green-500 w-5 h-5 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              variant={plan.recommended ? 'primary' : 'outline'}
              className="w-full"
            >
              {t('pricing.order')}
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
};
