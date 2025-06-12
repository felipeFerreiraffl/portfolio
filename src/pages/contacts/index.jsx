import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import FaIcon from "../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../services/constants/icns/font-awesome/iconNames";
import headerImgs from "../../services/constants/imgs/header";
import links from "../../services/constants/links/links";
import Header from "../../ui/components/Header";
import CommonIntro from "../../ui/components/Introduction/Common";
import Auxiliary from "../../ui/components/Links/AuxiliaryLink";
import SocialMedia from "../../ui/components/Links/SocialMedia";
import styles from "./style.module.css";
import Footer from "../../ui/components/Footer";
import useDocumentTitle from "../../ui/hooks/useDocumentTitle";

export default function Contacts() {
  useDocumentTitle("Contatos | Felipe Ferreira");
  const { t: tContacts } = useTranslation("contacts", { useSuspense: true });
  const { t: tLinks } = useTranslation("footer", { useSuspense: true });

  return (
    <div className={styles.ctn}>
      <header>
        <Header />

        <CommonIntro
          bgImage={headerImgs.contacts}
          color={"var(--neu-03)"}
          icon={<FaIcon icon={fontAwesome.addressBook} />}
          title={tContacts("contacts.intro.title")}
          subtitle={tContacts("contacts.intro.subtitle")}
        />
      </header>

      <div className={styles.contCtn}>
        <motion.section
          className={styles.cclsCtn}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.icn}>
            <FaIcon icon={fontAwesome.glasses} />
          </span>

          <div className={styles.cclsTxtCtn}>
            <h2 className={styles.name}>Felipe Ferreira Lima</h2>
            <p className={styles.desc}>{tContacts("contacts.sections.desc")}</p>
          </div>
        </motion.section>

        <motion.div
          className={styles.secAuxCtn}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <section className={styles.secCtn}>
            <h2 className={styles.secTtl}>
              {tContacts("contacts.sections.socialMedias")}
            </h2>

            <div className={styles.linksCtn}>
              <SocialMedia
                color={"var(--neu-03)"}
                border={"var(--bd-nt3)"}
                href={links.socialMedias.github}
                icon={fontAwesome.squareGithub}
                title={tLinks("footer.aria-labels.github")}
              />
              <SocialMedia
                color={"var(--main-01)"}
                border={"var(--bd-mn1)"}
                href={links.socialMedias.linkedin}
                icon={fontAwesome.linkedin}
                title={tLinks("footer.aria-labels.linkedin")}
              />
              <SocialMedia
                color={"var(--main-04)"}
                border={"var(--bd-mn4)"}
                href={links.socialMedias.instagram}
                icon={fontAwesome.squareInstagram}
                title={tLinks("footer.aria-labels.instagram")}
              />
            </div>
          </section>

          <section className={styles.secCtn}>
            <h2 className={styles.secTtl}>
              {tContacts("contacts.sections.auxiliary")}
            </h2>

            <div className={styles.linksCtn}>
              <Auxiliary
                color={"var(--main-04)"}
                border={"var(--bd-mn4)"}
                href={links.aux.figma}
                icon={fontAwesome.figma}
                linkName={"Figma"}
                title={tContacts("contacts.labels.figma")}
              />
              <Auxiliary
                color={"var(--main-01)"}
                border={"var(--bd-mn1)"}
                href={links.aux.jikan}
                icon={fontAwesome.language}
                linkName={"Jikan"}
                title={tContacts("contacts.labels.jikan")}
              />
              <Auxiliary
                color={"var(--neu-03)"}
                border={"var(--bd-nt3)"}
                href={links.aux.rawg}
                icon={fontAwesome.gamepad}
                linkName={"RAWG"}
                title={tContacts("contacts.labels.rawg")}
              />
            </div>
          </section>
        </motion.div>
      </div>

      <Footer marginTop={128} />
    </div>
  );
}
