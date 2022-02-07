export const filtrarPorPagina = (lista, pagina) => {
    const numeroItens = 8;
    return lista.slice(pagina * numeroItens - numeroItens, pagina * numeroItens);
  };
  export const filtrarPorTermo = (lista, termo) => {
    return lista.filter((noticia) => {
      return new RegExp(termo, 'ig').test(noticia.title);
    });
  };