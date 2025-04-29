import React from 'react';
import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-green-600 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <Leaf className="h-8 w-8" />
          <h1 className="text-2xl font-bold tracking-wide">
            Kentucky Plant Detectives
          </h1>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-green-200 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/game" className="hover:text-green-200 transition-colors">
                Plant Match Game
              </Link>
            </li>
            <li>
              <Link to="/learn" className="hover:text-green-200 transition-colors">
                Invasive Plants
              </Link>
            </li>
            <li>
              <Link to="/scientist" className="hover:text-green-200 transition-colors">
                Be a Scientist
              </Link>
            </li>
            <li>
              <Link to="/report" className="hover:text-green-200 transition-colors">
                Report a Plant
              </Link>
            </li>
          </ul>
        </nav>
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;