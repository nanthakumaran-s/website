import React from "react";

import styles from "./PageIntro.module.css";
import GradientText from "../../atoms/GradientText/GradientText";

const PageIntro = ({ title }) => {
  return (
    <div className={styles.page_intro}>
      <GradientText text={title} />
    </div>
  );
};

export default PageIntro;
