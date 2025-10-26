import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { getMaterials } from "@/api/materials";

interface Material {
  id: number;
  name: string;
  material_image: string | null;
  description?: string;
}

interface DesignFiltersProps {
  filters: {
    materials: string[];
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    materials: string[];
  }>>;
}

const DesignFilters: React.FC<DesignFiltersProps> = ({ filters, setFilters }) => {
  const { t } = useTranslation('plans');
  const [materials, setMaterials] = useState<Material[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Load all available materials
  useEffect(() => {
    const loadMaterials = async () => {
      setIsLoading(true);
      try {
        const data = await getMaterials();
        setMaterials(data);
      } catch (error) {
        console.error("Failed to fetch materials:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadMaterials();
  }, []);

  // Toggle material selection
  const toggleMaterial = (materialName: string) => {
    setFilters(prev => {
      if (prev.materials.includes(materialName)) {
        return {
          ...prev,
          materials: prev.materials.filter(item => item !== materialName)
        };
      } else {
        return {
          ...prev,
          materials: [...prev.materials, materialName]
        };
      }
    });
  };

  // Clear all selected materials
  const clearFilters = () => {
    setFilters({
      materials: [],
    });
  };

  // Filter materials based on search term
  const filteredMaterials = materials.filter(material => 
    material.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="bg-slate-100 rounded-md border border-neutral-100 p-6 space-y-6">
        <div className="space-y-3">
          <div className="h-8 bg-neutral-100 rounded-md w-2/3 animate-pulse"></div>
          <div className="h-10 bg-neutral-50 rounded-md w-full animate-pulse"></div>
        </div>
        <div className="pt-6 border-t border-neutral-100">
          <div className="mb-4 h-5 bg-neutral-100 w-1/3 rounded animate-pulse"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-md bg-neutral-50 animate-pulse"></div>
                <div className="h-4 w-full bg-neutral-50 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-100 rounded-md border border-neutral-100 overflow-hidden hero-text font-medium">
      {/* Header */}
      <div className="px-6 py-5 border-b border-neutral-100">
        <h3 className="text-lg text-neutral-800 mb-6">{t('filters.materialSelection')}</h3>
        
        {/* Search box */}
        <div className="relative">
          <input
            type="text"
            placeholder={t('filters.searchMaterials')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-neutral-200 border-none rounded-md text-sm text-black font-normal focus:ring-1 focus:ring-amber-400 placeholder-neutral-900"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          {/* Clear search */}
          {searchTerm && (
            <button 
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-600 hover:text-neutral-800"
              onClick={() => setSearchTerm("")}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Material selection */}
      <div className="px-6 py-5 hero-text font-medium">
        <div className="flex items-center justify-between mb-5">
          <h4 className="text-sm uppercase tracking-widest text-neutral-600">{t('filters.materials')}</h4>
          
          {filters.materials.length > 0 && (
            <motion.button 
              onClick={clearFilters}
              className="text-sm text-neutral-500 hover:text-amber-500 transition-colors flex items-center"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
            >
              {t('filters.clearAll')}
              <svg className="ml-1 w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </motion.button>
          )}
        </div>
        
        <AnimatePresence>
          {filteredMaterials.length > 0 ? (
            <div className="max-h-72 overflow-y-auto pr-1 custom-scrollbar">
              <motion.div 
                className="grid grid-cols-1 gap-2"
                initial="initial"
                animate="animate"
                variants={{
                  animate: {
                    transition: {
                      staggerChildren: 0.05
                    }
                  }
                }}
              >
                {filteredMaterials.map((material) => (
                  <motion.div
                    key={material.id}
                    variants={{
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 350, damping: 25 } }
                    }}
                  >
                    <label 
                      className={`flex items-center p-2.5 rounded-md cursor-pointer transition-all ${
                        filters.materials.includes(material.name) 
                          ? 'bg-amber-50 border border-amber-100'
                          : 'hover:bg-neutral-50 border border-transparent'
                      }`}
                    >
                      <div className="relative flex-shrink-0">
                        <input
                          type="checkbox"
                          className="absolute opacity-0 w-0 h-0"
                          checked={filters.materials.includes(material.name)}
                          onChange={() => toggleMaterial(material.name)}
                          id={`material-${material.id}`}
                        />
                        <div className={`w-5 h-5 rounded-md border transition-colors ${
                          filters.materials.includes(material.name) 
                            ? 'border-amber-400 bg-amber-400' 
                            : 'border-neutral-300 bg-white'
                        }`}>
                          {filters.materials.includes(material.name) && (
                            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                      
                      {material.material_image ? (
                        <div className="ml-3 w-9 h-9 rounded-md overflow-hidden flex-shrink-0 bg-neutral-100 border border-neutral-200">
                          <img 
                            src={material.material_image} 
                            alt={material.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="ml-3 w-9 h-9 rounded-md overflow-hidden flex-shrink-0 bg-neutral-100 border border-neutral-200 flex items-center justify-center">
                          <span className="text-xs text-neutral-400">{material.name.charAt(0)}</span>
                        </div>
                      )}
                      
                      <div className="ml-3">
                        <span className="text-sm font-light text-neutral-800">{material.name}</span>
                        {material.description && (
                          <p className="text-xs text-neutral-500 line-clamp-1">{material.description}</p>
                        )}
                      </div>
                    </label>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ) : searchTerm ? (
            <motion.div 
              className="py-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-neutral-100">
                <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-neutral-600 text-sm font-normal">
                {t('filters.noResultsFor', { searchTerm })}
              </p>
            </motion.div>
          ) : (
            <motion.div 
              className="py-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-neutral-600 text-sm">{t('filters.noMaterials')}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Selected materials display */}
      <AnimatePresence>
        {filters.materials.length > 0 && (
          <motion.div 
            className="px-6 py-5 border-t border-neutral-100 bg-neutral-50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-xs uppercase tracking-wider text-neutral-500 font-light mb-3">
              {t('filters.activeFilters')}
            </h4>
            <div className="flex flex-wrap gap-2">
              {filters.materials.map((name) => (
                <motion.span 
                  key={name}
                  className="inline-flex items-center bg-white text-neutral-700 text-xs rounded-full px-3 py-1.5 border border-neutral-200 shadow-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  layout
                >
                  {name}
                  <button 
                    onClick={() => toggleMaterial(name)}
                    className="ml-1.5 text-neutral-400 hover:text-neutral-700 p-0.5"
                  >
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Results summary */}
      <div className="px-6 py-5 bg-neutral-900 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-light text-neutral-300">
              {t('filters.filteringBy', { count: filters.materials.length })}
            </p>
          </div>
          
          {filters.materials.length > 0 && (
            <button
              onClick={clearFilters}
              className="text-xs px-3 py-1.5 border border-neutral-700 rounded-full text-neutral-200 hover:border-neutral-500 hover:text-white transition-colors"
            >
              {t('filters.reset')}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesignFilters;