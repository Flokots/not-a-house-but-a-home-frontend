import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import Navbar from "@/components/Navbar";
import MaterialsSection from "@/components/essentials/MaterialsSection";

// Import images
import doorLeavesHouseImage from "@/assets/door_leaves_house.png";
import cardboardImage from "@/assets/cardboard.png";
import metalCansImage from "@/assets/metal_cans.png";
import tentFabricImage from "@/assets/tent_fabric.png";
import styrofoamImage from "@/assets/styrofoam.png";
import woodCratesImage from "@/assets/wooden_crates.png";
import heroImage from "@/assets/buildingmaterials.png";

const Materials = () => {
  const [loaded, setLoaded] = useState(false);
  const { t } = useTranslation('pages');

  useEffect(() => {
    setLoaded(true);
  }, []);

  const materialsImages = {
    doorLeavesHouse: doorLeavesHouseImage,
    cardboard: cardboardImage,
    metalCans: metalCansImage,
    tentFabric: tentFabricImage,
    styrofoam: styrofoamImage,
    woodCrates: woodCratesImage,
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black relative overflow-hidden hero-text text-black dark:text-white px-10 transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-20 flex flex-col md:flex-row gap-8 relative top-10">
        {/* Background text */}
        <div className="absolute top-22 left-0 font-semibold text-9xl 
                        text-black opacity-10 dark:text-white/14 dark:opacity-100">
          {t('materials.backgroundText')}
        </div>

        {/* Left Content */}
        <div
          className={`w-full md:w-1/2 transition-opacity duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          } relative z-10`}
        >
          <h1 className="text-4xl font-bold mb-16 mt-0 ml-22 leading-tight tracking-tight text-black dark:text-white">
            {t('materials.title')}
          </h1>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            {t('materials.description')}
          </p>
          <div className="h-1 w-28 bg-gradient-to-r from-yellow-500 to-lime-600 mb-10"></div>
        </div>

        {/* Right Content - Image */}
        <div
          className={`w-full md:w-1/2 transition-opacity duration-1000 delay-300 ${
            loaded ? "opacity-100" : "opacity-0"
          } relative z-10`}
        >
          <div className="rounded-xl overflow-hidden shadow-xl dark:shadow-black/30 bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700">
            <div className="overflow-hidden rounded-lg">
              <img
                src={heroImage}
                alt="Building materials"
                className="w-full h-auto object-cover transform scale-105 hover:scale-100 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Materials Content */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <MaterialsSection images={materialsImages} />
      </div>
    </div>
  );
};

export default Materials;