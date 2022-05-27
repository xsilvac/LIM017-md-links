/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import { mdLinks, getLinks } from '../md-links.js';

import {
  route, routeError, file, prueba, arrayFileMd, fileEmpty, result, routesAbsoluts,
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
