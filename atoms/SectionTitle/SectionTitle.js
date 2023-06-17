import React from "react";

import styles from "./SectionTitle.module.css";

const SectionTitle = ({ title }) => {
  return <p className={styles.section_title}>{title}</p>;
};

export default SectionTitle;
