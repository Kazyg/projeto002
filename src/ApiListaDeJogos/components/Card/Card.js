import styles from './Card.module.css';


export const Card = ({ jogo }) => {
  return (
    <a className={styles['link']} href='http://localhost:3000/jogo-detalhes' onClick={()=>localStorage.setItem("id", jogo.id)}>
    <div className={styles['card']} key={jogo.id} >
      <div className={styles.thumbnail}>
        <img className={styles.image} src={jogo.thumbnail} alt={jogo.title} />
      </div>
      <h2 className={styles['card__title']}>{jogo.title}</h2>
      <div className={styles.description}>
        <p>{jogo.short_description}</p>
              
      </div>
    </div>
    </a>
  );
};

