import React, { useState, useEffect } from "react";
import WeatherProtection from "@/components/essentials/WeatherProtection";
import MaterialsSection from "@/components/essentials/MaterialsSection";

// Import images
import warmthImage from "@/assets/warmth.png";
import stayingDryImage from "@/assets/staying_dry.png";
import windproofingImage from "@/assets/windproofing.png";
import dryGroundImage from "@/assets/dryground.png";
import doorLeavesHouseImage from "@/assets/door_leaves_house.png";
import metalCansImage from "@/assets/metal_cans.png";
import cardboardImage from "@/assets/cardboard.png";
import styrofoamImage from "@/assets/styrofoam.png";
import tentFabricImage from "@/assets/tent_fabric.png";
import woodCratesImage from "@/assets/wooden_crates.png";
import pvcFlooring from "@/assets/pvc_flooring.png";
import inflatableMattressMaterial from "@/assets/inflatable_mattress_material.png";
import plasticSheeting from "@/assets/plastic_sheeting.png";
import plasticBottles from "@/assets/plastic_bottles.png";
import tarpMaterial from "@/assets/tarp_material.png";
import concreteBlocks from "@/assets/concrete_blocks.jpeg";
import styrofoamSheets from "@/assets/styrofoam_sheets.png";

const Essentials: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("protection");

  // All images in one object for easy passing to components
  const images = {
    warmth: warmthImage,
    stayingDry: stayingDryImage,
    windproofing: windproofingImage,
    dryGround: dryGroundImage,
    doorLeavesHouse: doorLeavesHouseImage,
    metalCans: metalCansImage,
    cardboard: cardboardImage,
    styrofoam: styrofoamImage,
    tentFabric: tentFabricImage,
    woodCrates: woodCratesImage,
    pvcFlooring: pvcFlooring,
    inflatableMattress: inflatableMattressMaterial,
    plasticSheeting: plasticSheeting,
    plasticBottles: plasticBottles,
    tarpMaterial: tarpMaterial,
    concreteBlocks: concreteBlocks,
    styrofoamSheets: styrofoamSheets
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 relative overflow-hidden hero-text text-black px-10">
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-20 flex flex-col md:flex-row gap-8 relative top-10">
        {/* Background text */}
        <div className="absolute top-24 left-0 text-black opacity-10 font-semibold text-8xl">
          Essentials
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero section */}
          <div
            className={`transition-opacity duration-1000 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-4xl font-bold mb-8 mt-2 ml-26 text-black">
              What does a home need?
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl">
              Learn what makes a shelter into a home, from weather protection to
              finding and repurposing materials around you.
            </p>
            <div className="h-1 w-28 bg-gradient-to-r from-yellow-500 to-lime-600 mb-12"></div>
          </div>

          {/* Tab navigation */}
          <div className="flex flex-col sm:flex-row mb-12 border-b">
            <button
              onClick={() => setActiveTab("protection")}
              className={`py-3 px-6 font-medium text-lg transition-colors ${
                activeTab === "protection"
                  ? "text-lime-700 border-b-2 border-lime-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Weather Protection
            </button>
            <button
              onClick={() => setActiveTab("materials")}
              className={`py-3 px-6 font-medium text-lg transition-colors ${
                activeTab === "materials"
                  ? "text-lime-700 border-b-2 border-lime-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Useful Materials
            </button>
          </div>
          
          {/* Conditional rendering of main content sections */}
          {activeTab === "protection" && <WeatherProtection images={images} />}
          {activeTab === "materials" && <MaterialsSection images={images} />}
        </div>
      </div>
    </div>
  );
};

export default Essentials;