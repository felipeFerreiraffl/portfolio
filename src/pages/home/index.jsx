import { Helmet } from "react-helmet";
import Header from "../../ui/components/Header";
import styles from "./style.module.css";
import logo from "../../services/constants/svgs/logo";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaIdCard } from "react-icons/fa6";
import Divisor from "../../ui/components/Divisor";

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
            alt={styles}
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

      <motion.section
        className={styles["about-me"]}
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <h2 className={styles["sec-ttl"]}>{t("sections.about-me.title")}</h2>

        <div className={styles["abt-cont"]}>
          <FaIdCard className={styles["abt-icn"]} />

          <div className={styles["abt-txt-ctn"]}>
            <div className={styles["abt-info"]}>
              <h5 className={`${styles["quint-ttl"]} ${styles["bd-ttl"]}`}>
                {t("sections.about-me.name")}
              </h5>
              <p className={styles.body}>Felipe Ferreira Lima</p>
            </div>
            <div className={styles["abt-info"]}>
              <h5 className={`${styles["quint-ttl"]} ${styles["bd-ttl"]}`}>
                {t("sections.about-me.birthday")}
              </h5>
              <p className={styles.body}>14/07/2004</p>
            </div>
            <div className={styles["abt-info"]}>
              <h5 className={`${styles["quint-ttl"]} ${styles["bd-ttl"]}`}>
                {t("sections.about-me.nationality.title")}
              </h5>
              <p className={styles.body}>
                {t("sections.about-me.nationality.desc")}
              </p>
            </div>
            <div className={styles["abt-info"]}>
              <h5 className={`${styles["quint-ttl"]} ${styles["bd-ttl"]}`}>
                {t("sections.about-me.goal.title")}
              </h5>
              <p className={styles.body}>{t("sections.about-me.goal.desc")}</p>
            </div>
          </div>
        </div>
      </motion.section>

      <Divisor marginTop={128} color={"var(--main-01)"} />
    </div>
  );
}
