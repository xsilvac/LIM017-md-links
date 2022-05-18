import { isRouteExists, convertAbsolutePath, isADirectory, readFile, isFileMd, unirRuta } from './md-links.js'

//FUNCION QUE BUSCA Y RETORNA LOS ARCHIVOS MD

export const mdLinks = (route) => {
    let listaArchivosMD = [];
    if (isRouteExists(route)) {
      let routeAbsolute = convertAbsolutePath(route);
  
      if (isADirectory(routeAbsolute)) {
        let listaRutasEncotradas = unirRuta(routeAbsolute);
        console.log('aqui');
        if (listaRutasEncotradas.length != 0) { 
        listaRutasEncotradas.forEach(ruta => {
            console.log('algo')
            if (isFileMd(routeAbsolute)){
                listaArchivosMD.push(ruta); 
                console.log('perdida')
            }
            else{mdLinks(ruta)
                console.log('que hago')}
            
        })}}


      else if (isFileMd(routeAbsolute)) { 
          listaArchivosMD.push(routeAbsolute); 
        }
    }
    else { console.log('La ruta no es valida'); }
  
    return listaArchivosMD;
  }