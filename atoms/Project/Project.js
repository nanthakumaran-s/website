import Image from "next/image";
import React from "react";

import styles from "./Project.module.css";

const Project = ({ work }) => {
  return (
    <div className={styles.project}>
      <Image src={work.img} className={styles.img} alt={work.name} />
      <p className={styles.title}>{work.name}</p>
      <p className={styles.stacks}>{work.stacks.join(", ")}</p>
      <p className={styles.desc}>{work.description}</p>
    </div>
  );
};

export default Project;
