import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import Home from './pages/Home';
import { ServiceDetails } from './pages/ServiceDetails';
import { ProjectDetails } from './pages/ProjectDetails';

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
                <Route path="/portfolio/:id" element={<ProjectDetails />} />
              </Routes>
            </div>
          </DataProvider>
        </ThemeProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;
