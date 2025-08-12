import Header from "../../components/Header";
import Hero from "../../components/Hero";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />

      <Hero />
    </div>
  );
}
