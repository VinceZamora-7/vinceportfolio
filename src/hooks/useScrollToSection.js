/**
 * useScrollToSection Hook
 * Handles smooth scrolling to sections
 */

import { useEffect } from 'react';

export const useScrollToSection = () => {
  useEffect(() => {
    const handleNavClick = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const sectionId = e.target.getAttribute('href').slice(1);
        const element = document.getElementById(sectionId);
        
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, []);
};
