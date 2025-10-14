import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const { t } = useTranslation('components');
  const location = useLocation();
  
  const isLightMode = resolvedTheme === 'light';
  
  // Pages that always have dark backgrounds and need white text
  const alwaysDarkPages = ['/', '/contribute', '/designs'];
  const isAlwaysDark = alwaysDarkPages.includes(location.pathname);

  const textColor = (isLightMode && !isAlwaysDark) ? 'text-black' : 'text-white';
  const gradientClass = 'bg-gradient-to-r from-yellow-500 to-lime-600 bg-clip-text text-transparent';

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const getLinkClass = (isActive: boolean) =>
    `font-fjalla text-lg relative px-1 py-1 transition-colors duration-200 ${
      (isLightMode && !isAlwaysDark) 
        ? `${isActive ? 'text-lime-600' : 'text-black'} hover:text-lime-600`
        : `${isActive ? 'text-lime-400' : 'text-white'} hover:text-lime-400`
    }`;

  return (
    <nav className="absolute left-0 w-full z-20 py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div>
          <NavLink
            to="/"
            className={`font-fjalla text-lg ${textColor} flex items-center font-bold`}
            onClick={handleMobileLinkClick}
          >
            {t('navbar.brand.notAHouse')}{" "}
            <span className={`${gradientClass} ml-2`}>{t('navbar.brand.butAHome')}</span>
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={({ isActive }) => getLinkClass(isActive)}>
            {({ isActive }) => (
              <>
                {t('navbar.home')}
                {isActive && (
                  <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500 to-lime-600 rounded-full"></div>
                )}
              </>
            )}
          </NavLink>
          <NavLink to="/about-us" className={({ isActive }) => getLinkClass(isActive)}>
            {({ isActive }) => (
              <>
                {t('navbar.aboutUs')}
                {isActive && (
                  <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500 to-lime-600 rounded-full"></div>
                )}
              </>
            )}
          </NavLink>
          <NavLink to="/guide" className={({ isActive }) => getLinkClass(isActive)}>
            {({ isActive }) => (
              <>
                {t('navbar.guide')}
                {isActive && (
                  <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500 to-lime-600 rounded-full"></div>
                )}
              </>
            )}
          </NavLink>
          <NavLink to="/essentials" className={({ isActive }) => getLinkClass(isActive)}>
            {({ isActive }) => (
              <>
                {t('navbar.essentials')}
                {isActive && (
                  <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500 to-lime-600 rounded-full"></div>
                )}
              </>
            )}
          </NavLink>
          <NavLink to="/designs" className={({ isActive }) => getLinkClass(isActive)}>
            {({ isActive }) => (
              <>
                {t('navbar.designs')}
                {isActive && (
                  <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500 to-lime-600 rounded-full"></div>
                )}
              </>
            )}
          </NavLink>
          <NavLink to="/contribute" className={({ isActive }) => getLinkClass(isActive)}>
            {({ isActive }) => (
              <>
                {t('navbar.contribute')}
                {isActive && (
                  <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500 to-lime-600 rounded-full"></div>
                )}
              </>
            )}
          </NavLink>
          
          {/* Only show theme toggle on pages that actually support themes */}
          {!isAlwaysDark && <ThemeToggle />}
          <LanguageSwitcher isAlwaysDark={isAlwaysDark} />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Only show theme toggle on pages that actually support themes */}
          {!isAlwaysDark && <ThemeToggle />}
          <LanguageSwitcher isAlwaysDark={isAlwaysDark} />
          <button
            onClick={toggleMobileMenu}
            className={`${textColor} focus:outline-none`}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-black bg-opacity-95 dark:bg-opacity-95 backdrop-blur-md">
          <div className="px-4 py-6 space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) => `block ${getLinkClass(isActive)}`}
              onClick={handleMobileLinkClick}
            >
              {t('navbar.home')}
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) => `block ${getLinkClass(isActive)}`}
              onClick={handleMobileLinkClick}
            >
              {t('navbar.aboutUs')}
            </NavLink>
            <NavLink
              to="/guide"
              className={({ isActive }) => `block ${getLinkClass(isActive)}`}
              onClick={handleMobileLinkClick}
            >
              {t('navbar.guide')}
            </NavLink>
            <NavLink
              to="/essentials"
              className={({ isActive }) => `block ${getLinkClass(isActive)}`}
              onClick={handleMobileLinkClick}
            >
              {t('navbar.essentials')}
            </NavLink>
            <NavLink
              to="/designs"
              className={({ isActive }) => `block ${getLinkClass(isActive)}`}
              onClick={handleMobileLinkClick}
            >
              {t('navbar.designs')}
            </NavLink>
            <NavLink
              to="/contribute"
              className={({ isActive }) => `block ${getLinkClass(isActive)}`}
              onClick={handleMobileLinkClick}
            >
              {t('navbar.contribute')}
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;