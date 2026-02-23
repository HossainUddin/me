import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { Hero } from '../components/sections/Hero';
import { TrustBar } from '../components/sections/TrustBar';
import { Services } from '../components/sections/Services';
import { Portfolio } from '../components/sections/Portfolio';
import { WhyChooseMe } from '../components/sections/WhyChooseMe';
import { Testimonials } from '../components/sections/Testimonials';
import { CallToAction } from '../components/sections/CallToAction';
import { OrderModal } from '../components/ui/OrderModal';

const Home = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            setTimeout(() => {
                scroller.scrollTo(location.state.scrollTo, {
                    smooth: true,
                    duration: 500,
                    offset: -80,
                });
            }, 100);
        }
    }, [location]);

    return (
        <div className="min-h-screen">
            <Hero />
            <TrustBar />
            <Services />
            <Portfolio />
            <WhyChooseMe />
            <Testimonials />
            <CallToAction onStartProject={() => setModalOpen(true)} />

            <OrderModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default Home;
