import * as fs from 'fs';
import * as path from 'path';

//FUNCION VERIFICAR SI LA RUTA EXISTE
export const existsPath = (path) => {
    if(fs.existsSync(path)===false){
        console.log('La ruta no existe');
    }
    else{
        console.log('La ruta existe');
    }
}

