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

// Importação das fontes do Google Fonts pelo Next.js
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
const leagueGothic = League_Gothic({ subsets: ["latin"], weight: ["400"] });
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
const charm = Charm({ subsets: ["latin"], weight: ["400", "700"] });
const zain = Zain({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const fonts = {
  family: {
    spGk: spaceGrotesk.className,
    lgGt: leagueGothic.className,
    gtA1: gothicA1.className,
    hdjt: handjet.className,
    ox: oxanium.className,
    lx: lexend.className,
    chm: charm.className,
    zn: zain.className,
  },
  size: {
    h1: "4rem", // 64px
    h2: "3rem", // 48px
    h3: "2.5rem", // 40px
    h4: "2rem ", // 32rem
    h5: "1.5rem", // 24rem
    header: "1.25rem", // 20 rem
    body: "1rem", // 16rem
    subtitle: "1rem", // 16rem
    button: "1rem", // 16rem
    caption: "0.75rem", // 12rem
  },
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
};
