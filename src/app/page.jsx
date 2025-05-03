import React from "react";
import * as G from "../hooks/global/global";
import * as S from "./styles";
import themes from "@/hooks/themes/themes";

export default function Home() {
  return (
    <G.Container>
      <S.Title className={themes.fonts.family.spGk  }>Home</S.Title>
    </G.Container>
  );
}
