//JS lab file exercise 3

//3. Generate counter to identify properties of numbers 

function counter(array) {
    let counter = {
        neg: 0,
        zero: 0,
        pos: 0
    };

    //run through the array
    for (let i = 0; i < array.length; i++) {
        if (array [i] < 0) {
            counter.neg++;
        } else if (array [i] === 0) {
            counter.zero++;
        } else if (array [i] > 0){
            counter.pos++;
        }
    }

    //return counter
    return counter;
}

    //display on HTML page
function counterPrint() {
    let user = prompt("Ingrese un arreglo de números separados por comas (ejemplo: 1, -2, 0, 5, -3, 0, 7):");

    //convert input from string to array of numbers
    let arrayTest = user.split(",").map(Number);

    //run through counter function
    const result = counter(arrayTest);

    //print out results on HTML
    document.getElementById("resultCounter").innerHTML = `
        <p> Arreglo: [${arrayTest.join(", ")}] </p>
        <p> Números negativos: ${result.neg} </p>
        <p> Números ceros: ${result.zero} </p>
        <p> Números positivos: ${result.pos} </p>
    `;
}


