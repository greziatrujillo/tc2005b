let log = console.log;

log("Hello, world!");


//fs es el modulo que va contener las funciones para 
//manipular el sistema de archivos

let fs = require("fs");

//crear un archivo con la clase writeFileSync
fs.writeFileSync("archivo.txt", "Hola mundo");