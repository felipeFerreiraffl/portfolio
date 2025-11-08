/* ---------- Arquivo de configuração de tradução ---------- */
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(I18NextHttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "pt-BR",
    defaultNS: "pt-BR",
    fallbackLng: "pt-BR",
    supportedLngs: ["pt-BR", "en"],
    ns: ["common", "sections"],
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false, // React já faz a proteção contra XSS
    },
  });

export default i18n;
