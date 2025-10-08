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
  const tips = [
    {
      title: 'Layered Wall Protection',
      description: 'Use vapor barriers in walls with multiple layers to prevent moisture damage.'
    },
    {
      title: 'Proper Installation',
      description: 'Overlap vapor barrier pieces by 15cm and seal with tape when possible.'
    },
    {
      title: 'Interior Wall Options',
      description: 'Cover interior walls with recycled materials like door panels or carpet.'
    }
  ];

  const materials = [
    { name: 'Tent Fabric', image: images.tentFabric },
    { name: 'PVC Flooring', image: images.pvcFlooring },
    { name: 'Inflatable Mattress', image: images.inflatableMattress }
  ];

  return (
    <section id="staying-dry" className="max-w-4xl mx-auto">
      {/* Simple header */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Staying Dry</h3>
        <p className="text-gray-600">Protecting your shelter from moisture</p>
      </div>

      {/* Main content */}
      <div className="space-y-8">
        {/* Why it matters */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">Why It Matters</h4>
          <p className="text-gray-700">
            Vapor barriers protect against steam from cooking, washing, and breathing. Without proper 
            moisture control, condensation can destroy insulation and damage your shelter's structure.
          </p>
        </div>

        {/* Simple tips */}
        <div>
          <h4 className="font-medium mb-4">Key Tips</h4>
          <div className="space-y-3">
            {tips.map((tip, index) => (
              <div key={index} className="border-l-4 border-blue-400 pl-4">
                <h5 className="font-medium">{tip.title}</h5>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Materials */}
        <div>
          <h4 className="font-medium mb-4">Materials You Can Use</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {materials.map((material, index) => (
              <div key={index} className="text-center">
                <img
                  src={material.image}
                  alt={material.name}
                  className="w-full h-24 object-cover rounded mb-2"
                />
                <p className="text-sm">{material.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayingDrySection;