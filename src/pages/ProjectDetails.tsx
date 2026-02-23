import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export const ProjectDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { projects } = useData();
    const navigate = useNavigate();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Project Not Found</h2>
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
            <div className="flex-1 pt-32 pb-20 px-6 max-w-5xl mx-auto w-full">
                <button 
                    onClick={() => navigate('/')}
                    className="flex items-center text-slate-600 dark:text-slate-400 hover:text-primary mb-8 transition-colors font-medium"
                >
                    <ArrowLeft className="mr-2" size={20} />
                    Back to Portfolio
                </button>
                
                <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700">
                    <div className="w-full aspect-video bg-slate-200 dark:bg-slate-900 overflow-hidden relative group">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                             <span className="bg-primary text-white text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                                 {project.category}
                             </span>
                        </div>
                    </div>
                    
                    <div className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                            <div>
                                <h1 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-4">
                                    {project.title}
                                </h1>
                                <p className="text-xl text-slate-600 dark:text-slate-300">
                                    {project.description}
                                </p>
                            </div>
                            
                            {project.link && project.link.trim() !== '#' && (
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 font-medium px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
                                >
                                    <ExternalLink size={18} className="mr-2" />
                                    Live Preview
                                </a>
                            )}
                        </div>

                        <div className="mt-12 bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                             <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Technologies Used</h2>
                             <div className="flex flex-wrap gap-3">
                                 {project.tools.map((tool, idx) => (
                                     <span key={idx} className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg font-medium shadow-sm border border-slate-200 dark:border-slate-700">
                                         {tool}
                                     </span>
                                 ))}
                             </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
