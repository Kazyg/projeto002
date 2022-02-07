import { useContext } from 'react';
import { JogosContext } from './JogosContext';

export const useJogos = () => useContext(JogosContext);