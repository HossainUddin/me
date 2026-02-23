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
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  return (
    <DataContext.Provider value={{
        projects: siteData.projects as Project[],
        services: siteData.services as Service[],
        testimonials: siteData.testimonials as Testimonial[]
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
