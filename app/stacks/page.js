import React from "react";

import styles from "./styles.module.css";
import PageIntro from "../../components/PageIntro/PageIntro";
import Stacks from "../../components/Stacks/Stacks";

export const metadata = {
  title: "Tech Stacks | Nanthakumaran S",
  description: "",
};

export default function Home() {
  return (
    <div className={styles.main}>
      <section className={styles.section}>
        <PageIntro title={"Tech Stacks"} />
      </section>
      <section className={styles.section}>
        <Stacks />
      </section>
    </div>
  );
}
