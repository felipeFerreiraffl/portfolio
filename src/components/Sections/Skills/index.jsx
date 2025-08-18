import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslation } from "react-i18next";
import profile from "../../../assets/imgs/profile.webp";
import icons from "../../../services/utils/jsons/icons";
import SectionTitle from "../../SectionTitle";
import Slide from "../../Slides/SkillsCarousel/Slide";

export default function Skills() {
  const { t: tSections } = useTranslation("sections");

  const data = [
    {
      techName: "Tech 1",
      techIcon: <Icon icon={icons.remix.brand.github} />,
    },
    {
      techName: "Tech 2",
      techIcon: <Icon icon={icons.remix.brand.github} />,
    },
    {
      techName: "Tech 3",
      techIcon: <Icon icon={icons.remix.brand.github} />,
    },
    {
      techName: "Tech 4",
      techIcon: <Icon icon={icons.remix.brand.github} />,
    },
    {
      techName: "Tech 5",
      techIcon: <Icon icon={icons.remix.brand.github} />,
    },
  ];

  return (
    <div className="section-container" tabIndex={0}>
      <SectionTitle
        title={tSections("skills.title")}
        subtitle={tSections("skills.subtitle")}
      />

      <Slide title={"Feedasassas"} src={profile} alt={"Image"} techs={data} />
      {/* <LocalIcon icon={icons.local.mongodb} alt={"MongoDB"} /> */}
    </div>
  );
}
