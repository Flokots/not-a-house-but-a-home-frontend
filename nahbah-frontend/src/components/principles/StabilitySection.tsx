import React from 'react';
import { useTranslation } from 'react-i18next';

// Import images directly
import woodenCrates from '@/assets/wooden_crates.png';
import concreteBlocks from '@/assets/concrete_blocks.jpeg';
import metalCans from '@/assets/metal_cans.png';
import rope from '@/assets/rope.jpg';

const StabilitySection: React.FC = () => {
  const { t } = useTranslation('principles');

  // Material images for stability with translated alt text
  const materialImages = [
    { src: woodenCrates, altKey: 'details.stability.materialImages.pallets' },
    { src: concreteBlocks, altKey: 'details.stability.materialImages.concrete' },
    { src: metalCans, altKey: 'details.stability.materialImages.metal' },
    { src: rope, altKey: 'details.stability.materialImages.rope' }
  ];

  return (
    <section id="stability" className="scroll-mt-20">
      {/* Full-width Title & Description */}
      <div className="mb-16">
        <h2 className="text-4xl text-center font-bold mb-6 text-black dark:text-white">
          {t('details.stability.title')}
        </h2>
        
        <div className="flex justify-center mb-8">
          <div className="h-1 w-20 bg-gradient-to-r from-yellow-500 to-lime-600"></div>
        </div>

        <p className="text-lg text-center text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
          {t('details.stability.description')}
        </p>
      </div>

      {/* Single Column - Key Considerations */}
      <div className="mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl p-8 border border-blue-200 dark:border-blue-900">
          <h3 className="text-xl font-bold mb-6 text-black dark:text-white">
            {t('details.stability.considerationsTitle')}
          </h3>

          <ul className="list-disc list-inside space-y-4">
            {(t('details.stability.considerations', { returnObjects: true }) as string[]).map((item, index) => (
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
          {t('details.stability.materialsTitle')}
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
          {t('details.stability.conclusion')}
        </p>
      </div>
    </section>
  );
};

export default StabilitySection;