import { useParams } from "react-router-dom";
import fontAwesome from "../../../services/constants/icns/font-awesome/iconNames";
import BackButton from "../../../ui/components/Button/Back";
import AnimeMangaDetails from "../../../ui/components/Details/AnimeManga";
import Header from "../../../ui/components/Header";
import { useJikanBySpecificId } from "../../../ui/hooks/api/animeManga/useJikanBySpecificId";
import useDocumentTitle from "../../../ui/hooks/useDocumentTitle";
import styles from "./style.module.css";

export default function AnimeMangaContent() {
  useDocumentTitle("Anime | Felipe Ferreira");
  const { type, id } = useParams();

  const { data, isPending, isError } = useJikanBySpecificId({
    type: type,
    id: parseInt(id),
  });

  if (isPending) {
    console.log("Carregando...");
  }

  if (isError) {
    console.error("Erro ao buscar dados!");
  }

  return (
    <div className={styles.ctn}>
      <header>
        <Header />

        <BackButton
          icon={fontAwesome.circleLeft}
          color={"var(--main-02)"}
          type={type}
          font={"var(--anmg-h4)"}
          mbFont={"var(--anmg-h5)"}
        />
      </header>

      <AnimeMangaDetails type={type} data={data} />
    </div>
  );
}
