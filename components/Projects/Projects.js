import React from "react";

import styles from "./Projects.module.css";
import { works } from "../../data/projects.data";
import Project from "../../atoms/Project/Project";

const Projects = () => {
  return (
    <div className={styles.projects}>
      {works.map((work, i) => (
        <Project work={work} key={i} />
      ))}
    </div>
  );
};

export default Projects;
