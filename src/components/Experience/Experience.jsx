import React from 'react';
import history from '../../../data/history.json';
import { getImageUrl } from '../../utils';
import styles from './Experience.module.css';

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.cardContainer}>
        {history.map((historyItem, id) => (
          <div key={id} className={styles.card}>
            <div className={styles.cardImage}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{historyItem.role}</h3>
              <p className={styles.cardSubtitle}>{historyItem.organisation}</p>
              <p className={styles.cardDate}><em>{historyItem.startDate} - {historyItem.endDate}</em></p>
              <div className={styles.cardDetails}>
                <ul>
                  {historyItem.experiences.map((experience, id) => (
                    <li key={id}>{experience}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
