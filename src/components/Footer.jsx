import React, { useState, useEffect } from 'react';
import { Contact } from 'lucide-react';
import './Footer.css';

const Footer = ({ hasSearched }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (hasSearched && (window.innerHeight + window.pageYOffset) >= document.documentElement.scrollHeight - 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // Check visibility on mount and when hasSearched changes
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [hasSearched]);

  if (!hasSearched) return null;

  return (
    <footer className={`custom-footer ${isVisible ? 'visible' : ''}`}>
      <a
        href="https://forms.gle/xEkQi8tBjsFUKYig8"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
      >
        <Contact className="icon" />
        <span>Contact</span>
      </a>
    </footer>
  );
};

export default Footer;