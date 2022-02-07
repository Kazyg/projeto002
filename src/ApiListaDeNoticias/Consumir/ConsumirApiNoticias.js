export const ConsumirApiNoticias = async () => {
    try {
      const res = await fetch(process.env?.REACT_APP_URL_API2, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': process.env?.REACT_APP_HOST_API2,
          'x-rapidapi-key': process.env?.REACT_APP_KEY_API2,
        },
      });
      const listaNoticias = await res.json();
      return listaNoticias;
    } catch (erro) {
      console.error(erro.message);
    }
  };