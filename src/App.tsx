// import { useEffect, useState } from 'react';
import './App.css'
import Intro from './components/Intro'
import ExperienceEducation from './components/ExperienceEducation'
import SkillsProficiencies from './components/SkillsProficiencies'
import Projects from './components/Projects'
// import useScrollPosition from './hooks/useScrollPosition'

function App() {
  // const scrollPosition = useScrollPosition();


  return (
    <div>
      <Intro />
      <SkillsProficiencies />
      <ExperienceEducation />
      <Projects />
    </div>
  )
}

export default App
