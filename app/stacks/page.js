import React from "react";

import styles from "./styles.module.css";
import PageIntro from "../../components/PageIntro/PageIntro";
import Stacks from "../../components/Stacks/Stacks";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle"
import Spacer from "../../atoms/Spacer/Spacer";
import Certs from "../../components/Certs/Certs";

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
        <SectionTitle title={"Certifications"} />
        <Spacer height={"20px"} />
        <Certs />
      </section>
      <section className={styles.section}>
        <SectionTitle title={"Skills"} />
        <Spacer height={"20px"} />
        <Stacks />
      </section>
    </div>
  );
}
