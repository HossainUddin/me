import React, { createContext, useContext, useState, ReactNode } from 'react';

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
    'hero.greeting': "Hi, I'm Hossain Uddin Ahmad",
    'hero.role': 'Creative Web Developer & Graphic Designer',
    'hero.subtext': 'I specialize in product advertisement visuals, banner design, and modern web development that helps brands grow.',
    'hero.viewPortfolio': 'View Portfolio',
    'hero.hireMe': 'Hire Me',

    // Trust Bar
    'stats.projects': '50+ Projects Completed',
    'stats.delivery': 'Fast Delivery',
    'stats.satisfaction': 'Client Satisfaction Focused',
    'stats.design': 'Modern Creative Design',

    // Services
    'services.title': 'My Services',
    'services.webDev': 'Web Development',
    'services.tshirt': 'T-Shirt Design',
    'services.ads': 'Product Ads Visuals',
    'services.banner': 'Banner Design',
    'services.learnMore': 'Learn More',

    // Portfolio
    'portfolio.title': 'Featured Work',
    'portfolio.all': 'All',
    'portfolio.web': 'Web',
    'portfolio.tshirt': 'T-Shirt',
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
  bn: {
    // Navigation
    'nav.home': 'হোম',
    'nav.about': 'সম্পর্কে',
    'nav.portfolio': 'পোর্টফোলিও',
    'nav.services': 'সেবাসমূহ',
    'nav.pricing': 'মূল্যতালিকা',
    'nav.contact': 'যোগাযোগ',
    'nav.hire': 'আমাকে নিয়োগ দিন',

    // Hero
    'hero.greeting': 'হাই, আমি হোসেন উদ্দিন আহমেদ',
    'hero.role': 'ক্রিয়েটিভ ওয়েব ডেভেলপার এবং গ্রাফিক ডিজাইনার',
    'hero.subtext': 'আমি পণ্যের বিজ্ঞাপন ভিজ্যুয়াল, ব্যানার ডিজাইন এবং আধুনিক ওয়েব ডেভেলপমেন্টে বিশেষজ্ঞ যা ব্র্যান্ডের বৃদ্ধিতে সহায়তা করে।',
    'hero.viewPortfolio': 'পোর্টফোলিও দেখুন',
    'hero.hireMe': 'আমাকে নিয়োগ দিন',

    // Trust Bar
    'stats.projects': '৫০+ প্রজেক্ট সম্পন্ন',
    'stats.delivery': 'দ্রুত ডেলিভারি',
    'stats.satisfaction': 'গ্রাহক সন্তুষ্টির লক্ষ্য',
    'stats.design': 'আধুনিক ক্রিয়েটিভ ডিজাইন',

    // Services
    'services.title': 'আমার সেবাসমূহ',
    'services.webDev': 'ওয়েব ডেভেলপমেন্ট',
    'services.tshirt': 'টি-শার্ট ডিজাইন',
    'services.ads': 'পণ্য বিজ্ঞাপনের ভিজ্যুয়াল',
    'services.banner': 'ব্যানার ডিজাইন',
    'services.learnMore': 'আরও জানুন',

    // Portfolio
    'portfolio.title': 'উল্লেখযোগ্য কাজ',
    'portfolio.all': 'সব',
    'portfolio.web': 'ওয়েব',
    'portfolio.tshirt': 'টি-শার্ট',
    'portfolio.ads': 'বিজ্ঞাপন',
    'portfolio.banner': 'ব্যানার',

    // Why Me
    'why.title': 'কেন আমাকে বেছে নেবেন?',
    'why.desc': 'আমি সৃজনশীলতা এবং পারফরম্যান্সের দিকে লক্ষ্য রেখে উচ্চমানের কাজ প্রদান করি।',
    'why.clean': 'ক্লিন কোড',
    'why.modern': 'আধুনিক UI/UX',
    'why.fast': 'দ্রুত যোগাযোগ',
    'why.time': 'সময়মতো ডেলিভারি',
    'why.rev': 'আনলিমিটেড রিভিশন',

    // Testimonials
    'testimonials.title': 'গ্রাহকদের মতামত',

    // Pricing
    'pricing.title': 'মূল্যতালিকা',
    'pricing.basic': 'বেসিক',
    'pricing.standard': 'স্ট্যান্ডার্ড',
    'pricing.premium': 'প্রিমিয়াম',
    'pricing.order': 'অর্ডার করুন',
    'pricing.recommended': 'সুপারিশকৃত',

    // CTA
    'cta.title': 'চলুন একসাথে কিছু সৃজনশীল তৈরি করি',
    'cta.sub': 'আধুনিক ডিজিটাল সমাধানের মাধ্যমে আপনার ব্র্যান্ডকে উন্নত করতে প্রস্তুত?',
    'cta.start': 'প্রজেক্ট শুরু করুন',
    'cta.contact': 'যোগাযোগ করুন',

    // Footer
    'footer.rights': '© ২০২৬ হোসেন উদ্দিন আহমেদ। সর্বস্বত্ব সংরক্ষিত।',

    // Admin
    'admin.dashboard': 'ড্যাশবোর্ড',
    'admin.projects': 'প্রজেক্টসমূহ',
    'admin.services': 'সেবাসমূহ',
    'admin.login': 'লগইন',
  }
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
