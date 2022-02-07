import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from './routes/Router';
import { GlobalStyle } from './ApiListaDeJogos/themes/GlobalStyles';
import { myTheme } from './ApiListaDeJogos/themes/themes';

export default function App() {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <GlobalStyle />
        <BrowserRouter>
          
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

