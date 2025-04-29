import React from 'react';
import { Plant } from '../data/plants';

interface PlantCardProps {
  plant: Plant;
  onClick?: () => void;
  className?: string;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant, onClick, className = '' }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={plant.imageUrl} 
          alt={plant.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
          <h3 className="text-white text-xl font-bold">{plant.name}</h3>
          <p className="text-green-200 text-sm italic">{plant.scientificName}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-3">
          <span className={`inline-block px-3 py-1 rounded-full text-xs 
            ${plant.difficultyLevel === 'easy' ? 'bg-green-100 text-green-800' : 
              plant.difficultyLevel === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
              'bg-red-100 text-red-800'}`}>
            {plant.difficultyLevel.charAt(0).toUpperCase() + plant.difficultyLevel.slice(1)} to identify
          </span>
        </div>
        <p className="text-gray-700 line-clamp-3">{plant.description}</p>
        <button 
          className="mt-3 text-green-600 hover:text-green-800 text-sm font-medium transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onClick && onClick();
          }}
        >
          Learn More →
        </button>
      </div>
    </div>
  );
};

export default PlantCard;