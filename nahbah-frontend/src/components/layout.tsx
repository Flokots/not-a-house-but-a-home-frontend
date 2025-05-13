import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  const location = useLocation();

  // Define which routes should use light mode
  const lightModeRoutes = ["/about-us", "/guide", "/essentials"];

  // Check if current path should use light mode
  const useLightMode = lightModeRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex">
      <Navbar lightMode={useLightMode} />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
