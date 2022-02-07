
import { Header } from './Header';
import styles from './Home.module.css'
import imgPag from './img/imgPag.png'




export const Home = () => {
  return (
    
   <>
      <Header />

        <div className={styles['divHome']}>
        <h1>BUSCA JOGOS</h1>
        <img src={imgPag}/>
        <h2>ache seu jogo <a href='http://localhost:3000/buscajogos'>aqui</a></h2>
        </div>

      
   </>
    
  );
};