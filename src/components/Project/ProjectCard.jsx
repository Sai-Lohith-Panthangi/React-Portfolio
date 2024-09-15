import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './ProjectCard.module.css';

export const ProjectCard = ({ project: { title, imageSrc, description, skills, source } }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                    <img className={styles.image} src={getImageUrl(imageSrc)} alt={`image of ${title}`} />
                    <h3 className={styles.title}>{title}</h3>
                </div>
                <div className={styles.cardBack}>
                {Array.isArray(description) ? (
                        <ul className={styles.description}>
                            {description.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className={styles.description}>{description}</p>
                    )}
                    <ul className={styles.skills}>
                        {skills.map((skill, id) => (
                            <li className={styles.skill} key={id}>{skill}</li>
                        ))}
                    </ul>
                    <a className={styles.link} href={source}>View Source</a>
                </div>
            </div>
        </div>
    );
};
