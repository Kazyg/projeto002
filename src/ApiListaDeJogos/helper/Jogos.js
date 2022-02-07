export const filtrarPorTermo = (lista, termo) => {
    return lista.filter((jogo) => {
      return new RegExp(termo, 'ig').test(jogo.title);
    });
  };
  
  export const filtrarPorPagina = (lista, pagina) => {
    const numeroItens = 52;
    return lista.slice(pagina * numeroItens - numeroItens, pagina * numeroItens);
  };