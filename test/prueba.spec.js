import { mdLinks } from '../prueba.js'
const ruta = 'src/Archivos/prueba.md';
const rutaError = 'src/Archivos/pruebass.md'
const carpeta = 'src/Archivos'
const prueba = console.log('La ruta no es valida')
describe('mdLinks', () => {
    it('Deberia convertir la ruta relativa a absoluta', () => {
      expect(mdLinks(rutaError)).toStrictEqual([]);
    });
    it('Deberia convertir la ruta relativa a absoluta', () => {
        expect(mdLinks(ruta)).toStrictEqual([
            'C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\src\\Archivos\\prueba.md'
          ]);
      });
      it('Deberia convertir la ruta relativa a absoluta', () => {
        expect(mdLinks(carpeta)).toStrictEqual([
            'C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\src\\Archivos\\otro.md',
            'C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\src\\Archivos\\prueba.md'
          ]);
      });
  });

  