import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Link } from 'react-scroll';

interface CallToActionProps {
    onStartProject?: () => void;
}

export const CallToAction = ({ onStartProject }: CallToActionProps) => {
    const { t } = useLanguage();

    return (
        <Section id="cta" className="relative overflow-hidden py-24 bg-gradient-to-r from-primary to-purple-600">
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="text-center text-white relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                    {t('cta.title')}
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                    {t('cta.sub')}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button 
                        size="lg" 
                        onClick={onStartProject}
                        className="bg-white text-primary hover:bg-slate-100 border-none shadow-xl"
                    >
                        {t('cta.start')}
                    </Button>
                    <Link to="contact" smooth={true} duration={500}>
                         <Button 
                            variant="outline" 
                            size="lg" 
                            className="border-white text-white hover:bg-white/20 hover:text-white"
                        >
                            {t('cta.contact')}
                        </Button>
                    </Link>
                </div>
            </div>
        </Section>
    );
};
