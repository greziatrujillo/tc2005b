let log = console.log;

//fs es el modulo que va contener las funciones para 
//manipular el sistema de archivos

let fs = require("fs");

//crear un archivo con la clase writeFileSync
fs.writeFileSync("archivo.txt", "Hola mundo");

//Async sort
const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
}

//notice how the function says the message will print
//2000 ms, meaning it will print out after both the hello and goodby messages
/*log ("hola");

setTimeout(() => {
    log("mundo");
}, 2000);

log ("adios");*/