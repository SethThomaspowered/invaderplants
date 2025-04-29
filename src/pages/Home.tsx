import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Gamepad2, Book, FlaskRound as Flask, Camera } from 'lucide-react';
import { invasivePlants } from '../data/plants';
import PlantCard from '../components/PlantCard';

const Home: React.FC = () => {
  // Show just 3 featured plants
  const featuredPlants = invasivePlants.slice(0, 3);

  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
              Become a Kentucky Plant Detective!
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Learn to identify invasive plants, understand their impact, and help protect Kentucky's natural environment.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/game" className="bg-white text-green-700 px-6 py-3 rounded-lg font-bold text-lg transition-transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
              <Gamepad2 size={24} />
              Play the Plant Match Game
            </Link>
            <Link to="/learn" className="bg-green-800 text-white px-6 py-3 rounded-lg font-bold text-lg transition-transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
              <Book size={24} />
              Learn About Invasive Plants
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Boxes */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-green-100 rounded-full">
                  <Gamepad2 className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Play & Learn</h3>
              <p className="text-gray-600 text-center">Test your knowledge with our fun matching game. Can you identify all the invasive plants?</p>
              <div className="mt-4 text-center">
                <Link to="/game" className="text-green-600 font-medium hover:text-green-800 flex items-center justify-center gap-1">
                  Play Now <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-green-100 rounded-full">
                  <Book className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Plant Guide</h3>
              <p className="text-gray-600 text-center">Discover common invasive plants in Kentucky and learn how to identify them.</p>
              <div className="mt-4 text-center">
                <Link to="/learn" className="text-green-600 font-medium hover:text-green-800 flex items-center justify-center gap-1">
                  Explore Plants <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-green-100 rounded-full">
                  <Flask className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Be a Scientist</h3>
              <p className="text-gray-600 text-center">Learn how you can help scientists by reporting invasive plants in your neighborhood.</p>
              <div className="mt-4 text-center">
                <Link to="/scientist" className="text-green-600 font-medium hover:text-green-800 flex items-center justify-center gap-1">
                  Get Tips <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-green-100 rounded-full">
                  <Camera className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Report Findings</h3>
              <p className="text-gray-600 text-center">Found a plant you think might be invasive? Submit a photo and help our database grow!</p>
              <div className="mt-4 text-center">
                <Link to="/report" className="text-green-600 font-medium hover:text-green-800 flex items-center justify-center gap-1">
                  Submit a Plant <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Plants */}
      <section className="py-16 px-4 bg-green-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-green-800">Featured Invasive Plants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPlants.map(plant => (
              <PlantCard 
                key={plant.id}
                plant={plant}
                onClick={() => {/* Link to plant detail */}}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/learn" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-bold transition-transform hover:scale-105 hover:shadow-lg flex items-center gap-2 mx-auto">
              <Book size={20} />
              View All Invasive Plants
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Help Protect Kentucky's Ecosystems?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Start your journey as a plant detective today! Learn to identify invasive species and become a citizen scientist.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/game" className="bg-white text-amber-600 px-6 py-3 rounded-lg font-bold text-lg transition-transform hover:scale-105 hover:shadow-lg">
              Play the Matching Game
            </Link>
            <Link to="/report" className="bg-amber-800 text-white px-6 py-3 rounded-lg font-bold text-lg transition-transform hover:scale-105 hover:shadow-lg">
              Report an Invasive Plant
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;