import React from 'react';
import { useTranslation } from 'react-i18next';

// Import images directly
import tarpMaterial from '@/assets/tarp_material.png';
import plasticSheeting from '@/assets/plastic_sheeting.png';
import metalCans from '@/assets/metal_cans.png';
import woodenCrates from '@/assets/wooden_crates.png';

const RainwaterSection: React.FC = () => {
  const { t } = useTranslation('principles');

  // Material images for rainwater protection with translated alt text
  const materialImages = [
    { src: tarpMaterial, altKey: 'details.rainwater.materialImages.tarp' },
    { src: plasticSheeting, altKey: 'details.rainwater.materialImages.plastic' },
    { src: metalCans, altKey: 'details.rainwater.materialImages.metal' },
    { src: woodenCrates, altKey: 'details.rainwater.materialImages.pallets' }
  ];

  return (
    <section id="rainwater" className="scroll-mt-20">
      {/* Full-width Title & Description */}
      <div className="mb-16">
        <h2 className="text-4xl text-center font-bold mb-6 text-black dark:text-white">
          {t('details.rainwater.title')}
        </h2>
        
        <div className="flex justify-center mb-8">
          <div className="h-1 w-20 bg-gradient-to-r from-yellow-500 to-lime-600"></div>
        </div>

        <p className="text-lg text-center text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
          {t('details.rainwater.description')}
        </p>
      </div>

      {/* Two Column Layout - Clean Background Boxes */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        {/* LEFT COLUMN - Simple Protection Methods */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 dark:from-lime-950/20 dark:to-green-950/20 rounded-xl p-8 border border-lime-200 dark:border-lime-900">
          <h3 className="text-xl font-bold mb-6 text-black dark:text-white">
            {t('details.rainwater.methodsTitle')}
          </h3>

          <ul className="list-disc list-inside space-y-4">
            {(t('details.rainwater.methods', { returnObjects: true }) as string[]).map((item, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT COLUMN - Consequences */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-xl p-8 border border-red-200 dark:border-red-900">
          <h3 className="text-xl font-bold mb-6 text-black dark:text-white">
            {t('details.rainwater.consequencesTitle')}
          </h3>

          <ul className="list-disc list-inside space-y-4">
            {(t('details.rainwater.consequences', { returnObjects: true }) as string[]).map((item, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Full-width Materials Section with Images */}
      <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8 border border-gray-200 dark:border-slate-800">
        <h3 className="text-xl font-bold mb-8 text-center text-black dark:text-white">
          {t('details.rainwater.materialsTitle')}
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {materialImages.map((img, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="rounded-lg overflow-hidden border-2 border-gray-200 dark:border-slate-700 group-hover:border-lime-500 dark:group-hover:border-lime-600 transition-all duration-300">
                <img 
                  src={img.src} 
                  alt={t(img.altKey)} 
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <p className="mt-2 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
                {t(img.altKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <p className="text-center text-gray-600 dark:text-gray-400 italic max-w-3xl mx-auto">
          {t('details.rainwater.conclusion')}
        </p>
      </div>
    </section>
  );
};

export default RainwaterSection;