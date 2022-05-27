/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
import { mdLinks, getLinks } from './md-links.js';

const rutaError = 'src/Archivos';
const carpeta = 'C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\src';
// mdLinks(rutaError);
// console.log(getLinks(['C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\src\\empty']));

// console.log(getLinks(mdLinks(rutaCorrecta)))
const directoryEmpty = ['C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\src\\empty'];
const probando = ['C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\src\\Archivos\\prueba.md'];
// console.log(mdLinks('C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\src\\empty') , 'hola');
console.log(getLinks(['C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\src\\Archivos\\nuevo.md']));
