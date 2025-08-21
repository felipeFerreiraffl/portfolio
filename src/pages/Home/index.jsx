import { useRef } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Main from "../../components/Main";
import styles from "./styles.module.css";

export default function Home() {
  const sectionRefs = {
    intro: useRef(null),
    skills: useRef(null),
    experiences: useRef(null),
    projects: useRef(null),
    contacts: useRef(null),
  };

  return (
    <div className={styles.home}>
      <Header sectionRefs={sectionRefs} />
      <Hero />
      <Main sectionRefs={sectionRefs} />
      <Footer />
    </div>
  );
}
