import { useTranslation } from "react-i18next";
import FaIcon from "../../../../services/constants/icns/font-awesome/fontAwesome";
import GiIcon from "../../../../services/constants/icns/game-icons/gameIcons";
import styles from "./style.module.css";

export default function BackButton({ type, icon, color, font, mbFont }) {
  const { t: tAnimeManga } = useTranslation("animes-mangas", {
    useSuspense: true,
  });
  const { t: tGames } = useTranslation("games", {
    useSuspense: true,
  });

  return (
    <a
      className={styles.ctn}
      href={type === "game" ? "/hobbies/games" : "/hobbies/animes-mangas"}
      style={{ "--color": color }}
      title={tAnimeManga(
        "animesMangas.content.button" || tGames("games.content.button")
      )}
      role="button"
    >
      <span className={styles.icn}>
        {type !== "game" ? <FaIcon icon={icon} /> : <GiIcon icon={icon} />}
      </span>

      <p className={styles.text} style={{ font: font, "--mb-font": mbFont }}>
        {type !== "game"
          ? tAnimeManga("animesMangas.content.button")
          : tGames("games.content.button")}
      </p>
    </a>
  );
}
