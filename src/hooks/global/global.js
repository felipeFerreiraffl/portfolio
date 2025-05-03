// Estilos globais
"use client";
import styled from "styled-components";
import themes from "../themes/themes";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${themes.colors.neutral.nt02};
`;

export const MainTitle = styled.h1`
  font-size: ${themes.fonts.size.h1};
  font-weight: ${themes.fonts.weight.bold};
`;

export const SecondTitle = styled.h2`
  font-size: ${themes.fonts.size.h2};
  font-weight: ${themes.fonts.weight.bold};
`;

export const ThirdTitle = styled.h3`
  font-size: ${themes.fonts.size.h3};
  font-weight: ${themes.fonts.weight.bold};
`;

export const FourthTitle = styled.h4`
  font-size: ${themes.fonts.size.h4};
  font-weight: ${themes.fonts.weight.medium};
`;

export const LastTitle = styled.h5`
  font-size: ${themes.fonts.size.h5};
  font-weight: ${themes.fonts.weight.medium};
`;

export const HeaderText = styled.p`
  font-size: ${themes.fonts.size.header};
  font-weight: ${themes.fonts.weight.medium};
`;

export const Body = styled.p`
  font-size: ${themes.fonts.size.body};
  font-weight: ${themes.fonts.weight.light};
`;

export const Subtitle = styled.p`
  font-size: ${themes.fonts.size.subtitle};
  font-weight: ${themes.fonts.weight.medium};
`;

export const Button = styled.p`
  font-size: ${themes.fonts.size.button};
  font-weight: ${themes.fonts.weight.bold};
`;

export const Caption = styled.p`
  font-size: ${themes.fonts.size.caption};
  font-weight: ${themes.fonts.weight.light};
`;
