import { useState, useEffect } from "react";
import buildingMaterialsImage from "@/assets/buildingmaterials.png";
import safetyImage from "@/assets/lounge_area.png";
import architectImage from "@/assets/architect.png";
import heroImage from "@/assets/entrance_night_view.png";

const Guide = () => {
  const [userType, setUserType] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden hero-text text-black">
      {/* Hero Section with Background Text and Image */}
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-20 flex flex-col md:flex-row gap-8 relative top-10">
        {/* Background "Guide" text */}
        <div className="absolute top-20 left-0 text-black opacity-10 font-semibold text-9xl">
          Guide
        </div>

        {/* Left Content - Text */}
        <div
          className={`w-full md:w-1/2 transition-opacity duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          } relative z-10`}
        >
          <h1 className="text-4xl font-bold mb-8 mt-2 ml-22 leading-tight tracking-tight">
            Building Better Homes
          </h1>
          <p className="text-lg mb-8 text-gray-700 leading-relaxed">
            We've designed this guide to help anyone create safer, more durable
            living spaces using accessible materials and techniques. Whether
            you're building your own shelter, helping others, or just exploring
            possibilities—we're here to support your journey.
          </p>
          <div className="h-1 w-28 bg-gradient-to-r from-yellow-500 to-lime-600 mb-10"></div>

          {/* Call to action */}
          <button
            onClick={() => {
              document.getElementById("path-selection")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="px-8 py-3 bg-black inline-block transition-all duration-300 hover:bg-zinc-900 hover:shadow-xl hover:shadow-yellow-200/10 hover:scale-105 cursor-pointer"
          >
            <span className="bg-gradient-to-r from-[#F9D90B] to-[#98F90F] bg-clip-text text-transparent font-bold uppercase">
              Find Your Path
            </span>
          </button>
        </div>

        {/* Right Content - Image */}
        <div
          className={`w-full md:w-1/2 transition-opacity duration-1000 delay-300 ${
            loaded ? "opacity-100" : "opacity-0"
          } relative z-10`}
        >
          <div className="rounded-xl overflow-hidden shadow-xl bg-white">
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
      <div id="path-selection" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Choose Your Path</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've tailored resources for different needs. Select the option
              that best represents your situation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-slate-50 rounded-xl shadow-sm hover:shadow-md transition-all hover:translate-y-[-5px] group cursor-pointer">
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
                <h3 className="text-2xl font-bold mb-3 group-hover:text-lime-700 transition-colors">
                  Self-Builder or Ally
                </h3>
                <p className="text-gray-600 mb-6">
                  Find practical tips to make self-built structures safer,
                  healthier, and more comfortable.
                </p>
                <button
                  onClick={() => setUserType("unhoused")}
                  className="text-lime-600 font-semibold hover:text-lime-800 flex items-center group cursor-pointer"
                >
                  <span>Explore Resources</span>
                  <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform ml-2">
                    →
                  </span>
                </button>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl shadow-sm hover:shadow-md transition-all hover:translate-y-[-5px] group cursor-pointer">
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
                <h3 className="text-2xl font-bold mb-3 group-hover:text-lime-700 transition-colors">
                  Architect or Student
                </h3>
                <p className="text-gray-600 mb-6">
                  Discover how to contribute your expertise and learn about
                  innovative approaches to housing.
                </p>
                <button
                  onClick={() => setUserType("architect")}
                  className="text-lime-600 font-semibold hover:text-lime-800 flex items-center group cursor-pointer"
                >
                  <span>Join The Initiative</span>
                  <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform ml-2">
                    →
                  </span>
                </button>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl shadow-sm hover:shadow-md transition-all hover:translate-y-[-5px] group cursor-pointer">
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
                <h3 className="text-2xl font-bold mb-3 group-hover:text-lime-700 transition-colors">
                  Resource Explorer
                </h3>
                <p className="text-gray-600 mb-6">
                  Browse our complete library of materials, techniques, and case
                  studies at your own pace.
                </p>
                <button
                  onClick={() => setUserType("browse")}
                  className="text-lime-600 font-semibold hover:text-lime-800 flex items-center group cursor-pointer"
                >
                  <span>Access Library</span>
                  <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform ml-2">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User Path Content Sections */}
      {userType && (
        <div className="max-w-7xl mx-auto px-6 py-16">
          <button
            onClick={() => setUserType(null)}
            className="mb-8 text-gray-600 hover:text-black flex items-center group cursor-pointer"
          >
            <span className="transform translate-x-0 group-hover:translate-x-[-2px] transition-transform mr-2">
              ←
            </span>
            <span>Back to paths</span>
          </button>

          {/* Rest of your content based on userType */}
        </div>
      )}
    </div>
  );
};

export default Guide;
