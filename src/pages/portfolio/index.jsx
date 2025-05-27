import { useEffect } from "react";
import styles from "./style.module.css";
import { getProjects } from "../../services/api/other";
import CommonIntro from "../../ui/components/Introduction/Common";
import { FaIcnNewspaper } from "../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../services/constants/icns/font-awesome/iconNames";

export default function Portfolio() {
  return (
    <div className={styles}>
      <CommonIntro icon={<FaIcnNewspaper icon={fontAwesome.newspaper} color="var(--main-02)" />} />
    </div>
  );
}
