import { useState } from "react";
import { NavLink } from "react-router-dom";
import "@/App.css";

interface NavbarProps {
  lightMode?: boolean;
}

const Navbar = ({ lightMode = false }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Define text color classes based on mode
  const textColor = lightMode ? "text-black" : "text-white";
  const gradientClass = lightMode ? "gradient-text-light" : "gradient-text";

  // Helper function for NavLink classes
  const getLinkClass = (isActive: boolean) => {
    return isActive
      ? lightMode
        ? `nav-link ${textColor} active-light`
        : `nav-link ${textColor} active`
      : `nav-link ${textColor}`;
  };

  // Close mobile menu when a link is clicked
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="absolute left-0 w-full z-20 py-8">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div>
          <NavLink
            to="/"
            className={`font-fjalla ${textColor} text-2xl flex items-center`}
            onClick={handleMobileLinkClick}
          >
            NOT A HOUSE{" "}
            <span className={`${gradientClass} ml-2`}>BUT A HOME</span>
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) => getLinkClass(isActive)}
          >
            HOME
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) => getLinkClass(isActive)}
          >
            ABOUT US
          </NavLink>
          <NavLink
            to="/guide"
            className={({ isActive }) => getLinkClass(isActive)}
          >
            GUIDE
          </NavLink>
          <NavLink
            to="/essentials"
            className={({ isActive }) => getLinkClass(isActive)}
          >
            ESSENTIALS
          </NavLink>
          <NavLink
            to="/designs"
            className={({ isActive }) => getLinkClass(isActive)}
          >
            DESIGNS
          </NavLink>
          <NavLink
            to="/contribute"
            className={({ isActive }) => getLinkClass(isActive)}
          >
            CONTRIBUTE
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className={`${textColor} text-xl focus:outline-none`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden absolute top-full left-0 w-full ${
            lightMode ? "bg-white" : "bg-black"
          } border-t ${
            lightMode ? "border-gray-300" : "border-gray-700"
          } shadow-lg`}
        >
          <div className="px-4 py-4 space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) => `${getLinkClass(isActive)} block py-2`}
              onClick={handleMobileLinkClick}
            >
              HOME
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) => `${getLinkClass(isActive)} block py-2`}
              onClick={handleMobileLinkClick}
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="/guide"
              className={({ isActive }) => `${getLinkClass(isActive)} block py-2`}
              onClick={handleMobileLinkClick}
            >
              GUIDE
            </NavLink>
            <NavLink
              to="/essentials"
              className={({ isActive }) => `${getLinkClass(isActive)} block py-2`}
              onClick={handleMobileLinkClick}
            >
              ESSENTIALS
            </NavLink>
            <NavLink
              to="/designs"
              className={({ isActive }) => `${getLinkClass(isActive)} block py-2`}
              onClick={handleMobileLinkClick}
            >
              DESIGNS
            </NavLink>
            <NavLink
              to="/contribute"
              className={({ isActive }) => `${getLinkClass(isActive)} block py-2`}
              onClick={handleMobileLinkClick}
            >
              CONTRIBUTE
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;