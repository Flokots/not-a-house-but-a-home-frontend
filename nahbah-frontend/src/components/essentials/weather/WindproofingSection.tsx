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
      title: 'Exterior Membrane Installation',
      description: 'Fix windproof membrane to the exterior frame using staples, nails, or strong adhesive for maximum draft protection.'
    },
    {
      title: 'Seal All Joints',
      description: 'Glue membrane pieces together with double-sided tape and seal all seams to prevent wind penetration and air leaks.'
    },
    {
      title: 'Maintain Breathability',
      description: 'Ensure the windproof layer allows some vapor to pass through for moisture escape while blocking drafts effectively.'
    }
  ];

  const materials = [
    { name: 'Tent Fabric', image: images.tentFabric },
    { name: 'Tarp Material', image: images.tarpMaterial },
    { name: 'Plastic Sheeting', image: images.plasticSheeting }
  ];

  return (
    <section id="windproofing" className="scroll-mt-20">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Content */}
        <div className="lg:w-2/3">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div>
                <h3 className="text-3xl font-bold text-black dark:text-white">Windproofing</h3>
                <p className="text-gray-500 dark:text-gray-400">Draft protection systems</p>
              </div>
            </div>
          </div>

          {/* Why it matters */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 
                         p-6 rounded-xl mb-8 border border-purple-100 dark:border-purple-800/30">
            <h4 className="text-lg font-semibold mb-3 text-black dark:text-white">Why It Matters</h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              A windproof layer prevents drafts that can make your shelter uncomfortable even when 
              well insulated. It maintains interior temperature, reduces heat loss, and creates a 
              stable indoor environment essential for comfort and energy efficiency.
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

export default WindproofingSection;