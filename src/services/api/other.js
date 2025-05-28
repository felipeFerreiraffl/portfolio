const API_URL = "https://portfolio-backend-ex33.onrender.com/api";

export const getProjects = async () => {
  try {
    const response = await fetch(`${API_URL}/project`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Erro ao buscar API /projects: ", error);
    return [];
  }
};

export const getPlayers = async () => {
  try {
    const response = await fetch(`${API_URL}/player`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Erro ao buscar API /projects: ", error);
    return [];
  }
};

export const getPositions = async () => {
  try {
    const response = await fetch(`${API_URL}/position`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Erro ao buscar API /projects: ", error);
    return [];
  }
};

export const getDrawings = async () => {
  try {
    const response = await fetch(`${API_URL}/drawing`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Erro ao buscar API /projects: ", error);
    return [];
  }
};
