import React, { useState, useRef } from "react";
import { Dialog } from "@headlessui/react";
import { useTranslation } from 'react-i18next';
import { type Design } from "@/types/designs";

interface DesignCardProps {
  design: Design;
  isSelected: boolean;
  onToggleSelect: () => void;
}

const DesignCard: React.FC<DesignCardProps> = ({ design, isSelected, onToggleSelect }) => {
  const { t } = useTranslation('plans');
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"info" | "details">("info");
  const closeButtonRef = useRef(null);
  
  // Function to open dialog and always reset to info tab
  const openDialog = () => {
    setActiveTab("info"); // Always reset to info tab when opening
    setIsOpen(true);
  };

  // Format the date to a readable format
  const formattedDate = new Date(design.submission_date).toLocaleDateString();
  
  return (
    <>
      <div 
        className={`group relative h-full transition-all duration-300 rounded-xl overflow-hidden ${
          isSelected 
            ? 'ring-2 ring-lime-500 shadow-[0_0_15px_rgba(132,204,22,0.15)]' 
            : 'hover:shadow-lg hover:-translate-y-1 border border-gray-100'
        }`}
      >
        {/* Card content */}
        <div className="h-full flex flex-col bg-white">
          {/* Design image with overlay */}
          <div 
            className="relative h-48 overflow-hidden cursor-pointer" 
            onClick={openDialog}
          >
            <img
              src={design.preview_image || '/placeholder-design.jpg'}
              alt={design.title}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Dark overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            
            {/* Selected indicator */}
            {isSelected && (
              <div className="absolute top-3 left-3 bg-lime-500 shadow-lg rounded-full w-8 h-8 flex items-center justify-center z-10 animate-fadeIn">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
            
            {/* Title overlay - ensures title is always visible regardless of design background */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-xl font-bold drop-shadow-md line-clamp-2">{design.title}</h3>
            </div>
            
            {/* Material badge */}
            <div className="absolute top-3 right-3 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium border-l-2">
              <span className="text-white drop-shadow-sm">{design.material.name}</span>
            </div>
          </div>

          {/* Card body with details */}
          <div className="p-5 flex-grow flex flex-col bg-white">
            <p className="text-gray-600 mb-3 line-clamp-2 flex-grow">{design.description}</p>
            
            {/* Footer with contributor and actions */}
            <div className="mt-auto pt-3 flex items-center justify-between border-t border-gray-100">
              {design.contributor ? (
                <span className="text-xs text-gray-500 flex items-center">
                  <svg className="w-3.5 h-3.5 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {design.contributor.name}
                </span>
              ) : (
                <span></span>
              )}
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleSelect();
                }}
                className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all ${
                  isSelected 
                    ? 'bg-lime-100 text-lime-800 hover:bg-lime-200' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                {isSelected ? t('designCard.selected') : t('designCard.add')}
              </button>
            </div>
            
            {/* View details button - overlays the entire card */}
            <button 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
              onClick={openDialog}
              aria-label={t('designCard.viewDetails', { title: design.title })}
            />
          </div>
        </div>
      </div>
      
      {/* Design detail modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 overflow-y-auto hero-text"
        initialFocus={closeButtonRef}
      >
        <div className="flex items-center justify-center min-h-screen p-4">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          <div className="relative bg-white rounded-xl shadow-2xl max-w-5xl w-full mx-auto z-10 overflow-hidden">
            {/* Close button */}
            <button
              ref={closeButtonRef}
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100"
              aria-label={t('designCard.closeDialog')}
            >
              <svg
                className="w-6 h-6 text-gray-700"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Design image */}
              <div className="md:w-3/4 relative">
                <div className="aspect-[3/4] md:h-full">
                  <img
                    src={design.preview_image || '/placeholder-design.jpg'}
                    alt={design.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
                </div>
              </div>

              {/* Design details */}
              <div className="md:w-3/5 p-8 md:p-12">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold mb-2 text-black">
                    {design.title}
                  </h3>
                  <p className="text-xl text-gray-600">
                    {t('designCard.materialDesign', { material: design.material.name })}
                  </p>
                </div>

                {/* Tab navigation */}
                <div className="flex border-b border-gray-200 mb-6">
                  <button
                    className={`py-3 px-6 font-medium focus:outline-none ${
                      activeTab === "info"
                        ? "text-lime-600 border-b-2 border-lime-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab("info")}
                  >
                    {t('designCard.tabs.information')}
                  </button>
                  <button
                    className={`py-3 px-6 font-medium focus:outline-none ${
                      activeTab === "details"
                        ? "text-lime-600 border-b-2 border-lime-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab("details")}
                  >
                    {t('designCard.tabs.details')}
                  </button>
                </div>

                {activeTab === "info" && (
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
                          {t('designCard.materialRequired')}
                        </h4>
                        <p className="text-gray-900">
                          {design.material.name}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
                          {t('designCard.dateAdded')}
                        </h4>
                        <p className="text-gray-900">
                          {formattedDate}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
                        {t('designCard.description')}
                      </h4>
                      <p className="text-gray-900">{design.description}</p>
                    </div>

                    {design.contributor && (
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
                          {t('designCard.contributor')}
                        </h4>
                        <p className="text-gray-900">{design.contributor.name}</p>
                      </div>
                    )}

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center">
                        <p className="text-gray-700 text-sm">
                          {t('designCard.constructionNote')}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "details" && (
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
                      {t('designCard.designSpecifications')}
                    </h4>
                    
                    {/* Design file download */}
                    {design.design_file && (
                      <div className="mb-6">
                        <a
                          href={design.design_file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full py-3 px-4 bg-black text-center rounded-lg group hover:bg-gray-900 transition-colors"
                        >
                          <span className="inline-flex items-center font-bold bg-gradient-to-r from-lime-500 to-yellow-400 bg-clip-text text-transparent">
                            {t('designCard.previewDesignFile')}
                          </span>
                        </a>
                      </div>
                    )}

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <p className="text-gray-900">
                          {t('designCard.practicalSolution', { material: design.material.name.toLowerCase() })}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 p-5 bg-gradient-to-r from-gray-50 to-white border border-gray-100 rounded-lg">
                      <p className="text-gray-700 text-sm">
                        {t('designCard.optimizationNote')}
                      </p>
                    </div>
                  </div>
                )}

                {/* Action buttons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="py-3 px-6 border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  >
                    {t('designCard.close')}
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      onToggleSelect();
                    }}
                    className={`py-3 px-6 rounded-lg font-medium transition-all ${
                      isSelected
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        : 'bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white shadow-sm hover:shadow'
                    }`}
                  >
                    {isSelected ? t('designCard.removeFromBooklet') : t('designCard.addToBooklet')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default DesignCard;