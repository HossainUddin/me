import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import siteData from '../data/data.json';

// Types
export interface Project {
  id: string;
  title: string;
  category: 'Web' | 'T-Shirt' | 'Ads' | 'Banner';
  image: string;
  description: string;
  longDescription?: string;
  tools: string[];
  link?: string;
  gallery?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  deliveryTime: string;
  features: string[];
  icon: string; // lucide-react icon name
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  review: string;
  image?: string;
}

interface DataContextType {
  projects: Project[];
  services: Service[];
  testimonials: Testimonial[];
  addProject: (project: Project) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  // Service methods
  addService: (service: Service) => void;
  updateService: (id: string, service: Partial<Service>) => void;
  deleteService: (id: string) => void;
  // Testimonial methods
  addTestimonial: (testimonial: Testimonial) => void;
  updateTestimonial: (id: string, testimonial: Partial<Testimonial>) => void;
  deleteTestimonial: (id: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('portfolio_projects');
    return saved ? JSON.parse(saved) : siteData.projects;
  });
  const [services, setServices] = useState<Service[]>(() => {
    const saved = localStorage.getItem('portfolio_services');
    return saved ? JSON.parse(saved) : siteData.services;
  });
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem('portfolio_testimonials');
    return saved ? JSON.parse(saved) : siteData.testimonials;
  });

  useEffect(() => {
    localStorage.setItem('portfolio_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('portfolio_services', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem('portfolio_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  // Projects
  const addProject = (project: Project) => {
    setProjects([...projects, project]);
  };

  const updateProject = (id: string, updatedProject: Partial<Project>) => {
    setProjects(projects.map(p => p.id === id ? { ...p, ...updatedProject } : p));
  };

  const deleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  // Services
   const addService = (service: Service) => {
    setServices([...services, service]);
  };

  const updateService = (id: string, updatedService: Partial<Service>) => {
    setServices(services.map(s => s.id === id ? { ...s, ...updatedService } : s));
  };

  const deleteService = (id: string) => {
    setServices(services.filter(s => s.id !== id));
  };
  
  // Testimonials
  const addTestimonial = (testimonial: Testimonial) => {
    setTestimonials([...testimonials, testimonial]);
  };

  const updateTestimonial = (id: string, updatedTestimonial: Partial<Testimonial>) => {
    setTestimonials(testimonials.map(t => t.id === id ? { ...t, ...updatedTestimonial } : t));
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials(testimonials.filter(t => t.id !== id));
  };

  return (
    <DataContext.Provider value={{ 
        projects, services, testimonials, 
        addProject, updateProject, deleteProject,
        addService, updateService, deleteService,
        addTestimonial, updateTestimonial, deleteTestimonial
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
