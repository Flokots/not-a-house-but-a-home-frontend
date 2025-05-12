import { NavLink } from "react-router-dom";
import "@/App.css";

interface NavbarProps {
  lightMode?: boolean;
}

const Navbar = ({ lightMode = false }: NavbarProps) => {
  // Define text color classes based on mode
  const textColor = lightMode ? "text-black" : "text-white";
  const gradientClass = lightMode ? "gradient-text-light" : "gradient-text";

  return (
    <nav className="absolute left-0 w-full z-20 py-8">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="logo">
          <NavLink
            to="/"
            className={`font-fjalla ${textColor} text-2xl flex items-center`}
          >
            NOT A HOUSE{" "}
            <span className={`${gradientClass} ml-2`}>BUT A HOME</span>
          </NavLink>
        </div>

        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) => {
              // For active links in light mode, use active-light class, otherwise use active
              if (isActive) {
                return lightMode
                  ? `nav-link ${textColor} active-light`
                  : `nav-link ${textColor} active`;
              }
              // For non-active links, just apply the mode's text color
              return `nav-link ${textColor}`;
            }}
          >
            HOME
          </NavLink>
          {/* Apply the same pattern to other links */}
          <NavLink
            to="/about-us"
            className={({ isActive }) => {
              return isActive
                ? lightMode
                  ? `nav-link ${textColor} active-light`
                  : `nav-link ${textColor} active`
                : `nav-link ${textColor}`;
            }}
          >
            ABOUT US
          </NavLink>
          <NavLink
            to="/designs"
            className={({ isActive }) => {
              return isActive
                ? lightMode
                  ? `nav-link ${textColor} active-light`
                  : `nav-link ${textColor} active`
                : `nav-link ${textColor}`;
            }}
          >
            DESIGNS
          </NavLink>
          <NavLink
            to="/materials"
            className={({ isActive }) => {
              return isActive
                ? lightMode
                  ? `nav-link ${textColor} active-light`
                  : `nav-link ${textColor} active`
                : `nav-link ${textColor}`;
            }}
          >
            MATERIALS
          </NavLink>
          <NavLink
            to="/upload"
            className={({ isActive }) => {
              return isActive
                ? lightMode
                  ? `nav-link ${textColor} active-light`
                  : `nav-link ${textColor} active`
                : `nav-link ${textColor}`;
            }}
          >
            UPLOAD
          </NavLink>
        </div>

        <div className="md:hidden">
          <button className={`${textColor} text-xl`}>☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
