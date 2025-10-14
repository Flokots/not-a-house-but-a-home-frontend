import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import aboutUsImage from "@/assets/green_lawn_home.png";
import ourImpactImage from "@/assets/entrance_night_view.png";
import ourMissionImage from "@/assets/lounge_area.png";
import homeInteriorImage from "@/assets/home_interior.png";

const AboutUs = () => {
  const [loaded, setLoaded] = useState(false);
  const { t } = useTranslation('pages');

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-black relative overflow-hidden hero-text text-black dark:text-white px-10 transition-colors duration-300">
      
      {/* Hero Section - Image Right */}
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-20 flex flex-col md:flex-row gap-8 relative top-10">
        {/* Background "About" text */}
        <div className="absolute top-17 left-0 font-semibold text-9xl futura-bold text-black opacity-10 dark:text-white/14 dark:opacity-100">
          {t('about.hero.backgroundText')}
        </div>

        {/* Left Content - Text */}
        <div
          className={`w-full md:w-3/5 transition-opacity duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-4xl futura-bold mb-4 mt-0 ml-22 text-black dark:text-white">
            {t('about.hero.title')}
          </h1>
          <p className="text-lg font-semibold mb-6 mt-12 text-black dark:text-gray-200">
            {t('about.hero.subtitle')}
          </p>
          <p className="text-lg mb-6 text-black dark:text-gray-300">
            {t('about.hero.paragraph1')}
          </p>
          <p className="text-lg mb-8 text-black dark:text-gray-300">
            {t('about.hero.paragraph2')}
          </p>
          <button
            onClick={() => {
              document.getElementById("learn-more-section")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="px-8 py-3 bg-black dark:bg-slate-950 inline-block transition-all duration-300 
                       hover:bg-zinc-900 dark:hover:bg-gray-800 
                       hover:shadow-lg hover:shadow-lime-300/20 hover:scale-105 hover:-translate-y-1 cursor-pointer
                       border border-transparent dark:border-gray-700"
          >
            <span className="bg-gradient-to-r from-[#F9D90B] to-[#98F90F] bg-clip-text text-transparent font-bold uppercase">
              {t('about.hero.learnMoreBtn')}
            </span>
          </button>
        </div>

        {/* Right Content - Image */}
        <div
          className={`w-full md:w-2/5 transition-opacity duration-1000 delay-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="rounded-lg overflow-hidden h-full shadow-lg dark:shadow-black/20">
            <img
              src={aboutUsImage}
              alt="Self-built living space"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mission Section - Image Left */}
      <div
        id="learn-more-section"
        className="max-w-7xl mx-auto px-4 py-20 mb-20 relative"
      >
        <div className="bg-white dark:bg-slate-950 rounded-xl overflow-hidden shadow-lg dark:shadow-black/30 p-8 relative z-10 transition-colors duration-300">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
            <div className="md:w-2/5">
              <div className="rounded-lg overflow-hidden shadow-md dark:shadow-black/20">
                <img
                  src={ourMissionImage}
                  alt="Community housing solutions"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="md:w-3/5">
              <h2 className="text-4xl font-bold mb-6 text-black dark:text-white">
                {t('about.mission.title')}
              </h2>
              <p className="mb-4 text-lg font-futura text-black dark:text-gray-200">
                {t('about.mission.paragraph1')}
              </p>
              <p className="mb-4 text-lg text-black dark:text-gray-300">
                {t('about.mission.paragraph2')}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-lime-200 dark:bg-lime-900/30 p-6 rounded-lg transition-all duration-300 hover:scale-[1.02] border border-transparent dark:border-lime-800/30">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-lime-200">
                {t('about.approach.title')}
              </h3>
              <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
                {t('about.approach.paragraph1')}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {t('about.approach.paragraph2')}
              </p>
            </div>

            <div className="bg-yellow-200 dark:bg-yellow-900/30 bg-opacity-30 p-6 rounded-lg transition-all duration-300 hover:scale-[1.02] border border-transparent dark:border-yellow-800/30">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-yellow-200">
                {t('about.getInvolved.title')}
              </h3>
              <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
                {t('about.getInvolved.paragraph1')}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {t('about.getInvolved.paragraph2')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section - Creative Layout with Two Images */}
      <div className="max-w-7xl mx-auto px-4 py-16 mb-20 relative">
        <div className="relative z-10">
          <div className="bg-white dark:bg-slate-950 rounded-xl overflow-hidden shadow-lg dark:shadow-black/30 relative z-10 border border-transparent transition-colors duration-300">
            {/* Header */}
            <div className="h-24 flex items-center px-8">
              <h2 className="text-4xl font-bold text-black dark:text-white">
                {t('about.impact.title')}
              </h2>
            </div>

            {/* Main content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left column - Text and stats */}
                <div>
                  <p className="mb-6 text-lg text-black dark:text-gray-200">
                    {t('about.impact.paragraph1')}
                  </p>
                  <p className="mb-8 text-lg text-black dark:text-gray-300">
                    {t('about.impact.paragraph2')}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-lime-100 dark:bg-lime-900/40 py-6 px-4 rounded-lg transform transition-transform hover:scale-105 border border-transparent dark:border-lime-800/30">
                      <h4 className="text-3xl font-bold text-lime-600 dark:text-lime-400 mb-1">
                        100+
                      </h4>
                      <p className="text-sm text-lime-800 dark:text-lime-300">
                        {t('about.impact.stats.solutions')}
                      </p>
                    </div>
                    <div className="bg-yellow-100 dark:bg-yellow-900/40 py-6 px-4 rounded-lg transform transition-transform hover:scale-105 border border-transparent dark:border-yellow-800/30">
                      <h4 className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">
                        50+
                      </h4>
                      <p className="text-sm text-yellow-800 dark:text-yellow-300">
                        {t('about.impact.stats.communities')}
                      </p>
                    </div>
                    <div className="bg-lime-100 dark:bg-lime-900/40 py-6 px-4 rounded-lg transform transition-transform hover:scale-105 border border-transparent dark:border-lime-800/30">
                      <h4 className="text-3xl font-bold text-lime-600 dark:text-lime-400 mb-1">
                        1000+
                      </h4>
                      <p className="text-sm text-lime-800 dark:text-lime-300">
                        {t('about.impact.stats.people')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right column - Overlapping cards layout */}
                <div className="relative h-full min-h-[400px]">
                  {/* First image - top right, slight rotation */}
                  <div className="absolute top-0 right-0 w-4/5 shadow-xl dark:shadow-black/40 rounded-lg overflow-hidden transform rotate-3 z-20 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-40">
                    <img
                      src={ourImpactImage}
                      alt="Community impact interior"
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Second image - bottom left, opposite rotation */}
                  <div className="absolute top-40 left-0 w-4/5 shadow-xl dark:shadow-black/40 rounded-lg overflow-hidden transform -rotate-3 z-10 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-40">
                    <img
                      src={homeInteriorImage}
                      alt="Home interior example"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action section */}
      <div className="max-w-7xl mx-auto px-4 py-12 mb-20 relative">
        <div className="rounded-2xl p-8 md:p-12 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            {t('about.cta.title')}
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-black dark:text-gray-300">
            {t('about.cta.description')}
          </p>
          <button
            onClick={() => (window.location.href = "/guide")}
            className="px-8 py-4 bg-black dark:bg-slate-950 inline-block transition-all duration-300 
                       hover:bg-zinc-900 dark:hover:bg-gray-800 hover:shadow-lg hover:shadow-lime-300/20 hover:scale-105 cursor-pointer
                       border border-transparent dark:border-gray-700"
          >
            <span className="bg-gradient-to-r from-[#F9D90B] to-[#98F90F] bg-clip-text text-transparent font-bold text-lg uppercase">
              {t('about.cta.button')}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
