
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X, User, Code, Briefcase, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Switch } from '@/components/ui/switch';
import { NavLink } from "react-router-dom";

const Header = () => {
  const [activePage, setActivePage] = useState('features');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to light mode
  
  useEffect(() => {
    // Apply the theme to the document when it changes
    if (isDarkMode) {
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
    }
  }, [isDarkMode]);
  
  const handleNavClick = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActivePage(page);
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="sticky top-0 z-50 pt-8 px-4">
      <header className="w-full max-w-7xl mx-auto py-6 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo box */}
          <div className="bg-zinc-800 rounded-lg w-10 h-10 flex items-center justify-center shadow-md">
            {/* SVG logo - just a white square, no text */}
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="white" />
            </svg>
          </div>
          {/* Site name */}
          <span className="text-2xl font-bold tracking-tight text-foreground">Satyam100x Devs</span>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-3 rounded-2xl text-muted-foreground hover:text-foreground"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
          <div className="rounded-full px-1 py-1 backdrop-blur-md bg-background/80 border border-border shadow-lg">
            <div className="flex gap-2">
              <NavLink to="/skills" className={({ isActive }) => cn("px-4 py-2 rounded-full transition-colors relative", isActive ? "text-accent-foreground bg-accent" : "text-muted-foreground hover:text-foreground hover:bg-muted")}>Skills</NavLink>
              <NavLink to="/projects" className={({ isActive }) => cn("px-4 py-2 rounded-full transition-colors relative", isActive ? "text-accent-foreground bg-accent" : "text-muted-foreground hover:text-foreground hover:bg-muted")}>Projects</NavLink>
              <NavLink to="/experience" className={({ isActive }) => cn("px-4 py-2 rounded-full transition-colors relative", isActive ? "text-accent-foreground bg-accent" : "text-muted-foreground hover:text-foreground hover:bg-muted")}>Experience</NavLink>
              <NavLink to="/about" className={({ isActive }) => cn("px-4 py-2 rounded-full transition-colors relative", isActive ? "text-accent-foreground bg-accent" : "text-muted-foreground hover:text-foreground hover:bg-muted")}>About</NavLink>
              <NavLink to="/contact" className={({ isActive }) => cn("px-4 py-2 rounded-full transition-colors relative", isActive ? "text-accent-foreground bg-accent" : "text-muted-foreground hover:text-foreground hover:bg-muted")}>Contact</NavLink>
            </div>
          </div>
        </nav>
        
        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md py-4 px-6 border border-border rounded-2xl shadow-lg z-50">
            <div className="flex flex-col gap-4">
              <NavLink to="/skills" className={({ isActive }) => cn("px-3 py-2 text-sm rounded-md transition-colors", isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted")} onClick={() => setMobileMenuOpen(false)}>Skills</NavLink>
              <NavLink to="/projects" className={({ isActive }) => cn("px-3 py-2 text-sm rounded-md transition-colors", isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted") } onClick={() => setMobileMenuOpen(false)}>Projects</NavLink>
              <NavLink to="/experience" className={({ isActive }) => cn("px-3 py-2 text-sm rounded-md transition-colors", isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted") } onClick={() => setMobileMenuOpen(false)}>Experience</NavLink>
              <NavLink to="/about" className={({ isActive }) => cn("px-3 py-2 text-sm rounded-md transition-colors", isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted") } onClick={() => setMobileMenuOpen(false)}>About</NavLink>
              <NavLink to="/contact" className={({ isActive }) => cn("px-3 py-2 text-sm rounded-md transition-colors", isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted") } onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
              {/* Add theme toggle for mobile */}
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm text-muted-foreground">Theme</span>
                <div className="flex items-center gap-2">
                  <Moon size={16} className={`${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
                  <Switch 
                    checked={!isDarkMode} 
                    onCheckedChange={toggleTheme} 
                    className="data-[state=checked]:bg-primary"
                  />
                  <Sun size={16} className={`${!isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="hidden md:flex items-center gap-4">
          {/* Theme toggle for desktop */}
          <div className="flex items-center gap-2 rounded-full px-3 py-2">
            <Moon size={18} className={`${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
            <Switch 
              checked={!isDarkMode} 
              onCheckedChange={toggleTheme} 
              className="data-[state=checked]:bg-primary"
            />
            <Sun size={18} className={`${!isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
          </div>
          <div className="rounded-2xl">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-muted">Contact</Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
