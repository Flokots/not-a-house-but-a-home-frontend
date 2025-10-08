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
  const tips = [
    {
      title: 'Exterior Insulation',
      description: 'Place thermal insulation on the outside of walls like a winter coat for your building.'
    },
    {
      title: 'Full Coverage',
      description: 'Wrap the entire building - sides, top and bottom. The ceiling needs the thickest insulation.'
    },
    {
      title: 'Frame Building Technique',
      description: 'For frame buildings, insulation can go inside walls but must be protected with a vapor barrier.'
    }
  ];

  const materials = [
    { name: 'Styrofoam', image: images.styrofoam },
    { name: 'Tent Fabric', image: images.tentFabric },
    { name: 'Cardboard', image: images.cardboard }
  ];

  return (
    <section id="warmth" className="max-w-6xl mx-auto">
      {/* Simple header */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Warmth</h3>
        <p className="text-gray-600">Keeping the cold outside, comfort inside</p>
      </div>

      {/* Main content */}
      <div className="space-y-8">
        {/* Why it matters */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">Why It Matters</h4>
          <p className="text-gray-700">
            Thermal insulation protects against the cold and can reduce heat loss by up to 70%. 
            Proper insulation is crucial for comfort and sustainable living in your shelter.
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

export default WarmthSection;