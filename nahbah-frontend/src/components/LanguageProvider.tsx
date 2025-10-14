import React from 'react';
import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '@/contexts/LanguageContext';

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const currentLanguage = i18n.language || 'en';
  const isHungarian = currentLanguage.startsWith('hu');
  const isEnglish = currentLanguage.startsWith('en');

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        changeLanguage,
        t,
        isHungarian,
        isEnglish,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};