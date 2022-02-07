import { useJogos } from '../../contexts/Jogos';
import styles from '../Jogos/Jogos.module.css';

export const Paginacao = () => {
  const { pagina, jogosFiltrados, jogos, setPagina } = useJogos();
  const qtdMaximaPaginas = Math.ceil(jogos.current.length / 52);

  const handlePagAnterior = async () => {
    setPagina((pagAtual) => (pagAtual > 1 ? pagAtual - 1 : 1));
  };

  const handleProxPagina = () => {
    setPagina((pagAtual) => (pagAtual >= qtdMaximaPaginas ? qtdMaximaPaginas : pagAtual + 1));
  };

  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>
        <h1 className={styles.pageTitle}>Todos os jogos ({jogosFiltrados.length})</h1>
        <div className={styles.pagination}>
          <button className={styles.pageButton} onClick={handlePagAnterior}>
            {`<`}
          </button>
          <span>
            Página {pagina} de {qtdMaximaPaginas}
          </span>
          <button className={styles.pageButton} onClick={handleProxPagina}>
            {`>`}
          </button>
        </div>
      </div>
    </div>
  );
};