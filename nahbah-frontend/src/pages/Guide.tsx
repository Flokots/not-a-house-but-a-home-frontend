import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import Navbar from "@/components/Navbar";
import buildingMaterialsImage from "@/assets/buildingmaterials.png";
import safetyImage from "@/assets/lounge_area.png";
import architectImage from "@/assets/architect.png";
import heroImage from "@/assets/entrance_night_view.png";

const Guide = () => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation('pages');

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black relative overflow-hidden hero-text text-black dark:text-white px-10 transition-colors duration-300">
      {/* Navbar that responds to theme */}
      <Navbar />
      
      {/* Hero Section with Background Text and Image */}
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-20 flex flex-col md:flex-row gap-8 relative top-10">
        {/* Background "Guide" text - matching styling pattern */}
        <div className="absolute top-22 left-0 font-semibold text-9xl 
                        text-black opacity-10 dark:text-white/14 dark:opacity-100">
          {t('guide.backgroundText')}
        </div>

        {/* Left Content - Text */}
        <div
          className={`w-full md:w-1/2 transition-opacity duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          } relative z-10`}
        >
          <h1 className="text-4xl font-bold mb-10 mt-0 ml-22 leading-tight tracking-tight text-black dark:text-white">
            {t('guide.title')}
          </h1>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            {t('guide.description')}
          </p>
          <div className="h-1 w-28 bg-gradient-to-r from-yellow-500 to-lime-600 mb-10"></div>

          {/* Call to action */}
          <button
            onClick={() => {
              document.getElementById("path-selection")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="px-8 py-3 bg-black dark:bg-slate-950 inline-block transition-all duration-300 
                       hover:bg-zinc-900 dark:hover:bg-gray-800 
                       hover:shadow-xl hover:shadow-yellow-200/10 dark:hover:shadow-lime-400/10 
                       hover:scale-105 cursor-pointer
                       border border-transparent dark:border-gray-700"
          >
            <span className="bg-gradient-to-r from-[#F9D90B] to-[#98F90F] bg-clip-text text-transparent font-bold uppercase">
              {t('guide.findYourPath')}
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
                alt="Self-built living space interior"
                className="w-full h-auto object-cover transform scale-105 hover:scale-100 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* User Type Selection */}
      <div id="path-selection" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">{t('guide.chooseYourPath')}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mx-auto">
              {t('guide.pathDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* First Card - Home Essentials & Materials */}
            <div 
              onClick={() => navigate('/essentials')}
              className="bg-slate-50 dark:bg-slate-900 rounded-xl shadow-lg dark:shadow-black/30 
                           hover:shadow-xl dark:hover:shadow-black/50 
                           transition-all duration-300 hover:translate-y-[-5px] group cursor-pointer
                           border border-gray-200 dark:border-slate-800 "
            >
              <div className="p-2">
                <div className="h-48 rounded-lg overflow-hidden">
                  <img
                    src={safetyImage}
                    alt="Self-built shelter improvements"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-black dark:text-white 
                               group-hover:text-lime-700 dark:group-hover:text-lime-400 
                               transition-colors">
                  {t('guide.essentials.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                  {t('guide.essentials.description')}
                </p>
                <div className="text-lime-600 dark:text-lime-400 font-semibold 
                               hover:text-lime-800 dark:hover:text-lime-300 
                               flex items-center group cursor-pointer">
                  <span>{t('guide.essentials.action')}</span>
                </div>
              </div>
            </div>

            {/* Second Card - Design Library */}
            <div 
              onClick={() => navigate('/designs')}
              className="bg-slate-50 dark:bg-slate-900 rounded-xl shadow-lg dark:shadow-black/30 
                           hover:shadow-xl dark:hover:shadow-black/50 
                           transition-all duration-300 hover:translate-y-[-5px] group cursor-pointer
                           border border-gray-200 dark:border-slate-800 "
            >
              <div className="p-2">
                <div className="h-48 rounded-lg overflow-hidden">
                  <img
                    src={architectImage}
                    alt="Architectural planning"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-black dark:text-white 
                               group-hover:text-lime-700 dark:group-hover:text-lime-400 
                               transition-colors">
                  {t('guide.designs.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                  {t('guide.designs.description')}
                </p>
                <div className="text-lime-600 dark:text-lime-400 font-semibold 
                               hover:text-lime-800 dark:hover:text-lime-300 
                               flex items-center group cursor-pointer">
                  <span>{t('guide.designs.action')}</span>
                </div>
              </div>
            </div>

            {/* Third Card - Contribute */}
            <div 
              onClick={() => navigate('/contribute')}
              className="bg-slate-50 dark:bg-slate-900 rounded-xl shadow-lg dark:shadow-black/30 
                           hover:shadow-xl dark:hover:shadow-black/50 
                           transition-all duration-300 hover:translate-y-[-5px] group cursor-pointer
                           border border-gray-200 dark:border-slate-800 "
            >
              <div className="p-2">
                <div className="h-48 rounded-lg overflow-hidden">
                  <img
                    src={buildingMaterialsImage}
                    alt="Resource library"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-black dark:text-white 
                               group-hover:text-lime-700 dark:group-hover:text-lime-400 
                               transition-colors">
                  {t('guide.contribute.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                  {t('guide.contribute.description')}
                </p>
                <div className="text-lime-600 dark:text-lime-400 font-semibold 
                               hover:text-lime-800 dark:hover:text-lime-300 
                               flex items-center group cursor-pointer">
                  <span>{t('guide.contribute.action')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;