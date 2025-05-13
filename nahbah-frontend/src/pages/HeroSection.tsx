import { Link } from "react-router-dom";
import "@/App.css";
import homepageImage from "@/assets/homepage.png";

const HeroSection = () => {
  return (
    <div className="hero-container relative w-full h-screen">
      <div className="absolute inset-0">
        <img
          src={homepageImage}
          alt="Creative home interior"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black/70 z-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-32 sm:py-48 lg:py-64 h-full flex flex-col justify-center text-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-fjalla mb-2">
          A GUIDE FOR <span className="gradient-text">CREATIVES</span>
        </h1>

        <div className="mt-2 md:mt-4 mb-4 md:mb-5 text-center">
          <div className="inline-flex flex-col items-center">
            {/* Top gradient line - slightly wider than text */}
            <div className="gradient-line mb-2 md:mb-4 w-[90vw] max-w-md md:max-w-lg"></div>

            {/* Text content */}
            <div className="flex items-center justify-center flex-wrap px-2">
              <span className="gradient-text text-1xl sm:text-2xl md:text-3xl lg:text-4xl font-fjalla">
                ARCHITECTURE
              </span>
              <span className="text-white mx-1 md:mx-2 text-2xl sm:text-3xl md:text-4xl font-fjalla">
                +
              </span>
              <span className="text-white text-1xl sm:text-2xl md:text-3xl lg:text-4xl font-fjalla">
                CREATIVITY
              </span>
            </div>

            {/* Bottom gradient line - same as top */}
            <div className="gradient-line mt-2 md:mt-3 w-[90vw] max-w-md md:max-w-lg"></div>
          </div>
        </div>

        <p className="text-white text-sm md:text-base lg:text-lg max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto mb-8 md:mb-12 hero-text text-center">
          A home is more than just shelter—it's a place of stability, privacy,
          and community. This initiative supports those creating their own homes
          in difficult circumstances by providing a platform for sharing
          designs.
        </p>

        <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
          <Link
            to="/about-us"
            className="lime-btn text-sm md:text-base gradient-text"
          >
            LEARN MORE
          </Link>
          <Link to="/designs" className="lime-btn text-sm md:text-base">
            VIEW DESIGNS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
