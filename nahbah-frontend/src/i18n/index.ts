import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Simple initial setup - we'll add detection later
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: {
          "buttons": {
            "close": "Close"
          }
        },
        components: {
          "navbar": {
            "brand": {
              "notAHouse": "NOT A HOUSE",
              "butAHome": "BUT A HOME"
            },
            "home": "HOME",
            "aboutUs": "ABOUT US",
            "guide": "GUIDE",
            "essentials": "ESSENTIALS",
            "designs": "DESIGNS",
            "contribute": "CONTRIBUTE"
          }
        }
      },
      hu: {
        common: {
          "buttons": {
            "close": "Bezárás"
          }
        },
        components: {
          "navbar": {
            "brand": {
              "notAHouse": "NEM HÁZ",
              "butAHome": "HANEM OTTHON"
            },
            "home": "FŐOLDAL",
            "aboutUs": "RÓLUNK",
            "guide": "ÚTMUTATÓ",
            "essentials": "ALAPISMERETEK",
            "designs": "TERVEK",
            "contribute": "KÖZREMŰKÖDÉS"
          }
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'components'],
    
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;