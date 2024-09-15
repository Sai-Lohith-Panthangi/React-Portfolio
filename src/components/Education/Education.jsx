import React, { useState } from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Education.module.css";

export const Education = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const handleMouseEnter = (section) => {
    setHoveredSection(section);
  };

  const handleMouseLeave = () => {
    setHoveredSection(null);
  };

  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      
      <div className={styles.content}>
        <div 
          className={`${styles.contentItem} ${hoveredSection === 'gmu' ? styles.hovered : ''}`}
          onMouseEnter={() => handleMouseEnter('gmu')}
          onMouseLeave={handleMouseLeave}
        >
          <img className={styles.educationImg} src={getImageUrl("education/gmu.png")} alt="Gmu logo" />
          <div>
            <h1><strong>George Mason University</strong></h1>
            <p><em>Master's in Computer Science (Jan 2023 - Dec 2024)</em></p>
            <p>CGPA : 3.93/4.00</p>
            <p>Location: Fairfax, VA, USA</p> { }
            {hoveredSection === 'gmu' && (
              <div className={styles.additionalInfo}>
                <h3>Relevant Courses</h3>
                <ul>
                  <li>Data Structures</li>
                  <li>Algorithms Analysis</li>
                  <li>Artificial Intelligence</li>
                  <li>AWS</li>
                  <li>Software WWW</li>
                  <li>Software Methodology</li>
                  <li>Programming Tools</li>
                  <li>Theory of Computation</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div 
          className={`${styles.contentItem} ${hoveredSection === 'sreenidhi' ? styles.hovered : ''}`}
          onMouseEnter={() => handleMouseEnter('sreenidhi')}
          onMouseLeave={handleMouseLeave}
        >
          <img className={styles.educationImg} src={getImageUrl("education/snist.png")} alt="Sreenidhi logo" />
          <div>
            <h1><strong>Sreenidhi Institute of Science and Technology</strong></h1>
            <p><em>Bachelor of Technology in Computer Engineering (Aug 2017 - May 2021)</em></p>
            <p>CGPA : 3.88/4.00</p>
            <p>Location: Hyderabad, India</p> {}
            {hoveredSection === 'sreenidhi' && (
              <div className={styles.additionalInfo}>
                <h3>Relevant Courses</h3>
                <ul>
                  <li>Internet Of Things</li>
                  <li>Data structures and Algorithms</li>
                  <li>Database Management</li>  
                  <li>Python</li>
                  <li>Java</li>
                  <li>Embedded C</li>             
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
