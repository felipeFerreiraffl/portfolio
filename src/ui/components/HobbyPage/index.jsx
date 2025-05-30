import { useTranslation } from "react-i18next";
import Button from "../Button";
import styles from "./style.module.css";
import { motion } from "framer-motion";

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
  onClick,
}) {
  const { t } = useTranslation("hobbies", { useSuspense: true });

  return (
    <motion.div
      className={styles.ctn}
      style={{ "--bg-image": `url(${bgImage})` }}
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <span
        className={styles.icn}
        style={{ "--icn-color": color, "--icn-border": border }}
      >
        {icon}
      </span>
      <div className={styles["txt-ctn"]}>
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
      <Button
        color={color === "var(--main-02)" ? "var(--main-01)" : "var(--main-04)"}
        text={t("button")}
        onClick={onClick}
      />
    </motion.div>
  );
}
