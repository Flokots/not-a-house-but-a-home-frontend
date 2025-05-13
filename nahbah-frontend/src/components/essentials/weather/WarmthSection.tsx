import React from 'react';

interface WarmthSectionProps {
  images: {
    warmth: string;
    styrofoam: string;
    tentFabric: string;
    cardboard: string;
  }
}

const WarmthSection: React.FC<WarmthSectionProps> = ({ images }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-500 hover:shadow-md">
      {/* Header banner with background image */}
      <div className="relative h-40 bg-yellow-600 overflow-hidden">
        <img 
          src={images.warmth} 
          alt="Thermal insulation" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900 to-transparent opacity-80"></div>
        <div className="absolute inset-0 flex items-center px-10">
          <div>
            <h3 className="text-3xl font-bold text-white">
              Warmth
            </h3>
            <p className="text-yellow-100 mt-2 max-w-md">
              Keeping the cold outside, comfort inside
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 md:p-10">
        {/* Two-column content layout */}
        <div className="grid md:grid-cols-5 gap-8">
          {/* Main content column - takes up 3/5 of the space */}
          <div className="md:col-span-3 space-y-8">
            {/* Why It Matters section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-bold text-lg mb-3 text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Why It Matters
              </h4>
              <p className="text-gray-700">
                Thermal insulation primarily protects against the cold,
                and is made from a variety of materials. Proper insulation 
                can reduce heat loss by up to 70%, making it crucial for 
                comfort and sustainable living.
              </p>
            </div>
            
            {/* Architecture Tips section */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                  <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                  <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                </svg>
                Architecture Tips for DIY
              </h4>
              
              {/* Tips in cards for better separation */}
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg flex items-start border border-gray-200">
                  <div className="h-6 w-6 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">1</div>
                  <div>
                    <p className="font-medium text-gray-800">Exterior Insulation</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Place thermal insulation on the outside of the wall - like a winter coat for your building.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg flex items-start border border-gray-200">
                  <div className="h-6 w-6 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">2</div>
                  <div>
                    <p className="font-medium text-gray-800">Full Coverage</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Wrap the entire building - sides, top and bottom. The ceiling needs the thickest insulation as heat rises.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg flex items-start border border-gray-200">
                  <div className="h-6 w-6 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">3</div>
                  <div>
                    <p className="font-medium text-gray-800">Frame Building Technique</p>
                    <p className="text-gray-600 text-sm mt-1">
                      For frame buildings, insulation can go inside walls but must be protected with a vapor barrier.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Materials & Sourcing - takes up 2/5 of the space */}
          <div className="md:col-span-2">
            <div className="bg-gradient-to-b from-green-50 to-green-50/30 p-6 rounded-lg h-full">
              <h4 className="font-bold text-lg mb-4 text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-14a2 2 0 10-.001 4.001A2 2 0 0010 2zm0 7a2 2 0 100-4 2 2 0 000 4zm5-2a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
                </svg>
                Circular Source It
              </h4>
              
              <p className="text-gray-700 mb-6">
                You can make insulation from packaging waste such as polystyrene 
                or styrofoam. For interior insulation, repurpose abandoned camping 
                tents or punctured inflatable beds.
              </p>

              {/* Material thumbnails in a more compact, visually pleasing grid */}
              <div className="grid grid-cols-3 gap-3">
                {['Styrofoam', 'Tent Fabric', 'Cardboard'].map((material, index) => {
                  const imageKeys = ['styrofoam', 'tentFabric', 'cardboard'];
                  return (
                    <div key={material} className="flex flex-col items-center group">
                      <div className="w-full aspect-square rounded-md overflow-hidden shadow-sm group-hover:shadow-md transition-all">
                        <img
                          src={images[imageKeys[index] as keyof typeof images]}
                          alt={`${material} insulation`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                        />
                      </div>
                      <p className="mt-2 text-sm font-medium text-center text-gray-700">{material}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom diagram section - spans full width */}
        <div className="mt-10 bg-white rounded-lg border border-yellow-100 overflow-hidden">
          <div className="bg-yellow-50 p-4 border-b border-yellow-100">
            <h4 className="font-bold text-lg text-gray-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Wall Insulation Layers
            </h4>
          </div>
          
          <div className="p-6">
            {/* Visual representation of wall layers */}
            <div className="relative h-20 mb-6">
              {/* Wall layer visualization */}
              <div className="flex h-full rounded-lg overflow-hidden border border-gray-200">
                <div className="w-1/5 bg-blue-100 flex items-center justify-center text-sm font-medium">Outside Air</div>
                <div className="w-1/5 bg-amber-100 flex items-center justify-center text-sm font-medium">Cladding</div>
                <div className="w-1/5 bg-green-100 flex items-center justify-center text-sm font-medium">Insulation</div>
                <div className="w-1/5 bg-purple-100 flex items-center justify-center text-sm font-medium">Vapor Barrier</div>
                <div className="w-1/5 bg-gray-100 flex items-center justify-center text-sm font-medium">Interior</div>
              </div>
              
              {/* Heat flow arrow */}
              <div className="absolute -bottom-6 left-0 w-full flex justify-center">
                <div className="flex items-center text-blue-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-sm font-medium ml-1">Heat Flow</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-green-50 p-3 rounded-md border border-green-100">
                <span className="font-medium text-green-800">✓ Pro Tip:</span>
                <p className="mt-1 text-gray-700">
                  Use multiple thin layers rather than one thick layer when possible - 
                  the air between layers provides additional insulation.
                </p>
              </div>
              <div className="bg-red-50 p-3 rounded-md border border-red-100">
                <span className="font-medium text-red-800">✗ Common Mistake:</span>
                <p className="mt-1 text-gray-700">
                  Leaving gaps between insulation pieces allows heat to escape through 
                  these thermal bridges, reducing efficiency significantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarmthSection;