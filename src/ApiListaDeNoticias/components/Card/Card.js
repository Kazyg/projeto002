import styles from './Card.module.css';

export const Card = ({ noticia }) => {
  return (

    <a className={styles['link']} href={noticia.article_url}>
    <div className={styles['card']} key={noticia.id}>
      <div className={styles.thumbnail}>
        <img className={styles.image} src={noticia.thumbnail} alt={noticia.title} />
       
      </div>
     
      <div className={styles.description}>
      <h2 className={styles['card__title']}>{noticia.title}</h2>
        <p>{noticia.short_description}</p>
              
      </div>
    </div>
    </a>
  );
};

