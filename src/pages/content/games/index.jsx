import { useTranslation } from "react-i18next";
import gameIcons from "../../../services/constants/icns/game-icons/iconNames";
import BackButton from "../../../ui/components/Button/Back";
import Header from "../../../ui/components/Header";
import styles from "./style.module.css";
import GameDetails from "../../../ui/components/Details/Games";
import { useRawgBySpecificId } from "../../../ui/hooks/api/game/useRawgBySpecificId";
import { useParams } from "react-router-dom";

export default function GameContent() {
  const { id } = useParams();
  const { t } = useTranslation("games", { useSuspense: true });
  const { data, isPending, isError } = useRawgBySpecificId({
    id: parseInt(id),
  });

  return (
    <div className={styles}>
      <header>
        <Header />

        <BackButton
          type={"game"}
          color={"var(--main-05)"}
          icon={gameIcons.returnArrow}
          font={"var(--gm-h4)"}
          mbFont={"var(--gm-h5)"}
        />
      </header>

      <GameDetails data={data} />
    </div>
  );
}
