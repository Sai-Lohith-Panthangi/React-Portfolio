import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Reach Out to me!</h2>
        <p className={styles.description}>
        Have a question or just want to connect? I'm eager to explore new projects, share creative ideas, and collaborate on exciting opportunities. Let's make something great together!
        </p>
        <div className={styles.linksContainer}>
          <ul className={styles.links}>
            <li className={styles.link}>
              <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
              <a href="mailto:panthangisailohith2000@gmail.com">Email Me</a>
            </li>
            <li className={styles.link}>
              <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
              <a href="https://www.linkedin.com/in/sai-lohith-panthangi">LinkedIn</a>
            </li>
            <li className={styles.link}>
              <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
              <a href="https://github.com/Sai-Lohith-Panthangi">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
