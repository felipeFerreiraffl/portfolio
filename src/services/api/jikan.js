const API_URL = "https://portfolio-backend-ex33.onrender.com/api/jikan";

// Animes
export const getAnimeById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/anime/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error(`Erro ao buscar anime pelo ID ${id}`, error);
    return [];
  }
};

export const getAnimeByFilter = async (filter, limit) => {
  try {
    const response = await fetch(
      `${API_URL}/anime/filter?filter=${filter}&limit=${limit}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error(`Erro ao buscar animes pelo filtro ${filter}`, error);
    return [];
  }
};

// Mangás
export const getMangaById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/manga/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error(`Erro ao buscar mangá pelo ID ${id}`, error);
    return [];
  }
};

export const getMangaByFilter = async (filter, limit) => {
  try {
    const response = await fetch(
      `${API_URL}/manga/filter?filter=${filter}&limit=${limit}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error(`Erro ao buscar mangás pelo filtro ${filter}`, error);
    return [];
  }
};
