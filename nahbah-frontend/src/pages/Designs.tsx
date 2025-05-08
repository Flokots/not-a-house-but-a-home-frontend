import React from 'react';
import Navbar from '@/components/Navbar';

const Designs: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-32 px-4 max-w-7xl mx-auto">
        <h1 className="text-5xl font-fjalla text-white mb-8">DESIGNS</h1>
        {/* Designs content will go here */}
      </div>
    </div>
  );
};

export default Designs;