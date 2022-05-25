import {buscarArchivosMd, obtenerLinks} from './index.js';

const rutaCorrecta = 'C:\Users\Jimena\Downloads\laboratoria\LIM017-md-links\src\Archivos\prueba.md';
const rutaErronea = 'src\textss.txt';
const rutatext = 'src\text.txt';
const rutaAbsoluta = 'C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\src';
const otraRuta = 'C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\README.md';
const rutaCarpeta = 'C:\Users\Jimena\Downloads\laboratoria\LIM017-md-links\src';

console.log(buscarArchivosMd(otraRuta));
console.log(obtenerLinks(buscarArchivosMd(otraRuta)))
