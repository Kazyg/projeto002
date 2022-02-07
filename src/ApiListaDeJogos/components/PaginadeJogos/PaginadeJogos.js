import { JogosProvider } from '../../contexts/Jogos';
import { Header } from '../Header';
import { Paginacao } from '../Paginacao/Paginacao';
import { Jogos } from '../Jogos';

export const JogosPagina = () => {
  return (
    <JogosProvider>
      <Header />

      <Paginacao />

      <Jogos />
    </JogosProvider>
  );
};