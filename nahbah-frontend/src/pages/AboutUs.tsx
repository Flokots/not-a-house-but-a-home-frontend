import { useState, useEffect } from "react";
import aboutUsImage from "@/assets/green_lawn_home.png";
import ourImpactImage from "@/assets/entrance_night_view.png";
import ourMissionImage from "@/assets/lounge_area.png";
import homeInteriorImage from "@/assets/home_interior.png";

const AboutUs = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-black relative overflow-hidden hero-text text-black px-10">
      {/* Hero Section - Image Right */}
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-20 flex flex-col md:flex-row gap-8 relative top-10">
        {/* Background "About" text - updated positioning */}
        <div className="absolute top-17 left-0 opacity-10 font-semibold text-9xl futura-bold">
          About
        </div>

        {/* Left Content - Text - updated to center heading vertically within "About" */}
        <div
          className={`w-full md:w-3/5 transition-opacity duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-4xl futura-bold mb-4 mt-0 ml-22">
            Reimagining Home & Shelter
          </h1>
          <p className="text-lg font-semibold mb-6 mt-12">
            Not a House, but a Home – We believe in the power of self-built
            spaces to create stability and dignity. Our goal is to support,
            inspire, and empower people to build homes that truly feel like
            home.
          </p>
          <p className="text-lg mb-6 ">
            Housing is a fundamental right, yet many people are forced to create
            their own shelters outside traditional systems. This web application
            is a resource for those who build homes from found materials, as
            well as for advocates and architects working in solidarity with
            unhoused communities.
          </p>
          <p className="text-lg mb-8 ">
            A home is more than a shelter—it's a place of stability, privacy,
            and connection. Through design knowledge, creativity, and shared
            solutions, we support self-built housing as a pathway to dignity and
            security.
          </p>
          <button
            onClick={() => {
              document.getElementById("learn-more-section")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="px-8 py-3 bg-black inline-block transition-all duration-300 hover:bg-zinc-900 hover:shadow-lg hover:shadow-lime-300/20 hover:scale-105 hover:-translate-y-1 cursor-pointer"
          >
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

      {/* Mission Section - Image Left */}
      <div
        id="learn-more-section"
        className="max-w-7xl mx-auto px-4 py-20 mb-20 relative"
      >
        <div className="bg-white rounded-xl overflow-hidden shadow-lg p-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
            <div className="md:w-2/5">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={ourMissionImage}
                  alt="Community housing solutions"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="md:w-3/5">
              <h2 className="text-4xl font-bold  mb-6">OUR MISSION</h2>
              <p className="mb-4 text-lg font-futura">
                As members of the Research Group for Solidarity in Architecture,
                we believe that architects and architecture students can play a
                role in alleviating social problems. On this site, we want to
                spread basic knowledge that will help create a safer
                environment. A built environment that can replace the inhumane
                world of night shelters and provide temporary shelter for those
                who find it difficult to survive on their own.
              </p>
              <p className="mb-4 text-lg">
                We encourage all
                architects and students to look at the world around them with a
                slightly different perspective. Discover the possibilities of
                the freely available materials around us. Let's help build
                temporary shelters protected from wind, cold, and rain together.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-lime-200 p-6 rounded-lg transition-transform hover:scale-[1.02]">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Our Approach
              </h3>
              <p className="mb-4 text-lg">
                We combine architectural expertise with community knowledge to
                create solutions that are practical, sustainable, and
                empowering. Our resources are developed in collaboration with
                people who have direct experience with self-built housing.
              </p>
              <p className="text-lg">
                Every design, guide, and material suggestion on this platform is
                accessible, and adaptable to different circumstances and
                resource availability and many of them are tested.
              </p>
            </div>

            <div className="bg-yellow-200 bg-opacity-30 p-6 rounded-lg transition-transform hover:scale-[1.02]">
              <h3 className="text-xl font-semibold mb-3 ">Get Involved</h3>
              <p className="mb-4 text-lg">
                Whether you're looking to improve your own shelter, support
                someone else's housing journey, or advocate for housing justice,
                there are many ways to participate in our community.
              </p>
              <p className="text-lg">
                Browse our resource library, contribute design ideas, share
                success stories, or volunteer your skills. Together, we can
                transform the way we think about housing and create more
                pathways to dignified homes for all.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section - Creative Layout with Two Images */}
      <div className="max-w-7xl mx-auto px-4 py-16 mb-20 relative">
        <div className="relative z-10">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg relative z-10">
            {/* Header with gradient overlay */}
            <div className="h-24 flex items-center px-8">
              <h2 className="text-4xl font-bold ">OUR IMPACT</h2>
            </div>

            {/* Main content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left column - Text and stats */}
                <div>
                  <p className="mb-6 text-lg">
                    This web application is a resource for those who build homes
                    from found materials, as well as for advocates and
                    architects working in solidarity with unhoused communities.
                  </p>
                  <p className="mb-8 text-lg">
                    A home is more than a shelter—it's a place of stability,
                    privacy, and connection. Through our resources and
                    community, we're helping people create dignified living
                    spaces regardless of their circumstances.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-lime-100 py-6 px-4 rounded-lg transform transition-transform hover:scale-105">
                      <h4 className="text-3xl font-bold text-lime-600 mb-1">
                        100+
                      </h4>
                      <p className="text-sm text-lime-800">Housing Solutions</p>
                    </div>
                    <div className="bg-yellow-100 py-6 px-4 rounded-lg transform transition-transform hover:scale-105">
                      <h4 className="text-3xl font-bold text-yellow-600 mb-1">
                        50+
                      </h4>
                      <p className="text-sm text-yellow-800">
                        Communities Served
                      </p>
                    </div>
                    <div className="bg-lime-100 py-6 px-4 rounded-lg transform transition-transform hover:scale-105">
                      <h4 className="text-3xl font-bold text-lime-600 mb-1">
                        1000+
                      </h4>
                      <p className="text-sm text-lime-800">People Helped</p>
                    </div>
                  </div>
                </div>

                {/* Right column - Overlapping cards layout */}
                <div className="relative h-full min-h-[400px]">
                  {/* First image - top right, slight rotation */}
                  <div className="absolute top-0 right-0 w-4/5 shadow-xl rounded-lg overflow-hidden transform rotate-3 z-20 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-40">
                    <img
                      src={ourImpactImage}
                      alt="Community impact interior"
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Second image - bottom left, opposite rotation */}
                  <div className="absolute top-40 left-0 w-4/5 shadow-xl rounded-lg overflow-hidden transform -rotate-3 z-10 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-40">
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
          <h2 className="text-3xl md:text-4xl font-bold  mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto ">
            Whether you're building your own home, supporting others, or
            advocating for housing justice, we invite you to join our community
            and be part of the solution.
          </p>
          <button
            onClick={() => (window.location.href = "/guide")}
            className="px-8 py-4 bg-black inline-block transition-all duration-300 hover:bg-zinc-900 hover:shadow-lg hover:shadow-lime-300/20 hover:scale-105 cursor-pointer"
          >
            <span className="bg-gradient-to-r from-[#F9D90B] to-[#98F90F] bg-clip-text text-transparent font-bold text-lg uppercase">
              Get Started Today
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
