// src/components/Footer.js
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold text-indigo-400 mb-4">AlexM</div>
          <p className="text-gray-400 mb-2 text-center">
            Computer Science Student | AI Enthusiast | Web Developer
          </p>
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Alex Morgan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;