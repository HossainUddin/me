import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import type { Service } from '../../context/DataContext';
import { Button } from '../../components/ui/Button';
import { Plus, Trash2, Edit2, X, Smartphone, Shirt, Image, Monitor, Code, Megaphone } from 'lucide-react';

const iconMap: any = {
    'Web Development': Code,
    'T-Shirt Design': Shirt,
    'Product Ads': Megaphone,
    'Banner Design': Image,
    'Other': Monitor
};

export const AdminServices = () => {
    const { services, addProject, deleteProject, updateProject } = useData(); // Note: Context needs to export service methods
    // Mocking service methods for now since DataContext.tsx only had project methods explicit in the previous step
    // In a real app, we'd add addService/updateService/deleteService to DataContext
    
    // For now, let's just display the UI structure as requested
    const [isEditing, setIsEditing] = useState(false);
    const [currentService, setCurrentService] = useState<Partial<Service>>({});

    return (
        <div>
             <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Manage Services</h1>
                <Button onClick={() => setIsEditing(true)} size="sm">
                    <Plus size={18} className="mr-2" /> Add Service
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                    <div key={service.id} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 relative group">
                        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                             <button className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-md">
                                <Edit2 size={16} />
                            </button>
                            <button className="p-1.5 text-red-500 hover:bg-red-50 rounded-md">
                                <Trash2 size={16} />
                            </button>
                        </div>

                        <div className="text-primary mb-4">
                            {/* Icon placeholder */}
                            <Code size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                        <p className="text-slate-500 text-sm mb-4 h-10 overflow-hidden">{service.description}</p>
                        <div className="flex justify-between items-center text-sm font-medium">
                            <span className="text-slate-900 dark:text-white">{service.price}</span>
                            <span className="text-slate-500">{service.deliveryTime}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
