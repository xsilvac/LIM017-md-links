/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
// import { fetch } from 'node-fetch';
import fetch from 'node-fetch';
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
  const arrayLinks = [];

  arrayFileMd.forEach((routeFileMd) => {
    const readFileMd = readFile(routeFileMd);
    let linksFound = [];
    linksFound = readFileMd.match(/\[(.*?)\)/g);
    if (linksFound != null) {
      linksFound.forEach((link) => {
        const infoLink = {};
        infoLink.href = link.match(/(?<=\().+?(?=\))/g).toString();
        infoLink.text = link.match(/(?<=\[).+?(?=\])/g).toString().substring(0, 49);
        infoLink.file = routeFileMd;
        arrayLinks.push(infoLink);
      });
    }
  });
  return arrayLinks;
};

export const statusOfLinks = (arrayLinks) => {
  const arrPromesas = arrayLinks.map((obj) => fetch(obj.href)
    .then((res) => ({
      href: obj.href,
      text: obj.text,
      file: obj.file,
      status: res.status,
      ok: res.ok ? 'OK' : 'FAIL'
    }))
    .catch((error) => (console.error(error))));
  return Promise.all(arrPromesas);
};

export const totalLinks = (arrayLinks) => arrayLinks.length;

export const uniqueLinks = (arrayLinks) => arrayLinks.filter((obj) => obj.ok === 'OK').length;

export const brokenLinks = (arrayLinks) => arrayLinks.filter((obj) => obj.ok === 'FAIL').length;
