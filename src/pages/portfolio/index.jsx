import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaIcnCirclePlus,
  FaIcnLaptopCode,
  FaIcnNewspaper,
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
            img={
              "https://cronos-media.sesisenaisp.org.br//api/media/1-0/files?img=img_1_230210_a391e771-b907-4a76-969f-3f4b68dea849_o.jpg&tipo=p"
            }
            name={"SENAI Suiço-Brasileira"}
          />
          <SchoolCard
            href={links.schools.mercedes}
            img={
              "https://cronos-media.sesisenaisp.org.br//api/media/1-0/files?img=img_1_240229_1b55cfdb-0d45-40a7-976f-8e5879237199_o.avif"
            }
            name={"SENAI Mercedes-Benz"}
          />
        </div>
      </section>

      <Divisor marginTop={128} color={"var(--main-02)"} />
    </div>
  );
}
