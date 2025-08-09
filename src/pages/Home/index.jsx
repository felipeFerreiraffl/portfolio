import Header from "../../components/Header";
import ColorDropdown from "../../components/Header/Dropdown/Color";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <ColorDropdown />
    </div>
  );
}
