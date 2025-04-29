import React from 'react';
import { Camera, CheckCircle, X } from 'lucide-react';
import { citizenScientistTips } from '../data/citizenScientistTips';
import TipCard from '../components/TipCard';

const CitizenScientist: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-50 py-10 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-800">
          Become a Citizen Scientist!
        </h1>
        <p className="text-xl text-center max-w-3xl mx-auto mb-12 text-gray-700">
          Help scientists track invasive plants in Kentucky. You don't need special training - just follow these tips to get started!
        </p>
        
        {/* Tips Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {citizenScientistTips.map(tip => (
            <TipCard key={tip.id} tip={tip} />
          ))}
        </div>
        
        {/* What to Do Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-green-800 text-center">
            What You Can Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-700 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                Do This!
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">1</span>
                  <span className="text-gray-700">Take clear photos that show the whole plant and close-ups of leaves, flowers, and stems.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">2</span>
                  <span className="text-gray-700">Record the date and location where you found the plant.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">3</span>
                  <span className="text-gray-700">Be careful not to spread seeds or plant parts when examining invasive species.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">4</span>
                  <span className="text-gray-700">Use multiple field guides or apps to help with identification.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">5</span>
                  <span className="text-gray-700">Ask an adult or expert for help if you're not sure about a plant.</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-red-700 flex items-center gap-2">
                <X className="h-6 w-6 text-red-600" />
                Don't Do This!
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="bg-red-100 text-red-800 rounded-full h-6 w-6 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">1</span>
                  <span className="text-gray-700">Never touch or pick plants you don't recognize, as some can cause skin irritation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-red-100 text-red-800 rounded-full h-6 w-6 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">2</span>
                  <span className="text-gray-700">Don't remove or dig up plants without permission from landowners or park rangers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-red-100 text-red-800 rounded-full h-6 w-6 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">3</span>
                  <span className="text-gray-700">Don't go out exploring alone - always have an adult with you.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-red-100 text-red-800 rounded-full h-6 w-6 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">4</span>
                  <span className="text-gray-700">Don't trespass on private property to look for plants.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-red-100 text-red-800 rounded-full h-6 w-6 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">5</span>
                  <span className="text-gray-700">Never eat any part of a plant you find in the wild!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Report CTA */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-lg p-8 text-white text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-full">
              <Camera className="h-10 w-10 text-green-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">Ready to Report an Invasive Plant?</h2>
          <p className="text-lg max-w-xl mx-auto mb-6">
            Found a plant you think might be invasive? Submit a photo and help scientists track these species across Kentucky!
          </p>
          <a 
            href="/report" 
            className="inline-block bg-white text-green-700 px-6 py-3 rounded-lg font-bold text-lg transition-transform hover:scale-105 hover:shadow-lg"
          >
            Report a Plant
          </a>
        </div>
      </div>
    </div>
  );
};

export default CitizenScientist;