import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import doorPanelsWaitingToBeInstalled from '../assets/door-panels-waiting-to-be-installed.webp';
import doorLeavesHouse from '../assets/door_leaves_house.webp';
import cardboardImage from '../assets/cardboard.webp';
import metalCansImage from '../assets/metal_cans.webp';
import fabricImage from '../assets/textiles.webp';
import styrofoamImage from '../assets/styrofoam.webp';
import woodCratesImage from '../assets/wooden_crates.webp';
import doorPanelsHutCarpetInsulation from '../assets/door-panels-hut-carpet-insulation.webp';
import MaterialsSection from "@/components/materials/MaterialsSection";

interface Foundation {
  title: string;
  description: string;
}

const Materials = () => {
  const [loaded, setLoaded] = useState(false);
  const { t } = useTranslation('materials');

  useEffect(() => {
    document.title = `${t('title')}`;
    setLoaded(true);
  }, [t]);

  const foundationsList = t('mindset.foundationsList', { returnObjects: true }) as Record<string, Foundation>;
  const foundations = Object.values(foundationsList);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Hero Section */}
      <section 
        className="bg-slate-50 dark:bg-black relative overflow-hidden"
        aria-labelledby="materials-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex flex-col md:flex-row gap-12 relative">
          <div className="absolute top-24 left-0 font-semibold text-9xl 
                          text-black opacity-10 dark:text-white/21 dark:opacity-100 pointer-events-none select-none"
               aria-hidden="true">
            {t('backgroundText')}
          </div>
          
          <div
            className={`w-full md:w-1/2 transition-opacity duration-1000 ${
              loaded ? "opacity-100" : "opacity-0"
            } relative z-10`}
          >
            <h1 
              id="materials-heading"
              className="text-4xl font-bold mb-8 leading-tight tracking-tight text-black dark:text-white"
            >
              {t('title')}
            </h1>
            <p className="text-lg mb-6 mt-10 text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('description')}
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">
              {t('mindset.title')}
            </h2>
            <ul className="list-disc list-inside space-y-2 mb-6" role="list">
              {foundations.map((foundation, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>{foundation.title}:</strong> {foundation.description}
                </li>
              ))}
            </ul>
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 leading-relaxed italic">
              {t('mindset.conclusion')}
            </p>
            <div className="h-1 w-28 bg-gradient-to-r from-yellow-500 to-lime-600 mb-10" aria-hidden="true"></div>
            <button
              onClick={() => {
                document.getElementById("usable-materials")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="px-8 py-3 bg-black dark:bg-slate-950 inline-block transition-all duration-300 
                         hover:bg-zinc-900 dark:hover:bg-gray-800 
                         hover:shadow-xl hover:shadow-yellow-200/10 dark:hover:shadow-lime-400/10 
                         hover:scale-105 cursor-pointer
                         border border-transparent dark:border-gray-700
                         focus-visible:outline-2 focus-visible:outline-lime-500 focus-visible:outline-offset-2 rounded"
              aria-label="Learn more about usable materials"
            >
              <span className="bg-gradient-to-r from-[#F9D90B] to-[#98F90F] bg-clip-text text-transparent font-bold uppercase">
                {t('learnMore')}
              </span>
            </button>
          </div>

          <div 
            className="w-full md:w-1/2 flex items-center justify-center relative z-10"
            role="img"
            aria-label="Photo gallery showing repurposed building materials examples"
          >
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-full w-full">
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-3/5 shadow-xl dark:shadow-black/40 rounded-lg overflow-hidden transform rotate-8 z-10 transition-all duration-300 hover:rotate-0 hover:scale-105">
                  <div className="rounded-lg shadow-xl sm:shadow-2xl dark:shadow-black/50">
                    <img
                      src={doorLeavesHouse}
                      alt="House constructed with repurposed door leaves showing creative material reuse"
                      className="w-full h-36 sm:h-48 md:h-56 lg:h-80 xl:h-96 object-cover rounded"
                    />
                  </div>
                </div>

                <div className="absolute top-16 sm:top-20 md:top-28 lg:top-32 xl:top-40 left-2 sm:left-4 md:left-6 lg:left-8 w-56 sm:w-60 md:w-64 lg:w-72 xl:w-80 transform -rotate-3 transition-all duration-300 hover:rotate-0 hover:scale-105 z-10">
                  <div className="rounded-lg shadow-xl sm:shadow-2xl dark:shadow-black/50">
                    <img
                      src={doorPanelsHutCarpetInsulation}
                      alt="Shelter built with door panels and carpet insulation for thermal protection"
                      className="w-full h-36 sm:h-48 md:h-56 lg:h-80 xl:h-96 object-cover rounded"
                    />
                  </div>
                </div>

                <div className="absolute top-32 sm:top-40 md:top-56 lg:top-64 xl:top-80 right-4 sm:right-8 md:right-10 lg:right-12 w-56 sm:w-60 md:w-64 lg:w-72 xl:w-80 transform rotate-2 transition-all duration-300 hover:-rotate-1 hover:scale-105 z-20">
                  <div className="rounded-lg shadow-xl sm:shadow-2xl dark:shadow-black/50">
                    <img
                      src={doorPanelsWaitingToBeInstalled}
                      alt="Collection of salvaged door panels ready for installation in shelter construction"
                      className="w-full h-36 sm:h-48 md:h-56 lg:h-80 xl:h-96 object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usable Materials in Our Environment Section */}
      <section 
        id="usable-materials" 
        className="py-20 bg-white dark:bg-slate-950 transition-colors duration-500"
        aria-labelledby="usable-materials-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="usable-materials-heading" className="text-4xl font-bold mb-6 text-black dark:text-white">
            {t('environment.title')}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {t('environment.description')}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            {t('environment.callToAction')}
          </p>
          <div className="h-1 w-28 bg-gradient-to-r from-yellow-500 to-lime-600 mx-auto" aria-hidden="true"></div>
        </div>
      </section>

      {/* Available Materials Section */}
      <MaterialsSection images={{
        doorLeavesHouse: doorLeavesHouse,
        cardboard: cardboardImage,
        metalCans: metalCansImage,
        fabric: fabricImage,
        styrofoam: styrofoamImage,
        woodCrates: woodCratesImage
      }} />

      {/* Recycling Principles Section */}
      <section 
        className="py-20 bg-white dark:bg-black transition-colors duration-500"
        aria-labelledby="recycling-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="recycling-heading" className="text-4xl font-bold mb-6 text-black dark:text-white text-center">
            {t('recycling.title')}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-12 text-center">
            {t('recycling.subtitle')}
          </p>
          
          <h3 className="text-2xl font-semibold mb-8 text-black dark:text-white">
            {t('recycling.principlesTitle')}
          </h3>

          <ol className="space-y-6 mb-12" role="list">
            {(t('recycling.principles', { returnObjects: true }) as string[]).map((principle, index) => {
              const [title, description] = principle.split(':');
              
              return (
                <li
                  key={index}
                  className="flex gap-4 items-start p-6 bg-gray-50 dark:bg-slate-900 rounded-lg
                           hover:shadow-lg dark:hover:shadow-black/30 transition-all duration-300
                           border border-gray-100 dark:border-slate-800"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-lime-600 dark:bg-lime-500 
                                rounded-full flex items-center justify-center text-white font-bold"
                       aria-hidden="true">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-black dark:text-white">
                      {title?.trim()}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {description?.trim()}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="p-8 bg-gradient-to-r from-lime-50 to-yellow-50 dark:from-slate-900 dark:to-slate-800 
                          rounded-xl border border-lime-200 dark:border-slate-700 text-center"
               role="note">
            <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              {t('recycling.conclusion')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Materials;
