import React from "react";
import styles from "./styles.module.css";
import "../hooks/themes/globals.css";
import fontFamily from "@/hooks/fonts/fonts";

export default function Games() {
  return (
    <div className={`${fontFamily.spGsk} container`}>
      <h1 className={styles["main-title"]}>Home</h1>
    </div>
  );
}
