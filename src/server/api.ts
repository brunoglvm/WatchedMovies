import Config from "react-native-config";

const api = Config.API_KEY;

export const fetchPoster = async (movieId: string) => {
  try {
    const response = await fetch(
      `http://img.omdbapi.com/?apikey=${api}&i=${movieId}`
    );
    if (!response.ok) {
      throw new Error("Erro ao buscar pôster");
    }
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    return url;
  } catch (error) {
    console.error("Erro ao buscar pôster:", error);
  }
};

fetchPoster("tt1375666").then((url) => {
  if (url) {
    console.log("URL do pôster:", url);
  }
});
