import { NavLink } from 'react-router-dom';
import '@/App.css';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 py-6">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="logo">
          <NavLink to="/" className="font-fjalla text-white text-2xl flex items-center">
            NOT A HOUSE <span className="gradient-text ml-2">BUT A HOME</span>
          </NavLink>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "nav-link active" : "nav-link"
            }
          >
            HOME
          </NavLink>
          <NavLink 
            to="/about-us" 
            className={({ isActive }) => 
              isActive ? "nav-link active" : "nav-link"
            }
          >
            ABOUT US
          </NavLink>
          <NavLink 
            to="/designs" 
            className={({ isActive }) => 
              isActive ? "nav-link active" : "nav-link"
            }
          >
            DESIGNS
          </NavLink>
          <NavLink 
            to="/materials" 
            className={({ isActive }) => 
              isActive ? "nav-link active" : "nav-link"
            }
          >
            MATERIALS
          </NavLink>
          <NavLink 
            to="/upload" 
            className={({ isActive }) => 
              isActive ? "nav-link active" : "nav-link"
            }
          >
            UPLOAD
          </NavLink>
        </div>
        
        <div className="md:hidden">
          <button className="text-white text-xl">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;