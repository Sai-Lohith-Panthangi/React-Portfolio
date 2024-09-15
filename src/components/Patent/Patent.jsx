import React from 'react';
import patentData from "../../../data/patent.json";
import { getImageUrl } from '../../utils';
import styles from "./Patent.module.css";

export const PatentSection = () => {
    return (
        <section className={styles.patentContainer} id="patent">
            <h2 className={styles.patentTitle}>PATENT</h2>
            <div className={styles.patentContent}>
                <div className={styles.patentImageWrapper}>
                    <img src={getImageUrl("patent/patent.png")} alt={patentData.title} className={styles.patentImage} />
                </div>
                <div className={styles.patentDetailsWrapper}>
                    <h3 className={styles.patentName}>{patentData.title}</h3>
                    <p className={styles.patentDetails}><strong>Patent Number:</strong> {patentData.number}</p>
                    <p className={styles.patentDetails}><strong>Role:</strong> {patentData.inventors}</p>
                    <p className={styles.patentDetails}><strong>Journal Number:</strong> {patentData.jour}</p>
                    <p className={styles.patentDetails}><strong>Date:</strong> {patentData.date}</p>
                    <p className={styles.patentDescription}>{patentData.description}</p>
                    <a href={patentData.link} target="_blank" rel="noopener noreferrer" className={styles.patentLink}>View Patent</a>
                </div>
            </div>
        </section>
    );
};
