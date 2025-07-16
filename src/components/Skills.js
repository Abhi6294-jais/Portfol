// src/components/Skills.js
import React from 'react';
import { FaCode, FaLaptopCode, FaTools } from 'react-icons/fa';
import { SiJavascript, SiPython, SiMongodb } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
     {
      id: 'web',
      title: 'Web Development',
      icon: <FaLaptopCode className="text-indigo-400" />,
      skills: [
        { name: 'HTML & CSS', icon: <FaCode className="text-orange-400" /> },
        { name: 'React.js', icon: <FaCode className="text-blue-400" /> },
        { name: 'Node.js', icon: <FaCode className="text-green-400" /> },
        { name: 'Express.js', icon: <FaCode className="text-gray-400" /> },
        { name: 'RESTful APIs', icon: <FaCode className="text-indigo-400" /> },
      ]
    },
    {
      id: 'programming',
      title: 'Programming',
      icon: <FaCode className="text-indigo-400" />,
      skills: [
        { name: 'Python', icon: <SiPython className="text-green-400" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
        { name: 'SQL', icon: <FaCode className="text-purple-400" /> },
      ]
    },
   
   
    {
      id: 'tools',
      title: 'Tools & Tech',
      icon: <FaTools className="text-indigo-400" />,
      skills: [
        { name: 'Git & GitHub', icon: <FaCode className="text-gray-400" /> },
        { name: 'PostMan', icon: <FaCode className="text-orange-400" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },

      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#0f0f1b] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          My Skills
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-500 rounded-full"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[minmax(160px,_auto)]">
          {skillCategories.map((category, index) => {
            const gridStyles = [
              'md:col-span-3 md:row-span-2',
              'md:col-span-2',
              'md:col-span-1 md:row-span-2',
              'md:col-span-3',
            ];
            const tileStyle = gridStyles[index % gridStyles.length];

            return (
              <div
                key={category.id}
                className={`
                  relative group bg-gradient-to-br from-[#1f1f47] to-[#141432] 
                  p-4 rounded-xl overflow-hidden shadow-lg text-white 
                  backdrop-blur-md border border-white/10 
                  hover:ring-2 hover:ring-indigo-500/60 hover:shadow-indigo-500/30
                  transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.03]
                  cursor-pointer ${tileStyle}`}
              >
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition duration-500 pointer-events-none">
                  <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-500/40 via-purple-500/30 to-transparent w-full h-full" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center mb-3">
                    <div className="text-lg mr-2">{category.icon}</div>
                    <h3 className="text-lg font-bold text-white">{category.title}</h3>
                  </div>

                  <ul className="space-y-2">
                    {category.skills.map((skill, index) => (
                      <li key={index} className="flex items-center">
                        <span className="mr-2">{skill.icon}</span>
                        <span className="text-gray-300 text-2xl">{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;