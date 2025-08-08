/* ---------- Objeto que guarda as strings dos ícones da Remix ---------- */
import springboot from "../../assets/svgs/icons/springboot.svg";
import mysql from "../../assets/svgs/icons/mysql.svg";
import mongodb from "../../assets/svgs/icons/mongodb.svg";

const icons = {
  remix: {
    common: {
      translate2: "ri:translate-2",
      user: "ri:user-fill",
      server: "ri:server-fill",
      menu3: "ri:menu-3-line",
    },
    arrow: {
      arrowDropLeft: "ri:arrow-drop-left-line",
      arrowDropRight: "ri:arrow-drop-right-line",
      arrowDown: "ri:arrow-down-line",
    },
    brand: {
      vercel: "ri:vercel-fill",
      html: "ri:html5-fill",
      css: "ri:css3-fill",
      react: "ri:reactjs-fill",
      java: "ri:java-fill",
      javascript: "ri:javascript-fill",
      figma: "ri:figma-fill",
      instagram: "ri:instagram-fill",
      linkedin: "ri:linkedin-box-fill",
      github: "ri:github-fill",
      nodejs: "ri:nodejs-fill",
    },
  },
  local: {
    springboot: springboot,
    mysql: mysql,
    mongodb: mongodb,
  },
};

export default icons;
