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
  const alwaysDarkPages = ['/', '/contribute', '/plans'];
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
    `font-fjalla text-lg relative px-1 py-1 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime-500 focus-visible:outline-offset-2 rounded ${
      (isLightMode && !isAlwaysDark) 
        ? `${isActive ? 'text-lime-600' : 'text-black'} hover:text-lime-600`
        : `${isActive ? 'text-lime-400' : 'text-white'} hover:text-lime-400`
    }`;

  return (
    <nav 
      className="absolute left-0 w-full z-20 py-4" 
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div>
          <NavLink
            to="/"
            className={`font-fjalla text-lg ${textColor} flex items-center font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime-500 focus-visible:outline-offset-2 rounded`}
            onClick={handleMobileLinkClick}
            aria-label={`${t('navbar.brand.notAHouse')} ${t('navbar.brand.butAHome')} - Home`}
          >
            {t('navbar.brand.notAHouse')}{" "}
            <span className={`${gradientClass} ml-2`}>{t('navbar.brand.butAHome')}</span>
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8" role="menubar">
          {[
            { to: '/', label: t('navbar.home') },
            { to: '/about-us', label: t('navbar.aboutUs') },
            { to: '/guide', label: t('navbar.guide') },
            { to: '/principles', label: t('navbar.principles') },
            { to: '/materials', label: t('navbar.materials') },
            { to: '/plans', label: t('navbar.plans') },
            { to: '/contribute', label: t('navbar.contribute') },
          ].map(({ to, label }) => (
            <li key={to} role="none">
              <NavLink 
                to={to} 
                className={({ isActive }) => getLinkClass(isActive)}
                role="menuitem"
              >
                {({ isActive }) => (
                  <>
                    <span aria-current={isActive ? 'page' : undefined}>{label}</span>
                    {isActive && (
                      <div 
                        className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500 to-lime-600 rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
          
          <li role="none">
            {!isAlwaysDark && <ThemeToggle />}
          </li>
          <li role="none">
            <LanguageSwitcher isAlwaysDark={isAlwaysDark} />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {!isAlwaysDark && <ThemeToggle />}
          <LanguageSwitcher isAlwaysDark={isAlwaysDark} />
          <button
            onClick={toggleMobileMenu}
            className={`${textColor} focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 rounded p-2`}
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
        <div 
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-black bg-opacity-95 dark:bg-opacity-95 backdrop-blur-md"
          role="menu"
        >
          <ul className="px-4 py-6 space-y-4" role="none">
            {[
              { to: '/', label: t('navbar.home') },
              { to: '/about-us', label: t('navbar.aboutUs') },
              { to: '/guide', label: t('navbar.guide') },
              { to: '/principles', label: t('navbar.principles') },
              { to: '/materials', label: t('navbar.materials') },
              { to: '/plans', label: t('navbar.plans') },
              { to: '/contribute', label: t('navbar.contribute') },
            ].map(({ to, label }) => (
              <li key={to} role="none">
                <NavLink
                  to={to}
                  className={({ isActive }) => `block ${getLinkClass(isActive)}`}
                  onClick={handleMobileLinkClick}
                  role="menuitem"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;