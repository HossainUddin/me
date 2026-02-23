import React from 'react';
import { useData } from '../../context/DataContext';
import { FolderKanban, ShoppingBag, MessageSquare, Users, Download } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const AdminDashboard = () => {
    const { projects, services, testimonials } = useData();

    const stats = [
        { label: 'Total Projects', value: projects.length, icon: FolderKanban, color: 'bg-blue-500' },
        { label: 'Active Services', value: services.length, icon: ShoppingBag, color: 'bg-indigo-500' },
        { label: 'Testimonials', value: testimonials.length, icon: MessageSquare, color: 'bg-purple-500' },
        { label: 'Total Clients', value: '12', icon: Users, color: 'bg-green-500' },
    ];

    const handleExport = () => {
        const data = {
            projects,
            services,
            testimonials
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard Overview</h1>
                <Button onClick={handleExport} size="sm" className="flex items-center gap-2">
                    <Download size={16} />
                    Export data.json
                </Button>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 p-4 rounded-xl mb-8 text-sm">
                <strong>Static Hosting Note:</strong> Since this portfolio uses static hosting (GitHub Pages), changes made in the admin panel are only saved to your browser's local storage. To publish changes for everyone, click <strong>Export data.json</strong> and replace the <code>src/data/data.json</code> file in your code, then run a GitHub commit!
            </div>
            
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
