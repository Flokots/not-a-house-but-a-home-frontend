import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/contexts/ThemeContext';

interface LanguageSwitcherProps {
  isAlwaysDark?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isAlwaysDark = false }) => {
  const { i18n } = useTranslation();
  const { resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isLightMode = resolvedTheme === 'light';
  
  // Use theme-aware colors unless we're on an always-dark page
  const textColor = (isLightMode && !isAlwaysDark) ? 'text-black' : 'text-white';
  const hoverColor = (isLightMode && !isAlwaysDark) ? 'hover:text-lime-600' : 'hover:text-lime-400';
  const dropdownBg = (isLightMode && !isAlwaysDark) ? 'bg-white' : 'bg-gray-800';
  const dropdownBorder = (isLightMode && !isAlwaysDark) ? 'border-slate-200' : 'border-gray-600';
  const dropdownItemHover = (isLightMode && !isAlwaysDark) ? 'hover:bg-gray-100' : 'hover:bg-gray-700';

  const languages = [
    { code: 'en', name: 'EN', fullName: 'English', flag: '🇺🇸' },
    { code: 'hu', name: 'HU', fullName: 'Magyar', flag: '🇭🇺' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`font-fjalla text-lg px-2 py-1 rounded transition-colors duration-200 ${textColor} ${hoverColor} focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime-500 focus-visible:outline-offset-2`}
        aria-label={`Current language: ${currentLanguage.fullName}. Click to change language`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls="language-menu"
      >
        {currentLanguage.name} <span aria-hidden="true" className="ml-1">{currentLanguage.flag}</span>
      </button>
      
      {isOpen && (
        <div 
          id="language-menu"
          role="menu"
          className={`absolute right-0 mt-2 w-32 ${dropdownBg} border ${dropdownBorder} rounded-md shadow-lg z-50`}
        >
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              role="menuitem"
              className={`block w-full text-left px-4 py-2 text-sm font-fjalla ${textColor} ${dropdownItemHover} transition-colors duration-200 first:rounded-t-md last:rounded-b-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime-500`}
              aria-current={language.code === i18n.language ? 'true' : undefined}
            >
              {language.fullName} <span aria-hidden="true" className="ml-1">{language.flag}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;