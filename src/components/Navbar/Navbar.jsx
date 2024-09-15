import React, { useEffect, useState } from 'react';
import { getImageUrl } from "../../utils";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  }

  return (
    <nav className={`${styles.navbar} ${!isTop ? styles.hidden : ''}`}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <img 
          className={styles.menuBtn} 
          src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} 
          alt="menu-button" 
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
          <li>
            <a 
              href="#about" 
              className={activeSection === 'about' ? styles.active : ''} 
              onClick={() => handleClick('about')}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#education" 
              className={activeSection === 'education' ? styles.active : ''} 
              onClick={() => handleClick('education')}
            >
              Education
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              className={activeSection === 'experience' ? styles.active : ''} 
              onClick={() => handleClick('experience')}
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={activeSection === 'projects' ? styles.active : ''} 
              onClick={() => handleClick('projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#certification" 
              className={activeSection === 'certification' ? styles.active : ''} 
              onClick={() => handleClick('certification')}
            >
              Certification
            </a>
          </li>
          <li>
            <a 
              href="#publications" 
              className={activeSection === 'publications' ? styles.active : ''} 
              onClick={() => handleClick('publications')}
            >
              Papers
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? styles.active : ''} 
              onClick={() => handleClick('contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
