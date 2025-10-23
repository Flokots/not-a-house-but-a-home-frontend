import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageProviderProps {
  children: React.ReactNode;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set initial language attributes
    const updateLanguageAttributes = (language: string) => {
      // Set HTML lang attribute for screen readers and SEO
      document.documentElement.lang = language;

      // Add CSS class for styling
      document.documentElement.className = document.documentElement.className
        .replace(/lang-\w+/g, '');
      document.documentElement.classList.add(`lang-${language}`);

      // Set dir attribute for RTL languages (future-proofing)
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    };

    // Set initial language
    updateLanguageAttributes(i18n.language);

    // Listen for language changes
    const handleLanguageChange = (language: string) => {
      updateLanguageAttributes(language);
    };

    i18n.on('languageChanged', handleLanguageChange);

    // Cleanup
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return <>{children}</>;
};

export default LanguageProvider;