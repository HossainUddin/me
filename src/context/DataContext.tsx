import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

// Types
export interface Project {
  id: string;
  title: string;
  category: 'Web' | 'T-Shirt' | 'Ads' | 'Banner';
  image: string;
  description: string;
  tools: string[];
  link?: string;
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

// Mock Initial Data (Same as before)
const initialProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Full-stack e-commerce solution with payment gateway.',
    tools: ['React', 'Node.js', 'MongoDB'],
     link: '#'
  },
  {
    id: '2',
    title: 'Urban Streetwear',
    category: 'T-Shirt',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Modern streetwear design for a local brand.',
    tools: ['Photoshop', 'Illustrator'],
  },
  {
    id: '3',
    title: 'Tech Gadget Ad',
    category: 'Ads',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Social media advertisement for new headphones.',
    tools: ['Photoshop', 'After Effects'],
  },
    {
    id: '4',
    title: 'Corporate Banner',
    category: 'Banner',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'LinkedIn banner for a software company.',
    tools: ['Illustrator', 'Figma'],
  },
];

const initialServices: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Modern, responsive, and high-performance websites.',
    price: '$299',
    deliveryTime: '7 Days',
    features: ['Responsive Design', 'SEO Optimized', 'Admin Panel'],
    icon: 'Code',
  },
  {
    id: '2',
    title: 'T-Shirt Design',
    description: 'Creative and trendy t-shirt designs for your brand.',
    price: '$50',
    deliveryTime: '2 Days',
    features: ['High Resolution', 'Print Ready', 'Source File'],
    icon: 'Shirt',
  },
    {
    id: '3',
    title: 'Product Ads',
    description: 'Eye-catching visuals to boost your product sales.',
    price: '$80',
    deliveryTime: '3 Days',
    features: ['Social Media Ready', 'High Conversion', 'Unlimited Revisions'],
    icon: 'Megaphone',
  },
     {
    id: '4',
    title: 'Banner Design',
    description: 'Professional banners for web and print.',
    price: '$40',
    deliveryTime: '2 Days',
    features: ['Custom Size', 'Brand Aligned', 'Fast Delivery'],
    icon: 'Image',
  },
];

const initialTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Doe',
    role: 'CEO, TechCorp',
    rating: 5,
    review: 'Hossain is an amazing developer. He delivered the project on time and exceeded our expectations.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
  },
    {
    id: '2',
    name: 'Sarah Smith',
    role: 'Marketing Manager',
    rating: 5,
    review: 'The ad visuals were stunning! Our click-through rate increased by 50%.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
  },
];

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('portfolio_projects');
    return saved ? JSON.parse(saved) : initialProjects;
  });
  const [services, setServices] = useState<Service[]>(() => {
    const saved = localStorage.getItem('portfolio_services');
    return saved ? JSON.parse(saved) : initialServices;
  });
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem('portfolio_testimonials');
    return saved ? JSON.parse(saved) : initialTestimonials;
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
