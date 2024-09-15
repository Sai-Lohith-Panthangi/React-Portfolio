import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Profile.module.css';

export const Profile = () => {
  return ( 
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Hi, I'm Sai Lohith Panthangi</h1>
        <p className={styles.description}>
        I am a skilled Full Stack Software Developer with expertise in JavaScript, React, Spring, Express and AWS. I specialize in building scalable web applications and solving complex technical challenges. Passionate about innovation, I deliver high-performance solutions that drive business success. Reach out if you would like to know more!
        </p>
        <div className={styles.buttonContainer}>
          <a className={styles.contactBtn} href="mailto:panthangisailohith2000@gmail.com">Contact Me</a>
          <a className={styles.contactBtn} href="https://raw.githubusercontent.com/Sai-Lohith-Panthangi/SaiLohithResume/main/saiLohithResume.pdf" download="SaiLohithResume.pdf" target="_blank" rel="noopener noreferrer">Download My Resume</a>
        </div>
      </div>
      <div className={styles.profileContainer}>
        <div className={styles.profileImgWrapper}>
          <img className={styles.profileImg} src={getImageUrl('hero/heroImage.png')} alt="Hero Image of me" />
          <img className={styles.profileImgBack} src={getImageUrl('hero/heroImageBack.png')} alt="Full Stack Developer" />
        </div>
      </div>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
