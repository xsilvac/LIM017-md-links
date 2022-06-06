/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import fetch from 'node-fetch';
import { mdLinks } from '../index.js';
import { resultMdLinks, routeRelative, basicMdLinks } from '../routesTest.js';

jest.mock('node-fetch');

describe('mdLinks', () => {
  it('Deberia retorar el estado de los links', () => mdLinks('src/texto.md', { validate: true })
    .then((res) => {
      expect(res).toEqual(resultMdLinks);
    }));
  it('Deberia retorar la información de los links encontrados', () => mdLinks(routeRelative, { validate: false })
    .then((res) => {
      expect(res).toEqual(basicMdLinks);
    }));
  it('Deberia retorar mensaje de error', () => mdLinks('src/Archivosñ/prueba.md', { validate: true })
    .catch((err) => {
      expect(err).toBe('La ruta no existe');
    }));
});
