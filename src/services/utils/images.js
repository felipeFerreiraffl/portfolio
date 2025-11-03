/* ---------- Objeto de imagens ---------- */
import exp1 from "../../../assets/imgs/experience/senai-mercedesbenz.webp";
import statue from "../../../assets/imgs/gris-staute.webp";
import profile from "../../../assets/imgs/profile.webp";
import animesMangasKitsu from "../../../assets/imgs/projects/animes-mangas-kitsu.webp";
import crudLibrary from "../../../assets/imgs/projects/crud-library.webp";
import mathCalculations from "../../../assets/imgs/projects/math-calculations.webp";
import tsAuth from "../../../assets/imgs/projects/tsauth.webp";
import backend from "../../../assets/imgs/skills/backend.webp";
import database from "../../../assets/imgs/skills/database.webp";
import frontend from "../../../assets/imgs/skills/frontend.webp";
import tools from "../../../assets/imgs/skills/tools.webp";
import logo from "../../../assets/svgs/logos/logo.svg?default";

const images = {
  statue,
  logo,
  profile,
  skills: {
    frontend,
    backend,
    database,
    tools,
  },
  experiences: {
    exp1,
  },
  projects: {
    animesMangasKitsu,
    crudLibrary,
    mathCalculations,
    tsAuth,
  },
};

export default images;
