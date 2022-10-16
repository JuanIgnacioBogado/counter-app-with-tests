export const getImagen = async () => {
  try {
    const apiKey = '...';
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    return data.images.original.url;
  } catch (error) {
    console.error(error);
    return 'No se encontró la imagen';
  }
};
