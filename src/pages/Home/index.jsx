import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Main from "../../components/Main";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}
