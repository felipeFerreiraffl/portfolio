import { handleApiError, makeRequestWithRetry } from "./httpStatus";

const API_URL = "https://portfolio-backend-ex33.onrender.com/api/jikan";

// Animes
export const getAnimeById = async (id) => {
  if (!id || id <= 0) {
    console.error("ID inválido para anime: ", id);
    return null;
  }

  const url = `${API_URL}/anime/${id}`;
  return await makeRequestWithRetry(url, `getAnimeById(${id})`);
};

export const getAnimeByFilter = async (filter, limit) => {
  if (!limit || limit <= 0) {
    console.error("Limite inválido: ", limit);
    return null;
  }

  const url = `${API_URL}/anime/filter?filter=${encodeURIComponent(
    filter || ""
  )}&limit=${limit}`;
  const result = await makeRequestWithRetry(
    url,
    `getAnimeByFilter(${filter}, ${limit})`
  );

  return result || [];
};

// Mangás
export const getMangaById = async (id) => {
  if (!id || id <= 0) {
    console.error("ID inválido para mangá: ", id);
    return null;
  }

  const url = `${API_URL}/manga/${id}`;
  return await makeRequestWithRetry(url, `getMangaById(${id})`);
};

export const getMangaByFilter = async (filter, limit) => {
  if (!limit || limit <= 0) {
    console.error("Limite inválido: ", limit);
    return null;
  }

  const url = `${API_URL}/manga/filter?filter=${encodeURIComponent(
    filter || ""
  )}&limit=${limit}`;
  const result = await makeRequestWithRetry(
    url,
    `getMangaByFilter(${filter}, ${limit})`
  );

  return result || [];
};
