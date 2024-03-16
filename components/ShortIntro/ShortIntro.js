import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./ShortIntro.module.css";
import avatarImg from "../../public/home/avatar.svg";

const ShortIntro = () => {
  return (
    <React.Fragment>
      <div className={styles.row}>
        <Image src={avatarImg} alt="Avatar" className={styles.avatar} />
        <div className={styles.column}>
          <p>Nanthakumaran S</p>
          <p>Associate Engineer @Presidio | Software, Cloud & Data Engineer | 1x AWS</p>
        </div>
      </div>
      <p className={styles.description}>
      Crafting robust solutions in the digital realm, I bring together the artistry of software engineering, the precision of data engineering, and the agility of cloud and DevOps.
      </p>
      <div className={styles.row}>
        <Link href="/global/Resume | Nanthakumaran S.pdf" target="_blank">
          <div className={styles.resume_btn}>Resume</div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default ShortIntro;
