import React from 'react';

interface MaterialCardProps {
  image: string;
  title: string;
  alt: string;
}

const MaterialCard: React.FC<MaterialCardProps> = ({ image, title, alt }) => {
  return (
    <div className="flex flex-col items-center group cursor-pointer">
      <div className="h-60 w-full overflow-hidden rounded-lg shadow-sm mb-3 transition-all duration-300 group-hover:shadow-md">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-700"
        />
      </div>
      <h3 className="text-2xl font-bold text-center uppercase">{title}</h3>
    </div>
  );
};

export default MaterialCard;