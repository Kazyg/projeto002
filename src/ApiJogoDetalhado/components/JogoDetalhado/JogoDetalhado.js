import { useState, useEffect } from 'react';

import { useJogoDetalhado } from '../../contexts/JogoDetalhado';
import styles from './JogoDetalhado.module.css';

export const JogoDetalhado = () => {
  
  const { jogoDetalhadoFiltrado } = useJogoDetalhado();

 let des = '';
 
  const [imgPrincipal, setImgPrincipal]= useState('');
  
 
  return (

      <div className={styles}>
        {jogoDetalhadoFiltrado === undefined
          ? 'Nenhum jogo encontrado'
          : <div className={styles['']} key={jogoDetalhadoFiltrado.id}>
           
            <div>
              <h1>{jogoDetalhadoFiltrado.title}({jogoDetalhadoFiltrado.release_date})</h1>
              <div className={styles['divInvisivel']}>{()=>setImgPrincipal(jogoDetalhadoFiltrado.thumbnail)}</div>
              <img className={styles['imgPrincipal']} src={imgPrincipal === ''?jogoDetalhadoFiltrado.thumbnail:imgPrincipal}/>
              
              </div>

              <div className={styles['imgSecundariaDiv']}>
              <img className={styles['imgSecundaria']} src={jogoDetalhadoFiltrado.screenshots[0].image} onClick={()=> setImgPrincipal(jogoDetalhadoFiltrado.screenshots[0].image)}/>
              <img className={styles['imgSecundaria']} src={jogoDetalhadoFiltrado.screenshots[1].image} onClick={()=> setImgPrincipal(jogoDetalhadoFiltrado.screenshots[1].image)}/>
              <img className={styles['imgSecundaria']} src={jogoDetalhadoFiltrado.screenshots[2].image} onClick={()=> setImgPrincipal(jogoDetalhadoFiltrado.screenshots[2].image)}/>
              <img className={styles['imgSecundaria']} src={jogoDetalhadoFiltrado.screenshots[3].image} onClick={()=> setImgPrincipal(jogoDetalhadoFiltrado.screenshots[3].image)}/>
              </div>

              <div className={styles['divDetalhes']}>
                <div>
                    <h2>Genero</h2>
                    <p>{jogoDetalhadoFiltrado.genre}</p>
                  </div>
                  <div>
                    <h2>Plataforma</h2>
                    
                    <p>{jogoDetalhadoFiltrado.platform}</p>

                  </div>
                  <div>
                    <h2>Publicado</h2>
                    <p>{jogoDetalhadoFiltrado.publisher}</p>
                    <h3>Desenvolvedor</h3>
                    <p>{jogoDetalhadoFiltrado.developer}</p>
                    
                    </div>

              </div>
              <div>

                
                  <h2>Descrição</h2>
                  <p className={styles['divInvisivel']}>{des = jogoDetalhadoFiltrado.description.replaceAll('<p style="text-align: justify;">', ' ')}</p>
                  <p>{des.replaceAll('</p>', ' ')}</p>
              </div>
              <div className={styles['divRequisitos']}>
                <h2>Requisitos Minimos </h2>
                <ul>
                  <li>Sistema Operacional:{jogoDetalhadoFiltrado.minimum_system_requirements.os}</li>
                  <li>Processador:{jogoDetalhadoFiltrado.minimum_system_requirements.processor}</li>
                  <li>Memoria:{jogoDetalhadoFiltrado.minimum_system_requirements.memory}</li>
                  <li>Placa de Video:{jogoDetalhadoFiltrado.minimum_system_requirements.graphics}</li>
                  <li>Espaço Disponivel:{jogoDetalhadoFiltrado.minimum_system_requirements.storage}</li>
                </ul>
                </div>
              <div>
                <h3>Link para Download</h3>
                <a href={jogoDetalhadoFiltrado.game_url}>download</a>
              </div>
                  
          </div>}
      

      </div>
      
    
  );
};