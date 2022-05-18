// module.exports = () => {
//   // ...
// };
// import {existsPath} from './md-links.js'
// import { stat } from 'fs';
// import path from 'path';
import { mdLinks } from './prueba.js'
const ruta = 'src/Archivos/prueba.md';
const rutaError = 'src/Archivos/pruebass.md'
const carpeta = 'src'
//console.log('hola')
console.log(mdLinks(carpeta));

//Verificar si la ruta existe
// existsPath(ruta);

// //convertirAbsoluta(path);
// console.log(path.resolve(ruta));

//VERIFICAR SI ES UN DIRECTORIO O UN ARCHIVO
    // stat(ruta, (err, stats) => {
    //     if(err) {
    //       console.log(err);
    //         if(err.code=='ENOENT')
    //         {console.log('No existe tal archivo o directorio');}
    //     }
    //     else {
    //     console.log('ES UN DIRECTORIO: ', stats.isDirectory());
    //     console.log('ES UN ARCHIVO: ', stats.isFile());
    //     }
    // });
