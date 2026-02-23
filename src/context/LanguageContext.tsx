import React, { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.hire': 'Hire Me',
    
    // Hero
    'hero.greeting': "Hi, I'm Hossain Uddin Ahamad",
    'hero.role': 'Web Developer & Graphic Designer',
    'hero.subtext': 'I specialize in product advertisement visuals, banner design, and modern web development that helps brands grow.',
    'hero.viewPortfolio': 'View Portfolio',
    'hero.hireMe': 'Hire Me',

    // Trust Bar
    'stats.projects': '20+ Projects Completed',
    'stats.delivery': 'Fast Delivery',
    'stats.satisfaction': 'Client Satisfaction Focused',
    'stats.design': 'Modern Creative Design',

    // Services
    'services.title': 'My Services',
    'services.webDev': 'FrontendWeb Development',
    'services.tshirt': 'T-Shirt Designs',
    'services.ads': 'Product Ads Visuals',
    'services.banner': 'Banner Design',
    'services.learnMore': 'Learn More',

    // Portfolio
    'portfolio.title': 'Featured Work',
    'portfolio.all': 'All',
    'portfolio.web': 'Web',
    'portfolio.t-shirt': 'T-Shirt',
    'portfolio.ads': 'Ads',
    'portfolio.banner': 'Banner',

    // Why Me
    'why.title': 'Why Choose Me?',
    'why.desc': 'I deliver high-quality work with a focus on creativity and performance.',
    'why.clean': 'Clean Code',
    'why.modern': 'Modern UI/UX',
    'why.fast': 'Fast Communication',
    'why.time': 'On-Time Delivery',
    'why.rev': 'Unlimited Revisions',

    // Testimonials
    'testimonials.title': 'Client Testimonials',

    // Pricing
    'pricing.title': 'Pricing Plans',
    'pricing.basic': 'Basic',
    'pricing.standard': 'Standard',
    'pricing.premium': 'Premium',
    'pricing.order': 'Order Now',
    'pricing.recommended': 'Recommended',

    // CTA
    'cta.title': "Let's Build Something Creative Together",
    'cta.sub': 'Ready to elevate your brand with modern digital solutions?',
    'cta.start': 'Start a Project',
    'cta.contact': 'Contact Me',

    // Footer
    'footer.rights': '© 2026 Hossain Uddin Ahmad. All rights reserved.',
    
    // Admin
    'admin.dashboard': 'Dashboard',
    'admin.projects': 'Projects',
    'admin.services': 'Services',
    'admin.login': 'Login',
  },
  
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    // @ts-ignore
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
