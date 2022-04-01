module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/noticias/contar/:id',
        handler: 'noticia.contadorVisitas',
      }
    ]
  }
   