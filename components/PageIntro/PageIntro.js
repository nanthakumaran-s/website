import React from "react";

import styles from "./PageIntro.module.css";
import GradientText from "../../atoms/GradientText/GradientText";

const PageIntro = () => {
  return (
    <div className={styles.page_intro}>
      <GradientText text={"Works"} />
    </div>
  );
};

export default PageIntro;
