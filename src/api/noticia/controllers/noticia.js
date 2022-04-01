'use strict';

/**
 *  noticia controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::noticia.noticia', ({strapi})=>({
    contadorVisitas: async (ctx, next) => {
        const { id } = ctx.request.params
        
        //Buscar la noticia
        const noticia = await strapi.entityService.findOne("api::noticia.noticia", id)

        //La noticia no existe
        if(noticia == null){
            return {
                message: "No se pudo encontrar la noticia"
            };
        }

        //Ver cantidad de visitas actuales
        let visitasActuales = noticia.contador

        //Actualizar la cantidad de visitas de la noticia
        await strapi.entityService.update("api::noticia.noticia", id, {
            data: {
                contador: visitasActuales += 1
            }
        })

        return {
            message: "Contador cambiado"
        };
    }
}));
