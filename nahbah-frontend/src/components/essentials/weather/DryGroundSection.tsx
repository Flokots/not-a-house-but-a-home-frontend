import React from 'react';
import { useTranslation } from 'react-i18next';

interface DryGroundSectionProps {
  images: {
    dryGround: string;
    metalCans: string;
    woodCrates: string;
    plasticBottles: string;
    concreteBlocks: string;
  }
}

const DryGroundSection: React.FC<DryGroundSectionProps> = ({ images }) => {
  const { t } = useTranslation('pages');

  const tips = [
    {
      title: t('essentials.weatherProtection.dryGround.tips.elevate.title'),
      description: t('essentials.weatherProtection.dryGround.tips.elevate.description')
    },
    {
      title: t('essentials.weatherProtection.dryGround.tips.drainage.title'),
      description: t('essentials.weatherProtection.dryGround.tips.drainage.description')
    },
    {
      title: t('essentials.weatherProtection.dryGround.tips.roofing.title'),
      description: t('essentials.weatherProtection.dryGround.tips.roofing.description')
    }
  ];

  const materials = [
    { 
      name: t('essentials.weatherProtection.dryGround.materials.metalCans'), 
      image: images.metalCans 
    },
    { 
      name: t('essentials.weatherProtection.dryGround.materials.woodCrates'), 
      image: images.woodCrates 
    },
    { 
      name: t('essentials.weatherProtection.dryGround.materials.plasticBottles'), 
      image: images.plasticBottles 
    },
    { 
      name: t('essentials.weatherProtection.dryGround.materials.concreteBlocks'), 
      image: images.concreteBlocks 
    }
  ];

  return (
    <section id="dry-ground" className="scroll-mt-20">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Content */}
        <div className="lg:w-2/3">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div>
                <h3 className="text-3xl font-bold text-black dark:text-white">
                  {t('essentials.weatherProtection.dryGround.title')}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {t('essentials.weatherProtection.dryGround.subtitle')}
                </p>
              </div>
            </div>
          </div>

          {/* Why it matters */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 
                         p-6 rounded-xl mb-8 border border-green-100 dark:border-green-800/30">
            <h4 className="text-lg font-semibold mb-3 text-black dark:text-white">
              {t('essentials.weatherProtection.dryGround.whyItMatters.title')}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('essentials.weatherProtection.dryGround.whyItMatters.description')}
            </p>
          </div>

          {/* Tips */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-6 text-black dark:text-white">
              {t('essentials.weatherProtection.dryGround.keyTechniques')}
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
              {t('essentials.weatherProtection.dryGround.materialsYouCanUse')}
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

export default DryGroundSection;