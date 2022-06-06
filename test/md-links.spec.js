/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import fetch from 'node-fetch';
import { getRoutes, getLinks, statusOfLinks } from '../md-links.js';

import {
  route, file, arrayFileMd, fileEmpty, result, routesAbsoluts,
  infoLink, arrStatusLink, infoLinkFail, arrStatusLinkFail, hrefError,
} from '../routesTest.js';

jest.mock('node-fetch');

describe('getRoutes', () => {
  it('Deberia convertir la ruta relativa a absoluta', () => {
    expect(getRoutes(route)).toStrictEqual([
      'C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\src\\texto.md',
    ]);
  });
  it('Deberia obtener un array con las rutas absolutas de la carpeta', () => {
    expect(getRoutes(file)).toStrictEqual(routesAbsoluts);
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
  it('Deberia retornar una promesa con "ok" en el estado de los links', () => statusOfLinks(infoLink).then((res) => { expect(res).toEqual(arrStatusLink); }));
  it('Deberia retornar una promesa con "fail" en el estado de los links', () => statusOfLinks(hrefError)
    .catch((e) => { expect(e).toBe('Existe un problema'); }));
});
