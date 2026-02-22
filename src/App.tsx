import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AdminLayout } from './components/layout/AdminLayout';
import Home from './pages/Home';
import { AdminDashboard } from './pages/admin/Dashboard';
import { AdminProjects } from './pages/admin/Projects';
import { AdminServices } from './pages/admin/Services';
import { ServiceDetails } from './pages/ServiceDetails';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <ThemeProvider>
          <DataProvider>
            <div className="min-h-screen bg-background-light dark:bg-background text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">
              <Routes>
                {/* Public Route */}
                <Route path="/" element={
                  <>
                    <Navbar />
                    <Home />
                    <Footer />
                  </>
                } />
                <Route path="/services/:id" element={<ServiceDetails />} />

                {/* Admin Routes */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<AdminDashboard />} />
                    <Route path="projects" element={<AdminProjects />} />
                    <Route path="services" element={<AdminServices />} />
                    {/* Placeholder for testimonials */}
                    <Route path="testimonials" element={<div className="p-8">Testimonials Management Coming Soon</div>} />
                </Route>
              </Routes>
            </div>
          </DataProvider>
        </ThemeProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;
