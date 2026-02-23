import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import type { Service } from '../../context/DataContext';
import { Button } from '../../components/ui/Button';
import { Plus, Trash2, Edit2, X, Shirt, Image, Monitor, Code, Megaphone } from 'lucide-react';

const iconMap: any = {
    'Code': Code,
    'Shirt': Shirt,
    'Megaphone': Megaphone,
    'Image': Image,
    'Monitor': Monitor
};

export const AdminServices = () => {
    const { services, addService, deleteService, updateService } = useData(); 
    
    const [isEditing, setIsEditing] = useState(false);
    const [currentService, setCurrentService] = useState<Partial<Service>>({});

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        
        let featuresArray = currentService.features;
        if (typeof currentService.features === 'string') {
            featuresArray = (currentService.features as string).split(',').map(f => f.trim()).filter(f => f.length > 0);
        } else if (!currentService.features) {
            featuresArray = [];
        }

        const newService = {
            ...currentService,
            features: featuresArray
        } as Service;

        if (currentService.id && services.find(s => s.id === currentService.id)) {
            updateService(currentService.id, newService);
        } else {
            addService({ ...newService, id: Date.now().toString() });
        }
        setIsEditing(false);
        setCurrentService({});
    };

    const startEdit = (service?: Service) => {
        // Convert features array to comma-separated string for editing
        const serviceToEdit = service ? { 
            ...service, 
            features: service.features.join(', ') as any 
        } : { icon: 'Code', features: '' as any };
        
        setCurrentService(serviceToEdit);
        setIsEditing(true);
    };

    return (
        <div>
             <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Manage Services</h1>
                <Button onClick={() => startEdit()} size="sm">
                    <Plus size={18} className="mr-2" /> Add Service
                </Button>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700">
                            <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-300">Icon</th>
                            <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-300">Title</th>
                            <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-300">Price / Delivery</th>
                            <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-300">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service) => {
                            const IconCmp = iconMap[service.icon] || Code;
                            return (
                                <tr key={service.id} className="border-b border-slate-100 dark:border-slate-700 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-700/20 transition-colors">
                                    <td className="p-4 text-primary">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <IconCmp size={20} />
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="font-medium text-slate-900 dark:text-white">{service.title}</div>
                                        <div className="text-xs text-slate-500 truncate max-w-[200px]">{service.description}</div>
                                    </td>
                                    <td className="p-4 text-slate-600 dark:text-slate-300">
                                        <div className="font-medium">{service.price}</div>
                                        <div className="text-xs">{service.deliveryTime}</div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex space-x-2">
                                            <button onClick={() => startEdit(service)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                                                <Edit2 size={18} />
                                            </button>
                                            <button onClick={() => deleteService(service.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Edit Form Modal */}
            {isEditing && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-slate-800 rounded-xl max-w-lg w-full p-6 shadow-2xl overflow-y-auto max-h-[90vh]">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold dark:text-white">{currentService.id ? 'Edit Service' : 'New Service'}</h2>
                            <button onClick={() => setIsEditing(false)} className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                                <X />
                            </button>
                        </div>
                        <form onSubmit={handleSave} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1 dark:text-slate-300">Service Title</label>
                                <input 
                                    className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:text-white dark:border-slate-600" 
                                    placeholder="e.g. Web Development"
                                    value={currentService.title || ''}
                                    onChange={(e) => setCurrentService({...currentService, title: e.target.value})}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1 dark:text-slate-300">Icon</label>
                                <select
                                    className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:text-white dark:border-slate-600"
                                    value={currentService.icon || 'Code'}
                                    onChange={(e) => setCurrentService({...currentService, icon: e.target.value})}
                                >
                                    {Object.keys(iconMap).map(key => (
                                        <option key={key} value={key}>{key}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium mb-1 dark:text-slate-300">Price</label>
                                    <input 
                                        className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:text-white dark:border-slate-600" 
                                        placeholder="e.g. $299"
                                        value={currentService.price || ''}
                                        onChange={(e) => setCurrentService({...currentService, price: e.target.value})}
                                        required
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-medium mb-1 dark:text-slate-300">Delivery</label>
                                    <input 
                                        className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:text-white dark:border-slate-600" 
                                        placeholder="e.g. 7 Days"
                                        value={currentService.deliveryTime || ''}
                                        onChange={(e) => setCurrentService({...currentService, deliveryTime: e.target.value})}
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1 dark:text-slate-300">Description</label>
                                <textarea 
                                    className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:text-white dark:border-slate-600" 
                                    placeholder="Short description of the service"
                                    rows={3}
                                    value={currentService.description || ''}
                                    onChange={(e) => setCurrentService({...currentService, description: e.target.value})}
                                    required
                                />
                            </div>
                             <div>
                                <label className="block text-sm font-medium mb-1 dark:text-slate-300">Features (Comma Separated)</label>
                                <input 
                                    className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:text-white dark:border-slate-600" 
                                    placeholder="Responsive, SEO Optimized, Custom Code..."
                                    value={currentService.features || ''}
                                    onChange={(e) => setCurrentService({...currentService, features: e.target.value as any})}
                                    required
                                />
                            </div>
                            
                            <Button type="submit" className="w-full pt-2">Save Service</Button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
