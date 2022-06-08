/* eslint-disable linebreak-style */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import { getRoutes, getLinks, statusOfLinks } from './md-links.js';
import { isRouteExists, convertAbsolutePath } from './methods.js';

export const mdLinks = (path, options) => new Promise((resolve, reject) => {
  if (isRouteExists(path)) {
    const pathAbsoluta = convertAbsolutePath(path);
    const arrArchivosMd = getRoutes(pathAbsoluta);
    const arrObjLinksEncontrados = getLinks(arrArchivosMd);
    if (options.validate) {
      resolve(statusOfLinks(arrObjLinksEncontrados).then((res) => res));
    } else {
      resolve(arrObjLinksEncontrados);
    }
  } else reject('La ruta no existe');
});
