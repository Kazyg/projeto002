

export const ConsumirApiDetalhado = async (id) => {

    
    try {
      const res = await fetch(process.env?.REACT_APP_URL_API3 + id  , {
        method: 'GET',
        headers: {
          'x-rapidapi-host': process.env?.REACT_APP_HOST_API1,
          'x-rapidapi-key': process.env?.REACT_APP_KEY_API1,
        },
      });
      const JogoDetalhado = await res.json();
      return JogoDetalhado;
    } catch (erro) {
      console.error(erro.message);
    }
  };