import { useState, useEffect, useCallback } from 'react';
import { scroller } from 'react-scroll';

const SECTIONS = [
  "intro",
  "experienceEducation",
  "skillsProficiencies",
  // "projects"
];

const useScrollPosition = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    (e: Event) => {
      const window = e.currentTarget as Window;
      console.log(currentSection, SECTIONS[currentSection])
      let nextSection = -1;

      if (y > window.scrollY) {
        if (nextSection < SECTIONS.length) {
          nextSection = currentSection - 1;
          console.log("scrolling up", nextSection);
        }
      } else if (y < window.scrollY) {
        nextSection = currentSection + 1;
        console.log("scrolling down", nextSection);
      }

      if (nextSection >= 0) {
        setCurrentSection(nextSection)
        handleScroll(SECTIONS[nextSection])
      }
      setY(window.scrollY);
    }, []
  );

  const handleScroll = (nextSection: string) => {
    scroller.scrollTo(nextSection, {
      duration: 500,
      delay: 100,
      smooth: true,
      // containerId: nextSection,
      offset: 50, // Scrolls to element + 50 pixels down the page
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));
    return () => {
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  });

};

export default useScrollPosition;