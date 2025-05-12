import { useState, useEffect } from "react";
import aboutUsImage from "@/assets/green_lawn_home.png";

const AboutUs = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 relative overflow-hidden hero-text">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-20 flex flex-col md:flex-row gap-8">
        {/* Background "About" text */}
        <div className="absolute top-20  text-black opacity-10 font-semibold text-9xl">
          About
        </div>
        {/* Left Content - Text */}
        <div
          className={`w-full md:w-3/5 transition-opacity duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-4xl font-bold text-black mb-8 mt-2 ml-24">
            Reimagining Home & Shelter
          </h1>

          <p className="text-base font-semibold text-black mb-6 mt-12">
            Not a House, but a Home – We believe in the power of self-built
            spaces to create stability and dignity. Our goal is to support,
            inspire, and empower people to build homes that truly feel like
            home.
          </p>

          <p className="text-base mb-6 text-black">
            Housing is a fundamental right, yet many people are forced to create
            their own shelters outside traditional systems. This web application
            is a resource for those who build homes from found materials, as
            well as for advocates and architects working in solidarity with
            unhoused communities.
          </p>

          <p className="text-base mb-8 text-black">
            A home is more than a shelter—it's a place of stability, privacy,
            and connection. Through design knowledge, creativity, and shared
            solutions, we support self-built housing as a pathway to dignity and
            security. Whether you're looking for inspiration, guidance, or a way
            to contribute, this platform is here to help.
          </p>

          <button className="px-8 py-3 bg-black inline-block transition-all duration-300 hover:bg-zinc-900 hover:shadow-lg hover:shadow-lime-300/20 hover:scale-105 hover:-translate-y-1 rounded">
            <span className="bg-gradient-to-r from-[#F9D90B] to-[#98F90F] bg-clip-text text-transparent font-bold uppercase">
              Learn More
            </span>
          </button>
        </div>

        {/* Right Content - Image */}
        <div
          className={`w-full md:w-2/5 transition-opacity duration-1000 delay-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="rounded-lg overflow-hidden h-full">
            <img
              src={aboutUsImage}
              alt="Self-built living space"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
