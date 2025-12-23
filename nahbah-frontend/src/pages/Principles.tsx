import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import Navbar from "@/components/Navbar";
import StabilitySection from "@/components/principles/StabilitySection";
import RainwaterSection from "@/components/principles/RainwaterSection";
import GroundMoistureSection from "@/components/principles/GroundMoistureSection";
import ThermalInsulationSection from "@/components/principles/ThermalInsulationSection";
import AirtightnessSection from "@/components/principles/AirtightnessSection";
import PrinciplesPreviewSection from "@/components/principles/PrinciplesPreviewSection";

// Import images
import heroImage from "@/assets/entrance_night_view.png";
import stabilityImage from "@/assets/stability.png";
import rainwaterImage from "@/assets/staying_dry.png";
import groundMoistureImage from "@/assets/dryground.png";
import thermalInsulationImage from "@/assets/warmth.png";
import airtightnessImage from "@/assets/windproofing.png";


const Principles = () => {
  const [loaded, setLoaded] = useState(false);
  const { t } = useTranslation('principles');

  useEffect(() => {
    document.title = `${t('title')} - Not A House But A Home`;
    setLoaded(true);
  }, [t]);

  const previewImages = {
    stability: stabilityImage,
    rainwater: rainwaterImage,
    groundMoisture: groundMoistureImage,
    thermalInsulation: thermalInsulationImage,
    airtightness: airtightnessImage
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black relative overflow-hidden text-black dark:text-white px-10 transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="max-w-7xl mx-auto px-4 pt-32 pb-32 flex flex-col md:flex-row gap-8 relative top-10"
        aria-labelledby="principles-heading"
      >
        {/* Background text */}
        <div className="absolute top-22 left-0 font-semibold text-9xl 
                        text-black opacity-10 dark:text-white/21 dark:opacity-100"
             aria-hidden="true">
          {t('backgroundText')}
        </div>

        {/* Left Content */}
        <div
          className={`w-full md:w-1/2 transition-opacity duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          } relative z-10`}
        >
          <h1 
            id="principles-heading"
            className="text-4xl font-bold mb-16 mt-0 ml-22 leading-tight tracking-tight text-black dark:text-white"
          >
            {t('title')}
          </h1>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            {t('description')}
          </p>
          <div className="h-1 w-28 bg-gradient-to-r from-yellow-500 to-lime-600 mb-10" aria-hidden="true"></div>

          <button
            onClick={() => {
              document.getElementById("protection-preview")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="px-8 py-3 bg-black dark:bg-slate-950 inline-block transition-all duration-300 
                       hover:bg-zinc-900 dark:hover:bg-gray-800 
                       hover:shadow-xl hover:shadow-yellow-200/10 dark:hover:shadow-lime-400/10 
                       hover:scale-105 cursor-pointer
                       border border-transparent dark:border-gray-700
                       focus-visible:outline-2 focus-visible:outline-lime-500 focus-visible:outline-offset-2 rounded"
            aria-label="Explore shelter principles"
          >
            <span className="bg-gradient-to-r from-[#F9D90B] to-[#98F90F] bg-clip-text text-transparent font-bold uppercase">
              {t('explore')}
            </span>
          </button>
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
                alt="Night view of shelter entrance demonstrating proper construction principles"
                className="w-full h-auto object-cover transform scale-105 hover:scale-100 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section divider with dark mode */}
      <div className="flex items-center mb-16" role="separator" aria-label="Section divider">
        <div className="h-px bg-gray-200 dark:bg-gray-500 flex-grow" aria-hidden="true"></div>
        <div className="px-4 text-4xl font-medium text-gray-600 dark:text-white">
          {t('sectionTitle')}
        </div>
        <div className="h-px bg-gray-200 dark:bg-gray-500 flex-grow" aria-hidden="true"></div>
      </div>

      <PrinciplesPreviewSection images={previewImages} />

      {/* Main Content - Principles Sections */}
      <div className="max-w-7xl mx-auto px-4 pb-20 pt-20 space-y-32">
        <StabilitySection/>
        <RainwaterSection />
        <GroundMoistureSection />
        <ThermalInsulationSection />
        <AirtightnessSection />
      </div>
    </div>
  );
};

export default Principles;