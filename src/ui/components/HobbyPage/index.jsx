import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import MainButton from "../Button/Main";
import styles from "./style.module.css";

export default function HobbyPage({
  icon,
  title,
  desc,
  color,
  ttlFont,
  mobTtlFont,
  descFont,
  bgImage,
  border,
  href,
}) {
  const { t } = useTranslation("hobbies", { useSuspense: true });

  return (
    <motion.div
      className={styles.ctn}
      style={{ "--bg-image": `url(${bgImage})` }}
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.3 }}
      tabIndex={0}
    >
      <span
        className={styles.icn}
        style={{ "--icn-color": color, "--icn-border": border }}
      >
        {icon}
      </span>
      <div className={styles.txtCtn}>
        <h2
          className={styles.ttl}
          style={{
            "--ttl-color": color,
            "--ttl-font": ttlFont,
            "--mob-ttl-font": mobTtlFont,
          }}
        >
          {title}
        </h2>
        <p className={styles.desc} style={{ "--desc-font": descFont }}>
          {desc}
        </p>
      </div>
      <MainButton
        href={href}
        color={color === "var(--main-02)" ? "var(--main-01)" : "var(--main-04)"}
        title={`${t("hobbies.buttonTitle")} ${title}`}
        text={t("hobbies.button")}
      />
    </motion.div>
  );
}
