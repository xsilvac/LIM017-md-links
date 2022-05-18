import fs from 'fs';
import path from 'path';

//FUNCION VERIFICAR SI LA RUTA EXISTE
export const isRouteExists = route => fs.existsSync(route);

//FUNCION QUE CONVIERTE A RUTA ABSOLUTA
export const convertAbsolutePath = route => path.resolve(route);

//FUNCION VERIFICAR SI LA RUTA ES UNA CARPETA
export const isADirectory = route => fs.statSync(route).isDirectory();

//FUNCION QUE LEE ARCHIVOS
export const readFile = route => fs.readFileSync(route, 'utf8', (err, data) => {
    if (err) throw err;
    return (data);
})

//FUNCION QUE VERIFICA SI ES UN ARCHIVO .MD
export const isFileMd = route => path.extname(route) === '.md';

const rutasEncotradas = ruta => fs.readdirSync(ruta, 'utf8');

export const unirRuta = route => rutasEncotradas(route).map(elemento => path.join(route, elemento));
//console.log(unirRuta('src/Archivos'))

