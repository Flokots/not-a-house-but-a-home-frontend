import { Link } from 'react-router-dom';
import '@/App.css';
import homepageImage from '../assets/homepage.png';

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
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-white text-7xl md:text-8xl font-fjalla mb-4">
          A GUIDE FOR <span className="gradient-text">CREATIVES</span>
        </h1>
        
        <div className="mt-8 mb-16">
          <div className="flex items-center">
            <span className="gradient-text text-3xl md:text-4xl font-fjalla">ARCHITECTURE</span>
            <span className="text-white mx-2 text-3xl md:text-4xl font-fjalla">+</span>
            <span className="text-white text-3xl md:text-4xl font-fjalla">CREATIVITY</span>
          </div>
          <div className="gradient-line w-full h-1 mt-2"></div>
        </div>
        
        <p className="text-white text-lg md:text-xl max-w-3xl mb-12 hero-text">
          A home is more than just shelter—it's a place of stability, privacy, and community. This 
          initiative supports those creating their own homes in difficult circumstances by
        </p>
        
        <div className="flex flex-wrap gap-6">
          <Link to="/learn-more" className="gradient-border-btn">
            LEARN MORE
          </Link>
          <Link to="/designs" className="white-btn">
            VIEW DESIGNS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;