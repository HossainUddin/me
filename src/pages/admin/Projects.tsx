import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import type { Project } from '../../context/DataContext';
import { Button } from '../../components/ui/Button';
import { Plus, Trash2, Edit2, X } from 'lucide-react';

export const AdminProjects = () => {
    const { projects, addProject, deleteProject, updateProject } = useData();
    const [isEditing, setIsEditing] = useState(false);
    const [currentProject, setCurrentProject] = useState<Partial<Project>>({});

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (currentProject.id && projects.find(p => p.id === currentProject.id)) {
            updateProject(currentProject.id, currentProject);
        } else {
            addProject({
                ...currentProject,
                id: Date.now().toString(),
                tools: typeof currentProject.tools === 'string' ? (currentProject.tools as string).split(',') : currentProject.tools || []
            } as Project);
        }
        setIsEditing(false);
        setCurrentProject({});
    };

    const startEdit = (project?: Project) => {
        setCurrentProject(project || { category: 'Web', tools: [] });
        setIsEditing(true);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Manage Projects</h1>
                <Button onClick={() => startEdit()} size="sm">
                    <Plus size={18} className="mr-2" /> Add Project
                </Button>
            </div>

            {/* List */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700">
                            <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-300">Image</th>
                            <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-300">Title</th>
                            <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-300">Category</th>
                            <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-300">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project) => (
                            <tr key={project.id} className="border-b border-slate-100 dark:border-slate-700 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-700/20 transition-colors">
                                <td className="p-4">
                                    <img src={project.image} alt="" className="w-12 h-12 rounded-lg object-cover" />
                                </td>
                                <td className="p-4 font-medium text-slate-900 dark:text-white">{project.title}</td>
                                <td className="p-4 text-slate-500">{project.category}</td>
                                <td className="p-4">
                                    <div className="flex space-x-2">
                                        <button onClick={() => startEdit(project)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg">
                                            <Edit2 size={18} />
                                        </button>
                                        <button onClick={() => deleteProject(project.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Edit Modal (Simplified inline for speed) */}
            {isEditing && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-slate-800 rounded-xl max-w-lg w-full p-6 shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold dark:text-white">{currentProject.id ? 'Edit Project' : 'New Project'}</h2>
                            <button onClick={() => setIsEditing(false)}><X className="dark:text-white" /></button>
                        </div>
                        <form onSubmit={handleSave} className="space-y-4">
                            <input 
                                className="w-full p-2 border rounded dark:bg-slate-700 dark:text-white dark:border-slate-600" 
                                placeholder="Project Title"
                                value={currentProject.title || ''}
                                onChange={(e) => setCurrentProject({...currentProject, title: e.target.value})}
                                required
                            />
                            <select
                                className="w-full p-2 border rounded dark:bg-slate-700 dark:text-white dark:border-slate-600"
                                value={currentProject.category || 'Web'}
                                onChange={(e) => setCurrentProject({...currentProject, category: e.target.value as any})}
                            >
                                <option value="Web">Web</option>
                                <option value="T-Shirt">T-Shirt</option>
                                <option value="Ads">Ads</option>
                                <option value="Banner">Banner</option>
                            </select>
                            <input 
                                className="w-full p-2 border rounded dark:bg-slate-700 dark:text-white dark:border-slate-600" 
                                placeholder="Image URL"
                                value={currentProject.image || ''}
                                onChange={(e) => setCurrentProject({...currentProject, image: e.target.value})}
                                required
                            />
                            <textarea 
                                className="w-full p-2 border rounded dark:bg-slate-700 dark:text-white dark:border-slate-600" 
                                placeholder="Description"
                                value={currentProject.description || ''}
                                onChange={(e) => setCurrentProject({...currentProject, description: e.target.value})}
                                required
                            />
                            <Button type="submit" className="w-full">Save Project</Button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
