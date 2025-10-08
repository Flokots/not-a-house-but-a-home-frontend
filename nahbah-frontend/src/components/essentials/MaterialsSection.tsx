import React, { useState, useRef } from "react";
import { Dialog } from "@headlessui/react";

interface MaterialsSectionProps {
  images: {
    doorLeavesHouse: string;
    cardboard: string;
    metalCans: string;
    tentFabric: string;
    styrofoam: string;
    woodCrates: string;
    background?: string;
  };
}

interface MaterialData {
  title: string;
  image: string;
  alt: string;
  function: string;
  rawMaterial: string;
  whereToFind: string;
  use: string;
  examples: string[];
  accent: string;
}

const MaterialsSection: React.FC<MaterialsSectionProps> = ({ images }) => {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialData | null>(
    null
  );
  const [activeTab, setActiveTab] = useState<"info" | "examples">("info");
  const closeButtonRef = useRef(null);

  const materials: MaterialData[] = [
    {
      title: "PAPER",
      image: images.cardboard,
      alt: "Cardboard materials",
      function: "Cardboard, Packing box",
      rawMaterial: "Paper",
      whereToFind: "Bicycle shops, Shopping malls",
      use: "Heat insulation (keep it dry)",
      examples: ["Heat insulation made of cardboards"],
      accent: "border-yellow-500",
    },
    {
      title: "METALS",
      image: images.metalCans,
      alt: "Metal can materials",
      function: "Beverage can",
      rawMaterial: "Aluminum, Iron",
      whereToFind: "Around pubs, Parks",
      use: "Facade cladding, Roofing",
      examples: ["Roof shingles made of beverage cans"],
      accent: "border-gray-400",
    },
    {
      title: "TEXTILES",
      image: images.tentFabric,
      alt: "Textile materials",
      function: "Tents",
      rawMaterial: "Textile",
      whereToFind: "Festivals' venues, Beaches",
      use: "Vapor barrier membrane, Windproof membrane, Secondary layer under roof shingles",
      examples: [
        "Windproof membrane made of tents",
        "Vapor barrier made of tents",
      ],
      accent: "border-lime-500",
    },
    {
      title: "PLASTICS",
      image: images.styrofoam,
      alt: "Plastic materials",
      function: "Protective packaging",
      rawMaterial: "Styrofoam",
      whereToFind: "Electronic stores, Shopping malls",
      use: "Thermal insulation",
      examples: [
        "Thermal insulation made of styrofoam packaging",
        "Roof shingles made of PVC flooring",
      ],
      accent: "border-blue-500",
    },
    {
      title: "WOOD",
      image: images.woodCrates,
      alt: "Wood materials",
      function: "Provide dry ground",
      rawMaterial: "Wood",
      whereToFind: "Market halls, Markets, Grocery stores",
      use: "Rain screen, Facade, Roof shingles",
      examples: ["Rain screen facade made of fruit crates"],
      accent: "border-lime-800",
    },
  ];

  return (
    <div className="animate-fadeIn">
      {/* Header section - matching WeatherProtection exactly */}
      <div className="mb-20 relative">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-10 text-black">
            USEFUL MATERIALS AROUND US
          </h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            Building and making a house more comfortable is not only
            possible with building materials. In big cities, we can find
            many packaging materials that are suitable for making our
            temporary shelter cozier, more comfortable, and safer.
          </p>

          {/* Materials preview image*/}
          <div className="relative">
            <div className="w-full relative overflow-hidden rounded-xl shadow-2xl h-96">
              <div className="rounded-lg overflow-hidden h-full">
                <img
                  src={images.doorLeavesHouse}
                  alt="Self made house from door leaves"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-lg font-medium">
                  Self made house from door leaves. Facade is covered with PVC
                  flooring. Built by Lajos (65)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section divider - matching WeatherProtection exactly */}
      <div className="flex items-center mb-12">
        <div className="h-px bg-gray-200 flex-grow"></div>
        <div className="px-4 text-4xl font-medium text-gray-800">Available Materials & Their Uses</div>
        <div className="h-px bg-gray-200 flex-grow"></div>
      </div>
      <div className="space-y-24">
        {/* Materials cards section */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <p className="text-gray-800 text-center mx-auto text-lg">
              Navigate your surroundings with resourcefulness. Discover how
              everyday objects can be transformed into essential shelter
              components.
            </p>
          </div>

          {/* Enhanced material cards without numbers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {materials.map((material) => (
              <div
                key={material.title}
                className="relative bg-white rounded-xl overflow-hidden group cursor-pointer h-full shadow-md hover:shadow-xl transition-shadow duration-300"
                onClick={() => { setSelectedMaterial(material); setActiveTab("info"); }}
              >
                {/* Material card */}
                <div className="h-full flex flex-col">
                  {/* Material image */}
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={material.image}
                      alt={material.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div
                      className={`absolute top-0 left-0 w-full h-2 ${material.accent}`}
                    ></div>
                  </div>

                  {/* Material title */}
                  <div className="bg-white p-6 flex-grow">
                    <h4 className="text-2xl font-bold mb-2">{material.title}</h4>
                    <p className="text-gray-800 mb-4">{material.function}</p>
                    <div className="flex items-center text-lime-600 font-medium">
                      <span>View details</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Material uses infographic section */}
        <div className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col items-center mb-16">
                <h3 className="text-3xl font-bold text-center mb-4">
                  How materials can be repurposed
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg border-t-4 border-yellow-500 hover:shadow-xl transition-shadow">
                  <div className="p-8">
                    <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-6">
                      <svg
                        className="w-8 h-8 text-yellow-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-4">
                      Structural elements
                    </h4>
                    <p className="text-gray-800 mb-4">
                      Materials like wood crates and beverage cans can be
                      repurposed for walls, roof, and foundational elements.
                    </p>
                    <ul className="list-disc list-inside text-gray-800">
                      <li>Roof shingles from cans</li>
                      <li>Rain screens from crates</li>
                      <li>Wall frames from scrap wood</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-xl overflow-hidden shadow-lg border-t-4 border-lime-500 hover:shadow-xl transition-shadow">
                  <div className="p-8">
                    <div className="w-16 h-16 rounded-full bg-lime-100 flex items-center justify-center mb-6">
                      <svg
                        className="w-8 h-8 text-lime-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-4">
                      Insulation & protection
                    </h4>
                    <p className="text-gray-800 mb-4">
                      Soft and porous materials can provide crucial insulation
                      against cold and heat loss.
                    </p>
                    <ul className="list-disc list-inside text-gray-800">
                      <li>Heat insulation from cardboard</li>
                      <li>Thermal protection with styrofoam</li>
                      <li>Water barriers using plastic sheets</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-xl overflow-hidden shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
                  <div className="p-8">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                      <svg
                        className="w-8 h-8 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-4">Weather protection</h4>
                    <p className="text-gray-800 mb-4">
                      Securing shelter against wind, rain, and moisture requires
                      specialized barriers.
                    </p>
                    <ul className="list-disc list-inside text-gray-800">
                      <li>Windproof membranes from tents</li>
                      <li>Vapor barriers from plastic sheets</li>
                      <li>Waterproofing from tarpaulins</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final message section - keeping existing content but matching structure */}
        <div className="container mx-auto px-4 mb-20">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-900 to-lime-900 rounded-2xl overflow-hidden shadow-xl relative">
            <div className="relative px-8 py-16 md:p-16 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6">
                  Look around with new eyes
                </h3>
                <p className="text-xl text-white/90 leading-relaxed">
                  Very often, we don't even think that a carpet can be used for
                  more than walking on, or that beverage cans could also be useful
                  if there are a lot of them. Remember to see the potential in
                  everyday discarded items.
                </p>
              </div>
            </div>

            {/* Additional design elements */}
            <div className="absolute top-0 left-0 w-16 h-16 bg-white/10 rounded-br-3xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-tl-3xl"></div>
          </div>
        </div>
      </div>

      {/* Keep existing material dialog unchanged */}
      <Dialog
        open={selectedMaterial !== null}
        onClose={() => setSelectedMaterial(null)}
        className="fixed inset-0 z-50 overflow-y-auto hero-text"
        initialFocus={closeButtonRef}
      >
        <div className="flex items-center justify-center min-h-screen p-4">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          {selectedMaterial && (
            <div className="relative bg-white rounded-xl shadow-2xl max-w-5xl w-full mx-auto z-10 overflow-hidden">
              {/* Clearly visible close button */}
              <button
                ref={closeButtonRef}
                onClick={() => setSelectedMaterial(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100"
                aria-label="Close dialog"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Material image */}
                <div className="md:w-2/5 relative">
                  <div className="aspect-[3/4] md:h-full">
                    <img
                      src={selectedMaterial.image}
                      alt={selectedMaterial.alt}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute top-0 left-0 w-full h-2 ${selectedMaterial.accent}`}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
                  </div>
                </div>

                {/* Material details */}
                <div className="md:w-3/5 p-8 md:p-12">
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold mb-2 text-black">
                      {selectedMaterial.title}
                    </h3>
                    <p className="text-xl text-gray-800">
                      {selectedMaterial.function}
                    </p>
                  </div>

                  {/* Tab navigation */}
                  <div className="flex border-b border-gray-200 mb-6">
                    <button
                      className={`py-3 px-6 font-medium focus:outline-none ${
                        activeTab === "info"
                          ? "text-lime-600 border-b-2 border-lime-600"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                      onClick={() => setActiveTab("info")}
                    >
                      Information
                    </button>
                    <button
                      className={`py-3 px-6 font-medium focus:outline-none ${
                        activeTab === "examples"
                          ? "text-lime-600 border-b-2 border-lime-600"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                      onClick={() => setActiveTab("examples")}
                    >
                      Examples
                    </button>
                  </div>

                  {activeTab === "info" && (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
                            Raw material
                          </h4>
                          <p className="text-gray-900">
                            {selectedMaterial.rawMaterial}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
                            Where to find
                          </h4>
                          <p className="text-gray-900">
                            {selectedMaterial.whereToFind}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
                          Use in shelter
                        </h4>
                        <p className="text-gray-900">{selectedMaterial.use}</p>
                      </div>

                      {/* Added diagram/illustration */}
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center">
                          <p className="text-gray-700 text-base">
                            This material can be found in common urban
                            environments and repurposed with minimal tools.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "examples" && (
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
                        Examples of use
                      </h4>
                      <ul className="space-y-4">
                        {selectedMaterial.examples.map((example, i) => (
                          <li key={i} className="flex items-start">
                            <p className="text-gray-900 text-base">{example}</p>
                          </li>
                        ))}
                      </ul>

                      {/* Added visual enhancement */}
                      <div className="mt-8 p-5 bg-gradient-to-r from-gray-50 to-white border border-gray-100 rounded-lg">
                        <p className="text-gray-700 text-base">
                          For optimal results, clean and prepare materials
                          before repurposing. Remove labels, wash surfaces, and
                          test for structural integrity.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default MaterialsSection;
