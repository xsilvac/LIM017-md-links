import { mdLinks, getLinks } from '../md-links.js'
const ruta = 'C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\src\\texto.md';
const rutaError = 'src/Archivos/pruebass.md'
const carpeta = 'C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\src';
const prueba = console.log('La ruta no es valida')
const arrayFileMd = ['C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\src\\Archivos\\prueba.md'];
describe('mdLinks', () => {
    it('Deberia de mandar mensaje de error', () => {
      expect(mdLinks(rutaError)).toStrictEqual(prueba);
    });
    it('Deberia convertir la ruta relativa a absoluta', () => {
        expect(mdLinks(ruta)).toStrictEqual([
          'C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\src\\texto.md'
          ]);
      });
      it('Deberia obtener un array con las rutas absolutas de la carpeta', () => {
        expect(mdLinks(carpeta)).toStrictEqual([
          'C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\src\\Archivos\\prueba.md',
          'C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\src\\texto.md'
          ]);
      });
  });

describe('getLinks', () => {
  const result = [{
      href: ['https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow'],
      text: [ 'Probando' ],
      file: 'C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\src\\Archivos\\prueba.md'}]
  it('Deberia retornar un arreglo con un objeto de la información del link', () => {
    expect(getLinks(arrayFileMd)).toStrictEqual(result);
  })
})