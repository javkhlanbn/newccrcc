import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Transparency from './pages/Transparency';
import About from './pages/About';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 transition-colors duration-200">
        <Header toggleTheme={toggleTheme} isDark={isDark} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/transparency/*" element={<Transparency />} />
            <Route path="/news/*" element={<Home />} /> {/* Reuse Home news section concept for now */}
            <Route path="/about/*" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback routes */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;