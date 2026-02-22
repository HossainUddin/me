import React from 'react';
import { useData } from '../../context/DataContext';
import { FolderKanban, ShoppingBag, MessageSquare, Users } from 'lucide-react';

export const AdminDashboard = () => {
    const { projects, services, testimonials } = useData();

    const stats = [
        { label: 'Total Projects', value: projects.length, icon: FolderKanban, color: 'bg-blue-500' },
        { label: 'Active Services', value: services.length, icon: ShoppingBag, color: 'bg-indigo-500' },
        { label: 'Testimonials', value: testimonials.length, icon: MessageSquare, color: 'bg-purple-500' },
        { label: 'Total Clients', value: '12', icon: Users, color: 'bg-green-500' },
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Dashboard Overview</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10 text-${stat.color.replace('bg-', '')}`}>
                                <stat.icon size={24} className={`text-${stat.color.replace('bg-', '')}`} /> 
                                {/* Note: Tailwind class interpolation might not work perfectly without safelist, keeping simple for now */}
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                        <div className="text-sm text-slate-500">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
