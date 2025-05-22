import { Helmet } from "react-helmet";
import Header from "../../ui/components/Header";
import styles from "./style.module.css";
import logo from "../../services/constants/svgs/logo";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation("home", { useSuspense: true });

  return (
    <div className={styles.ctn}>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <header className={styles.hdr}>
        <Header />

        <div className={styles.intro}>
          <motion.img
            className={styles.logo}
            src={logo.altLogo2}
            alt=""
            loading="lazy"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
          />
          <motion.div
            className={styles["txt-ctn"]}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
          >
            <h1 className={styles.ttl}>{t("intro.title")}</h1>
            <p className={styles.subttl}>{t("intro.subtitle")}</p>
          </motion.div>
        </div>
      </header>
    </div>
  );
}
