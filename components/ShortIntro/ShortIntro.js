import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./ShortIntro.module.css";
import avatarImg from "../../public/home/avatar.svg";
import { introData } from "../../data/intro.data";

const ShortIntro = () => {
  return (
    <React.Fragment>
      <div className={styles.row}>
        <Image src={avatarImg} alt="Avatar" className={styles.avatar} />
        <div className={styles.column}>
          <p>{introData.name}</p>
          <p>{introData.desc}</p>
        </div>
      </div>
      <p className={styles.description}>{introData.descLong}</p>
      <div className={styles.row}>
        <Link href="/global/Resume | Nanthakumaran S.pdf" target="_blank">
          <div className={styles.resume_btn}>{introData.cta}</div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default ShortIntro;
