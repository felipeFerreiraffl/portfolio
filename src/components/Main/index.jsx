import Experience from "../Sections/Experience";
import Intro from "../Sections/Intro";
import Skills from "../Sections/Skills";
import styles from "./styles.module.css";

export default function Main() {
  return (
    <main className={styles.main}>
      <Intro />
      <Skills />
      <Experience />
    </main>
  );
}
