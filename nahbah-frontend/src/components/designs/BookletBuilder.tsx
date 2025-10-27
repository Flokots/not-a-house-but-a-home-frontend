import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { downloadBooklet } from "@/api/booklet";
import {type Design } from "@/types/designs";
import { getImageUrl } from "@/lib/utils";

interface BookletBuilderProps {
  selectedDesigns: number[];
  designs: Design[];
  onRemoveDesign: (id: number) => void;
}

const BookletBuilder: React.FC<BookletBuilderProps> = ({ 
  selectedDesigns, 
  designs, 
  onRemoveDesign 
}) => {
  const { t } = useTranslation('plans');
  const [isGenerating, setIsGenerating] = useState(false);
  
  const selectedDesignsData = designs.filter(design => 
    selectedDesigns.includes(design.id)
  );
  
  const handleGenerateBooklet = async () => {
    if (selectedDesigns.length === 0) return;
    
    setIsGenerating(true);
    try {
      await downloadBooklet(selectedDesigns);
      // Success! The file download should have started automatically
    } catch (error) {
      console.error("Failed to generate booklet:", error);
      alert(t('bookletBuilder.generateError'));
    } finally {
      setIsGenerating(false);
    }
  };
  
  return (
    <div className="bg-white rounded-md border border-neutral-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-neutral-200">
        <h3 className="text-base font-medium text-neutral-800 flex items-center">
          <svg className="w-4 h-4 mr-2 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          {t('bookletBuilder.title')}
        </h3>
      </div>
      
      <div className="p-5">
        <p className="text-sm text-neutral-600 mb-4">
          {t('bookletBuilder.selectedCount', { count: selectedDesigns.length })}
        </p>
        
        {selectedDesignsData.length > 0 ? (
          <div className="max-h-64 overflow-y-auto space-y-2 pr-1 mb-5 custom-scrollbar">
            {selectedDesignsData.map(design => (
              <div key={design.id} className="flex items-center justify-between rounded-md border border-neutral-200 bg-neutral-50 overflow-hidden">
                <div className="flex items-center p-2">
                  <div className="w-8 h-8 rounded overflow-hidden flex-shrink-0">
                    <img 
                      src={getImageUrl(design.design_file) || undefined} 
                      alt={design.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="ml-3 text-xs text-neutral-700 truncate max-w-[140px]">
                    {design.title}
                  </span>
                </div>
                <button 
                  onClick={() => onRemoveDesign(design.id)}
                  className="h-full px-3 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                    <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-6 text-neutral-500 text-sm bg-neutral-50 rounded-md mb-5">
            {t('bookletBuilder.noDesigns')}
          </div>
        )}
        
        <button
          onClick={handleGenerateBooklet}
          disabled={selectedDesigns.length === 0 || isGenerating}
          className={`w-full py-2.5 px-4 rounded-md text-sm font-medium ${
            selectedDesigns.length === 0 || isGenerating
              ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
              : 'bg-neutral-900 hover:bg-black text-white transition-colors'
          } flex items-center justify-center`}
        >
          {isGenerating ? (
            <>
              <div className="w-4 h-4 border-2 border-neutral-400 border-t-white rounded-full animate-spin mr-2"></div>
              <span>{t('bookletBuilder.generating')}</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none">
                <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{t('bookletBuilder.downloadBooklet')}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default BookletBuilder;