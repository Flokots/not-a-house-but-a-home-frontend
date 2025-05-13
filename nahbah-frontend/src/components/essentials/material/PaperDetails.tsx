import React from 'react';

interface PaperDetailsProps {
  image: string;
}

const PaperDetails: React.FC<PaperDetailsProps> = ({ image }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-10 hover:shadow-md transition-all duration-500">
      <h3 className="text-3xl font-bold mb-8 text-black uppercase">Paper</h3>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="space-y-4">
            <p>
              <span className="font-semibold">Function:</span> cardboard, packing box
            </p>
            <p>
              <span className="font-semibold">Raw material:</span> paper
            </p>
            <p>
              <span className="font-semibold">Where to find:</span> bicycle shops, shopping malls
            </p>
            <p>
              <span className="font-semibold">What you can use it for:</span> heat insulation (just keep it dry)
            </p>
            <p className="mt-6 text-gray-700">
              Cardboard is an excellent insulator when kept dry. The air pockets between layers provide
              natural thermal insulation. Multiple layers can be used to create more effective barriers
              against cold. This is particularly useful for interior walls and ceiling spaces.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={image}
              alt="Heat insulation made of cardboards"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperDetails;