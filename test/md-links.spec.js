import { isRouteExists, convertAbsolutePath, isADirectory, readFile, isFileMd, unirRuta } from '../md-links'
const rutaError = 'src/Archivos/pruebass.md'
const rutaValida = 'C:\Users\Jimena\Downloads\laboratoria\LIM017-md-links\src\texto.md'
const rutaRelativa = 'src\Archivos\prueba.md'

describe('isRouteExists', () => {
  it('Deberia verificar si la ruta existe', () => {
    expect(isRouteExists(rutaError)).toBe(false);
  });
  it('Deberia verificar si la ruta existe', () => {
    expect(isRouteExists(rutaValida)).toEqual(false);
  });
});
describe('convertAbsolutePath', () => {
  it('Deberia convertir la ruta relativa a absoluta', () => {
    expect(convertAbsolutePath(rutaRelativa)).toBe('C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\srcArchivosprueba.md');
  });
});