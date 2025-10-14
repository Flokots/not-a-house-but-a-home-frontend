import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enCommon from './locales/en/common.json';
import enComponents from './locales/en/components.json';
import enPages from './locales/en/pages.json';

import huCommon from './locales/hu/common.json';
import huComponents from './locales/hu/components.json';
import huPages from './locales/hu/pages.json';

const resources = {
  en: {
    common: enCommon,
    components: enComponents,
    pages: enPages,
  },
  hu: {
    common: huCommon,
    components: huComponents,
    pages: huPages,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    debug: true, // Enable debug to see what's happening
    ns: ['common', 'components', 'pages'],
    
    // Add missing key handler
    saveMissing: false,
    missingKeyHandler: (lng, ns, key) => {
      console.warn(`Missing translation: ${lng}:${ns}:${key}`);
    },
  });

export default i18n;