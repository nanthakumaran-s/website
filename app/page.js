import Image from "next/image";

import styles from "./Home.module.css";
import avatarImg from "../public/home/avatar.svg";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Nanthakumaran S",
  description: "",
};

export default function Home() {
  return (
    <React.Fragment>
      <section className={styles.home}>
        <div class={styles.row}>
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
        <Link href="/resume">
          <div className={styles.resume_btn}>Resume</div>
        </Link>
      </section>
    </React.Fragment>
  );
}
