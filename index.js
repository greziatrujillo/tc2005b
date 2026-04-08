let log = console.log;

//fs es el modulo que va contener las funciones para 
//manipular el sistema de archivos

/*let fs = require("fs");

//crear un archivo con la clase writeFileSync
fs.writeFileSync("archivo.txt", "Hola mundo");

//Async sort
const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
}*/

//notice how the function says the message will print
//2000 ms, meaning it will print out after both the hello and goodby messages
/*log ("hola");

setTimeout(() => {
    log("mundo");
}, 2000);

log ("adios");*/

//funcion que recibe arreglo y devuelve promedio
function avg(arr) {
    let sum = 0;
    for (let item of arr) {
        sum += item;
    }
    //show in terminal the sum of the array
    let res = sum / arr.length;
    log("El promedio del arreglo es: " + res);
}

//Prueba 
const arreglo = [10, 20, 30, 40, 50];
avg(arreglo);

//funcion recibe string y lo escribe en un archivo txt
function writeFile(str){
    let fs = require("fs");
    fs.writeFileSync("archivo2.txt", str);
}

//prueba
writeFile ("a mimir. two mimir.");