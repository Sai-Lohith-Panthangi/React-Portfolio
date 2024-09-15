import React from 'react';
import certifications from '../../../data/certification.json';
import { getImageUrl } from '../../utils';
import styles from './Certification.module.css';

export const Certification = () => {
  return (
    <section className={styles.certificationContainer} id="certification">
      <h2 className={styles.certificationTitle}>Certifications</h2>
      <div className={styles.certificationGrid}>
        {certifications.map((certification, id) => (
          <div key={id} className={styles.certificationCard}>
            <div className={styles.certificationCardContent}>
              <img
                src={getImageUrl(certification.imageSrc)}
                alt={`${certification.name} Logo`}
                className={styles.certificationCardImage}
              />
              <div className={styles.certificationCardOverlay}>
                <h3 className={styles.certificationCardTitle}>{certification.name}</h3>
                <p><em>Certified by: {certification.organization}</em></p>
                <p>Date Received: {certification.dateReceived}</p>
                <p>{certification.description}</p>
                <a href={certification.link} target="_blank" rel="noopener noreferrer" className={styles.certificationCardLink}>View Certificate</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
