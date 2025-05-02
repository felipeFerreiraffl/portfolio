import themes from "@/hooks/themes/themes";
import React from "react";

export default function Home() {
  return (
    <div
      className={themes.fonts.family.ox}
      style={{ color: themes.colors.neutral.nt03, fontWeight: themes.fonts.weight.bold, fontSize: themes.fonts.size.h1 }}
    >
      Home
    </div>
  );
}
