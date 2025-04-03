import { Element } from 'react-scroll';
import java from '../assets/tech-icons/java.svg';
import javascript from '../assets/tech-icons/javascript.svg';
import react from '../assets/tech-icons/react.svg';
import clojure from '../assets/tech-icons/clojure.svg';
import python from '../assets/tech-icons/python.svg';
import flask from '../assets/tech-icons/flask.svg';
import nextjs from '../assets/tech-icons/nextjs.svg';
import typescript from '../assets/tech-icons/typescript.svg';
import ruby from '../assets/tech-icons/ruby.svg';
import mysql from '../assets/tech-icons/mysql.svg';
import postgresql from '../assets/tech-icons/postgresql.svg';
import html5 from '../assets/tech-icons/html-5.svg';
import github from '../assets/tech-icons/github.svg';
import jira from '../assets/tech-icons/jira.svg';
import jenkins from '../assets/tech-icons/jenkins.svg';

interface Skill {
  name: string;
  icon: string;
}

const languages: Skill[] = [
  { name: "Java", icon: java },
  { name: "JavaScript", icon: javascript },
  { name: "React.js", icon: react },
  { name: "Clojure", icon: clojure },
  { name: "Python", icon: python },
  { name: "Flask", icon: flask },
  { name: "Next.js", icon: nextjs },
  { name: "TypeScript", icon: typescript },
  { name: "Ruby on Rails", icon: ruby },
  { name: "MySQL", icon: mysql },
  { name: "PostgreSQL", icon: postgresql },
  {
    name: "HTML5", icon: html5
  },
  { name: "Github", icon: github },
  { name: "Jira", icon: jira },
  { name: "Jenkins", icon: jenkins },
];

const SkillsProficiencies: React.FC = () => {
  return (
    <Element name="skillsProficiencies" className="h-screen w-full bg-white py-16 px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Languages, Frameworks & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {languages.map((lang) => (
            <div key={lang.name}>
              {/* <p>{lang.name}</p> */}
              <img src={lang.icon} alt={lang.name} className="w-24 h-24" />
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default SkillsProficiencies;
