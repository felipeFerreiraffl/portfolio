import { useEffect } from "react";

// Função para mudar a título do documento
export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title; // GET do title do <head>
  }, [title]);
}
