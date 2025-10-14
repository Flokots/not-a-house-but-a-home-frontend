import React from "react";
import { useTranslation } from 'react-i18next';

interface ProtectionPreviewProps {
  images: {
    warmth: string;
    stayingDry: string;
    windproofing: string;
    dryGround: string;
  };
}

const ProtectionPreview: React.FC<ProtectionPreviewProps> = ({ images }) => {
  const { t } = useTranslation('pages');

  const methods = [
    { 
      id: "warmth", 
      title: t('essentials.weatherProtection.preview.warmth.title'), 
      subtitle: t('essentials.weatherProtection.preview.warmth.subtitle'), 
      image: images.warmth 
    },
    { 
      id: "staying-dry", 
      title: t('essentials.weatherProtection.preview.stayingDry.title'), 
      subtitle: t('essentials.weatherProtection.preview.stayingDry.subtitle'), 
      image: images.stayingDry 
    },
    { 
      id: "windproofing", 
      title: t('essentials.weatherProtection.preview.windproofing.title'), 
      subtitle: t('essentials.weatherProtection.preview.windproofing.subtitle'), 
      image: images.windproofing 
    },
    { 
      id: "dry-ground", 
      title: t('essentials.weatherProtection.preview.dryGround.title'), 
      subtitle: t('essentials.weatherProtection.preview.dryGround.subtitle'), 
      image: images.dryGround 
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {methods.map((method) => (
        <div key={method.id} className="group">
          <a
            href={`#${method.id}`}
            className="block bg-slate-50 dark:bg-slate-900 rounded-xl shadow-sm dark:shadow-black/20 
                       hover:shadow-md dark:hover:shadow-black/40 
                       transition-all duration-300 hover:translate-y-[-5px]
                       border border-transparent dark:border-gray-700 overflow-hidden"
          >
            <div className="p-2">
              <div className="h-48 rounded-lg overflow-hidden">
                <img
                  src={method.image}
                  alt={method.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-black dark:text-white 
                             group-hover:text-lime-700 dark:group-hover:text-lime-400 
                             transition-colors">
                {method.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {method.subtitle}
              </p>
              <div className="text-lime-600 dark:text-lime-400 font-semibold 
                             hover:text-lime-800 dark:hover:text-lime-300 
                             flex items-center group cursor-pointer text-sm">
                <span>{t('essentials.weatherProtection.preview.learnMore')}</span>
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProtectionPreview;
