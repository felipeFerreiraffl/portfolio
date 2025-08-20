import { useTranslation } from "react-i18next";
import SectionTitle from "../../SectionTitle";
import styles from "./styles.module.css";
import SocialIcon from "./SocialIcon";
import icons from "../../../services/utils/jsons/icons";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Contacts() {
  const { t: tSections } = useTranslation("sections");
  const { t: tCommon } = useTranslation("common");

  return (
    <div className="section-container">
      <SectionTitle
        title={tSections("contacts.title")}
        subtitle={tSections("contacts.subtitle")}
      />

      <SocialIcon
        icon={<Icon icon={icons.remix.brand.github} />}
        title={tCommon("tooltip.socials.github")}
      />
    </div>
  );
}
