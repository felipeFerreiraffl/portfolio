import {
  Charm,
  Gothic_A1,
  Handjet,
  League_Gothic,
  Lexend,
  Oxanium,
  Space_Grotesk,
  Zain,
} from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const leagueGothic = League_Gothic({
  subsets: ["latin"],
  weight: ["400"],
});

const gothicA1 = Gothic_A1({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const handjet = Handjet({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const charm = Charm({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const zain = Zain({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const fontFamily = {
  spGsk: spaceGrotesk.className,
  lgGoth: leagueGothic.className,
  gothA1: gothicA1.className,
  hdjt: handjet.className,
  oxm: oxanium.className,
  lxd: lexend.className,
  chm: charm.className,
  zn: zain.className,
};

export default fontFamily;
