import React from 'react';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      {/* Additional sections can be added here */}
    </div>
  );
};

export default HomePage;