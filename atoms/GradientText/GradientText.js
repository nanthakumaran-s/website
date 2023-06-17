import React from "react";

import styles from "./GradientText.module.css";

const GradientText = ({ text }) => {
  return <p className={styles.gradient_text}>{text}</p>;
};

export default GradientText;
