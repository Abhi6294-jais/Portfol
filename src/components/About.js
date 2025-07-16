// src/components/About.js
import React from "react";
import { FaGraduationCap, FaBook } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          About Me
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-500 rounded-full"></div>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img
              src="https://images.shiksha.com/mediadata/images/articles/1734514712phpKZ3g5h.jpeg"
              alt="Abhishek Jaiswal"
              className="rounded-xl w-full h-96 object-cover shadow-lg border-4 border-white"
            />
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Maths & Computing Student & Aspiring Developer
            </h3>
            <p className="text-gray-600 mb-6">
              I'm a junior at Indian Institute Of Technology, Patna pursuing a
              Bachelor's degree in Maths & Computing with a focus on Web
              Technologies. I'm passionate about creating innovative websites.
            </p>
            <p className="text-gray-600 mb-8">
              Outside of academics, I'm an active member of the Stanford AI Club
              and participate in hackathons. I was recently interned at
              ITJOBXS where I was developing an interview-experience page for
              the Ed-Tech Company.
            </p>

        <div className="bg-gray-50 p-6 rounded-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">


              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FaGraduationCap className="mr-2 text-indigo-500" />
                Education
              </h3>

              <div className="mb-6">
                <div className="flex items-start mb-2">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <FaBook className="text-indigo-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">
                     Indian Institute Of Technology, Patna
                    </h4>
                    <p className="text-gray-600">
                      B.S. in Maths&Computing | 2025 - Present
                    </p>
                    <p className="text-gray-600">CGPA: 7.62/10 | Dean's List</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <FaBook className="text-indigo-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      Relevant Coursework
                    </h4>
                    <p className="text-gray-600">
                      Algorithms, Data Structures, Web
                      Development, Database Systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;