import { NavLink } from "react-router-dom";
import "@/App.css";

interface NavbarProps {
  lightMode?: boolean;
}

const Navbar = ({ lightMode = false }: NavbarProps) => {
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

  return (
    <nav className="absolute left-0 w-full z-20 py-8">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div>
          <NavLink
            to="/"
            className={`font-fjalla ${textColor} text-xl flex items-center`}
          >
            NOT A HOUSE{" "}
            <span className={`${gradientClass} ml-2`}>BUT A HOME</span>
          </NavLink>
        </div>

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

        <div className="md:hidden">
          <button className={`${textColor} text-xl`}>☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;