import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-700 text-white py-4 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {currentYear} Kentucky Plant Detectives. All rights reserved.
            </p>
            <p className="text-xs mt-1 text-green-200">
              An educational project to help kids learn about invasive species
            </p>
          </div>
          <div className="text-sm">
            <p>
              Images from Pexels | Data from Kentucky Division of Forestry
            </p>
            <p className="mt-1 text-green-200">
              Created with 💚 for Kentucky's future environmentalists
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;