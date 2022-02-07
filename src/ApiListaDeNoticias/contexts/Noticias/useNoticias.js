import { useContext } from 'react';
import { NoticiasContext } from './NoticiasContext';

export const useNoticias = () => useContext(NoticiasContext);