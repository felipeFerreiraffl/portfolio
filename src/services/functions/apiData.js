// Funções para faciliar leitura de dados

// Chave ID
export const getKeys = (type, item) => {
  if (type === "animes" || type === "mangas") {
    return item?.mal_id;
  }

  return item?.id;
};

// Imagem
export const getImage = (type, item) => {
  if (type === "animes" || type === "mangas") {
    return item?.images?.webp?.image_url || item?.images?.jpg?.image_url;
  }

  if (type === "games") {
    return item?.background_image;
  }

  return item?.imgSrc;
};

// Nome
export const getName = (type, item) => {
  if (type === "animes" || type === "mangas") {
    return item?.title || item?.title_english;
  }

  if (type === "games") {
    return item?.name || item?.name_original;
  }

  return item?.name;
};

// Link para os sites
export const getLink = (type, item) => {
  if (type === "animes") {
    return `/hobbies/animes-mangas/anime/${item?.mal_id}`;
  } else if (type === "mangas") {
    return `/hobbies/animes-mangas/manga/${item?.mal_id}`;
  }

  if (type === "games") {
    return `/hobbies/games/game/${item?.id}`;
  }

  return item?.link;
};
