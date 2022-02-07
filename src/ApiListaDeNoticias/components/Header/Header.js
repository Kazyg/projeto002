import styles from './NoticiasHeader.module.css';
import { useNoticias } from '../../contexts/Noticias';

export const Header = () => {
  const { setTermoBusca } = useNoticias();

  return (
    <div className={styles.container}>
      <div >
        <nav className={styles.menu}>
           <a href='http://localhost:3000'><li className={styles['li']}>HOME</li></a>
          <a href='http://localhost:3000/buscajogos'><li className={styles['li']}>JOGOS</li></a>
          <a href='http://localhost:3000/ultimas-noticias'><li className={styles['li']}>NOTICIAS</li></a>
          
        </nav>


      </div>
      <br/>
      <div className={styles.buscar}>
      <input
        onChange={(event) => {
          setTermoBusca(event.target.value);
        }}
        className={styles.searchInput}
        type="text"
        placeholder="Digite o nome do jogo"
      />
      </div>
    </div>
  );
};