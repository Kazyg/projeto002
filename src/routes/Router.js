import { Routes, Route } from 'react-router-dom';



import { JogosPagina } from '../ApiListaDeJogos/components/PaginadeJogos';
import { NoticiasPagina } from '../ApiListaDeNoticias/components/PaginadeNoticias';
import { JogoDetalhadoPagina } from '../ApiJogoDetalhado/components/PaginadeJogos';
import { Home } from '../HomePag/Home';


export const Router = () => (
  <Routes>
    
    <Route path="/" exact element={Home()} />
    <Route path="ultimas-noticias" exact element={NoticiasPagina()} />
    <Route path="buscajogos" exact element={JogosPagina()} />
    <Route path="jogo-detalhes" exact element={JogoDetalhadoPagina()} />
   
   
  </Routes>
);