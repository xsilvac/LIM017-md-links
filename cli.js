#! /usr/bin/env node
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
// import { process } from 'process';
// import process from 'process';
import { mdLinks } from './index.js';
import { totalLinks, uniqueLinks, brokenLinks } from './md-links.js';

const arg = process.argv.slice(2);
if (arg.length === 0) {
  console.log('Error: Falta ingresar la ruta');
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
