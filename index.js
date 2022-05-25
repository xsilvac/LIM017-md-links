import fs from 'fs';
import path from 'path';

//FUNCION VERIFICAR SI LA RUTA EXISTE
export const isRouteExists = route => fs.existsSync(route);

//FUNCION QUE CONVIERTE A RUTA ABSOLUTA
export const convertAbsolutePath = route => path.resolve(route);