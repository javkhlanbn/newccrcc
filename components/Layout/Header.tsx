import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../../constants';
import { Menu, X, ChevronDown, Moon, Sun, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        scrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-md py-3' 
          : 'bg-white dark:bg-slate-900 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <Link to="/" className="flex items-center space-x-3 shrink-0">
            <div className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-800 dark:text-white leading-tight uppercase text-sm tracking-wide">
                Mongolia Climate<br/>& Carbon Projects
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <div 
                key={item.id} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <button className="flex items-center px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary-700 dark:hover:text-primary-400 transition-colors">
                    {item.label}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                ) : (
                  <NavLink 
                    to={item.path || '#'} 
                    className={({ isActive }) => 
                      `px-3 py-2 text-sm font-medium transition-colors ${
                        isActive ? 'text-primary-700 dark:text-primary-400' : 'text-slate-700 dark:text-slate-200 hover:text-primary-700 dark:hover:text-primary-400'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-100 dark:border-slate-700 overflow-hidden"
                    >
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.id}
                            to={child.path || '#'}
                            className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-primary-700 dark:hover:text-primary-400 border-l-4 border-transparent hover:border-primary-500 transition-all"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Utility Icons */}
          <div className="hidden xl:flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className="flex items-center space-x-1 text-sm font-medium text-slate-600 dark:text-slate-300 border-l border-gray-300 dark:border-slate-700 pl-4">
              <Globe className="w-4 h-4 mr-1" />
              <span className="text-primary-700 dark:text-primary-400 cursor-pointer">MN</span>
              <span>/</span>
              <span className="hover:text-primary-700 dark:hover:text-primary-400 cursor-pointer transition-colors">EN</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 overflow-y-auto max-h-[80vh]"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.id} className="border-b border-gray-100 dark:border-slate-800 last:border-0 pb-2 mb-2">
                  {item.children ? (
                    <div className="space-y-2">
                      <div className="px-3 py-2 text-base font-bold text-slate-900 dark:text-white">
                        {item.label}
                      </div>
                      <div className="pl-4 space-y-1 border-l-2 border-gray-200 dark:border-slate-700 ml-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.id}
                            to={child.path || '#'}
                            className="block px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary-700 dark:hover:text-primary-400"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path || '#'}
                      className="block px-3 py-2 text-base font-medium text-slate-900 dark:text-white hover:text-primary-700"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;