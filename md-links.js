/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
// import { fetch } from 'node-fetch';
import fetch from 'node-fetch';
import {
  isRouteExists, convertAbsolutePath, isADirectory, readFile, isFileMd, joinPaths,
} from './methods.js';

export const getRoutes = (route) => {
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
            fileListMd = fileListMd.concat(getRoutes(newRoute));
          }
        });
      }
    } else if (isFileMd(routeAbsolute)) {
      fileListMd.push(routeAbsolute);
    }
    return fileListMd;
  }
};

// FUNCION QUE RETORNA UN ARREGLO DE LINKS
export const getLinks = (arrayFileMd) => {
  const arrayLinks = [];

  arrayFileMd.forEach((routeFileMd) => {
    const readFileMd = readFile(routeFileMd);
    let linksFound = [];
    linksFound = readFileMd.match(/\[(.*)\]\(((?:\/|https?:\/\/).*)\)/gi);
    if (linksFound != null) {
      linksFound.forEach((link) => {
        const infoLink = {};
        infoLink.href = link.match(/\(((?:\/|https?:\/\/).*)\)/g).join().slice(1, -1);
        infoLink.text = link.match(/\[(.*)\]/g).join().slice(1, -1).substring(0, 49);
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
      ok: res.ok ? 'OK' : 'FAIL',
    }))
    .catch(() => 'Existe un problema'));
  return Promise.all(arrPromesas);
};

export const totalLinks = (arrayLinks) => arrayLinks.length;

export const uniqueLinks = (arrayLinks) => [...new Set(arrayLinks.map((obj) => obj.href))].length;

export const brokenLinks = (arrayLinks) => arrayLinks.filter((obj) => obj.ok === 'FAIL').length;
