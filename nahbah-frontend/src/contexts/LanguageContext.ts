import { createContext } from 'react';

export interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
  t: (key: string, options?: Record<string, unknown>) => string;
  isHungarian: boolean;
  isEnglish: boolean;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);