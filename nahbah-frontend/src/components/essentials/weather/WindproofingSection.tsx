import React from 'react';

interface WindproofingSectionProps {
  images: {
    windproofing: string;
    tentFabric: string;
    tarpMaterial: string;
    plasticSheeting: string;
  }
}

const WindproofingSection: React.FC<WindproofingSectionProps> = ({ images }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-500 hover:shadow-md">
      {/* Header banner with background image */}
      <div className="relative h-40 bg-green-700 overflow-hidden">
        <img 
          src={images.windproofing} 
          alt="Wind protection" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-transparent opacity-80"></div>
        <div className="absolute inset-0 flex items-center px-10">
          <div>
            <h3 className="text-3xl font-bold text-white">
              Windproofing
            </h3>
            <p className="text-green-100 mt-2 max-w-md">
              Protecting your shelter from drafts and air leaks
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
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <h4 className="font-bold text-lg mb-3 text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Why It Matters
              </h4>
              <p className="text-gray-700">
                If you don't want the wind to blow through your house easily, you should wrap it with a
                windproof layer. This helps maintain interior temperature and prevents drafts that
                can make your shelter uncomfortable even when well insulated.
              </p>
            </div>
            
            {/* Architecture Tips section */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                  <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                  <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                </svg>
                Architecture Tips for DIY
              </h4>
              
              {/* Tips in cards for better separation */}
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg flex items-start border border-gray-200">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">1</div>
                  <div>
                    <p className="font-medium text-gray-800">Proper Installation</p>
                    <p className="text-gray-600 text-sm mt-1">
                      The windproof membrane is also part of the layered walls. You can use a stapler or small
                      nails to fix it in place on the exterior frame.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg flex items-start border border-gray-200">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">2</div>
                  <div>
                    <p className="font-medium text-gray-800">Sealing Seams</p>
                    <p className="text-gray-600 text-sm mt-1">
                      It is also good if you can glue the pieces of the membranes together with
                      double-sided glue to ensure no gaps for wind to penetrate.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg flex items-start border border-gray-200">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">3</div>
                  <div>
                    <p className="font-medium text-gray-800">Breathability</p>
                    <p className="text-gray-600 text-sm mt-1">
                      It is important that the windproof layer allows the vapor to pass
                      through at least a little, so that if moisture does get into the wall, it can escape to the
                      outside.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Materials & Sourcing - takes up 2/5 of the space */}
          <div className="md:col-span-2">
            <div className="bg-gradient-to-b from-emerald-50 to-emerald-50/30 p-6 rounded-lg h-full">
              <h4 className="font-bold text-lg mb-4 text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-14a2 2 0 10-.001 4.001A2 2 0 0010 2zm0 7a2 2 0 100-4 2 2 0 000 4zm5-2a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
                </svg>
                Circular Source It
              </h4>
              
              <p className="text-gray-700 mb-6">
                The material of woven camping tents is perfect for this purpose. Tarps and
                plastic sheeting can also be effective when properly secured.
              </p>

              {/* Material thumbnails in a more compact, visually pleasing grid */}
              <div className="grid grid-cols-3 gap-3">
                {['Tent Fabric', 'Tarp Material', 'Plastic Sheeting'].map((material, index) => {
                  const imageKeys = ['tentFabric', 'tarpMaterial', 'plasticSheeting'];
                  return (
                    <div key={material} className="flex flex-col items-center group">
                      <div className="w-full aspect-square rounded-md overflow-hidden shadow-sm group-hover:shadow-md transition-all">
                        <img
                          src={images[imageKeys[index] as keyof typeof images]}
                          alt={`${material} for windproofing`}
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
        <div className="mt-10 bg-white rounded-lg border border-green-100 overflow-hidden">
          <div className="bg-green-50 p-4 border-b border-green-100">
            <h4 className="font-bold text-lg text-gray-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Windproofing vs. Vapor Barrier
            </h4>
          </div>
          
          <div className="p-6">
            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6">
              <div className="flex-1 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-green-400 flex-shrink-0 flex items-center justify-center text-white font-medium">W</div>
                  <h5 className="font-medium text-gray-800 ml-3">Outer Layer (Windproofing)</h5>
                </div>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-1.5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Blocks wind from entering the structure</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-1.5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Should allow some moisture to escape</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-1.5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Installed on the exterior side</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex-1 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-400 flex-shrink-0 flex items-center justify-center text-white font-medium">V</div>
                  <h5 className="font-medium text-gray-800 ml-3">Inner Layer (Vapor Barrier)</h5>
                </div>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-1.5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Prevents interior moisture from entering walls</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-1.5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Should be completely sealed at all seams</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-1.5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Installed on the interior side of insulation</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-100">
              <h5 className="font-bold text-lg mb-2 text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Pro Tip: Making Tent Material Work Harder
              </h5>
              <p className="text-gray-700">
                You can even use the same type of tent material for vapor barrier and wind barrier, but
                in this case it is worth perforating the outer layer with a needle. The vapor can escape
                through these tiny holes, but the wind cannot blow through.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindproofingSection;