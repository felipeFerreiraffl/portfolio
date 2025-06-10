import { useParams } from "react-router-dom";
import gameIcons from "../../../services/constants/icns/game-icons/iconNames";
import BackButton from "../../../ui/components/Button/Back";
import GameDetails from "../../../ui/components/Details/Games";
import Footer from "../../../ui/components/Footer";
import Header from "../../../ui/components/Header";
import { useRawgBySpecificId } from "../../../ui/hooks/api/game/useRawgBySpecificId";
import useDocumentTitle from "../../../ui/hooks/useDocumentTitle";
import styles from "./style.module.css";

export default function GameContent() {
  useDocumentTitle("Jogo | Felipe Ferreira");
  const { id } = useParams();
  const { data, isPending, isError } = useRawgBySpecificId({
    id: parseInt(id),
  });

  if (isPending) {
    return <div>Carregando...</div>;
  }

  if (isError) {
    return <div>Erro ao buscar dados</div>;
  }

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

      <Footer marginTop={128} />
    </div>
  );
}
