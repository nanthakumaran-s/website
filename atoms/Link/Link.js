import React from "react";
import Link from "next/link";

import styles from "./Link.module.css";
import { CgArrowTopRight } from "react-icons/cg";

const LinkComp = ({ data }) => {
  return (
    <Link href={data.link} target="_blank">
      <div className={styles.link}>
        <div className={styles.block}>
          {data.icon}
          {data.name}
        </div>
        <CgArrowTopRight />
      </div>
    </Link>
  );
};

export default LinkComp;
