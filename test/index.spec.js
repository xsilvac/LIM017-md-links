/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import fetch from 'node-fetch';
import { mdLinks } from '../index.js';
import { resultMdLinks, routeRelative, basicMdLinks } from '../routesTest.js';

jest.mock('node-fetch');

describe('mdLinks', () => {
  it('Deberia retorar el estado de los links con "True"', () => mdLinks('src/texto.md', { validate: true })
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
  // it('Deberia retortar el estado de los links con"Fail"', () => {
  //   const arrayValMessageFail = [
  //     {
  //       href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/lengthsss',
  //       text: 'Probando este link que contiene más de cincuenta ',
  //       file: 'C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\newFile.md',
  //       status: 404,
  //       ok: 'FAIL',
  //     },
  //     {
  //       href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/lengthsss',
  //       text: 'Erroneo',
  //       file: 'C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\newFile.md',
  //       status: 404,
  //       ok: 'FAIL',
  //     },
  //   ];
  //   fetch.mockImplementation(() => Promise.resolve({ status: 404, ok: 'FAIL' }));
  //   return mdLinks('newFile.md', { validate: true })
  //     .then((res) => {
  //       expect(res).toEqual(arrayValMessageFail);
  //     });
  // });
});
