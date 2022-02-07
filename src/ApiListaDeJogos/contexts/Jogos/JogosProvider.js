import { useEffect, useRef, useState } from 'react';
import { filtrarPorPagina, filtrarPorTermo } from '../../helper/Jogos';
import { ConsumirApi } from '../../Consumir/ConsumirApi';
import { JogosContext } from './JogosContext';

export const JogosProvider = ({ children }) => {
  const [termoBusca, setTermoBusca] = useState('');
  const [jogosFiltrados, setJogosFiltrados] = useState([]);
  const [pagina, setPagina] = useState(1);
  const jogos = useRef([]);

  useEffect(() => {
    // IIFE Imediately Invoked Function Expression
    (async () => {
      const lista = await ConsumirApi();
      jogos.current = lista;
      setJogosFiltrados(filtrarPorPagina(jogos.current, pagina));
    })();
    // :)
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    setJogosFiltrados(filtrarPorTermo(jogos.current, termoBusca));
  }, [termoBusca]);

  useEffect(() => {
    if(termoBusca == ''){
    setJogosFiltrados(filtrarPorPagina(jogos.current, pagina));
    }
  }, [pagina, termoBusca]);

  return (
    <JogosContext.Provider value={{ setTermoBusca, jogos, jogosFiltrados, pagina, setPagina }}>
      {children}
    </JogosContext.Provider>
  );
};