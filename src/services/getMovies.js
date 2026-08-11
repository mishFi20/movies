export const getMovies = async () => {
  const res = await fetch("https://devsapihub.com/api-movies");
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Error en la respuesta de la API");
  }
  return data;
};