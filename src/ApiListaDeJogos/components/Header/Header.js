import { useJogos } from '../../contexts/Jogos';
import styles from './JogosHeader.module.css';


export const Header = () => {
  const { setTermoBusca } = useJogos();

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