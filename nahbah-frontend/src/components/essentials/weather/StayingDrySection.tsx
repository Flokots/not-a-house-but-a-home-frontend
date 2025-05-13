import React from 'react';

interface StayingDrySectionProps {
  images: {
    stayingDry: string;
    tentFabric: string;
    pvcFlooring: string;
    inflatableMattress: string;
  }
}

const StayingDrySection: React.FC<StayingDrySectionProps> = ({ images }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-500 hover:shadow-md">
      {/* Header banner with background image */}
      <div className="relative h-40 bg-blue-700 overflow-hidden">
        <img 
          src={images.stayingDry} 
          alt="Vapor barrier" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-80"></div>
        <div className="absolute inset-0 flex items-center px-10">
          <div>
            <h3 className="text-3xl font-bold text-white">
              Staying Dry
            </h3>
            <p className="text-blue-100 mt-2 max-w-md">
              Protecting your shelter from moisture
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
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <h4 className="font-bold text-lg mb-3 text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Why It Matters
              </h4>
              <p className="text-gray-700">
                The vapor barrier membrane must be protected from steam from cooking, 
                washing, or from the vapour we exhale. This moisture content of the 
                air in the thermal insulation can condense in the winter, which can 
                destroy the thermal insulation or even the building structures.
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
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">1</div>
                  <div>
                    <p className="font-medium text-gray-800">Layered Wall Protection</p>
                    <p className="text-gray-600 text-sm mt-1">
                      A vapor barrier membrane is used in walls that are not homogeneous, such as earth 
                      or adobe walls, but are layered (such as walls on a load-bearing frame).
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg flex items-start border border-gray-200">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">2</div>
                  <div>
                    <p className="font-medium text-gray-800">Proper Installation</p>
                    <p className="text-gray-600 text-sm mt-1">
                      It's best if you can stick the separate pieces together with double-sided tape. If you don't
                      have access to glue, there should be an overlap of about 15 cm between the membranes.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg flex items-start border border-gray-200">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">3</div>
                  <div>
                    <p className="font-medium text-gray-800">Interior Wall Options</p>
                    <p className="text-gray-600 text-sm mt-1">
                      There are many options for covering the inside of the wall: you can create it from
                      old door panels or wainscoting, cover it with a laminate floor or carpet, which makes the
                      interior feel even warmer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Materials & Sourcing - takes up 2/5 of the space */}
          <div className="md:col-span-2">
            <div className="bg-gradient-to-b from-cyan-50 to-cyan-50/30 p-6 rounded-lg h-full">
              <h4 className="font-bold text-lg mb-4 text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-cyan-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-14a2 2 0 10-.001 4.001A2 2 0 0010 2zm0 7a2 2 0 100-4 2 2 0 000 4zm5-2a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
                </svg>
                Circular Source It
              </h4>
              
              <p className="text-gray-700 mb-6">
                The material of camping tents is suitable as a vapor
                barrier membrane, especially that which is in contact
                with the ground. But an inflatable guest bed or camping
                mattress or PVC flooring can also be good.
              </p>

              {/* Material thumbnails in a more compact, visually pleasing grid */}
              <div className="grid grid-cols-3 gap-3">
                {['Tent Fabric', 'PVC Flooring', 'Inflatable Mattress'].map((material, index) => {
                  const imageKeys = ['tentFabric', 'pvcFlooring', 'inflatableMattress'];
                  return (
                    <div key={material} className="flex flex-col items-center group">
                      <div className="w-full aspect-square rounded-md overflow-hidden shadow-sm group-hover:shadow-md transition-all">
                        <img
                          src={images[imageKeys[index] as keyof typeof images]}
                          alt={`${material} for vapor barrier`}
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
        <div className="mt-10 bg-white rounded-lg border border-blue-100 overflow-hidden">
          <div className="bg-blue-50 p-4 border-b border-blue-100">
            <h4 className="font-bold text-lg text-gray-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Correct Vapor Barrier Installation
            </h4>
          </div>
          
          <div className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-around gap-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center text-blue-700 text-xl font-bold">
                  15cm
                </div>
                <h5 className="font-medium mb-2 text-gray-800">Overlap Seams</h5>
                <p className="text-gray-600 text-sm">
                  Ensure vapor barriers overlap by at least 15cm at all seams
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h5 className="font-medium mb-2 text-gray-800">Seal Edges</h5>
                <p className="text-gray-600 text-sm">
                  Use tape or adhesive to completely seal all edges and seams
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <h5 className="font-medium mb-2 text-gray-800">Correct Placement</h5>
                <p className="text-gray-600 text-sm">
                  Install vapor barrier on the warm side (interior) of insulation
                </p>
              </div>
            </div>
            
            <div className="mt-8 grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-green-50 p-3 rounded-md border border-green-100">
                <span className="font-medium text-green-800">✓ Pro Tip:</span>
                <p className="mt-1 text-gray-700">
                  If using recycled materials like tent fabric, inspect carefully for any
                  tears or holes that could compromise the vapor barrier function.
                </p>
              </div>
              <div className="bg-red-50 p-3 rounded-md border border-red-100">
                <span className="font-medium text-red-800">✗ Common Mistake:</span>
                <p className="mt-1 text-gray-700">
                  Installing vapor barriers on both sides of insulation can trap moisture
                  within the wall cavity, leading to mold and decay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayingDrySection;