import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import FaIcon from "../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../services/constants/icns/font-awesome/iconNames";
import logo from "../../services/constants/svgs/logo";
import Button from "../../ui/components/Button";
import Divisor from "../../ui/components/Divisor";
import Footer from "../../ui/components/Footer";
import Header from "../../ui/components/Header";
import useDocumentTitle from "../../ui/hooks/useDocumentTitle";
import styles from "./style.module.css";

export default function Home() {
  useDocumentTitle("Home | Felipe Ferreira");
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
          viewport={{ once: true, amount: 0.5 }}
        >
          {t("sections.about-me.title")}
        </motion.h2>

        <div className={styles["abt-cont"]}>
          <FaIcon icon={fontAwesome.idCard} className={styles["abt-icn"]} />

          <motion.div
            className={styles["abt-txt-ctn"]}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className={styles["abt-info"]}>
              <h3 className={`${styles["quint-ttl"]} ${styles["bd-ttl"]}`}>
                {t("sections.about-me.name")}
              </h3>
              <p className={styles.body}>Felipe Ferreira Lima</p>
            </div>
            <div className={styles["abt-info"]}>
              <h3 className={`${styles["quint-ttl"]} ${styles["bd-ttl"]}`}>
                {t("sections.about-me.birthday")}
              </h3>
              <p className={styles.body}>14/07/2004</p>
            </div>
            <div className={styles["abt-info"]}>
              <h3 className={`${styles["quint-ttl"]} ${styles["bd-ttl"]}`}>
                {t("sections.about-me.nationality.title")}
              </h3>
              <p className={styles.body}>
                {t("sections.about-me.nationality.desc")}
              </p>
            </div>
            <div className={styles["abt-info"]}>
              <h3 className={`${styles["quint-ttl"]} ${styles["bd-ttl"]}`}>
                {t("sections.about-me.goal.title")}
              </h3>
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
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className={styles["ptf-text-ctn"]}>
            <h2 className={`${styles["sec-ttl"]} ${styles["bd-ttl"]}`}>
              {t("sections.portfolio.title")}
            </h2>
            <p className={styles.body}>{t("sections.portfolio.desc")}</p>
          </div>

          <Button
            href={"/portfolio"}
            text={t("sections.portfolio.button")}
            color={"var(--main-01)"}
          />
        </motion.div>

        <FaIcon icon={fontAwesome.newspaper} className={styles["ptf-icn"]} />
      </section>

      <Divisor marginTop={128} color={"var(--main-04)"} />

      <section className={styles.hobbies}>
        <motion.div
          className={styles["hbb-cont"]}
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className={styles["hbb-txt-ctn"]}>
            <h2 className={`${styles["sec-ttl"]} ${styles["bd-ttl"]}`}>
              Hobbies
            </h2>
            <div>
              <p className={styles.body}>{t("sections.hobbies.desc-1")}</p>
              <p className={styles.body}>{t("sections.hobbies.desc-2")}</p>
            </div>
          </div>

          <Button
            href={"/hobbies"}
            text={t("sections.hobbies.button")}
            color={"var(--main-04)"}
          />
        </motion.div>

        <div className={styles["hbb-icn-ctn"]}>
          <motion.i
            className={`${styles["hbb-icn"]} ${styles.gamepad}`}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <FaIcon
              icon={fontAwesome.gamepad}
              className={styles["hbb-icn-sm"]}
            />
          </motion.i>
          <motion.i
            className={`${styles["hbb-icn"]} ${styles.book}`}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <FaIcon icon={fontAwesome.book} className={styles["hbb-icn-md"]} />
          </motion.i>
          <motion.i
            className={`${styles["hbb-icn"]} ${styles.umb}`}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <FaIcon
              icon={fontAwesome.umbrellaBeach}
              className={styles["hbb-icn-lg"]}
            />
          </motion.i>
          <motion.i
            className={`${styles["hbb-icn"]} ${styles.futbol}`}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.9 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <FaIcon
              icon={fontAwesome.futbol}
              className={styles["hbb-icn-md"]}
            />
          </motion.i>
          <motion.i
            className={`${styles["hbb-icn"]} ${styles.paint}`}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 1.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <FaIcon
              icon={fontAwesome.paintbrush}
              className={styles["hbb-icn-sm"]}
            />
          </motion.i>
        </div>
      </section>

      <Footer />
    </div>
  );
}
