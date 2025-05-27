const API_URL = "https://portfolio-backend-ex33.onrender.com/api";

export const getProjects = async () => {
  try {
    const response = await fetch(`${API_URL}/project`);
    const data = response.json();

    return data;
  } catch (error) {
    console.error("Erro ao buscar API /projects: ", error);
    return [];
  }
};

export const getPlayers = async () => {
  try {
    const response = await fetch(`${API_URL}/player`);
    const data = response.json();

    return data;
  } catch (error) {
    console.error("Erro ao buscar API /projects: ", error);
    return [];
  }
};

export const getPositions = async () => {
  try {
    const response = await fetch(`${API_URL}/position`);
    const data = response.json();

    return data;
  } catch (error) {
    console.error("Erro ao buscar API /projects: ", error);
    return [];
  }
};

export const getDrawings = async () => {
  try {
    const response = await fetch(`${API_URL}/drawing`);
    const data = response.json();

    return data;
  } catch (error) {
    console.error("Erro ao buscar API /projects: ", error);
    return [];
  }
};
