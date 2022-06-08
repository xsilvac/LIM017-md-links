import fs from 'fs';
import path from 'path';

//FUNCION VERIFICAR SI LA RUTA EXISTE
export const isRouteExists = route => fs.existsSync(route);
//console.log(isRouteExists('src\Archiv'))

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
//console.log(isFileMd('C:\Users\Jimena\Downloads\laboratoria\LIM017-md-links\src\Archivos\prueba.md'))

const rutasEncotradas = ruta => fs.readdirSync(ruta, 'utf8');

export const unirRuta = route => rutasEncotradas(route).map(elemento => path.join(route, elemento));
//console.log(unirRuta('src/Archivos'))

// FUNCION QUE RETORNA UN ARREGLO DE LINKS
export const getLinks = (arrayFileMd) => {
  const arrayLinks = [];

  arrayFileMd.forEach((routeFileMd) => {
    const readFileMd = readFile(routeFileMd);
    let linksFound = [];
    linksFound = readFileMd.match(/\[(.*)\]\(((?:\/|https?:\/\/).*)\)/gi);
    if (linksFound != null) {
      linksFound.forEach((link) => {
        const infoLink = {};
        infoLink.href = link.match(/\(((?:\/|https?:\/\/).*)\)/g).join().slice(1, -1);
        infoLink.text = link.match(/\[(.*)\]/g).join().slice(1, -1).substring(0, 49);
        infoLink.file = routeFileMd;
        arrayLinks.push(infoLink);
      });
    }
  });
  return arrayLinks;
};

export const statusOfLinks = (arrayLinks) => {
  const arrPromesas = arrayLinks.map((obj) => fetch(obj.href)
    .then((res) => ({
      href: obj.href,
      text: obj.text,
      file: obj.file,
      status: res.status,
      ok: res.ok ? 'OK' : 'FAIL',
    }))
    .catch(() => 'Existe un problema'));
  return Promise.all(arrPromesas);
};

export const totalLinks = (arrayLinks) => arrayLinks.length;

export const uniqueLinks = (arrayLinks) => [...new Set(arrayLinks.map((obj) => obj.href))].length;

export const brokenLinks = (arrayLinks) => arrayLinks.filter((obj) => obj.ok === 'FAIL').length;
