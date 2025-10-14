import React from 'react';
import { useTranslation } from 'react-i18next';

interface WindproofingSectionProps {
  images: {
    windproofing: string;
    tentFabric: string;
    tarpMaterial: string;
    plasticSheeting: string;
  }
}

const WindproofingSection: React.FC<WindproofingSectionProps> = ({ images }) => {
  const { t } = useTranslation('pages');

  const tips = [
    {
      title: t('essentials.weatherProtection.windproofing.tips.exterior.title'),
      description: t('essentials.weatherProtection.windproofing.tips.exterior.description')
    },
    {
      title: t('essentials.weatherProtection.windproofing.tips.sealing.title'),
      description: t('essentials.weatherProtection.windproofing.tips.sealing.description')
    },
    {
      title: t('essentials.weatherProtection.windproofing.tips.breathability.title'),
      description: t('essentials.weatherProtection.windproofing.tips.breathability.description')
    }
  ];

  const materials = [
    { name: t('essentials.weatherProtection.windproofing.materials.tentFabric'), image: images.tentFabric },
    { name: t('essentials.weatherProtection.windproofing.materials.tarpMaterial'), image: images.tarpMaterial },
    { name: t('essentials.weatherProtection.windproofing.materials.plasticSheeting'), image: images.plasticSheeting }
  ];

  return (
    <section id="windproofing" className="scroll-mt-20">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Content */}
        <div className="lg:w-2/3">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div>
                <h3 className="text-3xl font-bold text-black dark:text-white">
                  {t('essentials.weatherProtection.windproofing.title')}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {t('essentials.weatherProtection.windproofing.subtitle')}
                </p>
              </div>
            </div>
          </div>

          {/* Why it matters */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 
                         p-6 rounded-xl mb-8 border border-purple-100 dark:border-purple-800/30">
            <h4 className="text-lg font-semibold mb-3 text-black dark:text-white">
              {t('essentials.weatherProtection.windproofing.whyItMatters.title')}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('essentials.weatherProtection.windproofing.whyItMatters.description')}
            </p>
          </div>

          {/* Tips */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-6 text-black dark:text-white">
              {t('essentials.weatherProtection.windproofing.keyTechniques')}
            </h4>
            <div className="space-y-4">
              {tips.map((tip, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700">
                  <div className="flex items-start">
                    <div>
                      <h5 className="font-semibold text-black dark:text-white mb-1">{tip.title}</h5>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Materials */}
        <div className="lg:w-1/3">
          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-slate-700">
            <h4 className="text-lg font-semibold mb-6 text-black dark:text-white">
              {t('essentials.weatherProtection.windproofing.materialsYouCanUse')}
            </h4>
            <div className="space-y-4">
              {materials.map((material, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                  <img
                    src={material.image}
                    alt={material.name}
                    className="w-full h-32 object-cover rounded mb-3"
                  />
                  <p className="text-center font-medium text-black dark:text-white">{material.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WindproofingSection;