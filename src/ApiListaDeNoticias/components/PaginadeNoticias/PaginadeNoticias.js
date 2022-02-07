import { NoticiasProvider } from '../../contexts/Noticias';
import { Header } from '../Header';
import { Paginacao } from '../Paginacao/Paginacao';
import { Noticias } from '../Noticias';

export const NoticiasPagina = () => {
  return (
    <NoticiasProvider>
      <Header />

      <Paginacao />

      <Noticias />
    </NoticiasProvider>
  );
};