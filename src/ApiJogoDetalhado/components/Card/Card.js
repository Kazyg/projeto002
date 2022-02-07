import styles from './CardComentario.module.css';
import React,{useEffect, useState} from 'react';


export const Card = ({ comentario }) => {
  const [id, setId]= useState(localStorage.getItem("id"));
  const [votoUp, setVotoUp]=useState(comentario.votoPositivo);
  const [votoDown, setVotoDonw]=useState(comentario.votoNegativo);
  



  
  if(comentario.idJogo == id){
  return (
    
    
    <div className={styles['divCard']} key={comentario.nome} >
    <ul className={styles['cardComentario']}>

                        <li>
                          <h1>NOME:</h1>
                        <p className={styles['pCard']}>{comentario.nome}</p>
                        </li>
                        <li>
                          <h1>COMENTARIO:</h1>
                          <p className={styles['pCard']}>{comentario.comentario}</p>
                        </li>
                        <li>
                          <button onClick={()=>setVotoUp(votoUp + 1)}>/\</button>
                          <p className={styles['pCardVoteUp']}>{votoUp}</p>
                        </li>
                        <li>
                          <button onClick={()=>setVotoDonw(votoDown + 1)}>\/</button>
                          <p className={styles['pCardVoteDown']}>{votoDown}</p>
                        </li>
                      
                        
                        
                        
                        
                    </ul>
    </div>
    
  );
  }else{return(
    <>
    </>
  )}
};

