import { useNoticias } from '../../contexts/Noticias';
import styles from '../Noticias/Noticias.module.css';

export const Paginacao = () => {
  const { pagina, noticiasFiltrados, noticias, setPagina } = useNoticias();
  const qtdMaximaPaginas = Math.ceil(noticias.current.length / 8);

  const handlePagAnterior = async () => {
    setPagina((pagAtual) => (pagAtual > 1 ? pagAtual - 1 : 1));
  };

  const handleProxPagina = () => {
    setPagina((pagAtual) => (pagAtual >= qtdMaximaPaginas ? qtdMaximaPaginas : pagAtual + 1));
  };

  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>
        <h1 className={styles.pageTitle}>Todas as noticias ({noticiasFiltrados.length})</h1>
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