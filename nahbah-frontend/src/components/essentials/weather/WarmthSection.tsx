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
    <section id="warmth" className="scroll-mt-20">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Content */}
        <div className="lg:w-2/3">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div>
                <h3 className="text-3xl font-bold text-black dark:text-white">Warmth</h3>
                <p className="text-gray-500 dark:text-gray-400">Thermal insulation techniques</p>
              </div>
            </div>
          </div>

          {/* Why it matters */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10 
                         p-6 rounded-xl mb-8 border border-red-100 dark:border-red-800/30">
            <h4 className="text-lg font-semibold mb-3 text-black dark:text-white">Why It Matters</h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Thermal insulation protects against the cold and can reduce heat loss by up to 70%. 
              Proper insulation is crucial for comfort and sustainable living in your shelter.
            </p>
          </div>

          {/* Tips */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-6 text-black dark:text-white">Key Techniques</h4>
            <div className="space-y-4">
              {tips.map((tip, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700">
                  <div className="flex items-start">
                    <div>
                      <h5 className="font-semibold text-black dark:text-white mb-1">{tip.title}</h5>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Materials */}
        <div className="lg:w-1/3">
          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-slate-700">
            <h4 className="text-lg font-semibold mb-6 text-black dark:text-white">Materials You Can Use</h4>
            <div className="space-y-4">
              {materials.map((material, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                  <img
                    src={material.image}
                    alt={material.name}
                    className="w-full h-32 object-cover rounded mb-3"
                  />
                  <p className="text-center font-medium text-black dark:text-white">{material.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarmthSection;