import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export const ServiceDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { services } = useData();
    const navigate = useNavigate();
    
    // Automatically scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const service = services.find(s => s.id === id);

    if (!service) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Service Not Found</h2>
                        <button onClick={() => navigate('/')} className="text-primary hover:underline">
                            Return to Home
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
            <Navbar />
            <div className="flex-1 pt-32 pb-20 px-6 max-w-4xl mx-auto w-full">
                <button 
                    onClick={() => navigate('/')}
                    className="flex items-center text-slate-600 dark:text-slate-400 hover:text-primary mb-12 transition-colors font-medium"
                >
                    <ArrowLeft className="mr-2" size={20} />
                    Back to Home
                </button>
                
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center space-x-4 mb-8">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                             {/* An icon placeholder or generic display could go here */}
                             <span className="font-bold text-2xl">{service.title.charAt(0)}</span>
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
                                {service.title}
                            </h1>
                        </div>
                    </div>
                    
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-12 font-medium">
                            {service.description}
                        </p>
                        
                        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-8 mb-12 border border-slate-100 dark:border-slate-700">
                            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">What You Can Expect</h2>
                            <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="text-primary mr-3 mt-1">✓</span>
                                        <span className="text-lg">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                             <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                                 <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-2">Estimated Delivery</h3>
                                 <p className="text-blue-800 dark:text-blue-300 text-lg">{service.deliveryTime}</p>
                             </div>
                             <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-2xl border border-green-100 dark:border-green-900/30">
                                 <h3 className="font-bold text-green-900 dark:text-green-200 mb-2">Starting Price</h3>
                                 <p className="text-green-800 dark:text-green-300 text-lg">{service.price}</p>
                             </div>
                        </div>

                         <div className="text-center">
                            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Ready to get started?</h2>
                            <button 
                                onClick={() => navigate('/', { state: { scrollTo: 'cta' } })} 
                                className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
                            >
                                Contact Me Today
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
