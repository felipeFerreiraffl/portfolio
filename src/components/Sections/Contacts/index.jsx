import { useTranslation } from "react-i18next";
import SectionTitle from "../../SectionTitle";
import styles from "./styles.module.css";
import SocialIcon from "./SocialIcon";
import icons from "../../../services/utils/jsons/icons";
import { Icon } from "@iconify/react/dist/iconify.js";
import { socialLinks } from "../../../services/utils/jsons/data";
import images from "../../../services/utils/jsons/images";

export default function Contacts({ ref }) {
  const { t: tSections } = useTranslation("sections");
  const { t: tCommon } = useTranslation("common");

  return (
    <div ref={ref} className="section-container" tabIndex={0}>
      <SectionTitle
        title={tSections("contacts.title")}
        subtitle={tSections("contacts.subtitle")}
      />

      <div className={styles.content}>
        <div className={styles.linksContent}>
          <div className={styles.socialContainer}>
            <div className={styles.titleContainer}>
              <h3>{tSections("contacts.social_title")}</h3>
              <span>
                <Icon icon={icons.remix.arrow.arrowDown} />
              </span>
            </div>

            <div className={styles.socialLinks}>
              {socialLinks.map((social, i) => (
                <SocialIcon
                  key={i}
                  href={social.href}
                  title={tCommon(social.title)}
                  icon={social.icon}
                />
              ))}
            </div>
          </div>

          <div className={styles.divisor}>
            <div className={styles.line}></div>
            <div className={styles.diamond}></div>
            <div className={styles.line}></div>
          </div>

          <div className={styles.designContainer}>
            <h3>
              {tSections("contacts.design_title")} <span>Figma</span>
            </h3>

            <a
              href=""
              target="_blank"
              rel="noopener noreferer"
              title={tCommon("button_labels.figma")}
            >
              <span>
                <Icon icon={icons.remix.brand.figma} />
              </span>
              <div></div>
              <p>{tCommon("button_labels.figma")}</p>
            </a>
          </div>
        </div>

        <div className={styles.img}>
          <img
            src={images.statue}
            alt={tCommon("alts.statue")}
            title={tCommon("alts.statue")}
          />
        </div>
      </div>
    </div>
  );
}
