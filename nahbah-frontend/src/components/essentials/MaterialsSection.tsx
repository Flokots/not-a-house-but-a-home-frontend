import React, { useState, useRef } from "react";
import { Dialog } from "@headlessui/react";
import { useTranslation } from 'react-i18next';

interface MaterialsSectionProps {
  images: {
    doorLeavesHouse: string;
    cardboard: string;
    metalCans: string;
    tentFabric: string;
    styrofoam: string;
    woodCrates: string;
  };
}

interface MaterialData {
  key: string;
  title: string;
  image: string;
  alt: string;
  function: string;
  rawMaterial: string;
  whereToFind: string;
  use: string;
  examples: string[];
  accent: string;
}

const MaterialsSection: React.FC<MaterialsSectionProps> = ({ images }) => {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialData | null>(null);
  const [activeTab, setActiveTab] = useState<"info" | "examples">("info");
  const closeButtonRef = useRef(null);
  const { t } = useTranslation('pages');

  const materials: MaterialData[] = [
    {
      key: 'paper',
      title: t('essentials.materialsSection.materials.paper.title'),
      image: images.cardboard,
      alt: "Cardboard materials",
      function: t('essentials.materialsSection.materials.paper.function'),
      rawMaterial: t('essentials.materialsSection.materials.paper.rawMaterial'),
      whereToFind: t('essentials.materialsSection.materials.paper.whereToFind'),
      use: t('essentials.materialsSection.materials.paper.use'),
      examples: t('essentials.materialsSection.materials.paper.examples', { returnObjects: true }) as string[],
      accent: "border-yellow-500",
    },
    {
      key: 'metals',
      title: t('essentials.materialsSection.materials.metals.title'),
      image: images.metalCans,
      alt: "Metal can materials",
      function: t('essentials.materialsSection.materials.metals.function'),
      rawMaterial: t('essentials.materialsSection.materials.metals.rawMaterial'),
      whereToFind: t('essentials.materialsSection.materials.metals.whereToFind'),
      use: t('essentials.materialsSection.materials.metals.use'),
      examples: t('essentials.materialsSection.materials.metals.examples', { returnObjects: true }) as string[],
      accent: "border-gray-400",
    },
    {
      key: 'textiles',
      title: t('essentials.materialsSection.materials.textiles.title'),
      image: images.tentFabric,
      alt: "Textile materials",
      function: t('essentials.materialsSection.materials.textiles.function'),
      rawMaterial: t('essentials.materialsSection.materials.textiles.rawMaterial'),
      whereToFind: t('essentials.materialsSection.materials.textiles.whereToFind'),
      use: t('essentials.materialsSection.materials.textiles.use'),
      examples: t('essentials.materialsSection.materials.textiles.examples', { returnObjects: true }) as string[],
      accent: "border-lime-500",
    },
    {
      key: 'plastics',
      title: t('essentials.materialsSection.materials.plastics.title'),
      image: images.styrofoam,
      alt: "Plastic materials",
      function: t('essentials.materialsSection.materials.plastics.function'),
      rawMaterial: t('essentials.materialsSection.materials.plastics.rawMaterial'),
      whereToFind: t('essentials.materialsSection.materials.plastics.whereToFind'),
      use: t('essentials.materialsSection.materials.plastics.use'),
      examples: t('essentials.materialsSection.materials.plastics.examples', { returnObjects: true }) as string[],
      accent: "border-blue-500",
    },
    {
      key: 'wood',
      title: t('essentials.materialsSection.materials.wood.title'),
      image: images.woodCrates,
      alt: "Wood materials",
      function: t('essentials.materialsSection.materials.wood.function'),
      rawMaterial: t('essentials.materialsSection.materials.wood.rawMaterial'),
      whereToFind: t('essentials.materialsSection.materials.wood.whereToFind'),
      use: t('essentials.materialsSection.materials.wood.use'),
      examples: t('essentials.materialsSection.materials.wood.examples', { returnObjects: true }) as string[],
      accent: "border-lime-800",
    },
  ];

  return (
    <div className="animate-fadeIn">
      {/* Header section - stays on main black background */}
      <div className="mb-20 relative">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-10 text-black dark:text-white">
            {t('essentials.materialsSection.title')}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
            {t('essentials.materialsSection.description')}
          </p>

          {/* Featured image - same style as Guide */}
          <div className="rounded-xl overflow-hidden shadow-xl dark:shadow-black/30 bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700">
            <div className="overflow-hidden rounded-lg">
              <img
                src={images.doorLeavesHouse}
                alt="Self made house from door leaves"
                className="w-full h-auto object-cover transform scale-105 hover:scale-100 transition-transform duration-700"
              />
            </div>
          </div>
          
          {/* Image caption */}
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-center">
            {t('essentials.materialsSection.imageCaption')}
          </p>
        </div>
      </div>

      {/* Materials section - very subtle shift to slate-950 (barely lighter than black) */}
      <div className="py-20 bg-white dark:bg-slate-950 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">{t('essentials.materialsSection.availableMaterials')}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mx-auto">
              {t('essentials.materialsSection.availableDescription')}
            </p>
          </div>

          {/* Material cards with enhanced dark styling */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {materials.map((material) => (
              <div
                key={material.key}
                onClick={() => { setSelectedMaterial(material); setActiveTab("info"); }}
                className="bg-slate-50 dark:bg-slate-900 rounded-xl shadow-lg dark:shadow-black/30 
                           hover:shadow-xl dark:hover:shadow-black/50 
                           transition-all duration-300 hover:translate-y-[-5px] group cursor-pointer
                           border border-gray-200 dark:border-slate-800 "
              >
                <div className="p-2">
                  <div className="h-48 rounded-lg overflow-hidden">
                    <img
                      src={material.image}
                      alt={material.alt}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white 
                               group-hover:text-lime-400 dark:group-hover:text-lime-400 
                               transition-colors">
                    {material.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {material.function}
                  </p>
                  <div className="text-lime-600 dark:text-lime-400 font-semibold 
                               hover:text-lime-800 dark:hover:text-lime-300 
                               flex items-center group cursor-pointer text-sm">
                    <span>{t('essentials.materialsSection.viewDetails')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How materials can be repurposed - back to pure black for consistency */}
      <div className="py-20 bg-slate-50 dark:bg-black transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
              {t('essentials.materialsSection.repurpose.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mx-auto">
              {t('essentials.materialsSection.repurpose.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Enhanced dark cards */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg dark:shadow-black/30 
                           hover:shadow-xl dark:hover:shadow-black/50 
                           transition-all duration-300 hover:translate-y-[-5px] group
                           border border-gray-200 dark:border-slate-800 ">
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center mb-6
                               border-2 border-yellow-200 dark:border-yellow-800/50">
                  <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-black dark:text-white 
                               group-hover:text-lime-400 dark:group-hover:text-lime-400 
                               transition-colors">
                  {t('essentials.materialsSection.repurpose.structural.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                  {t('essentials.materialsSection.repurpose.structural.description')}
                </p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                  {(t('essentials.materialsSection.repurpose.structural.items', { returnObjects: true }) as string[]).map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-lime-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg dark:shadow-black/30 
                           hover:shadow-xl dark:hover:shadow-black/50 
                           transition-all duration-300 hover:translate-y-[-5px] group
                           border border-gray-200 dark:border-slate-800 ">
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-lime-100 dark:bg-lime-900/20 flex items-center justify-center mb-6
                               border-2 border-lime-200 dark:border-lime-800/50">
                  <svg className="w-8 h-8 text-lime-600 dark:text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707m-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-black dark:text-white 
                               group-hover:text-lime-400 dark:group-hover:text-lime-400 
                               transition-colors">
                  {t('essentials.materialsSection.repurpose.insulation.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                  {t('essentials.materialsSection.repurpose.insulation.description')}
                </p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                  {(t('essentials.materialsSection.repurpose.insulation.items', { returnObjects: true }) as string[]).map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-lime-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg dark:shadow-black/30 
                           hover:shadow-xl dark:hover:shadow-black/50 
                           transition-all duration-300 hover:translate-y-[-5px] group
                           border border-gray-200 dark:border-slate-800 ">
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-6
                               border-2 border-blue-200 dark:border-blue-800/50">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-black dark:text-white 
                               group-hover:text-lime-400 dark:group-hover:text-lime-400 
                               transition-colors">
                  {t('essentials.materialsSection.repurpose.weather.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                  {t('essentials.materialsSection.repurpose.weather.description')}
                </p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                  {(t('essentials.materialsSection.repurpose.weather.items', { returnObjects: true }) as string[]).map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-lime-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action - subtle shift again */}
      <div className="py-20 bg-white dark:bg-slate-950 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
            {t('essentials.materialsSection.lookAround.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('essentials.materialsSection.lookAround.description')}
          </p>
          <div className="h-1 w-28 bg-gradient-to-r from-yellow-500 to-lime-600 mx-auto"></div>
        </div>
      </div>

      {/* Enhanced dark modal */}
      <Dialog
        open={selectedMaterial !== null}
        onClose={() => setSelectedMaterial(null)}
        className="fixed inset-0 z-50 overflow-y-auto hero-text"
        initialFocus={closeButtonRef}
      >
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true" />

          {selectedMaterial && (
            <div className="relative bg-white dark:bg-slate-900 rounded-xl shadow-2xl max-w-5xl w-full mx-auto z-10 
                            overflow-hidden border border-gray-200 dark:border-slate-800">
              <button
                ref={closeButtonRef}
                onClick={() => setSelectedMaterial(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Close dialog"
              >
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 relative">
                  <div className="aspect-[3/4] md:h-full">
                    <img src={selectedMaterial.image} alt={selectedMaterial.alt} className="w-full h-full object-cover" />
                    <div className={`absolute top-0 left-0 w-full h-2 ${selectedMaterial.accent}`}></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
                  </div>
                </div>

                <div className="md:w-3/5 p-8 md:p-12">
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold mb-2 text-black dark:text-white">{selectedMaterial.title}</h3>
                    <p className="text-xl text-gray-800 dark:text-gray-300">{selectedMaterial.function}</p>
                  </div>

                  <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
                    <button
                      className={`py-3 px-6 font-medium focus:outline-none transition-colors ${
                        activeTab === "info"
                          ? "text-lime-600 dark:text-lime-400 border-b-2 border-lime-600 dark:border-lime-400"
                          : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                      }`}
                      onClick={() => setActiveTab("info")}
                    >
                      {t('essentials.materialsSection.modal.information')}
                    </button>
                    <button
                      className={`py-3 px-6 font-medium focus:outline-none transition-colors ${
                        activeTab === "examples"
                          ? "text-lime-600 dark:text-lime-400 border-b-2 border-lime-600 dark:border-lime-400"
                          : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                      }`}
                      onClick={() => setActiveTab("examples")}
                    >
                      {t('essentials.materialsSection.modal.examples')}
                    </button>
                  </div>

                  {activeTab === "info" && (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                            {t('essentials.materialsSection.modal.rawMaterial')}
                          </h4>
                          <p className="text-gray-900 dark:text-gray-200">{selectedMaterial.rawMaterial}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                            {t('essentials.materialsSection.modal.whereToFind')}
                          </h4>
                          <p className="text-gray-900 dark:text-gray-200">{selectedMaterial.whereToFind}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                          {t('essentials.materialsSection.modal.useInShelter')}
                        </h4>
                        <p className="text-gray-900 dark:text-gray-200">{selectedMaterial.use}</p>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <p className="text-gray-700 dark:text-gray-300 text-base">
                          {t('essentials.materialsSection.modal.infoNote')}
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "examples" && (
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                        {t('essentials.materialsSection.modal.examplesOfUse')}
                      </h4>
                      <ul className="space-y-4">
                        {selectedMaterial.examples.map((example, i) => (
                          <li key={i} className="flex items-start">
                            <p className="text-gray-900 dark:text-gray-200 text-base">{example}</p>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 p-5 bg-gradient-to-r from-gray-50 dark:from-gray-800 to-white dark:to-gray-700 border border-gray-100 dark:border-gray-600 rounded-lg">
                        <p className="text-gray-700 dark:text-gray-300 text-base">
                          {t('essentials.materialsSection.modal.examplesNote')}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default MaterialsSection;
