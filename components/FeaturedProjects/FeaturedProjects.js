import React from "react";
import Link from "next/link";

import styles from "./FeaturedProjects.module.css";
import SectionTitle from "../Reusable/SectionTitle/SectionTitle";

const FeaturedProjects = () => {
  return (
    <React.Fragment>
      <div className={styles.title_row}>
        <SectionTitle title="Featured Projects" />
        <p className={styles.link}>
          <Link href="/works">All Works ▸</Link>
        </p>
      </div>
    </React.Fragment>
  );
};

export default FeaturedProjects;
