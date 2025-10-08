import React from 'react';
import ProtectionPreview from '@/components/essentials/weather/ProtectionPreview';
import WarmthSection from '@/components/essentials/weather/WarmthSection';
import StayingDrySection from '@/components/essentials/weather/StayingDrySection';
import WindproofingSection from '@/components/essentials/weather/WindproofingSection';
import DryGroundSection from '@/components/essentials/weather/DryGroundSection';

interface WeatherProtectionProps {
  images: {
    warmth: string;
    stayingDry: string;
    windproofing: string;
    dryGround: string;
    styrofoam: string;
    tentFabric: string;
    cardboard: string;
    pvcFlooring: string;
    inflatableMattress: string;
    tarpMaterial: string;
    plasticSheeting: string;
    metalCans: string;
    woodCrates: string;
    plasticBottles: string;
    concreteBlocks: string;
    styrofoamSheets: string;
  }
}

const WeatherProtection: React.FC<WeatherProtectionProps> = ({ images }) => {
  return (
    <div className="animate-fadeIn">
      <div className="mb-20 relative">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-10 text-black">
            HOW TO PROTECT FROM WEATHER
          </h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            Weather protection is essential for turning a basic shelter
            into a safe, comfortable home. Learn how to protect against
            cold, moisture, wind, and rain using accessible materials.
          </p>

          <ProtectionPreview images={images} />
        </div>
      </div>
      
      {/* Section divider */}
      <div className="flex items-center mb-16">
        <div className="h-px bg-gray-200 flex-grow"></div>
        <div className="px-4 text-4xl font-medium text-gray-600">Protection Methods</div>
        <div className="h-px bg-gray-200 flex-grow"></div>
      </div>

      <div className="space-y-24">
        <WarmthSection images={images} />
        <StayingDrySection images={images} />
        <WindproofingSection images={images} />
        <DryGroundSection images={images} />
      </div>
    </div>
  );
};

export default WeatherProtection;