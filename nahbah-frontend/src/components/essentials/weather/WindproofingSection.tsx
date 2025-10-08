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
  const tips = [
    {
      title: 'Proper Installation',
      description: 'Fix windproof membrane to the exterior frame using staples or small nails.'
    },
    {
      title: 'Sealing Seams',
      description: 'Glue membrane pieces together with double-sided tape to prevent wind penetration.'
    },
    {
      title: 'Breathability',
      description: 'Ensure the windproof layer allows some vapor to pass through for moisture escape.'
    }
  ];

  const materials = [
    { name: 'Tent Fabric', image: images.tentFabric },
    { name: 'Tarp Material', image: images.tarpMaterial },
    { name: 'Plastic Sheeting', image: images.plasticSheeting }
  ];

  return (
    <section id="windproofing" className="max-w-6xl mx-auto">
      {/* Simple header */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Windproofing</h3>
        <p className="text-gray-600">Protecting your shelter from drafts and air leaks</p>
      </div>

      {/* Main content */}
      <div className="space-y-8">
        {/* Why it matters */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">Why It Matters</h4>
          <p className="text-gray-700">
            A windproof layer prevents drafts that can make your shelter uncomfortable even when 
            well insulated. It helps maintain interior temperature and reduces heat loss.
          </p>
        </div>

        {/* Simple tips */}
        <div>
          <h4 className="font-medium mb-4">Key Tips</h4>
          <div className="space-y-3">
            {tips.map((tip, index) => (
              <div key={index} className="border-l-4 border-lime-400 pl-4">
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
                  className="w-full h-42 object-cover rounded mb-2"
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

export default WindproofingSection;