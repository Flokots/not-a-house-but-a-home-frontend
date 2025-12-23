import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import aboutUsImage from "@/assets/green_lawn_home.png";
import ourImpactImage from "@/assets/entrance_night_view.png";
import ourMissionImage from "@/assets/lounge_area.png";
import homeInteriorImage from "@/assets/home_interior.png";
import shelterWithPlasticShutters from "@/assets/shelter-with-plastic-shutters.jpeg";
import puppyImage from "@/assets/puppy-cannot-go-to-nightshelter.jpeg";
import rosaryAndKittenImage from "@/assets/rosary-and-kitten-in-homeless-shelter-near-pecs.jpeg";
import doorPanelsHutWithCarpetInsulation from "@/assets/door-panels-hut-carpet-insulation.jpeg";
import wellLitInteriorImage from "@/assets/homepage.png";

const AboutUs = () => {
  const [loaded, setLoaded] = useState(false);
  const { t } = useTranslation("about");

  useEffect(() => {
    // Set page title
    document.title = `${t("hero.title")} - Not A House But A Home`;
    setLoaded(true);
  }, [t]);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-black relative overflow-hidden hero-text text-black dark:text-white px-4 sm:px-6 md:px-10 transition-colors duration-300">
      {/* Hero Section - Responsive stacked gallery */}
      <section 
        className="max-w-7xl mx-auto px-2 sm:px-4 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 flex flex-col lg:flex-row gap-6 sm:gap-8 relative top-6 sm:top-8 md:top-10"
        aria-labelledby="about-heading"
      >
        {/* Background "About" text */}
        <div className="absolute top-12 sm:top-14 md:top-17 left-0 font-semibold text-6xl sm:text-7xl md:text-8xl lg:text-9xl futura-bold text-black opacity-10 dark:text-white/21 dark:opacity-100 pointer-events-none" aria-hidden="true">
          {t("hero.backgroundText")}
        </div>

        {/* Left Content - Enhanced text structure */}
        <div
          className={`w-full lg:w-3/5 transition-opacity duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 
            id="about-heading"
            className="text-2xl sm:text-3xl md:text-4xl futura-bold mb-10 sm:mb-12 mt-0 ml-0 sm:ml-10 md:ml-22 text-black dark:text-white leading-tight"
          >
            {t("hero.title")}
          </h1>

          {/* Subtitle with accent bar */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <p className="text-lg sm:text-xl font-semibold text-black dark:text-gray-200 leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </div>

          {/* Main content paragraphs with better spacing */}
          <div className="space-y-6 sm:space-y-7 mb-10 sm:mb-12">
            <p className="text-base sm:text-lg text-black dark:text-gray-300 leading-relaxed">
              {t("hero.paragraph1")}
            </p>
            <p className="text-base sm:text-lg text-black dark:text-gray-300 leading-relaxed">
              {t("hero.paragraph2")}
            </p>
            <p className="text-base sm:text-lg text-black dark:text-gray-300 leading-relaxed">
              {t("hero.paragraph3")}
            </p>
            <p className="text-base sm:text-lg text-black dark:text-gray-300 leading-relaxed">
              {t("hero.paragraph4")}
            </p>
          </div>

          {/* Call to action button */}
          <button
            onClick={() => {
              document.getElementById("learn-more-section")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="px-8 sm:px-10 py-3 sm:py-4 bg-black dark:bg-slate-950 inline-block transition-all duration-300 
                       hover:bg-zinc-900 dark:hover:bg-gray-800 
                       hover:shadow-xl hover:shadow-lime-300/25 hover:scale-105 hover:-translate-y-1 cursor-pointer
                       border border-transparent dark:border-gray-700 rounded-sm text-sm sm:text-base
                       focus-visible:outline-2 focus-visible:outline-lime-500 focus-visible:outline-offset-2"
            aria-label="Learn more about our mission and approach"
          >
            <span className="bg-gradient-to-r from-[#F9D90B] to-[#98F90F] bg-clip-text text-transparent font-bold uppercase tracking-wide">
              {t("hero.learnMoreBtn")}
            </span>
          </button>
        </div>

        {/* Right Content - Fully Responsive Stacked Gallery */}
        <div
          className={`w-full lg:w-2/5 transition-opacity duration-1000 delay-300 ${
            loaded ? "opacity-100" : "opacity-0"
          } mt-8 lg:mt-0`}
          role="img"
          aria-label="Photo gallery showing sustainable shelter examples"
        >
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-full w-full">
            {/* Photo Stack - Responsive to match text height */}
            <div className="absolute inset-0">
              {/* Back photo */}
              <div className="absolute top-0 right-2 sm:right-4 md:right-6 lg:right-4 w-56 sm:w-60 md:w-64 lg:w-72 xl:w-80 transform rotate-6 transition-all duration-300 hover:rotate-3 hover:scale-105">
                <div className="rounded-lg shadow-xl sm:shadow-2xl dark:shadow-black/50">
                  <img
                    src={shelterWithPlasticShutters}
                    alt="Weatherproof shelter constructed with repurposed plastic shutters for protection"
                    className="w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover rounded"
                  />
                </div>
              </div>

              {/* Middle photo */}
              <div className="absolute top-16 sm:top-20 md:top-28 lg:top-32 xl:top-40 left-2 sm:left-4 md:left-6 lg:left-8 w-56 sm:w-60 md:w-64 lg:w-72 xl:w-80 transform -rotate-3 transition-all duration-300 hover:rotate-0 hover:scale-105 z-10">
                <div className="rounded-lg shadow-xl sm:shadow-2xl dark:shadow-black/50">
                  <img
                    src={puppyImage}
                    alt="Puppy finding warmth and shelter in a community housing space near Pécs"
                    className="w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover rounded"
                  />
                </div>
              </div>

              {/* Front photo */}
              <div className="absolute top-32 sm:top-40 md:top-56 lg:top-64 xl:top-80 right-4 sm:right-8 md:right-10 lg:right-12 w-56 sm:w-60 md:w-64 lg:w-72 xl:w-80 transform rotate-2 transition-all duration-300 hover:-rotate-1 hover:scale-105 z-20">
                <div className="rounded-lg shadow-xl sm:shadow-2xl dark:shadow-black/50">
                  <img
                    src={rosaryAndKittenImage}
                    alt="Kitten with rosary beads in a homeless shelter near Pécs, showing community care"
                    className="w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Responsive Layout */}
      <section
        id="learn-more-section"
        className="max-w-7xl mx-auto px-2 sm:px-4 py-12 sm:py-16 md:py-20 mb-12 sm:mb-16 md:mb-20 relative"
        aria-labelledby="mission-heading"
      >
        <div className="bg-white dark:bg-slate-950 rounded-xl overflow-hidden shadow-lg dark:shadow-black/30 relative z-10 transition-colors duration-300">
          {/* Mission Content - Responsive Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-6 md:p-8">
            {/* Image - Full width on mobile */}
            <div className="relative h-64 sm:h-72 md:h-84 order-2 md:order-1">
              <div className="w-full h-full transform transition-all duration-300 hover:rotate-1 hover:scale-105">
                <div className="rounded-lg shadow-lg dark:shadow-black/30">
                  <img
                    src={wellLitInteriorImage}
                    alt="Well-lit interior of community housing solution showing livable sustainable design"
                    className="w-full h-86 object-cover rounded"
                  />
                </div>
              </div>
            </div>

            {/* Text - Full width on mobile */}
            <div className="bg-yellow-200 dark:bg-yellow-900/30 p-4 sm:p-6 rounded-lg transition-all duration-300 hover:scale-[1.02] border border-transparent dark:border-yellow-800/30 order-1 md:order-2">
              <h2 
                id="mission-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-black dark:text-white"
              >
                {t("mission.title")}
              </h2>
              <p className="mb-3 sm:mb-4 text-base sm:text-lg font-futura text-black dark:text-gray-200">
                {t("mission.paragraph1")}
              </p>
              <p className="mb-3 sm:mb-4 text-base sm:text-lg text-black dark:text-gray-300">
                {t("mission.paragraph2")}
              </p>
            </div>
          </div>

          {/* Approach Section - Responsive Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 p-4 sm:p-6 md:p-8 pt-2 sm:pt-3 md:pt-4">
            <div className="bg-lime-200 dark:bg-lime-900/30 p-4 sm:p-6 rounded-lg transition-all duration-300 hover:scale-[1.02] border border-transparent dark:border-lime-800/30">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-lime-200">
                {t("approach.title")}
              </h3>
              <p className="mb-3 sm:mb-4 text-base sm:text-lg text-gray-700 dark:text-gray-300">
                {t("approach.paragraph1")}
              </p>
              <p className="mb-3 sm:mb-4 text-base sm:text-lg text-gray-700 dark:text-gray-300">
                {t("approach.paragraph2")}
              </p>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
                {t("approach.paragraph3")}
              </p>
            </div>

            {/* Image */}
            <div className="relative h-64 sm:h-72 md:h-84">
              <div className="w-full h-full transform transition-all duration-300 hover:rotate-1 hover:scale-105">
                <div className="rounded-lg shadow-lg dark:shadow-black/30">
                  <img
                    src={ourMissionImage}
                    alt="Comfortable lounge area in sustainable shelter showcasing practical design"
                    className="w-full h-90 object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section - Responsive Masonry Gallery */}
      <section 
        className="max-w-7xl mx-auto px-2 sm:px-4 py-10 sm:py-12 md:py-16 mb-12 sm:mb-16 md:mb-20 relative"
        aria-labelledby="impact-heading"
      >
        <div className="bg-white dark:bg-slate-950 rounded-xl overflow-hidden shadow-lg dark:shadow-black/30 relative z-10 border border-transparent transition-colors duration-300">
          {/* Header */}
          <div className="h-16 sm:h-20 md:h-24 flex items-center px-4 sm:px-6 md:px-8">
            <h2 
              id="impact-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white"
            >
              {t("impact.title")}
            </h2>
          </div>

          {/* Main content - Responsive */}
          <div className="p-4 sm:p-6 md:p-8">
            <div className="mb-8 sm:mb-10 md:mb-12">
              <p className="mb-4 sm:mb-6 text-base sm:text-lg text-black dark:text-gray-200">
                {t("impact.paragraph1")}
              </p>
              <p className="text-base sm:text-lg text-black dark:text-gray-300">
                {t("impact.paragraph2")}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-12 text-center" role="list">
              <div 
                className="bg-lime-100 dark:bg-lime-900/40 py-6 px-4 rounded-lg transform transition-transform hover:scale-105 border border-transparent dark:border-lime-800/30"
                role="listitem"
              >
                <h4 className="text-3xl font-bold text-lime-600 dark:text-lime-400 mb-1">
                  100+
                </h4>
                <p className="text-sm text-lime-800 dark:text-lime-300">
                  Housing Solutions
                </p>
              </div>
              <div 
                className="bg-yellow-100 dark:bg-yellow-900/40 py-6 px-4 rounded-lg transform transition-transform hover:scale-105 border border-transparent dark:border-yellow-800/30"
                role="listitem"
              >
                <h4 className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">
                  50+
                </h4>
                <p className="text-sm text-yellow-800 dark:text-yellow-300">
                  Communities Served
                </p>
              </div>
              <div 
                className="bg-lime-100 dark:bg-lime-900/40 py-6 px-4 rounded-lg transform transition-transform hover:scale-105 border border-transparent dark:border-lime-800/30"
                role="listitem"
              >
                <h4 className="text-3xl font-bold text-lime-600 dark:text-lime-400 mb-1">
                  1000+
                </h4>
                <p className="text-sm text-lime-800 dark:text-lime-300">
                  People Helped
                </p>
              </div>
            </div>

            {/* Responsive Masonry Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Tall image - spans 2 rows on large screens */}
              <div className="sm:col-span-1 lg:row-span-2">
                <div className="rounded-lg overflow-hidden shadow-xl dark:shadow-black/40 h-64 sm:h-80 lg:h-96 group">
                  <img
                    src={ourImpactImage}
                    alt="Night view of shelter entrance showing safe, welcoming community space"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Two stacked images - responsive */}
              <div className="space-y-4 sm:space-y-6">
                <div className="rounded-lg overflow-hidden shadow-lg dark:shadow-black/30 group">
                  <img
                    src={aboutUsImage}
                    alt="Green lawn with sustainable home showcasing eco-friendly living"
                    className="w-full h-40 sm:h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg dark:shadow-black/30 group">
                  <img
                    src={doorPanelsHutWithCarpetInsulation}
                    alt="Hut constructed with repurposed door panels and carpet insulation for warmth"
                    className="w-full h-40 sm:h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Two more stacked images - responsive */}
              <div className="space-y-4 sm:space-y-6">
                <div className="rounded-lg overflow-hidden shadow-lg dark:shadow-black/30 group">
                  <img
                    src={homeInteriorImage}
                    alt="Cozy interior of sustainable home showing comfortable living conditions"
                    className="w-full h-40 sm:h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg dark:shadow-black/30 group">
                  <img
                    src={shelterWithPlasticShutters}
                    alt="Shelter demonstrating innovative use of plastic shutters for weather protection"
                    className="w-full h-40 sm:h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Responsive */}
      <section 
        className="max-w-7xl mx-auto px-2 sm:px-4 py-8 sm:py-10 md:py-12 mb-12 sm:mb-16 md:mb-20 relative"
        aria-labelledby="cta-heading"
      >
        <div className="rounded-2xl p-6 sm:p-8 md:p-12 text-center relative z-10">
          <h2 
            id="cta-heading"
            className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-black dark:text-white"
          >
            {t("getInvolved.title")}
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 max-w-4xl lg:max-w-6xl mx-auto px-2">
            {t("getInvolved.description")}
          </p>
          <button
            onClick={() => (window.location.href = "/guide")}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-black dark:bg-slate-950 inline-block transition-all duration-300 
                       hover:bg-zinc-900 dark:hover:bg-gray-800 hover:shadow-lg hover:shadow-lime-300/20 hover:scale-105 cursor-pointer
                       border border-transparent dark:border-gray-700 text-sm sm:text-base
                       focus-visible:outline-2 focus-visible:outline-lime-500 focus-visible:outline-offset-2 rounded"
            aria-label="Get started with building guide"
          >
            <span className="bg-gradient-to-r from-[#F9D90B] to-[#98F90F] bg-clip-text text-transparent font-bold text-base sm:text-lg uppercase">
              {t("getInvolved.button")}
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
