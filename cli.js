#! /usr/bin/env node
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
import { mdLinks } from './index.js';
import { totalLinks, uniqueLinks, brokenLinks } from './md-links.js';

const help = `
                Ingrese una de las siguientes opciones (la ruta puede ser absoluta o relativa):
                ╔══════════════════╦═════════════════════════════════════════════════════════════════════════════════════════╗
                ║    OPCIONES      ║                                      SINTAXIS                                           ║
                ║                  ║                                                                                         ║
                ║══════════════════║═════════════════════════════════════════════════════════════════════════════════════════║
                ║  Opción 1:       ║    mdLinks <ruta>                                                                       ║
                ║                  ║    Muestra los links encontrados con su texto y ruta.                                   ║
                ║══════════════════║═════════════════════════════════════════════════════════════════════════════════════════║
                ║  Opción 2:       ║    mdLinks <ruta> --validate                                                            ║
                ║                  ║    Muestra los links encontrados con su texto, ruta, status y mensaje del status.       ║
                ║══════════════════║═════════════════════════════════════════════════════════════════════════════════════════║
                ║  Opción 3:       ║    mdLinks <ruta> --stats                                                               ║
                ║                  ║    Muestra la estadística de los links encontrados y links únicos.                      ║
                ║══════════════════║═════════════════════════════════════════════════════════════════════════════════════════║
                ║  Opción 4:       ║    mdLinks <ruta> --stats --validate                                                    ║
                ║                  ║    Muestra la estadística de los links encontrados, links únicos y links rotos.         ║
                ║══════════════════║═════════════════════════════════════════════════════════════════════════════════════════║
                ║  Opción 5:       ║    mdLinks <ruta> --validate --stats                                                    ║
                ║                  ║    Muestra la estadística de los links encontrados, links únicos y links rotos.         ║
                ╚══════════════════╩═════════════════════════════════════════════════════════════════════════════════════════╝
                By Ximena Silva
`;

const arg = process.argv.slice(2);
if (arg.length === 0) {
  console.log('Falta ingresar la ruta, si tiene dudas puede escribir "mdLinks <ruta> --help"');
} else if (arg.length === 1) {
  mdLinks(arg[0], { validate: false })
    .then((v) => {
      v.forEach((link) => console.table(link));
    })
    .catch((err) => console.log(err));
} else if (arg.length === 2) {
  if (arg[1] === '--validate') {
    mdLinks(arg[0], { validate: true })
      .then((v) => {
        v.forEach((link) => console.table(link));
      })
      .catch((err) => console.log(err));
  } else if (arg[1] === '--stats') {
    mdLinks(arg[0], { validate: true })
      .then((v) => {
        console.log(`Total:${totalLinks(v)}`);
        console.log(`Unique:${uniqueLinks(v)}`);
      })
      .catch((err) => { console.log(err); });
  } else if (arg[1] === '--help') {
    console.log(help);
  } else console.log('Opcion invalida');
} else if (arg.length === 3) {
  if ((arg[1] === '--validate' && arg[2] === '--stats') || (arg[1] === '--stats' && arg[2] === '--validate')) {
    mdLinks(arg[0], { validate: true })
      .then((v) => {
        console.log(`Total:${totalLinks(v)}`);
        console.log(`Unique:${uniqueLinks(v)}`);
        console.log(`Broken:${brokenLinks(v)}`);
      })
      .catch((err) => console.log((err)));
  } else console.log(('Opciones invalidas'));
} else { console.log('Datos ingresados erroneos'); }
