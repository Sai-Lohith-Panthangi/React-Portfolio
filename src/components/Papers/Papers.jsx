import React from 'react';
import publications from "../../../data/papers.json";
import { getImageUrl } from '../../utils';
import styles from "./Papers.module.css";

export const Papers = () => {
    return (
        <section className={styles.publicationsContainer} id="publications">
            <h2 className={styles.publicationsTitle}>Technical Papers & Publications</h2>
            <div className={styles.cardsWrapper}>
                {publications.map((paper, index) => (
                    <div key={index} className={styles.publicationCard}>
                        <div className={styles.cardInner}>
                            <div className={styles.cardFront}>
                                <img src={getImageUrl(paper.image)} alt={paper.title} className={styles.publicationImg} />
                                <h3 className={styles.publicationTitle}>{paper.title}</h3>
                            </div>
                            <div className={styles.cardBack}>
                                <p className={styles.publicationDetails}>{paper.journal}</p>
                                <p className={styles.publicationDetails}>{paper.date}</p>
                                <p className={styles.publicationDescription}>{paper.description}</p>
                                <a href={paper.link} target="_blank" rel="noopener noreferrer" className={styles.publicationLink}>Read Paper</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
