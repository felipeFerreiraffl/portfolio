import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaIdCard, FaNewspaper } from "react-icons/fa6";
import logo from "../../services/constants/svgs/logo";
import Button from "../../ui/components/Button";
import Divisor from "../../ui/components/Divisor";
import Header from "../../ui/components/Header";
import styles from "./style.module.css";
import useDocumentTitle from "../../ui/hooks/useDocumentTitle";
import { useNavigate } from "react-router-dom";

const IcnPortfolio = motion(FaNewspaper);
const IcnAboutMe = motion(FaIdCard);

export default function Home() {
  useDocumentTitle("Home");
  const navigate = useNavigate();
  const { t } = useTranslation("home", { useSuspense: true });

  return (
    <div className={styles.ctn}>
      <header className={styles.hdr}>
        <Header />

        <div className={styles.intro}>
          <motion.img
            className={styles.logo}
            src={logo.altLogo2}
            alt={t("intro.alt")}
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

      <section className={styles["about-me"]}>
        <motion.h2
          className={styles["sec-ttl"]}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {t("sections.about-me.title")}
        </motion.h2>

        <div className={styles["abt-cont"]}>
          <IcnAboutMe
            className={styles["abt-icn"]}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          <motion.div
            className={styles["abt-txt-ctn"]}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
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
          </motion.div>
        </div>
      </section>

      <Divisor marginTop={128} color={"var(--main-01)"} />

      <section className={styles.portfolio}>
        <motion.div
          className={styles["ptf-cont"]}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div className={styles["ptf-text-ctn"]}>
            <h2 className={`${styles["sec-ttl"]} ${styles["bd-ttl"]}`}>
              {t("sections.portfolio.title")}
            </h2>
            <p className={styles.body}>{t("sections.portfolio.desc")}</p>
          </div>

          <Button
            text={t("sections.portfolio.button")}
            color={"var(--main-01)"}
            active={"var(--main-02)"}
            boxShadow={"var(--bshw-led-mn2)"}
            onClick={() => navigate("/portfolio")}
          />
        </motion.div>

        <IcnPortfolio
          className={styles["ptf-icn"]}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </section>

      <Divisor marginTop={128} color={"var(--main-04)"} />
    </div>
  );
}
