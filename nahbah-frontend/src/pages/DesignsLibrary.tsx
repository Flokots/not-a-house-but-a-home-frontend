import { useState, useEffect, useMemo } from "react";
import DesignCard from "@/components/designs/DesignCard";
import DesignFilters from "@/components/designs/DesignFilters";
import BookletBuilder from "@/components/designs/BookletBuilder";
import { getDesigns } from "@/api/designs";
import { type Design } from "@/types/designs";
import designLibrary from "@/assets/designLibrary.png"

const DesignsLibrary = () => {
  const [designs, setDesigns] = useState<Design[]>([]);
  const [filteredDesigns, setFilteredDesigns] = useState<Design[]>([]);
  const [selectedDesigns, setSelectedDesigns] = useState<number[]>([]);
  const [filters, setFilters] = useState({
    materials: [] as string[],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Get all approved designs
  const approvedDesigns = useMemo(() => {
    return designs.filter(design => design.status === "approved");
  }, [designs]);

  // Load designs once on component mount
  useEffect(() => {
    const loadDesigns = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getDesigns();
        setDesigns(data);
        
        // Initially show all approved designs
        const approvedDesigns = data.filter((design: { status: string; }) => design.status === "approved");
        setFilteredDesigns(approvedDesigns);
      } catch (error) {
        console.error("Failed to fetch designs:", error);
        setError("Failed to load designs. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    
    loadDesigns();
  }, []);

  // Filter designs when filters change
  useEffect(() => {
    if (approvedDesigns.length === 0) return;
    
    const filtered = approvedDesigns.filter(design => {
      // If no filters are selected, show all designs
      if (filters.materials.length === 0) {
        return true;
      }
      
      // Check if design matches selected materials
      return filters.materials.includes(design.material.name);
    });
    
    setFilteredDesigns(filtered);
  }, [approvedDesigns, filters]);

  // Toggle design selection for the booklet
  const toggleDesignSelection = (designId: number) => {
    setSelectedDesigns(prev => {
      if (prev.includes(designId)) {
        return prev.filter(id => id !== designId);
      } else {
        return [...prev, designId];
      }
    });
  };

  return (
    <div className="min-h-screen bg-white hero-text">
      {/* Hero section with elegant design */}
      <div className="relative bg-black overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={designLibrary}
            alt="Design Library"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/50"></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center mb-6">
              <div className="h-px bg-lime-500 w-8"></div>
              <span className="mx-4 text-sm font-medium text-lime-400 uppercase tracking-widest">
                Design Library
              </span>
              <div className="h-px bg-lime-500 w-8"></div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Sustainable Shelters
              <span className="block bg-gradient-to-r from-lime-400 to-yellow-300 bg-clip-text text-transparent">
                Design Collection
              </span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Browse our curated collection of innovative designs that transform 
              found materials into essential shelter components.
            </p>
            
            {selectedDesigns.length > 0 && (
              <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <span className="flex items-center justify-center bg-lime-500 text-white w-8 h-8 rounded-full font-bold">
                  {selectedDesigns.length}
                </span>
                <span className="text-white font-medium">designs selected for your booklet</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Decorative bottom curve */}
        <div 
          className="absolute -bottom-1 left-0 right-0 h-16 bg-white" 
          style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        {error ? (
          <div className="bg-white border border-red-100 text-red-700 p-8 rounded-xl text-center max-w-2xl mx-auto shadow-sm">
            <svg className="w-12 h-12 text-red-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-lg mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-red-50 hover:bg-red-100 rounded-lg transition-colors text-red-700 font-medium"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            {/* Mobile filters toggle */}
            <div className="md:hidden mb-6">
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="w-full py-3 px-4 bg-gray-100 rounded-lg flex items-center justify-between font-medium text-gray-700"
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  Filters {filters.materials.length > 0 && `(${filters.materials.length})`}
                </span>
                <svg className={`w-5 h-5 text-gray-500 transform transition-transform ${showMobileFilters ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Mobile filters panel */}
              {showMobileFilters && (
                <div className="mt-3 mb-6">
                  <DesignFilters 
                    filters={filters}
                    setFilters={setFilters}
                  />
                </div>
              )}
            </div>
          
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar: Filters and Booklet Builder */}
              <div className="lg:col-span-1 hidden md:block">
                <div className="sticky top-24 space-y-6">
                  {/* Filters card */}
                  <DesignFilters 
                    filters={filters}
                    setFilters={setFilters}
                  />
                  
                  {/* Booklet builder */}
                  {selectedDesigns.length > 0 && (
                    <div className="transition-all duration-500 transform">
                      <BookletBuilder 
                        selectedDesigns={selectedDesigns}
                        designs={designs}
                        onRemoveDesign={(id) => toggleDesignSelection(
                          typeof id === 'string' ? parseInt(id) : id
                        )}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Main content: Design cards */}
              <div className="lg:col-span-3">
                {isLoading ? (
                  <div className="flex flex-col justify-center items-center h-64 bg-white rounded-xl shadow-sm p-10">
                    <div className="w-16 h-16 relative">
                      <div className="absolute top-0 left-0 right-0 bottom-0 animate-pulse-ring rounded-full border-4 border-lime-400"></div>
                      <div className="absolute top-0 left-0 right-0 bottom-0 animate-pulse bg-lime-500 rounded-full opacity-75"></div>
                    </div>
                    <p className="text-gray-700 font-medium mt-6">Loading sustainable designs...</p>
                  </div>
                ) : filteredDesigns.length > 0 ? (
                  <>
                    <div className="mb-8 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-800 mb-1">Innovative Designs</h2>
                          <p className="text-gray-600">
                            Showing {filteredDesigns.length} design{filteredDesigns.length !== 1 ? 's' : ''}
                            {filters.materials.length > 0 ? ' for your selected materials' : ''}
                          </p>
                        </div>
                        
                        <div className="mt-3 md:mt-0 flex items-center">
                          {/* Sort dropdown could go here */}
                          {filters.materials.length > 0 && (
                            <button
                              onClick={() => setFilters({ materials: [] })}
                              className="text-sm flex items-center text-gray-500 hover:text-gray-700"
                            >
                              <span>Clear filters</span>
                              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                      {filteredDesigns.map(design => (
                        <DesignCard
                          key={design.id}
                          design={design}
                          isSelected={selectedDesigns.includes(design.id)}
                          onToggleSelect={() => toggleDesignSelection(design.id)}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-gray-100">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-6">
                      <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">No designs found</h3>
                    <p className="text-gray-600 text-lg max-w-md mx-auto mb-6">
                      {filters.materials.length > 0 
                        ? "We couldn't find any designs matching your current material selection." 
                        : "No designs are currently available in our library."}
                    </p>
                    {filters.materials.length > 0 && (
                      <button
                        onClick={() => setFilters({ materials: [] })}
                        className="px-8 py-3 bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white rounded-lg transition-all duration-300 font-medium shadow-sm hover:shadow"
                      >
                        Clear all filters
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            {/* Mobile Booklet builder */}
            {selectedDesigns.length > 0 && (
              <div className="md:hidden fixed bottom-0 left-0 right-0 z-20 p-4 bg-white border-t border-gray-200 shadow-lg">
                <button
                  onClick={() => document.getElementById('mobile-booklet')?.classList.toggle('translate-y-full')}
                  className="w-full py-3 px-4 bg-black rounded-lg text-center flex items-center justify-center"
                >
                  <span className="flex items-center justify-center bg-lime-500 text-white w-7 h-7 rounded-full font-bold mr-2">
                    {selectedDesigns.length}
                  </span>
                  <span className="font-bold bg-gradient-to-r from-lime-400 to-yellow-300 bg-clip-text text-transparent">
                    VIEW YOUR BOOKLET
                  </span>
                </button>
                
                <div 
                  id="mobile-booklet"
                  className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl transform translate-y-full transition-transform duration-300 z-30 max-h-[80vh] overflow-y-auto"
                >
                  <div className="p-4">
                    <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <BookletBuilder 
                      selectedDesigns={selectedDesigns}
                      designs={designs}
                      onRemoveDesign={(id) => toggleDesignSelection(
                        typeof id === 'string' ? parseInt(id) : id
                      )}
                    />
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DesignsLibrary;