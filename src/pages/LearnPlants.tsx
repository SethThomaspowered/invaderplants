import React, { useState } from 'react';
import { Search, Plus, Minus } from 'lucide-react';
import { invasivePlants, Plant } from '../data/plants';
import PlantCard from '../components/PlantCard';

const LearnPlants: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const filteredPlants = invasivePlants.filter(plant => 
    plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFeature = (feature: string) => {
    if (selectedFeature === feature) {
      setSelectedFeature(null);
    } else {
      setSelectedFeature(feature);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-green-800">
          Kentucky's Invasive Plants Guide
        </h1>
        
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search plants by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          </div>
        </div>

        {selectedPlant ? (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
            <div className="relative h-64 sm:h-96">
              <img 
                src={selectedPlant.imageUrl} 
                alt={selectedPlant.name}
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setSelectedPlant(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-6 py-4">
                <h2 className="text-white text-3xl font-bold">{selectedPlant.name}</h2>
                <p className="text-green-200 text-lg italic">{selectedPlant.scientificName}</p>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-lg text-gray-700 mb-6">{selectedPlant.description}</p>
              
              <div className="space-y-4">
                <div>
                  <button 
                    onClick={() => toggleFeature('identifyingFeatures')}
                    className="flex items-center justify-between w-full text-left px-4 py-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                  >
                    <span className="text-xl font-bold text-green-800">How to Identify</span>
                    {selectedFeature === 'identifyingFeatures' ? 
                      <Minus className="text-green-800" size={20} /> : 
                      <Plus className="text-green-800" size={20} />
                    }
                  </button>
                  {selectedFeature === 'identifyingFeatures' && (
                    <div className="mt-3 pl-4 border-l-4 border-green-200 py-2">
                      <ul className="list-disc pl-5 space-y-2">
                        {selectedPlant.identifyingFeatures.map((feature, index) => (
                          <li key={index} className="text-gray-700">{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div>
                  <button 
                    onClick={() => toggleFeature('impact')}
                    className="flex items-center justify-between w-full text-left px-4 py-3 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                  >
                    <span className="text-xl font-bold text-red-800">Environmental Impact</span>
                    {selectedFeature === 'impact' ? 
                      <Minus className="text-red-800" size={20} /> : 
                      <Plus className="text-red-800" size={20} />
                    }
                  </button>
                  {selectedFeature === 'impact' && (
                    <div className="mt-3 pl-4 border-l-4 border-red-200 py-2">
                      <p className="text-gray-700">{selectedPlant.impact}</p>
                    </div>
                  )}
                </div>
                
                <div>
                  <button 
                    onClick={() => toggleFeature('whereFound')}
                    className="flex items-center justify-between w-full text-left px-4 py-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                  >
                    <span className="text-xl font-bold text-blue-800">Where It's Found</span>
                    {selectedFeature === 'whereFound' ? 
                      <Minus className="text-blue-800" size={20} /> : 
                      <Plus className="text-blue-800" size={20} />
                    }
                  </button>
                  {selectedFeature === 'whereFound' && (
                    <div className="mt-3 pl-4 border-l-4 border-blue-200 py-2">
                      <p className="text-gray-700">{selectedPlant.whereFound}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlants.length > 0 ? (
              filteredPlants.map(plant => (
                <PlantCard 
                  key={plant.id}
                  plant={plant}
                  onClick={() => setSelectedPlant(plant)}
                />
              ))
            ) : (
              <div className="col-span-3 text-center py-10">
                <p className="text-xl text-gray-600">No plants found matching "{searchTerm}"</p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LearnPlants;