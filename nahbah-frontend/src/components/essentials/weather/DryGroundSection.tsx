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
  const tips = [
    {
      title: 'Elevate Your Structure',
      description: 'Raise the building off the ground using concrete blocks or similar materials.'
    },
    {
      title: 'Use Pitched Roofs',
      description: 'Angled roofs help water run off instead of pooling and causing leaks.'
    },
    {
      title: 'Add Rainscreens',
      description: 'Protect vertical walls from rainwater with proper barriers.'
    }
  ];

  const materials = [
    { name: 'Metal Cans', image: images.metalCans },
    { name: 'Wood Crates', image: images.woodCrates },
    { name: 'Plastic Bottles', image: images.plasticBottles },
    { name: 'Concrete Blocks', image: images.concreteBlocks }
  ];

  return (
    <section id="dry-ground" className="max-w-6xl mx-auto">
      {/* Simple header */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Dry Ground</h3>
        <p className="text-gray-600 text-lg">Keep water away from your shelter's foundation</p>
      </div>

      {/* Main content */}
      <div className="space-y-8">
        {/* Why it matters */}
        <div className="bg-gray-50 dark:bg-slate-900 p-6 rounded-lg">
          <h4 className="font-medium mb-3 text-lg">Why It Matters</h4>
          <p className="text-gray-400">
            Keeping your shelter dry is essential. Water from rain and ground moisture can damage 
            your structure and make it uncomfortable to live in. Proper elevation and drainage 
            are key to a successful shelter.
          </p>
        </div>

        {/* Simple tips */}
        <div>
          <h4 className="font-medium mb-4 text-xl">Key Tips</h4>
          <div className="space-y-3">
            {tips.map((tip, index) => (
              <div key={index} className="border-l-4 border-lime-400 pl-4">
                <h5 className="font-medium text-base">{tip.title}</h5>
                <p className="text-gray-600 text-base">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Materials */}
        <div>
          <h4 className="font-medium mb-4">Materials You Can Use</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {materials.map((material, index) => (
              <div key={index} className="text-center">
                <img
                  src={material.image}
                  alt={material.name}
                  className="w-full h-42 object-cover rounded mb-2"
                />
                <p className="text-base">{material.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DryGroundSection;