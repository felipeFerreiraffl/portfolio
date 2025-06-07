import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import useDocumentTitle from "../../../ui/hooks/useDocumentTitle";
import Header from "../../../ui/components/Header";
import { useParams } from "react-router-dom";
import { useJikanBySpecificId } from "../../../ui/hooks/api/animeManga/useJikanBySpecificId";
import BackButton from "../../../ui/components/Button/Back";
import fontAwesome from "../../../services/constants/icns/font-awesome/iconNames";
import AnimeMangaDetails from "../../../ui/components/Details/AnimeManga";

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
