import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import enHome from './locales/en/home.json';
import huHome from './locales/hu/home.json';
import enAbout from './locales/en/about.json';
import huAbout from './locales/hu/about.json';
import enGuide from './locales/en/guide.json';
import huGuide from './locales/hu/guide.json';
import enComponents from './locales/en/components.json';
import huComponents from './locales/hu/components.json';
import enPages from './locales/en/pages.json';
import huPages from './locales/hu/pages.json';
import enPrinciples from './locales/en/principles.json';
import huPrinciples from './locales/hu/principles.json';

const resources = {
  en: {
    home: enHome,
    about: enAbout,
    guide: enGuide,
    components: enComponents,
    pages: enPages,
    principles: enPrinciples
  },
  hu: {
    home: huHome,
    about: huAbout,
    guide: huGuide,
    components: huComponents,
    pages: huPages,
    principles: huPrinciples
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;