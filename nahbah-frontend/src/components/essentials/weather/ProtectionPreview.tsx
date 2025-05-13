import React from 'react';

interface ProtectionPreviewProps {
  images: {
    warmth: string;
    stayingDry: string;
    windproofing: string;
    dryGround: string;
  }
}

const ProtectionPreview: React.FC<ProtectionPreviewProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
        <div className="h-48 overflow-hidden">
          <img
            src={images.warmth}
            alt="Thermal insulation"
            className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-700"
          />
        </div>
        <div className="bg-white p-4 text-center">
          <h3 className="font-medium text-lg text-gray-800">Warmth</h3>
          <p className="text-sm text-gray-500 mt-1">Thermal insulation techniques</p>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
        <div className="h-48 overflow-hidden">
          <img
            src={images.stayingDry}
            alt="Vapor barrier"
            className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-700"
          />
        </div>
        <div className="bg-white p-4 text-center">
          <h3 className="font-medium text-lg text-gray-800">Staying Dry</h3>
          <p className="text-sm text-gray-500 mt-1">Vapor barrier solutions</p>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
        <div className="h-48 overflow-hidden">
          <img
            src={images.windproofing}
            alt="Wind protection"
            className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-700"
          />
        </div>
        <div className="bg-white p-4 text-center">
          <h3 className="font-medium text-lg text-gray-800">Windproofing</h3>
          <p className="text-sm text-gray-500 mt-1">Wind protection systems</p>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
        <div className="h-48 overflow-hidden">
          <img
            src={images.dryGround}
            alt="Dry ground"
            className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-700"
          />
        </div>
        <div className="bg-white p-4 text-center">
          <h3 className="font-medium text-lg text-gray-800">Dry Ground</h3>
          <p className="text-sm text-gray-500 mt-1">Ground water protection</p>
        </div>
      </div>
    </div>
  );
};

export default ProtectionPreview;