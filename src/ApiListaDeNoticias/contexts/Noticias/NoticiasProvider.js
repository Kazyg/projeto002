import { useEffect, useRef, useState } from 'react';
import { filtrarPorPagina, filtrarPorTermo} from '../../helper/Noticias';
import { ConsumirApiNoticias } from '../../Consumir/ConsumirApiNoticias';
import { NoticiasContext } from './NoticiasContext';

export const NoticiasProvider = ({ children }) => {
  const [termoBusca, setTermoBusca] = useState('');
  const [noticiasFiltrados, setNoticiasFiltrados] = useState([]);
  const [pagina, setPagina] = useState(1);
  const noticias = useRef([]);

  useEffect(() => {
    // IIFE Imediately Invoked Function Expression
    (async () => {
      const lista = await ConsumirApiNoticias();
      noticias.current = lista;
      setNoticiasFiltrados(filtrarPorPagina(noticias.current, pagina));
    })();
    // :)
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    setNoticiasFiltrados(filtrarPorTermo(noticias.current, termoBusca));
  }, [termoBusca]);

  useEffect(() => {
    if(termoBusca == ''){
    setNoticiasFiltrados(filtrarPorPagina(noticias.current, pagina));
    }
  }, [pagina, termoBusca]);

  

  return (
    <NoticiasContext.Provider value={{ setTermoBusca, noticias, noticiasFiltrados, pagina, setPagina }}>
      {children}
    </NoticiasContext.Provider>
  );
};