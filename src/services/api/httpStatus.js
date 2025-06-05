// Resolve erros de HTTP
export const handleApiError = (error, context = "") => {
  console.error(`Erro ${context}: `, error);

  if (error.response?.status) {
    const status = error.response.status;
    console.error(`Erro HTTP ${status}${context ? ` em ${context}` : ""}`);
    return;
  }

  if (error.message) {
    if (error.message.includes("429")) {
      console.error(`Rate limit atingido${context ? ` em ${context}` : ""}`);
    } else if (error.message.includes("500")) {
      console.error(`Erro interno${context ? ` em ${context}` : ""}`);
    } else if (error.message.includes("404")) {
      console.error(`Recurso não encontrado${context ? ` em ${context}` : ""}`);
    } else if (error.message.includes("403")) {
      console.error(`Acesso negado${context ? ` em ${context}` : ""}`);
    } else {
      console.error(
        `Erro desconhecido${context ? ` em ${context}` : ""}`,
        error.message
      );
    }

    return;
  }

  console.error(`Erro desconhecido${context ? ` em ${context}` : ""}`, error);
};

// Resolve problemas de JSON
export const validateJsonResponse = async (res) => {
  const contentType = res.headers.get("content-type");

  if (!contentType || !contentType.includes("application/json")) {
    throw new Error("Resposta não é JSON válido");
  }

  const text = await res.text();

  if (!text || text.trim() === "") {
    throw new Error("Resposta vazia no servidor");
  }

  try {
    return JSON.parse(text);
  } catch (jsonError) {
    console.error("Erro ao fazer parse do JSON: ", text);
    throw new Error(`JSON inválido: ${jsonError.message}`);
  }
};

// Request de fetch das URLs
export const makeRequestWithRetry = async (url, context, maxRetries = 3) => {
  let lastError;

  for (let attp = 0; attp < maxRetries; attp++) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const error = new Error(`HTTP error! Status: ${response.status}`);
        error.status = response.status;
        error.response = { status: response.status };
        throw error;
      }

      const data = await validateJsonResponse(response);
      return data.data || data; // Retorn data.data caso exista, se não, apenas data
    } catch (error) {
      lastError = error;

      // Espera um pouco em caso de erro 429
      if (error.status === 429) {
        const waitTime = Math.min(1000 * Math.pow(2, attp), 8000);
        console.warn(
          `Rate limit atigindo, aguardando ${waitTime}ms antes de tentar novamente...`
        );
        await new Promise((res) => setTimeout(res, waitTime));
        continue;
      }

      // Para as tentativas se não for um erro recuperável
      break;
    }
  }

  // Todas as tentativas falham
  handleApiError(lastError, context);
  return null;
};
