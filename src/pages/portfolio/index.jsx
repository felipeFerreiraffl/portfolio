import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaIcnCirclePlus,
  FaIcnCss3Alt,
  FaIcnFigma,
  FaIcnHtml5,
  FaIcnJava,
  FaIcnLaptopCode,
  FaIcnNewspaper,
  FaIcnReact,
  FaIcnSquareJs,
} from "../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../services/constants/icns/font-awesome/iconNames";
import headerImgs from "../../services/constants/imgs/header";
import links from "../../services/constants/links/links";
import CourseConclusion from "../../ui/components/CourseConclusion";
import Divisor from "../../ui/components/Divisor";
import Header from "../../ui/components/Header";
import CommonIntro from "../../ui/components/Introduction/Common";
import SchoolCard from "../../ui/components/SchoolCard";
import styles from "./style.module.css";
import Skill from "../../ui/components/Skill";
import ProjectsSlides from "../../ui/components/Slides/Projects";
import extraImgs from "../../services/constants/imgs/extra";

export default function Portfolio() {
  const { t } = useTranslation("portfolio", { useSuspense: true });

  return (
    <div className={styles.ctn}>
      <header>
        <Header />

        <CommonIntro
          icon={<FaIcnNewspaper icon={fontAwesome.newspaper} />}
          bgImage={headerImgs.portfolio}
          color={"var(--main-02)"}
          title={t("intro.title")}
          subtitle={t("intro.subtitle")}
        />
      </header>

      <section className={styles.crs}>
        <h2 className={`${styles["sec-ttl"]} ${styles["ttl-brd"]}`}>
          {t("sections.courses.title")}
        </h2>
        <div className={styles["all-crs-ctn"]}>
          <div className={styles["crs-ctn"]}>
            <motion.div
              className={styles["crs-ttl-ctn"]}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <h3 className={`${styles["crs-thrd-ttl"]} ${styles.tech}`}>
                {t("sections.courses.tech.title")}
              </h3>
              <FaIcnLaptopCode
                icon={fontAwesome.laptopCode}
                className={styles["crs-icn"]}
              />
            </motion.div>
            <div className={styles["crs-spec-crs"]}>
              <CourseConclusion
                name={t("sections.courses.tech.devSys")}
                progress={100}
                progressBgColor={"var(--rgba-bl50)"}
                progressColor={"var(--main-02)"}
                startYear={2023}
                endYear={2024}
              />
              <CourseConclusion
                name={t("sections.courses.tech.designer")}
                progress={100}
                progressBgColor={"var(--rgba-bl50)"}
                progressColor={"var(--main-02)"}
                startYear={2025}
                endYear={2025}
              />
              <CourseConclusion
                name={t("sections.courses.tech.devFront")}
                progress={5}
                progressBgColor={"var(--rgba-bl50)"}
                progressColor={"var(--main-02)"}
                startYear={2025}
                endYear={2025}
              />
            </div>
          </div>

          <div className={styles["crs-ctn"]}>
            <motion.div
              className={styles["crs-ttl-ctn"]}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <h3 className={`${styles["crs-thrd-ttl"]} ${styles.mec}`}>
                {t("sections.courses.other.title")}
              </h3>
              <FaIcnCirclePlus
                icon={fontAwesome.circlePlus}
                className={styles["crs-icn"]}
              />
            </motion.div>
            <div className={styles["crs-spec-crs"]}>
              <CourseConclusion
                name={t("sections.courses.other.mech")}
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

      <section className={styles.sch}>
        <h2 className={`${styles["sec-ttl"]} ${styles["ttl-brd"]}`}>
          {t("sections.schools")}
        </h2>
        <div className={styles["sch-card-ctn"]}>
          <SchoolCard
            href={links.schools.swiss}
            img={extraImgs.snSwiss}
            name={"Suíço-Brasileira"}
            alt={t("alts.schools.swiss")}
          />
          <SchoolCard
            href={links.schools.mercedes}
            img={extraImgs.snMercedes}
            name={"SENAI Mercedes-Benz"}
            alt={t("alts.schools.mercedes")}
          />
        </div>
      </section>

      <Divisor marginTop={128} color={"var(--main-02)"} />

      <section className={styles.skls}>
        <h2 className={styles["sec-ttl"]}>{t("sections.skills")}</h2>
        <div className={styles["skls-all-ctn"]}>
          <motion.div
            className={styles["skls-ctn"]}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <h3 className={styles["skls-ttl"]}>Frontend</h3>
            <div className={styles["skls-spec-ctn"]}>
              <Skill
                name={"HTML"}
                icon={<FaIcnHtml5 icon={fontAwesome.html5} />}
                rating={4}
              />
              <Skill
                name={"CSS"}
                icon={<FaIcnCss3Alt icon={fontAwesome.css3Alt} />}
                rating={4}
              />
              <Skill
                name={"JavaScript"}
                icon={<FaIcnSquareJs icon={fontAwesome.squareJs} />}
                rating={3}
              />
              <Skill
                name={"React"}
                icon={<FaIcnReact icon={fontAwesome.react} />}
                rating={4}
              />
            </div>
          </motion.div>

          <motion.div
            className={styles["skls-ctn"]}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <h3 className={styles["skls-ttl"]}>Backend</h3>
            <div className={styles["skls-spec-ctn"]}>
              <Skill
                name={"Java"}
                icon={<FaIcnJava icon={fontAwesome.java} />}
                rating={3}
              />
            </div>
          </motion.div>

          <motion.div
            className={styles["skls-ctn"]}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <h3 className={styles["skls-ttl"]}>Design</h3>
            <div className={styles["skls-spec-ctn"]}>
              <Skill
                name={"Figma"}
                icon={<FaIcnFigma icon={fontAwesome.figma} />}
                rating={4}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Divisor marginTop={128} color={"var(--main-02)"} />

      <section className={styles.pjts}>
        <h2 className={`${styles["sec-ttl"]} ${styles["ttl-brd"]}`}>
          {t("sections.projects.title")}
        </h2>

        <ProjectsSlides />
      </section>

      <Divisor marginTop={128} color={"var(--main-02)"} />
    </div>
  );
}
