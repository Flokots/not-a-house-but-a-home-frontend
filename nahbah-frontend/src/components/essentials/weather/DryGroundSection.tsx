import React from 'react';

interface DryGroundSectionProps {
  images: {
    dryGround: string;
    metalCans: string;
    woodCrates: string;
    plasticBottles: string;
    concreteBlocks: string;
  }
}

const DryGroundSection: React.FC<DryGroundSectionProps> = ({ images }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-500 hover:shadow-md">
      {/* Header banner with background image */}
      <div className="relative h-40 bg-amber-700 overflow-hidden">
        <img 
          src={images.dryGround} 
          alt="Dry ground solutions" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900 to-transparent opacity-80"></div>
        <div className="absolute inset-0 flex items-center px-10">
          <div>
            <h3 className="text-3xl font-bold text-white">
              Dry Ground
            </h3>
            <p className="text-amber-100 mt-2 max-w-md">
              Keeping water away from your shelter's foundation
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
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
              <h4 className="font-bold text-lg mb-3 text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Why It Matters
              </h4>
              <p className="text-gray-700">
                We cannot overstate the importance of keeping dry. We've already looked at vapor
                (wetness) in the air. Now we must consider keeping water in the ground away from the
                hut home. Unless we are able to locate our home in a place where it never rains, such as
                covered by an overpass (and being so lucky there is no runoff headed our way from higher 
                ground), we must pay good attention to this problem.
              </p>
            </div>
            
            {/* Architecture Tips section */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                  <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                  <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                </svg>
                Architecture Tips for DIY
              </h4>
              
              {/* Tips in cards for better separation */}
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg flex items-start border border-gray-200">
                  <div className="h-6 w-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">1</div>
                  <div>
                    <p className="font-medium text-gray-800">Elevate Your Structure</p>
                    <p className="text-gray-600 text-sm mt-1">
                      In the case of groundwater (after it rains for example) the easiest way to achieve this
                      goal is to raise the building off the ground, such as placing the hut on concrete blocks.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg flex items-start border border-gray-200">
                  <div className="h-6 w-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">2</div>
                  <div>
                    <p className="font-medium text-gray-800">Rainscreen for Walls</p>
                    <p className="text-gray-600 text-sm mt-1">
                      The rainscreen mentioned earlier is perfectly sufficient against rainwater
                      on the vertical walls of buildings.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg flex items-start border border-gray-200">
                  <div className="h-6 w-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">3</div>
                  <div>
                    <p className="font-medium text-gray-800">Pitched Roofs Are Better</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Insulating flat roofs is a very difficult task, it is much
                      easier if we build a pitched roof instead to help water run off.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Materials & Sourcing - takes up 2/5 of the space */}
          <div className="md:col-span-2">
            <div className="bg-gradient-to-b from-amber-50 to-amber-50/30 p-6 rounded-lg h-full">
              <h4 className="font-bold text-lg mb-4 text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-14a2 2 0 10-.001 4.001A2 2 0 0010 2zm0 7a2 2 0 100-4 2 2 0 000 4zm5-2a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
                </svg>
                Circular Source It
              </h4>
              
              <p className="text-gray-700 mb-6">
                Several materials can be used to cover the roof: wood, metal, plastic. 
                Best when cut into smaller pieces and installed as shingles. While we can 
                reuse the material wastes that are consumer byproducts they can also be
                collected intentionally to use for hut homes.
              </p>

              {/* Material thumbnails in a more compact, visually pleasing grid */}
              <div className="grid grid-cols-2 gap-3">
                {['Metal Cans', 'Wood Crates', 'Plastic Bottles', 'Concrete Blocks'].map((material, index) => {
                  const imageKeys = ['metalCans', 'woodCrates', 'plasticBottles', 'concreteBlocks'];
                  return (
                    <div key={material} className="flex flex-col items-center group">
                      <div className="w-full aspect-square rounded-md overflow-hidden shadow-sm group-hover:shadow-md transition-all">
                        <img
                          src={images[imageKeys[index] as keyof typeof images]}
                          alt={`${material} for ground protection`}
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
        <div className="mt-10 bg-white rounded-lg border border-amber-100 overflow-hidden">
          <div className="bg-amber-50 p-4 border-b border-amber-100">
            <h4 className="font-bold text-lg text-gray-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Roof Design Comparison
            </h4>
          </div>
          
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex justify-center mb-4">
                  {/* Simple pitched roof SVG illustration */}
                  <div className="relative w-48 h-32">
                    <div className="absolute bottom-0 w-full h-8 bg-gray-300"></div>
                    <div className="absolute bottom-8 left-0 w-0 h-0 border-l-[96px] border-l-transparent border-b-[40px] border-b-amber-600"></div>
                    <div className="absolute bottom-8 right-0 w-0 h-0 border-r-[96px] border-r-transparent border-b-[40px] border-b-amber-600"></div>
                  </div>
                </div>
                <h5 className="font-medium text-lg text-center text-gray-800 mb-3">Pitched Roof</h5>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-1.5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Better water drainage</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-1.5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Easier to construct with recycled materials</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-1.5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Simple design with fewer leak points</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex justify-center mb-4">
                  {/* Simple flat roof SVG illustration */}
                  <div className="relative w-48 h-32">
                    <div className="absolute bottom-0 w-full h-8 bg-gray-300"></div>
                    <div className="absolute bottom-8 w-full h-4 bg-amber-600"></div>
                  </div>
                </div>
                <h5 className="font-medium text-lg text-center text-gray-800 mb-3">Flat Roof</h5>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-1.5 text-red-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Water pools and can cause leaks</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-1.5 text-red-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Difficult to insulate effectively</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-1.5 text-red-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Requires more waterproofing material</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h5 className="font-bold text-lg mb-2 text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Protecting Water Usage Areas
              </h5>
              <p className="text-gray-700 mb-4">
                It is also necessary to mention the water for use, against which the materials and structures 
                of the building must also be protected. In a lightweight building, the simplest solution
                is to cover the area around the sink with a continuous PVC layer.
              </p>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-white p-3 rounded shadow-sm">
                  <p className="font-medium text-sm">Sink Areas</p>
                  <p className="text-xs text-gray-600 mt-1">Use PVC sheeting to create a waterproof zone</p>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <p className="font-medium text-sm">Washing Areas</p>
                  <p className="text-xs text-gray-600 mt-1">Direct water away from walls and floors</p>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <p className="font-medium text-sm">Entry Points</p>
                  <p className="text-xs text-gray-600 mt-1">Create barriers against rain runoff</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DryGroundSection;