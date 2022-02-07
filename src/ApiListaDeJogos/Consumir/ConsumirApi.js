export const ConsumirApi = async () => {
    try {
      const res = await fetch(process.env?.REACT_APP_URL_API1, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': process.env?.REACT_APP_HOST_API1,
          'x-rapidapi-key': process.env?.REACT_APP_KEY_API1,
        },
      });
      const listaJogos = await res.json();
      return listaJogos;
    } catch (erro) {
      console.error(erro.message);
    }
  };