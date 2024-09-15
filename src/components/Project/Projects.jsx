import React from 'react';
import projects from '../../../data/projects.json';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';

export const Projects = () => {
    return (
        <section id="projects" className={styles.container}>
            <h2 className={styles.title}>My Projects</h2>
            <div className={styles.grid}>
                {projects.map((project, id) => (
                    <ProjectCard key={id} project={project} />
                ))}
            </div>
        </section>
    );
};
