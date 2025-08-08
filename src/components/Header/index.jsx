import styles from "./styles.module.css";
import images from "../../services/utils/images";
import Icon from "../Icon";
import icons from "../../services/utils/icons";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={images.logo} alt="Logo" />
      </div>

      <nav>
        <ul>
          <li>
            <a href="">Link</a>
          </li>
          <li>
            <a href="">Link</a>
          </li>
          <li>
            <a href="">Link</a>
          </li>
          <li>
            <a href="">Link</a>
          </li>
          <li>
            <a href="">Link</a>
          </li>
        </ul>
      </nav>

      <div className={styles}>
        <Icon name={icons.remix.common.translate2} size={24} />
      </div>
    </header>
  );
}
