import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import FaIcon from "../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../services/constants/icns/font-awesome/iconNames";
import logo from "../../services/constants/svgs/logo";
import MainButton from "../../ui/components/Button/Main";
import Divisor from "../../ui/components/Divisor";
import Footer from "../../ui/components/Footer";
import Header from "../../ui/components/Header";
import useDocumentTitle from "../../ui/hooks/useDocumentTitle";
import styles from "./style.module.css";

export default function Home() {
  useDocumentTitle("Home | Felipe Ferreira");
  const { t } = useTranslation("home", { useSuspense: true });

  return (
    <div className={styles.ctn}>
      <header className={styles.hdr}>
        <Header />

        <div className={styles.intro}>
          <motion.img
            className={styles.logo}
            src={logo.altLogo2}
            alt={t("home.intro.alt")}
            loading="lazy"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
          />
          <motion.div
            className={styles.txtCtn}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
          >
            <h1 className={styles.ttl}>{t("home.intro.title")}</h1>
            <p className={styles.subttl}>{t("home.intro.subtitle")}</p>
          </motion.div>
        </div>
      </header>

      <section className={styles.aboutMe} tabIndex={0}>
        <motion.h2
          className={styles.secTtl}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {t("home.sections.about-me.title")}
        </motion.h2>

        <div className={styles.abtCont}>
          <FaIcon icon={fontAwesome.idCard} className={styles.abtIcn} />

          <motion.div
            className={styles.abtTxtCtn}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles.abtInfo}>
              <h3 className={`${styles.quintTtl} ${styles.bdTtl}`}>
                {t("home.sections.about-me.name")}
              </h3>
              <p className={styles.body}>Felipe Ferreira Lima</p>
            </div>
            <div className={styles.abtInfo}>
              <h3 className={`${styles.quintTtl} ${styles.bdTtl}`}>
                {t("home.sections.about-me.birthday")}
              </h3>
              <p className={styles.body}>14/07/2004</p>
            </div>
            <div className={styles.abtInfo}>
              <h3 className={`${styles.quintTtl} ${styles.bdTtl}`}>
                {t("home.sections.about-me.nationality.title")}
              </h3>
              <p className={styles.body}>
                {t("home.sections.about-me.nationality.desc")}
              </p>
            </div>
            <div className={styles.abtInfo}>
              <h3 className={`${styles.quintTtl} ${styles.bdTtl}`}>
                {t("home.sections.about-me.goal.title")}
              </h3>
              <p className={styles.body}>
                {t("home.sections.about-me.goal.desc")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Divisor marginTop={128} color={"var(--main-01)"} />

      <section className={styles.portfolio} tabIndex={0}>
        <motion.div
          className={styles.ptfCont}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={styles.ptfTextCtn}>
            <h2 className={`${styles.secTtl} ${styles.bdTtl}`}>
              {t("home.sections.portfolio.title")}
            </h2>
            <p className={styles.body}>{t("home.sections.portfolio.desc")}</p>
          </div>

          <MainButton
            href={"/portfolio"}
            text={t("home.sections.portfolio.button")}
            title={t("home.buttonTitles.portfolio")}
            color={"var(--main-01)"}
          />
        </motion.div>

        <FaIcon icon={fontAwesome.newspaper} className={styles.ptfIcn} />
      </section>

      <Divisor marginTop={128} color={"var(--main-04)"} />

      <section className={styles.hobbies} tabIndex={0}>
        <motion.div
          className={styles.hbbCont}
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={styles.hbbTxtCtn}>
            <h2 className={`${styles.secTtl} ${styles.bdTtl}`}>Hobbies</h2>
            <div>
              <p className={styles.body}>{t("home.sections.hobbies.desc-1")}</p>
              <p className={styles.body}>{t("home.sections.hobbies.desc-2")}</p>
            </div>
          </div>

          <MainButton
            href={"/hobbies"}
            text={t("home.sections.hobbies.button")}
            title={t("home.buttonTitles.hobbies")}
            color={"var(--main-04)"}
          />
        </motion.div>

        <div className={styles.hbbIcnCtn}>
          <motion.span
            className={`${styles.hbbIcn} ${styles.gamepad}`}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <FaIcon icon={fontAwesome.gamepad} className={styles.hbbIcnSm} />
          </motion.span>
          <motion.i
            className={`${styles.hbbIcn} ${styles.book}`}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <FaIcon icon={fontAwesome.book} className={styles.hbbIcnMd} />
          </motion.i>
          <motion.i
            className={`${styles.hbbIcn} ${styles.umb}`}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <FaIcon
              icon={fontAwesome.umbrellaBeach}
              className={styles.hbbIcnLg}
            />
          </motion.i>
          <motion.i
            className={`${styles.hbbIcn} ${styles.futbol}`}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.9 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <FaIcon icon={fontAwesome.futbol} className={styles.hbbIcnMd} />
          </motion.i>
          <motion.i
            className={`${styles.hbbIcn} ${styles.paint}`}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <FaIcon icon={fontAwesome.paintbrush} className={styles.hbbIcnSm} />
          </motion.i>
        </div>
      </section>

      <Footer marginTop={128} />
    </div>
  );
}
