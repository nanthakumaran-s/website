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
          <p>Software Developer, Cloud & DevOps Enthusiast</p>
        </div>
      </div>
      <p className={styles.description}>
        A passionate full-stack software developer who can build robust
        applications. If you can&apos;t find me near my computer, you can find
        me playing chess. I spent most of my time building new applications,
        learning and challenging myself.
      </p>
      <div className={styles.row}>
        <Link href="/resume">
          <div className={styles.resume_btn}>Resume</div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default ShortIntro;
