import { useEffect, useRef, useState } from 'react';
import { ConsumirApiDetalhado } from '../../Consumir/ConsumirApi';
import { JogoDetalhadoContext } from './JogoDetalhadoContext';

export const JogoDetalhadoProvider = ({ children }) => {
  const [jogoDetalhadoFiltrado, setJogoDetalhadoFiltrado] = useState();
  const jogoDetalhado = useRef();
  const [id, setId]= useState(localStorage.getItem("id"));

  useEffect(() => {
    // IIFE Imediately Invoked Function Expression
    
    (async () => {
      const jogo = await ConsumirApiDetalhado(id);
      jogoDetalhado.current = jogo;
      setJogoDetalhadoFiltrado(jogoDetalhado.current);
    })();
    // :)
    //eslint-disable-next-line
  }, []);

  return (
    <JogoDetalhadoContext.Provider value={{  jogoDetalhado, jogoDetalhadoFiltrado }}>
      {children}
    </JogoDetalhadoContext.Provider>
  );
};