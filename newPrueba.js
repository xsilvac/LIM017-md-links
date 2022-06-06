/* eslint-disable import/prefer-default-export */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
// import fetch from 'node-fetch';
import {
  getRoutes, getLinks, statusOfLinks, totalLinks, uniqueLinks, brokenLinks,
} from './md-links.js';

import { mdLinks } from './index.js';
// const ruta = 'src/Archivos';
// //console.log((mdLinks(ruta)));
// const probando = ['C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\mdPrueba.md'];
// //const result = getLinks(probando);
// //console.log(result);

// const prueba = [
//   {
//     href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/length',
//     text: 'Probando este link que contiene más de cincuenta ',
//     file: 'C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\mdPrueba.md',
//   },
//   {
//     href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/lengthdddd',
//     text: 'Probando este link que contiene más de cincuenta ',
//     file: 'C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\mdPrueba.md',
//   },
//   {
//     href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/lengthxx',
//     text: 'Probando este link que contiene más de cincuenta ',
//     file: 'C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\mdPrueba.md',
//   },
// ];
// const arrPrueba = [
//   {
//     href: 'probando',
//     text: 'Probando este link que contiene más de cincuenta ',
//     file: 'C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\mdPrueba.md',
//   },
// ];
// statusOfLinks(arrPrueba).then((v) => console.log(v));

// statusOfLinks(prueba).then((v) => console.log('total', totalLinks(v)));

// statusOfLinks(prueba).then((v) => console.log('unicos', uniqueLinks(v)));

// statusOfLinks(prueba).then((v) => console.log('rotos', brokenLinks(v)));

// console.log(mdLinks('src/texto.md', { validate: true }));

mdLinks('mdPrueba.md', { validate: true })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

  

const help = `
                                                                               _
                                                              |\/||\|  ||\ ||/|_
                                                              |  ||/|__|| \||\ _|

                Ingrese una de las siguientes opciones (el path puede ser absoluta o relativa):
                ╔══════════════════╦═════════════════════════════════════════════════════════════════════════════════════════╗
                ║    OPCIONES      ║                                      SINTAXIS                                           ║
                ║                  ║                                                                                         ║
                ║══════════════════║═════════════════════════════════════════════════════════════════════════════════════════║
                ║  Opción 1:       ║    mdLinks <path-to-file>                                                               ║
                ║                  ║    Muestra los links encontrados con su texto y ruta.                                   ║
                ║══════════════════║═════════════════════════════════════════════════════════════════════════════════════════║
                ║  Opción 2:       ║    mdLinks <path-to-file> --validate                                                    ║
                ║                  ║    Muestra los links encontrados con su texto, ruta, status y mensaje del status.       ║
                ║══════════════════║═════════════════════════════════════════════════════════════════════════════════════════║
                ║  Opción 3:       ║    mdLinks <path-to-file> --stats                                                       ║
                ║                  ║    Muestra la estadística de los links encontrados y links unicos.                      ║
                ║══════════════════║═════════════════════════════════════════════════════════════════════════════════════════║
                ║  Opción 4:       ║    mdLinks <path-to-file> --stats --validate                                            ║
                ║                  ║    Muestra la estadística de los links encontrados, links unicos y links rotos.         ║
                ║══════════════════║═════════════════════════════════════════════════════════════════════════════════════════║
                ║  Opción 5:       ║    mdLinks <path-to-file> --validate --stats                                            ║
                ║                  ║    Muestra la estadística de los links encontrados, links unicos y links rotos.         ║
                ╚══════════════════╩═════════════════════════════════════════════════════════════════════════════════════════╝

                    By Ximena Silva
`;

// export const help = `                        
//                                                       █▀▄▀█ █▀▀▄ █   █ █▄  █ █ ▄▀ █▀▀ 
//                                                       █ ▀ █ █  █ █   █ █ ▀▄█ █▀▄  ▀▀█
//                                                       ▀   ▀ ▀▀▀  ▀▀▀ ▀ ▀   ▀ ▀  ▀ ▀▀▀

//                                                       █▄█ █▀▄ █   █ █▄  █ █ ▄▀ █▀▀ 
//                                                       █ █ ██  █ █   █ █ ▀▄█ █▀▄  ▀▀█
//                                                           ▀ ▀▀▀  ▀▀▀ ▀ ▀   ▀ ▀  ▀ ▀▀▀
//                                                                  By Jocelyn
                                                                 
//                  --------------------------------------------------------------------------------------------------------------
//                  ║                                                  SINTAXIS BASICA                                            ║
//                  ╠═══════════════════╦═════════════════════════════════════════════════════════════════════════════════════════╣
//                  ║                   ║ Muestra los links econtrados con su respectivo texto y ruta.                            ║
//                  ║   mdLinks <ruta>  ║ Ejemplo:                                                                                ║
//                  ║                   ║ mdLinks C:/Users/jocel/Desktop/BOOTCAMP/MIS PROYECTOS/PROYECTO 3/LIM016-md-links/PRUEBA ║  
//                  ╚═══════════════════╩═════════════════════════════════════════════════════════════════════════════════════════╝

// ╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
// ║                                                               SINTAXIS CON OPCIONES                                                            ║
// ╠═══════════════════════════════════╦════════════════════════════════════════════════════════════════════════════════════════════════════════════╣
// ║                                   ║ Muestra los links econtrados con su respectivo texto, ruta, status y mensaje del status.                   ║
// ║     mdLinks <ruta> --validate     ║ Ejemplo:                                                                                                   ║
// ║                                   ║ mdLinks C:/Users/jocel/Desktop/BOOTCAMP/MIS PROYECTOS/PROYECTO 3/LIM016-md-links/PRUEBA --validate         ║
// ╠═══════════════════════════════════╬════════════════════════════════════════════════════════════════════════════════════════════════════════════╣
// ║                                   ║ Muestra el total de links encontrados y la cantidad de links unicos.                                       ║
// ║      mdLinks <ruta> --stats       ║ Ejemplo:                                                                                                   ║
// ║                                   ║ mdLinks C:/Users/jocel/Desktop/BOOTCAMP/MIS PROYECTOS/PROYECTO 3/LIM016-md-links/PRUEBA --stats            ║
// ╠═══════════════════════════════════╬════════════════════════════════════════════════════════════════════════════════════════════════════════════╣
// ║                                   ║ Muestra el total de links encontrados, la cantidad de links unicos y la cantidad de links rotos.           ║
// ║ mdLinks <ruta> --stats --validate ║ Ejemplo:                                                                                                   ║
// ║                                   ║ mdLinks C:/Users/jocel/Desktop/BOOTCAMP/MIS PROYECTOS/PROYECTO 3/LIM016-md-links/PRUEBA --stats --validate ║
// ╚═══════════════════════════════════╩════════════════════════════════════════════════════════════════════════════════════════════════════════════╝

// * NOTA: LA RUTA PUEDE SER RELATIVA O ABSOLUTA`;