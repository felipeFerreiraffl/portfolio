import { useTranslation } from "react-i18next";
import SectionTitle from "../../SectionTitle";
import styles from "./styles.module.css";
import Tech from "../../Slides/SkillsCarousel/Tech";
import LocalIcon from "../../Icon";
import icons from "../../../services/utils/jsons/icons";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Skills() {
  const { t: tSections } = useTranslation("sections");

  return (
    <div className={styles}>
      <SectionTitle
        title={tSections("skills.title")}
        subtitle={tSections("skills.subtitle")}
      />

      <Tech name={"AAAAA"} icon={<Icon icon={icons.remix.brand.github} />} />
      {/* <LocalIcon icon={icons.local.mongodb} alt={"MongoDB"} /> */}
    </div>
  );
}
