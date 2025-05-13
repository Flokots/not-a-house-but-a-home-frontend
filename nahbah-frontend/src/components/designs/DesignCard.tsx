import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { type Design } from "@/types/designs";

interface DesignCardProps {
  design: Design;
  isSelected: boolean;
  onToggleSelect: () => void;
}

const DesignCard: React.FC<DesignCardProps> = ({ design, isSelected, onToggleSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  
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
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lime-500 to-yellow-400 z-20"></div>

        {/* Card content */}
        <div className="h-full flex flex-col bg-white">
          {/* Design image with overlay */}
          <div 
            className="relative h-48 overflow-hidden cursor-pointer" 
            onClick={() => setIsOpen(true)}
          >
            <img
              src={design.preview_image || '/placeholder-design.jpg'}
              alt={design.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
            <div className="absolute top-3 right-3 px-3 py-1.5 bg-black/40 backdrop-blur-sm rounded-full text-xs font-medium border-l-2 border-lime-500">
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
                {isSelected ? 'Selected' : 'Add'}
              </button>
            </div>
            
            {/* View details button - overlays the entire card */}
            <button 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
              onClick={() => setIsOpen(true)}
              aria-label={`View details for ${design.title}`}
            />
          </div>
        </div>
      </div>
      
      {/* Design detail modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 overflow-y-auto"
      >
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
          
          <div className="relative bg-white rounded-xl overflow-hidden max-w-5xl w-full mx-auto shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-30 bg-white/90 backdrop-blur-sm w-9 h-9 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Close dialog"
            >
              <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            
            <div className="flex flex-col md:flex-row max-h-[90vh]">
              {/* Left column with image */}
              <div className="md:w-5/12 relative bg-gray-900">
                {/* Decorative top bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lime-500 to-yellow-400 z-10"></div>
                
                <div className="relative h-64 md:h-full">
                  <img 
                    src={design.preview_image || '/placeholder-design.jpg'} 
                    alt={design.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent"></div>
                
                  {/* Bottom info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 text-sm bg-white/20 backdrop-blur-sm rounded-full">
                        {design.material.name}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">{design.title}</h2>
                    
                    {design.contributor && (
                      <p className="text-white/80 flex items-center">
                        <svg className="w-4 h-4 mr-2 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Designed by {design.contributor.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Right column with content */}
              <div className="md:w-7/12 p-6 md:p-8 md:overflow-y-auto">
                <div className="max-w-2xl">
                  {/* Heading with accent */}
                  <div className="inline-flex items-center mb-4">
                    <span className="h-px w-8 bg-lime-500"></span>
                    <span className="mx-3 text-xs font-semibold tracking-widest uppercase text-lime-600">
                      Sustainable Solution
                    </span>
                  </div>
                  
                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 md:hidden">{design.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{design.description}</p>
                  </div>
                  
                  {/* Specifications */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold mb-4 text-gray-800 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Specifications
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="text-sm font-medium text-gray-500 mb-1">Required Material</h5>
                        <p className="text-gray-800 font-medium">{design.material.name}</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="text-sm font-medium text-gray-500 mb-1">Date Added</h5>
                        <p className="text-gray-800 font-medium">{formattedDate}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Design file download */}
                  {design.design_file && (
                    <div className="mb-8">
                      <h4 className="text-lg font-bold mb-4 text-gray-800 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Design Files
                      </h4>
                      
                      <a
                        href={design.design_file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-3 px-4 bg-black text-center rounded-lg group hover:bg-gray-900 transition-colors"
                      >
                        <span className="inline-flex items-center font-bold bg-gradient-to-r from-lime-500 to-yellow-400 bg-clip-text text-transparent">
                          <svg className="w-5 h-5 mr-2 text-lime-500" viewBox="0 0 24 24" fill="none">
                            <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          PREVIEW DESIGN FILE
                        </span>
                      </a>
                    </div>
                  )}
                  
                  {/* Pro tip */}
                  <div className="mb-8 p-4 border border-lime-200 rounded-lg bg-gradient-to-br from-lime-50 to-yellow-50">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="w-6 h-6 text-yellow-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h5 className="text-sm font-semibold text-lime-700 mb-1">Pro Tip</h5>
                        <p className="text-sm text-gray-600">
                          This design works best when combined with other complementary shelter components. 
                          Add it to your booklet to create a comprehensive shelter solution.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="py-3 px-6 border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                    >
                      Close
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
                      {isSelected ? 'Remove from Booklet' : 'Add to Booklet'}
                    </button>
                  </div>
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