export const getMovies = async () => {
  try {
    const res = await fetch("https://devsapihub.com/api-movies");
    const data = await res.json();

    if (!res.ok) {
      throw new Error("Error en la respuesta de la API");
    }
    return data;
  } catch (error) {
    console.error("Error al obtener las películas:", error.message);
    throw new Error("Error al obtener las películas");
  }
};

getMovies();