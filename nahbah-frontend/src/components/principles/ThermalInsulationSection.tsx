import React from 'react';
import { useTranslation } from 'react-i18next';

// Import images directly
import cardboard from '@/assets/cardboard.webp';
import styrofoam from '@/assets/styrofoam.webp';
import tentFabric from '@/assets/tent-fabric.webp';
import plasticSheeting from '@/assets/plastic_sheeting.webp';
import curtains from '@/assets/curtains.webp';
import paper from '@/assets/paper.webp';
import blankets from '@/assets/blankets.webp';
import fabric from '@/assets/textiles.webp';


const ThermalInsulationSection: React.FC = () => {
  const { t } = useTranslation('principles');

  // Material images for thermal insulation with translated alt text
  const materialImages = [
    { src: cardboard, altKey: 'details.thermalInsulation.materialImages.cardboard' },
    { src: paper, altKey: 'details.thermalInsulation.materialImages.paper' },
    { src: fabric, altKey: 'details.thermalInsulation.materialImages.fabric' },
    { src: blankets, altKey: 'details.thermalInsulation.materialImages.blankets' },
    { src: curtains, altKey: 'details.thermalInsulation.materialImages.curtains' },
    { src: styrofoam, altKey: 'details.thermalInsulation.materialImages.styrofoam' },
    { src: plasticSheeting, altKey: 'details.thermalInsulation.materialImages.plastic' },
    { src: tentFabric, altKey: 'details.thermalInsulation.materialImages.tent' }
  ];

  return (
    <section id="thermalInsulation" className="scroll-mt-20">
      {/* Full-width Title & Description */}
      <div className="mb-16">
        <h2 className="text-4xl text-center font-bold mb-6 text-black dark:text-white">
          {t('details.thermalInsulation.title')}
        </h2>
        
        <div className="flex justify-center mb-8">
          <div className="h-1 w-20 bg-gradient-to-r from-yellow-500 to-lime-600"></div>
        </div>

        <p className="text-lg text-center text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
          {t('details.thermalInsulation.description')}
        </p>
      </div>

      {/* Single Column - Why It Matters */}
      <div className="mb-16">
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 rounded-xl p-8 border border-orange-200 dark:border-orange-900">
          <h3 className="text-xl font-bold mb-6 text-black dark:text-white">
            {t('details.thermalInsulation.whyMattersTitle')}
          </h3>

          <ul className="list-disc list-inside space-y-4">
            {(t('details.thermalInsulation.whyMatters', { returnObjects: true }) as string[]).map((item, index) => (
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
          {t('details.thermalInsulation.materialsTitle')}
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

        {/* Material list - TWO COLUMNS */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 mb-8 max-w-4xl mx-auto">
          {(t('details.thermalInsulation.materials', { returnObjects: true }) as string[]).map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-lime-600 dark:text-lime-400 mt-1">•</span>
              <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{item}</span>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <p className="text-center text-gray-600 dark:text-gray-400 italic max-w-3xl mx-auto">
          {t('details.thermalInsulation.conclusion')}
        </p>
      </div>
    </section>
  );
};

export default ThermalInsulationSection;