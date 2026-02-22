import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useData } from '../../context/DataContext';
import { Section } from '../ui/Section';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const { t } = useLanguage();
  const { testimonials } = useData();

  return (
    <Section id="testimonials" className="bg-background-light dark:bg-background">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-slate-900 dark:text-white">
          {t('testimonials.title')}
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id}
            className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 relative"
          >
            <Quote className="absolute top-8 right-8 text-primary/10 w-12 h-12" />
            
            <div className="flex items-center space-x-4 mb-6">
                <img 
                    src={testimonial.image || `https://ui-avatars.com/api/?name=${testimonial.name}&background=random`} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">{testimonial.role}</p>
                </div>
            </div>

            <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < testimonial.rating ? "currentColor" : "none"} className={i < testimonial.rating ? "" : "text-slate-300 dark:text-slate-600"} />
                ))}
            </div>

            <p className="text-slate-600 dark:text-slate-300 italic">
                "{testimonial.review}"
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
