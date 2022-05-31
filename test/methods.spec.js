/* eslint-disable import/named */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import {
  isRouteExists, convertAbsolutePath, isADirectory, readFile, isFileMd, joinPaths,
} from '../methods.js';

import {
  routeError, route, file, routeRelative, text, arrayRoutes, resultAbsolute, routeTxt,
} from '../routesTest.js';

describe('isRouteExists', () => {
  it('Deberia verificar si la ruta existe', () => {
    expect(isRouteExists(routeError)).toBe(false);
  });
  it('Deberia verificar si la ruta existe', () => {
    expect(isRouteExists(route)).toEqual(true);
  });
  it('Deberia verificar si la ruta existe', () => {
    expect(isRouteExists(routeRelative)).toEqual(true);
  });
});
describe('convertAbsolutePath', () => {
  it('Deberia convertir la ruta relativa a absoluta', () => {
    expect(convertAbsolutePath(routeRelative)).toBe(resultAbsolute);
  });
});
describe('isADirectory', () => {
  it('Deberia verificar si es una carpeta o un archivo md', () => {
    expect(isADirectory(route)).toBe(false);
  });
  it('Deberia verificar si es una carpeta o un archivo md', () => {
    expect(isADirectory(file)).toBe(true);
  });
});
describe('readFile', () => {
  it('Deberia leer archivos', () => {
    expect(readFile(routeTxt)).toBe(text);
  });
});
describe('isFileMd', () => {
  it('Deberia verificar si es archivo md', () => {
    expect(isFileMd(routeTxt)).toBe(false);
  });
  it('Deberia verificar si es archivo md', () => {
    expect(isFileMd(route)).toBe(true);
  });
});
describe('joinPaths', () => {
  it('Deberia unir las rutas encontradas en un carpeta', () => {
    expect(joinPaths(file)).toEqual(arrayRoutes);
  });
});
