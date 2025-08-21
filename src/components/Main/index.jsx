import Contacts from "../Sections/Contacts";
import Experience from "../Sections/Experience";
import Intro from "../Sections/Intro";
import Projects from "../Sections/Projects";
import Skills from "../Sections/Skills";
import styles from "./styles.module.css";

export default function Main({ sectionRefs }) {
  return (
    <main className={styles.main}>
      <Intro ref={sectionRefs.intro} />
      <Skills ref={sectionRefs.skills} />
      <Experience ref={sectionRefs.experiences} />
      <Projects ref={sectionRefs.projects} />
      <Contacts ref={sectionRefs.contacts} />
    </main>
  );
}
