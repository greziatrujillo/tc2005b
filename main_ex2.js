//JS lab file exercise 2

//1. creating a table

function generateSum() {
    //Generate 2 random nums for sum
    const num1 = Math.floor(Math.random() * 101);
    const num2 = Math.floor(Math.random() * 101);

    const correct = num1 + num2;

    //time taken to answer
    const time = Date.now();

    //Prompt user for answer
    const answer = prompt ('Responde la suma: ' + num1 + ' + ' + num2);

    //Final time taken
    const finalTime = Date.now() - time;

    //answer is correct or incorrect with time taken to answer
    if (answer == correct) {
        alert('Correcto! Tiempo tomado en responder: ' + finalTime / 1000 + ' segundos');
    } else {
        alert('Incorrecto! La respuesta correcta es: ' + correct);
    }


}