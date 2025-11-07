import { Icon } from "@iconify/react/dist/iconify.js";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { socialLinks } from "../../../data/data";
import { useGSAPTimeline } from "../../../utils/hooks/global/gsap";
import icons from "../../../utils/icons";
import SectionTitle from "../../SectionTitle";
import SocialIcon from "./SocialIcon";
import styles from "./styles.module.css";
import { ReactComponent as Constellation } from "../../../assets/svgs/illustrations/contacts-constellation.svg";

export default function Contacts({ ref }) {
  const { t: tSections } = useTranslation("sections");
  const { t: tCommon } = useTranslation("common");
  const figmaRingsRef = useRef([]);
  const figmaTl = useRef(null);

  useGSAPTimeline(
    figmaTl,
    figmaRingsRef,
    {
      opacity: 0,
      scale: 0,
      xPercent: -50,
      yPercent: -50,
    },
    {
      opacity: 0.4,
      scale: 1,
      xPercent: -50,
      yPercent: -50,
      duration: 0.3,
      ease: "power1.inOut",
    },
    0.15
  );

  const figmaTlPlay = () => figmaTl.current.play();
  const figmaTlReverse = () => figmaTl.current.reverse();

  return (
    <div
      ref={ref}
      className={`section-container ${styles.contacts}`}
      tabIndex={0}
    >
      <SectionTitle
        title={tSections("contacts.title")}
        subtitle={tSections("contacts.subtitle")}
      />

      <div className={styles.content}>
        <div className={styles.socialContainer}>
          <h3 className={styles.socialTitle}>
            {tSections("contacts.social_title")}
          </h3>

          <div className={styles.socialLinks}>
            {socialLinks.map((social, i) => (
              <SocialIcon
                key={i}
                type={social.type}
                href={social.href}
                name={social.name}
                title={tCommon(social.title)}
                icon={social.icon}
              />
            ))}
          </div>
        </div>

        <div className={styles.designContainer}>
          <h3 className={styles.label}>
            {tSections("contacts.design_title")} <span>Figma</span>
          </h3>

          <a
            href="https://www.figma.com/design/vGYB5KQPySdayZVni0t6no/Design-%7C-Portf%C3%B3lio?node-id=62-1215&t=2LrlV2kYf5y5eu60-1"
            target="_blank"
            rel="noopener noreferer"
            title={tCommon("button_labels.figma")}
            aria-label={tCommon("button_labels.figma")}
            onMouseEnter={figmaTlPlay}
            onMouseLeave={figmaTlReverse}
            className={styles.figmaBtn}
          >
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className={styles.ring}
                ref={(el) => (figmaRingsRef.current[i] = el)}
              ></div>
            ))}
            <span className={styles.figmaIcon}>
              <Icon icon={icons.remix.brand.figma} />
            </span>
            <span className={styles.diamond}></span>
            <p className={styles.figmaLabel}>
              {tCommon("button_labels.figma")}
            </p>
          </a>
        </div>
      </div>

      <Constellation className={styles.constellation} />
    </div>
  );
}
