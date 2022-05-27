/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
import { mdLinks, getLinks } from './md-links.js';

const ruta = 'src/Archivos';
console.log((mdLinks(ruta)));
const probando = ['C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\src\\Archivos\\prueba.md'];
console.log(getLinks(probando));
