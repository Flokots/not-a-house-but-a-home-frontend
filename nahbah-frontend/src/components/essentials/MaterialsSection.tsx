import React from 'react';
import MaterialCard from './material/MaterialCard';
import PaperDetails from './material/PaperDetails';

interface MaterialsSectionProps {
  images: {
    doorLeavesHouse: string;
    cardboard: string;
    metalCans: string;
    tentFabric: string;
    styrofoam: string;
    woodCrates: string;
  }
}

const MaterialsSection: React.FC<MaterialsSectionProps> = ({ images }) => {
  return (
    <div className="animate-fadeIn">
      <div className="mb-16 relative">
        {/* Background text */}
        <div className="absolute -top-20 left-0 w-full text-gray-200 opacity-20 font-semibold z-0 text-[15rem]">
          Materials
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-black">
            Useful materials around us
          </h2>
          <p className="text-xl text-gray-700 mb-6 max-w-3xl leading-relaxed">
            Building and making a house more comfortable is not only
            possible with building materials. In big cities, we can find
            many packaging materials that are suitable for making our
            temporary shelter cozier, more comfortable, and safer.
          </p>
        </div>
      </div>

      {/* Image of example house */}
      <div className="mb-16">
        <div className="rounded-lg overflow-hidden shadow-md max-w-4xl mx-auto">
          <img
            src={images.doorLeavesHouse}
            alt="Self made house from door leaves"
            className="w-full h-auto"
          />
          <div className="bg-gray-100 p-4 text-center text-gray-700">
            Self made house from door leaves. Facade is covered with PVC
            flooring. Built by Lajos (65)
          </div>
        </div>
      </div>

      {/* Materials Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
        <MaterialCard 
          image={images.cardboard}
          title="PAPER"
          alt="Cardboard materials"
        />
        <MaterialCard 
          image={images.metalCans}
          title="METALS"
          alt="Metal can materials"
        />
        <MaterialCard 
          image={images.tentFabric}
          title="TEXTILES"
          alt="Textile materials"
        />
        <MaterialCard 
          image={images.styrofoam}
          title="PLASTICS"
          alt="Plastic materials"
        />
        <MaterialCard 
          image={images.woodCrates}
          title="WOOD"
          alt="Wood materials"
        />
        <MaterialCard 
          image={images.doorLeavesHouse}
          title="EXAMPLES"
          alt="Example home"
        />
      </div>

      {/* Material Detail Sections */}
      <div className="space-y-16 mt-16">
        <PaperDetails image={images.cardboard} />
        {/* Add similar components for the other materials */}
      </div>
    </div>
  );
};

export default MaterialsSection;