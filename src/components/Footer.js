// src/components/Footer.js
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold text-indigo-400 mb-4">Abhishek Jaiswal</div>
          <p className="text-gray-400 mb-2 text-center">
            Maths & Computing Student | Web Developer
          </p>
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Abhishek Jaiswal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;