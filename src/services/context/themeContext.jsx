/* ---------- Arquivo de configuração do tema ---------- */

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Salva o tema no localStorage e aplica no documento
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    // Aplica o tema salvo ou o tema padrão (light)
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  // Atualiza o tema no localStorage e no documento quando o tema muda
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Alterna entre os temas claro e escuro
  const toggleTheme = (theme) => {
    setTheme(theme === "light" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
