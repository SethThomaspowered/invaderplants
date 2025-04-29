import React from 'react';
import { Tip } from '../data/citizenScientistTips';
import * as Icons from 'lucide-react';

interface TipCardProps {
  tip: Tip;
}

const TipCard: React.FC<TipCardProps> = ({ tip }) => {
  // Dynamically get the icon component
  const IconComponent = (Icons as any)[tip.icon.charAt(0).toUpperCase() + tip.icon.slice(1)];
  
  return (
    <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-3 gap-3">
        <div className="p-2 bg-green-100 rounded-full">
          {IconComponent && <IconComponent className="h-6 w-6 text-green-600" />}
        </div>
        <h3 className="text-lg font-bold text-gray-800">{tip.title}</h3>
      </div>
      <p className="text-gray-600">{tip.description}</p>
    </div>
  );
};

export default TipCard;