/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
import {
  isRouteExists, convertAbsolutePath, isADirectory, readFile, isFileMd, joinPaths,
} from './index.js';

export const mdLinks = (route) => {
  let fileListMd = [];
  if (isRouteExists(route)) {
    const routeAbsolute = convertAbsolutePath(route);
    if (isADirectory(routeAbsolute)) {
      const pathList = joinPaths(routeAbsolute);
      if (pathList.length > 0) {
        pathList.forEach((newRoute) => {
          if (isFileMd(newRoute)) {
            fileListMd.push(newRoute);
          } else {
            fileListMd = fileListMd.concat(mdLinks(newRoute));
          }
        });
      }
    } else if (isFileMd(routeAbsolute)) {
      fileListMd.push(routeAbsolute);
    }
    return fileListMd;
  }

  console.log('La ruta no existe');
};

// FUNCION QUE RETORNA UN ARREGLO DE LINKS
export const getLinks = (arrayFileMd) => {
  const arrObjLinks = [];

  arrayFileMd.forEach((routeFileMd) => {
    const readFileMd = readFile(routeFileMd);
    let linksFound = [];
    linksFound = readFileMd.match(/\[(.*?)\)/g);
    if (linksFound != null) {
      linksFound.forEach((link) => {
        const objLink = {};
        objLink.href = link.match(/(?<=\().+?(?=\))/g);
        objLink.text = link.match(/(?<=\[).+?(?=\])/g);
        objLink.file = routeFileMd;
        arrObjLinks.push(objLink);
      });
    }
  });
  return arrObjLinks;
};
