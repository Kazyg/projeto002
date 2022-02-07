import React, { useRef } from 'react';
import { useJogos } from '../../contexts/Jogos';
import { Card } from '../Card';

import styles from './Jogos.module.css';

export const Jogos = () => {
  const elementoTopo = useRef();
  const { jogosFiltrados } = useJogos();

  const handleVoltarAoTopo = () => {
    elementoTopo.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={elementoTopo} className={styles.container}>
      <div className={styles.cardGrid}>
        {jogosFiltrados.length === 0
          ? 'Nenhum jogo encontrado'
          : jogosFiltrados.map((jogo) => <Card jogo={jogo} />)}
      </div>
      <button onClick={handleVoltarAoTopo} alt="Voltar para o topo">/\</button>
    </div>
  );
};