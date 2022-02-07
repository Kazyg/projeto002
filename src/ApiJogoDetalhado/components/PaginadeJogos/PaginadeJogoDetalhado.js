import { JogoDetalhadoProvider } from '../../contexts/JogoDetalhado';
import { Comentarios } from '../Formulario/Comentarios';
import { FormularioPag } from '../Formulario/FormularioPag';
import { Header } from '../Header';

import { JogoDetalhado } from '../JogoDetalhado';


export const JogoDetalhadoPagina = () => {
  return (
    
    <JogoDetalhadoProvider>
      <Header />

      

      <JogoDetalhado />
      <FormularioPag/>
      
    </JogoDetalhadoProvider>
    
  );
};