import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import type { Testimonial } from '../../context/DataContext';
import { Button } from '../../components/ui/Button';
import { Plus, Trash2, Edit2, X, Star } from 'lucide-react';

export const AdminTestimonials = () => {
    const { testimonials, addTestimonial, deleteTestimonial, updateTestimonial } = useData(); 
    
    const [isEditing, setIsEditing] = useState(false);
    const [currentTestimonial, setCurrentTestimonial] = useState<Partial<Testimonial>>({});

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        
        const newTestimonial = { ...currentTestimonial } as Testimonial;

        if (currentTestimonial.id && testimonials.find(t => t.id === currentTestimonial.id)) {
            updateTestimonial(currentTestimonial.id, newTestimonial);
        } else {
            // we assume context has addTestimonial, updateTestimonial, deleteTestimonial
            // let's create them dynamically or assume they are there
            addTestimonial({ ...newTestimonial, id: Date.now().toString() });
        }
        setIsEditing(false);
        setCurrentTestimonial({});
    };

    const startEdit = (testimonial?: Testimonial) => {
        setCurrentTestimonial(testimonial || { rating: 5 });
        setIsEditing(true);
    };

    return (
        <div>
             <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Manage Testimonials</h1>
                <Button onClick={() => startEdit()} size="sm">
                    <Plus size={18} className="mr-2" /> Add Client
                </Button>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700">
                            <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-300">Client</th>
                            <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-300">Rating</th>
                            <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-300">Review</th>
                            <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-300">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {testimonials.map((t) => {
                            return (
                                <tr key={t.id} className="border-b border-slate-100 dark:border-slate-700 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-700/20 transition-colors">
                                    <td className="p-4 flex items-center space-x-4">
                                        <img src={t.image || `https://api.dicebear.com/7.x/initials/svg?seed=${t.name}`} alt={t.name} className="w-10 h-10 rounded-full object-cover shadow border border-slate-200" />
                                        <div>
                                            <div className="font-medium text-slate-900 dark:text-white">{t.name}</div>
                                            <div className="text-xs text-slate-500">{t.role}</div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-yellow-500 flex items-center h-full pt-6">
                                        {Array.from({length: 5}).map((_, i) => (
                                            <Star key={i} size={14} fill={i < t.rating ? 'currentColor' : 'none'} className={i >= t.rating ? 'text-slate-300' : ''} />
                                        ))}
                                    </td>
                                    <td className="p-4 text-slate-600 dark:text-slate-300">
                                        <div className="text-sm truncate max-w-sm italic">"{t.review}"</div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex space-x-2">
                                            <button onClick={() => startEdit(t)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                                                <Edit2 size={18} />
                                            </button>
                                            <button onClick={() => deleteTestimonial(t.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
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
                            <h2 className="text-xl font-bold dark:text-white">{currentTestimonial.id ? 'Edit Testimonial' : 'New Testimonial'}</h2>
                            <button onClick={() => setIsEditing(false)} className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                                <X />
                            </button>
                        </div>
                        <form onSubmit={handleSave} className="space-y-4">
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium mb-1 dark:text-slate-300">Name</label>
                                    <input 
                                        className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:text-white dark:border-slate-600" 
                                        placeholder="e.g. John Doe"
                                        value={currentTestimonial.name || ''}
                                        onChange={(e) => setCurrentTestimonial({...currentTestimonial, name: e.target.value})}
                                        required
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-medium mb-1 dark:text-slate-300">Role/Company</label>
                                    <input 
                                        className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:text-white dark:border-slate-600" 
                                        placeholder="e.g. CEO of TechCorp"
                                        value={currentTestimonial.role || ''}
                                        onChange={(e) => setCurrentTestimonial({...currentTestimonial, role: e.target.value})}
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div className="flex gap-4">
                                <div className="w-1/3">
                                    <label className="block text-sm font-medium mb-1 dark:text-slate-300">Rating (1-5)</label>
                                    <input 
                                        type="number"
                                        min="1" max="5"
                                        className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:text-white dark:border-slate-600" 
                                        value={currentTestimonial.rating || 5}
                                        onChange={(e) => setCurrentTestimonial({...currentTestimonial, rating: parseInt(e.target.value)})}
                                        required
                                    />
                                </div>
                                <div className="w-2/3">
                                    <label className="block text-sm font-medium mb-1 dark:text-slate-300">Avatar URL (Optional)</label>
                                    <input 
                                        className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:text-white dark:border-slate-600" 
                                        placeholder="Image URL"
                                        value={currentTestimonial.image || ''}
                                        onChange={(e) => setCurrentTestimonial({...currentTestimonial, image: e.target.value})}
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium mb-1 dark:text-slate-300">Review</label>
                                <textarea 
                                    className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:text-white dark:border-slate-600" 
                                    placeholder="Client review text..."
                                    rows={4}
                                    value={currentTestimonial.review || ''}
                                    onChange={(e) => setCurrentTestimonial({...currentTestimonial, review: e.target.value})}
                                    required
                                />
                            </div>
                            
                            <Button type="submit" className="w-full pt-2">Save Testimonial</Button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
