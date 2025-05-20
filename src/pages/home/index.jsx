import { Helmet } from "react-helmet";
import Header from "../../ui/components/Header";
import styles from "./style.module.css";
import logo from "../../services/constants/svgs/logo";

export default function Home() {
  return (
    <div className={styles.ctn}>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <header className={styles.hdr}>
        <Header />

        <div className={styles.intro}>
          <img className={styles.logo} src={logo.altLogo2} alt="" />
          <div className={styles["txt-ctn"]}>
            <h1 className={styles.ttl}>Bem vindo ao meu portfólio!</h1>
            <p className={styles.subttl}>
              Portfólio profissional com o objetivo de mostrar projetos, cursos
              e habilidades do usuário deste site, como também conteúdo extra,
              como hobbies
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}
