
import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = ({ scrollToSection }) => {
  const fullText = "Abhishek Jaiswal";
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [speed, setSpeed] = useState(70);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, index + 1));
        setIndex((prev) => prev + 1);

        if (index + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1000); 
        }
      } else {
        setDisplayedText(fullText.substring(0, index - 1));
        setIndex((prev) => prev - 1);

        if (index === 0) {
          setIsDeleting(false);
        }
      }
    };

    const timeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-indigo-50 to-blue-100"
    >
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="bg-indigo-500 text-white px-4 py-1 rounded-full inline-block mb-4">
            Mathematics and Computing Student
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
            Hi, I'm <span className="text-indigo-600">{displayedText}</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            A passionate Computing student at Indian Institute Of Technology, Patna specializing in 
            web development. I love problem solving.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-medium transition transform duration-300 hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl"

            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-full font-medium transition transform duration-300 hover:-translate-y-1 hover:scale-105"

            >
              Contact Me
            </button>
             <button 
              
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-medium transition transform duration-300 hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <a href="https://drive.google.com/file/d/16JOdWMzkw42B0fWJfoXbWGrqDvvQ3HxL/view?usp=sharing">
 Resume
              </a>
             
            </button>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/Abhi6294-jais" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition transform duration-300 hover:-translate-y-1 hover:scale-110"
>
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/abhishek-jaiswal-a17646251/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition transform duration-300 hover:-translate-y-1 hover:scale-110"
>
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        
     <div className="md:w-1/2 flex justify-center">
  <div className="relative">
    <img
      src="/abhi.jpg" 
      alt="Abhishek Jaiswal"
      className="rounded-xl w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg border-4 border-white"
    />
    <div className="absolute -bottom-4 -right-4 bg-indigo-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold shadow-md">
      MnC
    </div>
  </div>
</div>
</div>
    </section>
  );
};

export default Hero; 