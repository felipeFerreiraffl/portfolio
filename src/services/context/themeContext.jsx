/* ---------- Arquivo de configuração do tema ---------- */

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      return savedTheme;
    }

    // Inicia o estado baseado no tema preferido ou padrão
    return prefersDark ? "dark" : "light";
  });

  // Atualiza para o tema preferido ou padrão
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  // Atualiza o tema no localStorage e no documento quando o tema muda
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Muda o tema quando a preferência do usuário muda
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      const savedTheme = localStorage.getItem("theme");
      if (!savedTheme) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Alterna entre os temas claro e escuro
  const setColorTheme = (theme) => {
    setTheme(theme === "dark" ? "dark" : "light");
  };

  console.log(
    `Tema preferido: ${
      window.matchMedia("(prefers-color-scheme: dark)").matches
    }`
  );

  return (
    <ThemeContext.Provider value={{ theme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
