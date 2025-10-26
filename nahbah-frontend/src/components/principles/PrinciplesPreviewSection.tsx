import React from 'react';
import { useTranslation } from 'react-i18next';

interface PrinciplesPreviewSectionProps {
  images: {
    stability: string;
    rainwater: string;
    groundMoisture: string;
    thermalInsulation: string;
    airtightness: string;
  };
}

const PrinciplesPreviewSection: React.FC<PrinciplesPreviewSectionProps> = ({ images }) => {
  const { t } = useTranslation('principles');

  const principles = [
    { 
      id: "stability", 
      title: t('details.stability.title'), 
      subtitle: t('details.stability.preview'), 
      image: images.stability 
    },
    { 
      id: "rainwater", 
      title: t('details.rainwater.title'), 
      subtitle: t('details.rainwater.preview'), 
      image: images.rainwater 
    },
    { 
      id: "groundMoisture", 
      title: t('details.groundMoisture.title'), 
      subtitle: t('details.groundMoisture.preview'), 
      image: images.groundMoisture 
    },
    { 
      id: "thermalInsulation", 
      title: t('details.thermalInsulation.title'), 
      subtitle: t('details.thermalInsulation.preview'), 
      image: images.thermalInsulation 
    },
    { 
      id: "airtightness", 
      title: t('details.airtightness.title'), 
      subtitle: t('details.airtightness.preview'), 
      image: images.airtightness 
    }
  ];

  return (
    <div id="protection-preview" className="mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {principles.map((principle) => (
          <div key={principle.id} className="group">
            <a
              href={`#${principle.id}`}
              className="block bg-slate-50 dark:bg-slate-900 rounded-xl shadow-sm dark:shadow-black/20 
                         hover:shadow-lg dark:hover:shadow-black/40 
                         transition-all duration-300 hover:translate-y-[-5px]
                         border border-transparent dark:border-gray-700 overflow-hidden h-full"
            >
              <div className="p-2">
                <div className="h-40 rounded-lg overflow-hidden">
                  <img
                    src={principle.image}
                    alt={principle.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 text-black dark:text-white 
                               group-hover:text-lime-700 dark:group-hover:text-lime-400 
                               transition-colors">
                  {principle.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
                  {principle.subtitle}
                </p>
                <div className="text-lime-600 dark:text-lime-400 font-semibold 
                               hover:text-lime-800 dark:hover:text-lime-300 
                               flex items-center group cursor-pointer text-sm">
                  <span>{t('learnMore')}</span>
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrinciplesPreviewSection;