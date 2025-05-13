import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  const location = useLocation();

  // Define which routes should use light mode
  const lightModeRoutes = ["/about-us", "/materials", "/designs", "learn-more"];

  // Check if current path should use light mode
  const useLightMode = lightModeRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar lightMode={useLightMode} />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
