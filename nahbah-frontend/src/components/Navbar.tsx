import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import "@/App.css";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Get actual theme state from context
  const { resolvedTheme } = useTheme();
  
  // Special pages that should always be dark
  const alwaysDarkPages = ['/', '/designs', '/contribute'];
  const isAlwaysDark = alwaysDarkPages.includes(location.pathname);
  
  // Use dark theme for special pages, otherwise use actual theme
  const isLightMode = isAlwaysDark ? false : resolvedTheme === 'light';

  // Define text color classes with consistent sizing
  const textColor = isLightMode ? "text-black" : "text-white";
  const gradientClass = isLightMode ? "gradient-text-light" : "gradient-text";

  // Helper function for NavLink classes - same size as brand text
  const getLinkClass = (isActive: boolean) => {
    const baseClasses = `font-fjalla text-xl font-bold transition-colors duration-200 relative ${textColor}`;
    
    if (isActive) {
      const activeColor = isLightMode ? "text-lime-600" : "text-lime-400";
      return `${baseClasses} ${activeColor}`;
    }
    
    return `${baseClasses} hover:text-lime-600 dark:hover:text-lime-400`;
  };

  // Close mobile menu when a link is clicked
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="absolute left-0 w-full z-20 py-8">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div>
          <NavLink
            to="/"
            className={`font-fjalla ${textColor} text-xl flex items-center font-bold`}
            onClick={handleMobileLinkClick}
          >
            NOT A HOUSE{" "}
            <span className={`${gradientClass} ml-2`}>BUT A HOME</span>
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={({ isActive }) => getLinkClass(isActive)}>
            {({ isActive }) => (
              <>
                HOME
                {isActive && (
                  <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500 to-lime-600 rounded-full"></div>
                )}
              </>
            )}
          </NavLink>
          <NavLink to="/about-us" className={({ isActive }) => getLinkClass(isActive)}>
            {({ isActive }) => (
              <>
                ABOUT US
                {isActive && (
                  <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500 to-lime-600 rounded-full"></div>
                )}
              </>
            )}
          </NavLink>
          <NavLink to="/guide" className={({ isActive }) => getLinkClass(isActive)}>
            {({ isActive }) => (
              <>
                GUIDE
                {isActive && (
                  <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500 to-lime-600 rounded-full"></div>
                )}
              </>
            )}
          </NavLink>
          <NavLink to="/essentials" className={({ isActive }) => getLinkClass(isActive)}>
            {({ isActive }) => (
              <>
                ESSENTIALS
                {isActive && (
                  <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500 to-lime-600 rounded-full"></div>
                )}
              </>
            )}
          </NavLink>
          <NavLink to="/designs" className={({ isActive }) => getLinkClass(isActive)}>
            {({ isActive }) => (
              <>
                DESIGNS
                {isActive && (
                  <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500 to-lime-600 rounded-full"></div>
                )}
              </>
            )}
          </NavLink>
          <NavLink to="/contribute" className={({ isActive }) => getLinkClass(isActive)}>
            {({ isActive }) => (
              <>
                CONTRIBUTE
                {isActive && (
                  <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500 to-lime-600 rounded-full"></div>
                )}
              </>
            )}
          </NavLink>
          
          {/* Only show theme toggle on pages that support theme switching */}
          {!isAlwaysDark && <ThemeToggle />}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {!isAlwaysDark && <ThemeToggle />}
          <button 
            className={`${textColor} text-xl focus:outline-none p-2 rounded-lg
               hover:bg-gray-100/50 dark:hover:bg-gray-800/50
               transition-colors duration-200`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full 
                        bg-white dark:bg-black 
                        border-t border-gray-300 dark:border-gray-700 
                        shadow-lg">
          <div className="px-4 py-4 space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) => `${getLinkClass(isActive)} block py-2`}
              onClick={handleMobileLinkClick}
            >
              HOME
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) => `${getLinkClass(isActive)} block py-2`}
              onClick={handleMobileLinkClick}
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="/guide"
              className={({ isActive }) => `${getLinkClass(isActive)} block py-2`}
              onClick={handleMobileLinkClick}
            >
              GUIDE
            </NavLink>
            <NavLink
              to="/essentials"
              className={({ isActive }) => `${getLinkClass(isActive)} block py-2`}
              onClick={handleMobileLinkClick}
            >
              ESSENTIALS
            </NavLink>
            <NavLink
              to="/designs"
              className={({ isActive }) => `${getLinkClass(isActive)} block py-2`}
              onClick={handleMobileLinkClick}
            >
              DESIGNS
            </NavLink>
            <NavLink
              to="/contribute"
              className={({ isActive }) => `${getLinkClass(isActive)} block py-2`}
              onClick={handleMobileLinkClick}
            >
              CONTRIBUTE
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;