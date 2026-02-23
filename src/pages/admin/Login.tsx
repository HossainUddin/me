import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const AdminLogin = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple hardcoded password for portfolio admin, just for demonstration
        if (password === 'admin123') {
            localStorage.setItem('admin_auth', 'true');
            navigate('/admin');
        } else {
            setError('Invalid password');
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl max-w-md w-full border border-slate-200 dark:border-slate-700">
                 <div className="flex justify-center mb-6">
                     <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                         <Lock size={32} />
                     </div>
                 </div>
                 <h1 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-2">Admin Login</h1>
                 <p className="text-center text-slate-500 dark:text-slate-400 mb-8">Enter the password to access the dashboard.</p>
                 
                 <form onSubmit={handleLogin} className="space-y-6">
                     <div>
                         <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Password</label>
                         <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                            placeholder="••••••••"
                            required
                         />
                         {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                     </div>
                     <Button type="submit" fullWidth>Login</Button>
                 </form>
            </div>
        </div>
    );
};
