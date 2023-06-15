import React from "react";

import styles from "./styles.module.css";
import ShortIntro from "../components/ShortIntro/ShortIntro";
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects";
import ContactBanner from "../components/ContactBanner/ContactBanner";

export const metadata = {
  title: "Nanthakumaran S",
  description: "",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <ShortIntro />
      </section>
      <section className={styles.section}>
        <FeaturedProjects />
      </section>
      <section className={styles.section}>
        <ContactBanner />
      </section>
    </main>
  );
}
