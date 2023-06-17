import React from "react";

import styles from "./Links.module.css";
import Link from "../../atoms/Link/Link";

const Links = ({ data }) => {
  return (
    <div className={styles.links}>
      {data.map((d, i) => (
        <Link data={d} key={i} />
      ))}
    </div>
  );
};

export default Links;
