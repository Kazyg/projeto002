import React, { useRef } from 'react';
import { useNoticias } from '../../contexts/Noticias';
import { Card } from '../Card';

import styles from './Noticias.module.css';

export const Noticias = () => {
  const elementoTopo = useRef();
  const { noticiasFiltrados } = useNoticias();

  const handleVoltarAoTopo = () => {
    elementoTopo.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={elementoTopo} className={styles.container}>
      <div className={styles.cardGrid}>
        {noticiasFiltrados.length === 0
          ? 'Nenhum noticia encontrado'
          : noticiasFiltrados.map((noticia) => <Card noticia={noticia} />)}
      </div>
      <button onClick={handleVoltarAoTopo} alt="Voltar para o topo">/\</button>
    </div>
  );
};