import { makeRequestWithRetry } from "./httpStatus";

const API_URL = "https://portfolio-backend-ex33.onrender.com/api/rawg";

export const getGameById = async (id) => {
  if (!id || id <= null) {
    console.error("ID inválido para jogo: ", id);
    return null;
  }

  const url = `${API_URL}/${id}`;
  return await makeRequestWithRetry(url, `getGameById(${id})`);
};

export const getGameByFilter = async (ordering, pageSize) => {
  if (!pageSize || pageSize <= 0) {
    console.error("Tamanho de páginas inválido: ", pageSize);
    return null;
  }

  const url = `${API_URL}/filter?ordering=${encodeURIComponent(
    ordering
  )}&pageSize=${pageSize}`;
  const result = await makeRequestWithRetry(
    url,
    `getGameByFilter(${ordering}, ${pageSize})`
  );

  return result || [];
};
