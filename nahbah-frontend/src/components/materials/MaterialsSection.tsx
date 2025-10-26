import React, { useState, useRef } from "react";
import { Dialog } from "@headlessui/react";
import { useTranslation } from 'react-i18next';

interface MaterialsSectionProps {
  images: {
    doorLeavesHouse: string;
    cardboard: string;
    metalCans: string;
    fabric: string;
    styrofoam: string;
    woodCrates: string;
  };
}

interface MaterialData {
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
  const { t } = useTranslation('materials');

  const materials: MaterialData[] = [
    {
      title: t('materialsSection.materials.paper.title'),
      image: images.cardboard,
      alt: t('materialsSection.materials.paper.alt'),
      function: t('materialsSection.materials.paper.function'),
      rawMaterial: t('materialsSection.materials.paper.rawMaterial'),
      whereToFind: t('materialsSection.materials.paper.whereToFind'),
      use: t('materialsSection.materials.paper.use'),
      examples: t('materialsSection.materials.paper.examples', { returnObjects: true }) as string[],
      accent: "border-yellow-500",
    },
    {
      title: t('materialsSection.materials.metals.title'),
      image: images.metalCans,
      alt: t('materialsSection.materials.metals.alt'),
      function: t('materialsSection.materials.metals.function'),
      rawMaterial: t('materialsSection.materials.metals.rawMaterial'),
      whereToFind: t('materialsSection.materials.metals.whereToFind'),
      use: t('materialsSection.materials.metals.use'),
      examples: t('materialsSection.materials.metals.examples', { returnObjects: true }) as string[],
      accent: "border-gray-400",
    },
    {
      title: t('materialsSection.materials.textiles.title'),
      image: images.fabric,
      alt: t('materialsSection.materials.textiles.alt'),
      function: t('materialsSection.materials.textiles.function'),
      rawMaterial: t('materialsSection.materials.textiles.rawMaterial'),
      whereToFind: t('materialsSection.materials.textiles.whereToFind'),
      use: t('materialsSection.materials.textiles.use'),
      examples: t('materialsSection.materials.textiles.examples', { returnObjects: true }) as string[],
      accent: "border-lime-500",
    },
    {
      title: t('materialsSection.materials.plastics.title'),
      image: images.styrofoam,
      alt: t('materialsSection.materials.plastics.alt'),
      function: t('materialsSection.materials.plastics.function'),
      rawMaterial: t('materialsSection.materials.plastics.rawMaterial'),
      whereToFind: t('materialsSection.materials.plastics.whereToFind'),
      use: t('materialsSection.materials.plastics.use'),
      examples: t('materialsSection.materials.plastics.examples', { returnObjects: true }) as string[],
      accent: "border-blue-500",
    },
    {
      title: t('materialsSection.materials.wood.title'),
      image: images.woodCrates,
      alt: t('materialsSection.materials.wood.alt'),
      function: t('materialsSection.materials.wood.function'),
      rawMaterial: t('materialsSection.materials.wood.rawMaterial'),
      whereToFind: t('materialsSection.materials.wood.whereToFind'),
      use: t('materialsSection.materials.wood.use'),
      examples: t('materialsSection.materials.wood.examples', { returnObjects: true }) as string[],
      accent: "border-lime-800",
    },
  ];

  return (
    <div className="py-20 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">
            {t('materialsSection.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('materialsSection.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {materials.map((material, index) => (
            <div
              key={index}
              onClick={() => { setSelectedMaterial(material); setActiveTab("info"); }}
              className="bg-slate-50 dark:bg-slate-900 rounded-xl shadow-lg dark:shadow-black/30 
                       hover:shadow-xl dark:hover:shadow-black/50 
                       transition-all duration-300 hover:translate-y-[-5px] group cursor-pointer
                       border border-gray-200 dark:border-slate-800"
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
                             group-hover:text-lime-600 dark:group-hover:text-lime-400 
                             transition-colors">
                  {material.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {material.function}
                </p>
                <div className="text-lime-600 dark:text-lime-400 font-semibold text-sm">
                  {t('materialsSection.viewDetails')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal - keeping existing implementation */}
      <Dialog
        open={selectedMaterial !== null}
        onClose={() => setSelectedMaterial(null)}
        className="fixed inset-0 z-50 overflow-y-auto"
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
                      {t('materialsSection.modal.information')}
                    </button>
                    <button
                      className={`py-3 px-6 font-medium focus:outline-none transition-colors ${
                        activeTab === "examples"
                          ? "text-lime-600 dark:text-lime-400 border-b-2 border-lime-600 dark:border-lime-400"
                          : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                      }`}
                      onClick={() => setActiveTab("examples")}
                    >
                      {t('materialsSection.modal.examples')}
                    </button>
                  </div>

                  {activeTab === "info" && (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                            {t('materialsSection.modal.rawMaterial')}
                          </h4>
                          <p className="text-gray-900 dark:text-gray-200">{selectedMaterial.rawMaterial}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                            {t('materialsSection.modal.whereToFind')}
                          </h4>
                          <p className="text-gray-900 dark:text-gray-200">{selectedMaterial.whereToFind}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                          {t('materialsSection.modal.useInShelter')}
                        </h4>
                        <p className="text-gray-900 dark:text-gray-200">{selectedMaterial.use}</p>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <p className="text-gray-700 dark:text-gray-300 text-base">
                          {t('materialsSection.modal.infoNote')}
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "examples" && (
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                        {t('materialsSection.modal.examplesOfUse')}
                      </h4>
                      <ul className="space-y-4">
                        {selectedMaterial.examples.map((example, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-lime-600 dark:text-lime-400 mr-3">•</span>
                            <p className="text-gray-900 dark:text-gray-200 text-base">{example}</p>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 p-5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <p className="text-gray-700 dark:text-gray-300 text-base">
                          {t('materialsSection.modal.examplesNote')}
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