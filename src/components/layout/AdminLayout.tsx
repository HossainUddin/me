import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, FolderKanban, ShoppingBag, MessageSquare, LogOut } from 'lucide-react';

export const AdminLayout = () => {
    const navItems = [
        { path: '/admin', icon: LayoutDashboard, label: 'Dashboard', end: true },
        { path: '/admin/projects', icon: FolderKanban, label: 'Projects' },
        { path: '/admin/services', icon: ShoppingBag, label: 'Services' },
        { path: '/admin/testimonials', icon: MessageSquare, label: 'Testimonials' },
    ];

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 hidden md:flex flex-col">
                <div className="p-6">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Admin Panel</h2>
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.end}
                            className={({ isActive }) =>
                                `flex items-center px-4 py-3 rounded-lg transition-colors ${
                                    isActive
                                        ? 'bg-primary text-white'
                                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                                }`
                            }
                        >
                            <item.icon size={20} className="mr-3" />
                            <span className="font-medium">{item.label}</span>
                        </NavLink>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                    <button className="flex items-center w-full px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                        <LogOut size={20} className="mr-3" />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <div className="p-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};
