import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const CodingProfiles = () => {
  const profiles = [
    {
      id: 1,
      title: "LeetCode",
      description: "Solved 150+ problems including 90+ medium and 50+ hard problems. Regular participant in weekly contests.",
      stats: ["Rank: Top 11%", "Contests: 15+","Max Rating: 1743"],
      logo: "https://leetcode.com/static/images/LeetCode_Sharing.png",
      link: "https://leetcode.com/u/abhishekiitp/",
      color: "from-yellow-500 to-yellow-300"
    },
    {
      id: 2,
      title: "CodeForces",
      description: "Heading towards becoming pupil. Active participant in codeforces rounds",
      stats: ["Problems Solved: 90+", "Max Rating: 1183", "Contests: 12+"],
      logo: "https://codeforces.org/s/0/apple-icon-180x180.png",
      link: "https://codeforces.com/profile/abhishekiitp",
      color: "from-red-600 to-red-400"
    },
    {
      id: 3,
      title: "GeeksForGeeks",
      description: "Solved 50+ problems in various domains",
      stats: ["Coding Score:100+"],
      logo: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
      link: "https://www.geeksforgeeks.org/user/smartabhij4ie/",
      color: "from-green-600 to-green-400"
    }
  ];

  return (
    <section id="coding-profiles" className="py-20 bg-[#f9f9ff]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          Coding Profiles
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-500 rounded-full"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="group relative bg-white rounded-2xl shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
            >
              <div
                className={`h-48 flex items-center justify-center bg-gradient-to-br ${profile.color} relative`}
              >
                <div className="absolute w-40 h-40 bg-white rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition duration-300" />
                <div className="relative bg-white rounded-full p-2 shadow-lg">
                  <img 
                    src={profile.logo} 
                    alt={profile.title} 
                    className="w-20 h-20 object-contain rounded-full"
                  />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {profile.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {profile.description}
                </p>

                <div className="mb-4 space-y-2">
                  {profile.stats.map((stat, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                      {stat}
                    </div>
                  ))}
                </div>

                <div className="flex">
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 hover:text-indigo-800 transition font-medium"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Visit Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;