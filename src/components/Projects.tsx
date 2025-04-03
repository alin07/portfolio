import React from "react";
import { Element } from 'react-scroll';
const workSamples = [
  {
    title: "Table Top Trader",
    description: "A platform where users can buy, trade, donate and sell boardgames.",
    image: "/images/work1.jpg", // Replace with actual image paths
  },
  {
    title: "Shoppy List",
    description:
      "A shopping list app that allows you to add ingredients from recipe urls and create a shopping list from them.",
    image: "/images/work2.jpg",
  },
  {
    title: "Pomodoro Timer",
    description: "A simple pomodoro timer that helps you stay focused and productive.",
    image: "/images/work3.jpg",
  },
];

const Projects: React.FC = () => {
  return (
    <Element name="project" className="bg-[#f4f4f4] w-full h-screen flex flex-col items-center justify-center p-10">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-10 relative">
        Sample Work
        {/* <span className="absolute inset-x-0 -bottom-2 border-b-4 border-purple-500 w-32 mx-auto"></span> */}
      </h2>

      {/* Work Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl">
        {workSamples.map((work, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={work.image}
              alt={work.title}
              className="w-48 h-48 object-cover rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-semibold mt-4">{work.title}</h3>
            <p className="text-gray-500 mt-2 text-sm">{work.description}</p>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default Projects;
