import PageIntro from "../../components/PageIntro/PageIntro";
import Projects from "../../components/Projects/Projects";
import styles from "./styles.module.css";

export const metadata = {
  title: "Works | Nanthakumaran S",
  description: "",
};

export default function Home() {
  return (
    <div className={styles.main}>
      <section className={styles.section}>
        <PageIntro />
      </section>
      <section className={styles.section}>
        <Projects />
      </section>
    </div>
  );
}
