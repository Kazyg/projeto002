import { useContext } from 'react';
import { JogoDetalhadoContext } from './JogoDetalhadoContext';

export const useJogoDetalhado = () => useContext(JogoDetalhadoContext);