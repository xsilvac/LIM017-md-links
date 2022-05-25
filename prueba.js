import { isRouteExists, convertAbsolutePath, isADirectory, readFile, isFileMd, unirRuta } from './md-links.js'

//FUNCION QUE BUSCA Y RETORNA LOS ARCHIVOS MD

export const mdLinks = (route) => {
    let listaArchivosMD = [];
    if (isRouteExists(route)) {
      let routeAbsolute = convertAbsolutePath(route);
  
      if (isADirectory(routeAbsolute)) {
        let listaRutasEncotradas = unirRuta(routeAbsolute);
        if (listaRutasEncotradas.length != 0) {
        listaRutasEncotradas.map(ruta => {
          //console.log(ruta);
            if (isFileMd(ruta)){
                listaArchivosMD.push(ruta);
                //console.log(listaArchivosMD)
            }
            else{mdLinks(ruta)}
          })}}


      else if (isFileMd(routeAbsolute)) {
          listaArchivosMD.push(routeAbsolute);
        }
    }
    else { console.log('La ruta no es valida'); }
  
    return listaArchivosMD;
  }