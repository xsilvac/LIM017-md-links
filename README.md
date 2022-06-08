# Markdown Links

## 1. Introducción

**MD-Links** Es una librería que permite leer los archivos Markdown(.md) en busca sus links, en esta librería se puede obtener la estadística del estados de los links como links totales, únicos y rotos.

![links](https://github.com/xsilvac/LIM017-md-links/blob/main/img/LINKS.jpg)

 ## 2.Instrucciones de uso

 Las siguientes instrucciones le permitirán instalar la biblioteca en su terminal.

 ### 2.1 Instalación

 La instalación se puede realizar por npm:

 ```
$ npm i mdLinks-xsilvac
```
 ### 2.2 Interfaz de Linea de Comando (CLI) ⚙️

Se ejecuta de la siguiente manera a través del terminal:

```
$ mdLinks <path> [options]
```

 Ejemplo:

```sh
$ mdLinks <path>
```
![mdLinks](https://github.com/xsilvac/LIM017-md-links/blob/main/img/mdLinks.png)
![mdLinksRoute](https://github.com/xsilvac/LIM017-md-links/blob/main/img/mdLinksRoute.png)

#### 2.2.1 Opciones

**--validate**
Al pasar la opción '--validate', el módulo hará una petición HTTP para averiguar si el link se encuentra activo o no; si el link se encuentra activo responde "OK" y se considerara una URL valida, pero si un link no esta activo devolverá como mensaje "FAIL".

```
$ mdLinks <path> --validate
```
![validate](https://github.com/xsilvac/LIM017-md-links/blob/main/img/validate.png)

**--stats**
Si pasamos la opción `--stats` nos retornara las estadísticas de los links totales y únicos.

```
$ mdLinks <path> --stats
```
![validate](https://github.com/xsilvac/LIM017-md-links/blob/main/img/stats.png)

**--validate --stats**
Si pasamos la opción `--validate` y `--stats`  nos retornara las estadísticas de los links totales, únicos y rotos.

```
$ mdLinks <path> --validate --stats
```
![validate](https://github.com/xsilvac/LIM017-md-links/blob/main/img/validateAndStats.png)

**--stats --validate**
Si pasamos la opción `--stats` y `--validate`  nos retornara las estadísticas de los links totales, únicos y rotos.

```
$ mdLinks <path> --stats --validate
```
![validate](https://github.com/xsilvac/LIM017-md-links/blob/main/img/statsAndValidate.png)

**--help**
Si pasamos la opción `--help` nos retornara un cuadro con la explicación de esta libreria.

```
$ mdLinks <path> --help
```
![validate](https://github.com/xsilvac/LIM017-md-links/blob/main/img/help.png)

## 3. Proceso de desarrollo:
La planeación se realizó a través de un flujograma que demuestra el proceso de la creación de esta libreria.
![Diagrama de flujo](https://github.com/xsilvac/LIM017-md-links/blob/main/img/FlujogramaFinal.drawio.png)
![Test](https://github.com/xsilvac/LIM017-md-links/blob/main/img/test.png)

## 4. Liberías empleadas 📚

- [File-Sytem](https://nodejs.org/dist/latest-v17.x/docs/api/fs.html#file-system)
- [Path module](https://nodejs.org/dist/latest-v17.x/docs/api/path.html)
- [Node-fetch](https://nodejs.org/dist/latest-v17.x/docs/api/fs.html#file-system)
- [chalk](https://www.npmjs.com/package/chalk/v/4.1.0) 
- [jest](https://jestjs.io/docs/api) 


## Author ✒️
[Ximena Silva Cotrina](https://github.com/xsilvac)
