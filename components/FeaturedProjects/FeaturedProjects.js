import React from "react";
import Link from "next/link";

import styles from "./FeaturedProjects.module.css";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import { featured, works } from "../../data/projects.data";
import Project from "../../atoms/Project/Project";

const FeaturedProjects = () => {
  return (
    <React.Fragment>
      <div className={styles.title_row}>
        <SectionTitle title="Featured Projects" />
        <p className={styles.link}>
          <Link href="/works">All Works ▸</Link>
        </p>
      </div>
      <div className={styles.projects}>
        {featured.map((ind, i) => (
          <Project work={works[ind]} key={i} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default FeaturedProjects;
