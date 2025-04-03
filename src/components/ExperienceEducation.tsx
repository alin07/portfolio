import React from "react";
import { Element } from 'react-scroll';

const ExperienceEducation: React.FC = () => {
  const exp = [
    {
      year: "2018",
      title: "Software Engineer",
      company: "Ladders Inc.",
      description: "Provides direction for applications in development...",
    },
    {
      year: "2016",
      title: "Application Developer",
      company: "Metropolitan Transportation Authority",
      description:
        "Developed, installed, and configured internal applications...",
    },
    {
      year: "2015",
      title: "Web Developer",
      company: "Haymarket Media Group",
      description: "asdfasdf",
    },
    {
      year: "2014",
      title: "Web Developer",
      company: "Haymarket Media Group",
      description: "asdfasdf",
    },
  ]
  return (
    <Element name="experienceEducation" className="h-screen flex flex-col md:flex-row w-full">
      {/* Left Side */}
      <div className="w-full md:w-1/2 bg-[#f4f4f4] p-10 ">
        <h2 className="text-3xl font-bold text-center md:text-left">
          Experience & Education
        </h2>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 bg-white p-10">
        {exp.map((exp, index) => (
          <div key={index} className="mb-6">
            <p className="font-bold text-gray-700">{exp.year}</p>
            <h3 className="font-bold text-lg">{exp.title}</h3>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-gray-500">{exp.description}</p>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default ExperienceEducation;
