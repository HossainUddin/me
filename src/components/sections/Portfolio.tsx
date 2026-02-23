import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useData } from '../../context/DataContext';
import { Section } from '../ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Portfolio = () => {
  const { t } = useLanguage();
  const { projects } = useData();
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web', 'T-Shirt', 'Ads', 'Banner'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <Section id="portfolio" className="bg-background-light dark:bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-slate-900 dark:text-white">
          {t('portfolio.title')}
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {t(`portfolio.${cat.toLowerCase()}`) || cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                 <h3 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                   {project.title}
                 </h3>
                 <p className="text-slate-300 text-sm mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                   {project.category}
                 </p>
                 <Link to={`/portfolio/${project.id}`}>
                   <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-primary translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                      View Details
                   </Button>
                 </Link>
              </div>
              
              {/* Mobile details (visible below image on mobile, or just standard card view) */}
               <div className="p-4 md:hidden">
                    <h3 className="font-bold text-slate-900 dark:text-white">{project.title}</h3>
                    <p className="text-sm text-slate-500">{project.category}</p>
               </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
};
