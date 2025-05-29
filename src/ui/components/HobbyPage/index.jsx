import { useTranslation } from "react-i18next";
import Button from "../Button";
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
  onClick,
}) {
  const { t } = useTranslation("hobbies", { useSuspense: true });

  return (
    <div className={styles.ctn} style={{ "--bg-image": `url(${bgImage})` }}>
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
    </div>
  );
}
