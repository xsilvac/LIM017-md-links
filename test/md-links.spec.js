/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import { mdLinks, getLinks, statusOfLinks } from '../md-links.js';

import {
  route, routeError, file, prueba, arrayFileMd, fileEmpty, result, routesAbsoluts,
  infoLink, arrStatusLink, infoLinkFail, arrStatusLinkFail,
} from '../routesTest.js';

describe('mdLinks', () => {
  it('Deberia de mandar mensaje de error', () => {
    expect(mdLinks(routeError)).toStrictEqual(prueba);
  });
  it('Deberia convertir la ruta relativa a absoluta', () => {
    expect(mdLinks(route)).toStrictEqual([
      'C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\src\\texto.md',
    ]);
  });
  it('Deberia obtener un array con las rutas absolutas de la carpeta', () => {
    expect(mdLinks(file)).toStrictEqual(routesAbsoluts);
  });
});

describe('getLinks', () => {
  it('Deberia retornar un arreglo con un objeto de la información del link', () => {
    expect(getLinks(arrayFileMd)).toStrictEqual(result);
  });
  it('Deberia retornar un arreglo vacio si no hay archivo', () => {
    expect(getLinks(fileEmpty)).toEqual([]);
  });
});

describe('statusOfLinks', () => {
  it.skip('Deberia retornar una promesa con "ok" en el estado de los links', () => {
    expect(statusOfLinks(infoLink)).toEqual(arrStatusLink);
  });
  it.skip('Deberia retornar una promesa con "fail" en el estado de los links', () => {
    expect(statusOfLinks(infoLinkFail)).toEqual(arrStatusLinkFail);
  });
});
