import React from 'react';
import { useNavigate } from 'react-router-dom';

interface LearnMoreFeatureProps {
  title: string;
  image: string;
  route: string;
}

const LearnMoreFeature: React.FC<LearnMoreFeatureProps> = ({ title, image, route }) => {
  const navigate = useNavigate();
  
  return (
    <div 
      className="flex flex-col cursor-pointer transition-transform hover:scale-105"
      onClick={() => navigate(route)}
    >
      <div className="border border-gray-300 p-2 mb-2">
        <img src={image} alt={title} className="w-full" />
      </div>
      <h3 className="text-2xl font-bold text-center">{title}</h3>
    </div>
  );
};

const LearnMore: React.FC = () => {
  const features = [
    { 
      title: "Warmth", 
      image: "/api/placeholder/250/250", 
      route: "/features/warmth" 
    },
    { 
      title: "Staying dry", 
      image: "/api/placeholder/250/250", 
      route: "/features/staying-dry" 
    },
    { 
      title: "Wind proofing", 
      image: "/api/placeholder/250/250", 
      route: "/features/wind-proofing" 
    },
    { 
      title: "Dry ground", 
      image: "/api/placeholder/250/250", 
      route: "/features/dry-ground" 
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="relative py-16 mb-8">
        <h1 className="text-7xl font-light text-gray-200">Essentials</h1>
        <h2 className="text-4xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          What does a Home need?
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((feature, index) => (
          <LearnMoreFeature 
            key={index}
            title={feature.title}
            image={feature.image}
            route={feature.route}
          />
        ))}
      </div>
    </div>
  );
};

export default LearnMore;