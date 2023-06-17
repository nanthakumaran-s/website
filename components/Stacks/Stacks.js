import React from "react";
import Image from "next/image";

import styles from "./Stacks.module.css";
import { stacks } from "../../data/stacks.data";

const Stacks = () => {
  return (
    <div className={styles.stacks}>
      {stacks.map((stack, i) => (
        <div className={styles.stack} key={i}>
          <Image src={stack.img} alt={stack.name} className={styles.img} />
        </div>
      ))}
    </div>
  );
};

export default Stacks;
