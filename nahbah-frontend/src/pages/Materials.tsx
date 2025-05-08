import React from 'react';
import Navbar from '@/components/Navbar';

const Submit: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-32 px-4 max-w-7xl mx-auto">
        <h1 className="text-5xl font-fjalla text-white mb-8">UPLOAD</h1>
        {/* Upload form will go here */}
      </div>
    </div>
  );
};

export default Submit;