/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import fs from 'fs';
import path from 'path';

// FUNCION VERIFICAR SI LA RUTA EXISTE
export const isRouteExists = (route) => fs.existsSync(route);

// FUNCION QUE CONVIERTE A RUTA ABSOLUTA
export const convertAbsolutePath = (route) => path.resolve(route);

// FUNCION VERIFICAR SI LA RUTA ES UNA CARPETA)
export const isADirectory = (route) => fs.statSync(route).isDirectory();

// FUNCION QUE LEE ARCHIVOS
export const readFile = (route) => fs.readFileSync(route, 'utf8');

// FUNCION QUE VERIFICA SI ES UN ARCHIVO .MD
export const isFileMd = (route) => path.extname(route) === '.md';

const rutasEncotradas = (route) => fs.readdirSync(route, 'utf8');

export const joinPaths = (route) => rutasEncotradas(route).map((elemento) => path.join(route, elemento));
