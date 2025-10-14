import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import Navbar from "@/components/Navbar";
import MaterialsSection from "@/components/essentials/MaterialsSection";
import WeatherProtection from "@/components/essentials/WeatherProtection";

// Import images
import doorLeavesHouse from "@/assets/door_leaves_house.png";
import cardboard from "@/assets/cardboard.png";
import metalCans from "@/assets/metal_cans.png";
import tentFabric from "@/assets/tent_fabric.png";
import styrofoam from "@/assets/styrofoam.png";
import woodCrates from "@/assets/wooden_crates.png";
import warmth from "@/assets/warmth.png";
import stayingDry from "@/assets/staying_dry.png";
import windproofing from "@/assets/windproofing.png";
import dryGround from "@/assets/dryground.png";
import pvcFlooring from "@/assets/pvc_flooring.png";
import inflatableMattress from "@/assets/inflatable_mattress_material.png";
import tarpMaterial from "@/assets/tarp_material.png";
import plasticSheeting from "@/assets/plastic_sheeting.png";
import plasticBottles from "@/assets/plastic_bottles.png";
import concreteBlocks from "@/assets/concrete_blocks.jpeg";
import styrofoamSheets from "@/assets/styrofoam_sheets.png";

const Essentials = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState<'materials' | 'weather'>('materials');
  const { t } = useTranslation('pages');

  useEffect(() => {
    setLoaded(true);
  }, []);

  const materialImages = {
    doorLeavesHouse,
    cardboard,
    metalCans,
    tentFabric,
    styrofoam,
    woodCrates,
  };

  const weatherImages = {
    warmth,
    stayingDry,
    windproofing,
    dryGround,
    styrofoam,
    tentFabric,
    cardboard,
    pvcFlooring,
    inflatableMattress,
    tarpMaterial,
    plasticSheeting,
    metalCans,
    woodCrates,
    plasticBottles,
    concreteBlocks,
    styrofoamSheets,
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black relative overflow-hidden hero-text text-black dark:text-white px-10 transition-colors duration-300">
      {/* Navbar - matches other pages pattern */}
      <Navbar />
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-20 flex flex-col md:flex-row gap-8 relative top-10">
        {/* Background "Essentials" text - matching other pages exactly */}
        <div className="absolute top-22 left-0 font-semibold text-9xl 
                        text-black opacity-10 dark:text-white/14 dark:opacity-100">
          {t('essentials.backgroundText')}
        </div>

        <div
          className={`w-full transition-opacity duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          } relative z-10`}
        >
          <h1 className="text-5xl futura-bold mb-4 mt-0 ml-22 text-black dark:text-white">
            {t('essentials.title')}
          </h1>
          <p className="text-lg mb-8 mt-14 text-black dark:text-gray-200">
            {t('essentials.description')}
          </p>

          {/* Enhanced underline navigation */}
          <div className="flex space-x-12">
            <button
              onClick={() => setActiveSection('materials')}
              className={`pb-3 font-medium text-lg transition-all duration-300 relative group ${
                activeSection === 'materials'
                  ? 'text-black dark:text-white'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
              }`}
            >
              {t('essentials.materials')}
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#F9D90B] to-[#98F90F] transition-all duration-300 ${
                activeSection === 'materials' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
            </button>
            <button
              onClick={() => setActiveSection('weather')}
              className={`pb-3 font-medium text-lg transition-all duration-300 relative group ${
                activeSection === 'weather'
                  ? 'text-black dark:text-white'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
              }`}
            >
              {t('essentials.weatherProtection')}
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#F9D90B] to-[#98F90F] transition-all duration-300 ${
                activeSection === 'weather' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content - keep existing structure */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        {activeSection === 'materials' ? (
          <MaterialsSection images={materialImages} />
        ) : (
          <WeatherProtection images={weatherImages} />
        )}
      </div>
    </div>
  );
};

export default Essentials;