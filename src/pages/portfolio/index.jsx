import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import FaIcon from "../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../services/constants/icns/font-awesome/iconNames";
import extraImgs from "../../services/constants/imgs/extra";
import headerImgs from "../../services/constants/imgs/header";
import links from "../../services/constants/links/links";
import MainButton from "../../ui/components/Button/Main";
import CourseConclusion from "../../ui/components/CourseConclusion";
import Divisor from "../../ui/components/Divisor";
import Footer from "../../ui/components/Footer";
import Header from "../../ui/components/Header";
import CommonIntro from "../../ui/components/Introduction/Common";
import SchoolCard from "../../ui/components/SchoolCard";
import Skill from "../../ui/components/Skill";
import ProjectsSlides from "../../ui/components/Slides/Projects";
import useDocumentTitle from "../../ui/hooks/useDocumentTitle";
import styles from "./style.module.css";

export default function Portfolio() {
  useDocumentTitle("Portfólio | Felipe Ferreira");
  const { t } = useTranslation("portfolio", { useSuspense: true });

  // Abre um arquivo em PDF
  const openPdf = () => {
    window.open("/archives/curriculum-vitae.pdf", "_blank");
  };

  return (
    <div className={styles.ctn}>
      <header>
        <Header />

        <CommonIntro
          icon={<FaIcon icon={fontAwesome.newspaper} />}
          bgImage={headerImgs.portfolio}
          color={"var(--main-02)"}
          title={t("portfolio.intro.title")}
          subtitle={t("portfolio.intro.subtitle")}
        />
      </header>

      <section className={styles.crs} tabIndex={0}>
        <h2 className={`${styles.secTtl} ${styles.ttlBrd}`}>
          {t("portfolio.sections.courses.title")}
        </h2>
        <div className={styles.allCrsCtn}>
          <div className={styles.crsCtn} tabIndex={0}>
            <motion.div
              className={styles.crsTtlCtn}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3 className={`${styles.crsThrdTtl} ${styles.tech}`}>
                {t("portfolio.sections.courses.tech.title")}
              </h3>
              <FaIcon icon={fontAwesome.laptopCode} className={styles.crsIcn} />
            </motion.div>
            <div className={styles.crsSpecCrs}>
              <CourseConclusion
                name={t("portfolio.sections.courses.tech.devSys")}
                progress={100}
                progressBgColor={"var(--rgba-bl50)"}
                progressColor={"var(--main-02)"}
                startYear={2023}
                endYear={2024}
              />
              <CourseConclusion
                name={t("portfolio.sections.courses.tech.designer")}
                progress={100}
                progressBgColor={"var(--rgba-bl50)"}
                progressColor={"var(--main-02)"}
                startYear={2025}
                endYear={2025}
              />
              <CourseConclusion
                name={t("portfolio.sections.courses.tech.devFront")}
                progress={5}
                progressBgColor={"var(--rgba-bl50)"}
                progressColor={"var(--main-02)"}
                startYear={2025}
                endYear={2025}
              />
            </div>
          </div>

          <div className={styles.crsCtn} tabIndex={0}>
            <motion.div
              className={styles.crsTtlCtn}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3 className={`${styles.crsThrdTtl} ${styles.mec}`}>
                {t("portfolio.sections.courses.other.title")}
              </h3>
              <FaIcon icon={fontAwesome.circlePlus} className={styles.crsIcn} />
            </motion.div>
            <div className={styles.crsSpecCrs}>
              <CourseConclusion
                name={t("portfolio.sections.courses.other.mech")}
                progress={90}
                progressBgColor={"var(--rgba-pp50)"}
                progressColor={"var(--main-05)"}
                startYear={2023}
                endYear={2025}
              />
            </div>
          </div>
        </div>
      </section>

      <Divisor marginTop={128} color={"var(--main-02)"} />

      <section className={styles.sch} tabIndex={0}>
        <h2 className={`${styles.secTtl} ${styles.ttlBrd}`}>
          {t("portfolio.sections.schools")}
        </h2>
        <div className={styles.schCardCtn} tabIndex={0}>
          <SchoolCard
            href={links.schools.swiss}
            img={extraImgs.snSwiss}
            name={"SENAI Suíço-Brasileira"}
            alt={t("portfolio.alts.schools.swiss")}
          />
          <SchoolCard
            href={links.schools.mercedes}
            img={extraImgs.snMercedes}
            name={"SENAI Mercedes-Benz"}
            alt={t("portfolio.alts.schools.mercedes")}
          />
        </div>
      </section>

      <Divisor marginTop={128} color={"var(--main-02)"} />

      <section className={styles.skls} tabIndex={0}>
        <h2 className={styles.secTtl}>{t("portfolio.sections.skills")}</h2>
        <div className={styles.sklsAllCtn}>
          <motion.div
            className={styles.sklsCtn}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
            tabIndex={0}
          >
            <h3 className={styles.sklsTtl}>Frontend</h3>
            <div className={styles.sklsSpecCtn}>
              <Skill
                name={"HTML"}
                icon={<FaIcon icon={fontAwesome.html5} />}
                rating={4}
              />
              <Skill
                name={"CSS"}
                icon={<FaIcon icon={fontAwesome.css3Alt} />}
                rating={4}
              />
              <Skill
                name={"JavaScript"}
                icon={<FaIcon icon={fontAwesome.squareJs} />}
                rating={3}
              />
              <Skill
                name={"React"}
                icon={<FaIcon icon={fontAwesome.react} />}
                rating={4}
              />
            </div>
          </motion.div>

          <motion.div
            className={styles.sklsCtn}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
            tabIndex={0}
          >
            <h3 className={styles.sklsTtl}>Backend</h3>
            <div className={styles.sklsSpecCtn}>
              <Skill
                name={"Java"}
                icon={<FaIcon icon={fontAwesome.java} />}
                rating={3}
              />
            </div>
          </motion.div>

          <motion.div
            className={styles.sklsCtn}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
            tabIndex={0}
          >
            <h3 className={styles.sklsTtl}>Design</h3>
            <div className={styles.sklsSpecCtn}>
              <Skill
                name={"Figma"}
                icon={<FaIcon icon={fontAwesome.figma} />}
                rating={4}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Divisor marginTop={128} color={"var(--main-02)"} />

      <section className={styles.pjts} tabIndex={0}>
        <h2 className={`${styles.secTtl} ${styles.ttlBrd}`}>
          {t("portfolio.sections.projects.title")}
        </h2>

        <ProjectsSlides />
      </section>

      <Divisor marginTop={128} color={"var(--main-02)"} />

      <section className={styles.crr} tabIndex={0}>
        <motion.div
          className={styles.crrCont}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className={styles.crrTxtCtn}>
            <h2 className={`${styles.crrTtl} ${styles.ttlBrd}`}>
              {t("portfolio.sections.curriculum.title")}
            </h2>
            <p className={styles.crrSubttl}>
              {t("portfolio.sections.curriculum.desc")}
            </p>
          </div>
          <MainButton
            onClick={openPdf}
            color={"var(--main-01)"}
            text={t("portfolio.sections.curriculum.button")}
            title={t("portfolio.sections.curriculum.buttonTitle")}
          />
        </motion.div>
        <motion.span
          className={styles.crrIcn}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <FaIcon icon={fontAwesome.paperclip} />
        </motion.span>
      </section>

      <Footer marginTop={128} />
    </div>
  );
}
