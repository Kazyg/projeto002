import styles from './JogoDetalhadoHeader.module.css';

export const Header = () => {
  

  return (
    <div className={styles.container}>
      <div >
        <nav className={styles.menu}>
           <a href='http://localhost:3000'><li className={styles['li']}>HOME</li></a>
          <a href='http://localhost:3000/buscajogos'><li className={styles['li']}>JOGOS</li></a>
          <a href='http://localhost:3000/ultimas-noticias'><li className={styles['li']}>NOTICIAS</li></a>
          
        </nav>
        </div>
    </div>
  );
};