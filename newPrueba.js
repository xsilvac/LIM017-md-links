/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
// import fetch from 'node-fetch';
import { mdLinks, getLinks, statusOfLinks } from './md-links.js';

const ruta = 'src/Archivos';
console.log((mdLinks(ruta)));
const probando = ['C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\mdPrueba.md'];
const result = getLinks(probando);
console.log(result);

const prueba = [
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/length',
    text: 'Probando este link que contiene más de cincuenta ',
    file: 'C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\mdPrueba.md',
  },
];
statusOfLinks(prueba).then((v) => console.log(v));
