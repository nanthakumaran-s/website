import React from "react";

import styles from "./styles.module.css";
import PageIntro from "../../components/PageIntro/PageIntro";
import Links from "../../components/Links/Links";
import { links } from "../../data/links.data";

export const metadata = {
  title: "Links | Nanthakumaran S",
  description: "",
};

const page = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <PageIntro title={"Links"} />
      </section>
      <section className={styles.section}>
        <Links data={links} />
      </section>
    </main>
  );
};

export default page;
