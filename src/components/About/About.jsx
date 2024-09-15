import React, { useEffect } from 'react';
import skills from "../../../data/skills.json";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  useEffect(() => {
    const skillImageContainers = document.querySelectorAll(`.${styles.skillImageContainer}`);

    skillImageContainers.forEach(container => {
      const setRandomFloat = () => {
        const randomX = Math.random() * 20 - 10;
        const randomY = Math.random() * 20 - 10; 

        container.style.setProperty('--random-x', randomX + 'px');
        container.style.setProperty('--random-y', randomY + 'px');

        const randomX2 = Math.random() * 20 - 10; 
        const randomY2 = Math.random() * 20 - 10; 

        container.style.setProperty('--random-x-2', randomX2 + 'px');
        container.style.setProperty('--random-y-2', randomY2 + 'px');

        const randomX3 = Math.random() * 20 - 10; 
        const randomY3 = Math.random() * 20 - 10; 

        container.style.setProperty('--random-x-3', randomX3 + 'px');
        container.style.setProperty('--random-y-3', randomY3 + 'px');
      };

      setRandomFloat();
      window.addEventListener('resize', setRandomFloat); 

      return () => window.removeEventListener('resize', setRandomFloat);
    });
  }, []);

  return (
    <section id="about" className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {skills.map((skill, id) => (
                    <div key={id} className={styles.skill}>
                        <div className={`${styles.skillImageContainer} ${styles.floating}`}>
                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                        </div>
                        <p>{skill.title}</p>
                    </div>
                ))}
            </div>

            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <p>As a Full-Stack Developer with experience in both front-end and back-end technologies, I've worked with major clients like Verizon and At&t. I excel in creating scalable applications using React.js, Spring Boot, and various AWS services.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <p>My recent projects include a Full-Stack Student Survey Web App utilizing Angular and Spring Boot, and an AWS-based Dynamic Web App hosted on S3 and EC2, showcasing my ability to handle both development and deployment tasks effectively.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <p>Innovative projects like the 4S Navigation Tool for Visual Studio Code, which received a 5/5 rating, and research on Breast Cancer Detection with Meta-Learning and ANN, underline my commitment to leveraging technology for impactful solutions.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <p>With a Master’s in Computer Science from George Mason University and certifications in AWS, UX Design, and Full Stack Software Development, I combine a strong academic background with practical skills to drive success in my projects.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
};
